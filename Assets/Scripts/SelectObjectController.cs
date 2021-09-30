using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectObjectController : MonoBehaviour
{
    public Camera camera;

    public Material stencilMaskMaterial;

    public Material outlineMaterial;

    public float maxRaycastDistance = 150f;

    public string layerMaskName = "SelectObject";

    private int layerMask;

    public Action<ObjectController> SelectObjectAction;

    public GameObject target1, target2;

    public List<Collider> listObject_1A, listObject_1B, listObject_2A, listObject_2B;

    public GameObject tick1, tick2;

    public GameObject targetObj_1A, targetObj_1B, targetObj_2A, targetObj_2B;

    public GameObject guideText, ctaUI, downloadButton;

    public CountDown countDown;

    public SoundManager soundManager;

    public GameObject tutorial;

    Transform _selection;


    private void Awake()
    {
        layerMask = 1 << LayerMask.NameToLayer(layerMaskName);
    }

    public void Update()
    {
        if (_selection != null)
        {
            DeselectPreviousObject(_selection);
            _selection = null;
        }

        var ray = camera.ScreenPointToRay(Input.mousePosition);

        if (Physics.Raycast(ray, out RaycastHit hitInfo, maxRaycastDistance, layerMask))
        {
            var selection = hitInfo.transform;
            var obj = hitInfo.collider;

            SelectNewObject(selection);
            _selection = selection;

            // Player input
            CollectObject(selection, obj);
        }
    }

    void CollectObject(Transform selection, Collider obj)
    {
        if (Input.GetMouseButtonDown(0))
        {
            if(tutorial.activeInHierarchy == true)
                tutorial.SetActive(false);

            soundManager.PlaySound("select");

            if (guideText.activeInHierarchy == true)
                guideText.SetActive(false);

            var objectController = selection.GetComponent<ObjectController>();

            if (objectController.id != 2 || objectController.id != 3 || objectController.id != 8 || objectController.id != 7)
            {
                selection.DOMoveX(5f, 0.5f);
                selection.DOMoveZ(5f, 0.5f);
            }

            Vector3 targetPos1 = new Vector3(target1.transform.position.x + 3, target1.transform.position.y + 40f, target1.transform.position.z - 1f);
            Vector3 targetPos2 = new Vector3(target2.transform.position.x + 3, target2.transform.position.y + 40f, target2.transform.position.z - 1f);

            switch (objectController.id)
            {
                case 2:
                    selection.DOMove(targetPos1, 0.5f);
                    selection.DOScale(0.8f, 0.5f);
                    listObject_1A.Add(obj);
                    obj.gameObject.layer = LayerMask.NameToLayer("Default");

                    if (listObject_1A.Count == 3)
                    {
                        StartCoroutine(Tick1Active());
                    }
                    break;
                case 7:
                    selection.DOMove(targetPos2, 0.5f);
                    selection.DOScale(0.7f, 0.5f);
                    listObject_1B.Add(obj);
                    obj.gameObject.layer = LayerMask.NameToLayer("Default");

                    if (listObject_1B.Count == 3)
                    {
                        StartCoroutine(Tick2Active());
                    }
                    break;
            }

            if (targetObj_2A.activeInHierarchy == true)
            {
                if (objectController.id == 8)
                {
                    selection.DOMove(targetPos2, 0.5f);
                    selection.DOScale(0.7f, 0.5f);
                    listObject_2B.Add(obj);
                    obj.gameObject.layer = LayerMask.NameToLayer("Default");

                    if (listObject_2B.Count == 3)
                    {
                        StartCoroutine(Tick2Active());
                    }
                }

                if (objectController.id == 3)
                {
                    selection.DOMove(targetPos1, 0.5f);                    
                    selection.DOScale(0.8f, 0.5f);
                    listObject_2A.Add(obj);
                    obj.gameObject.layer = LayerMask.NameToLayer("Default");

                    if (listObject_2A.Count == 3)
                    {
                        StartCoroutine(Tick1Active());
                    }
                }
            }
        }

        StartCoroutine(FinishRound1(obj));
        StartCoroutine(CTACallBack());
    }


    IEnumerator Tick1Active()
    {
        yield return new WaitForSeconds(1f);
        if (targetObj_1A.activeInHierarchy == true)
        {
            tick1.SetActive(true);
        }
        else if (targetObj_2A.activeInHierarchy == true)
        {
            tick1.SetActive(true);
        }
        soundManager.PlaySound("finish");
    }

    IEnumerator Tick2Active()
    {
        yield return new WaitForSeconds(1f);
        if (targetObj_1B.activeInHierarchy == true)
        {
            tick2.SetActive(true);
        }
        else if (targetObj_2B.activeInHierarchy == true)
        {
            tick2.SetActive(true);
        }
        soundManager.PlaySound("finish");
    }

    IEnumerator CTACallBack()
    {
        if (listObject_2A.Count == 3 && listObject_2B.Count == 3 && targetObj_2A.activeInHierarchy == true)
        {
            yield return new WaitForSeconds(2f);

            downloadButton.SetActive(false);
            countDown.hasFinished = true;
            ctaUI.SetActive(true);

            yield return new WaitForSeconds(1f);

            Time.timeScale = 0f;
        }
    }


    IEnumerator FinishRound1(Collider obj)
    {
        if (listObject_1A.Count == 3 && listObject_1B.Count == 3 && targetObj_1A.activeInHierarchy == true)
        {
            yield return new WaitForSeconds(1.5f);

            for (int i = 0; i < listObject_1A.Count; i++)
            {
                listObject_1A[i].gameObject.transform.DOScale(Vector3.zero, 1f);
                listObject_1B[i].gameObject.transform.DOScale(Vector3.zero, 1f);
            }

            yield return new WaitForSeconds(0.3f);

            for (int i = 0; i < listObject_1A.Count; i++)
            {
                listObject_1A[i].gameObject.SetActive(false);
                listObject_1B[i].gameObject.SetActive(false);
            }

            yield return new WaitForSeconds(0.5f);
            tick1.SetActive(false);
            tick2.SetActive(false);

            targetObj_1A.SetActive(false);
            targetObj_1B.SetActive(false);

            yield return new WaitForSeconds(0.4f);
            targetObj_2A.SetActive(true);
            targetObj_2B.SetActive(true);
        }
    }

    private void SelectNewObject(Transform transform)
    {
        var objectController = transform.GetComponent<ObjectController>();
        var meshRenderer = objectController.meshRenderer;

        if (meshRenderer != null)
        {
            Material[] materials = new Material[3] { meshRenderer.sharedMaterial, stencilMaskMaterial, outlineMaterial };
            meshRenderer.sharedMaterials = materials;

            SelectObjectAction?.Invoke(objectController);
        }
    }

    private void DeselectPreviousObject(Transform selection)
    {
        var meshRenderer = selection.GetComponent<ObjectController>().meshRenderer;

        meshRenderer.sharedMaterials = new Material[1] { meshRenderer.sharedMaterial };

        selection = null;
    }
}
