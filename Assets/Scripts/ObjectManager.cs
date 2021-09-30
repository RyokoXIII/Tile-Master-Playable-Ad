using UnityEngine;

public class ObjectManager : MonoBehaviour
{
    public ObjectPool objectPool;

    public void Spawn(LevelData levelData, Vector3 position, Vector3 size)
    {
        Vector3 halfSize = (size - Vector3.one * 4f) * 0.5f;

        Vector2 rangeX = new Vector2(position.x - halfSize.x, position.x + halfSize.x);
        Vector2 rangeY = new Vector2(position.y + 5f, position.y + halfSize.y - 5f);
        Vector2 rangeZ = new Vector2(position.z - halfSize.z, position.z + halfSize.z);

        var samples = levelData.prefabs;
        Transform transform;
        ObjectController objectController;
        float x, y, z;

        for (int i = 0; i < samples.Length; i++)
        {
            for (int a = 0; a < 3; a++)
            {
                x = Random.Range(rangeX.x, rangeX.y);
                y = Random.Range(rangeY.x, rangeY.y);
                z = Random.Range(rangeZ.x, rangeZ.y);

                transform = objectPool.Get().transform;
                transform.gameObject.SetActive(true);
                transform.localPosition = new Vector3(x, y, z);
                transform.localRotation = Random.rotation;

                objectController = transform.GetComponent<ObjectController>();
                objectController.rigidbody.isKinematic = false;

                Copy(samples[i], objectController);

            }
        }
    }

    public void Copy(ObjectController src, ObjectController dst)
    {
        var mesh = src.meshFilter.sharedMesh;
        dst.meshFilter.sharedMesh = mesh;
        dst.meshCollider.radius = src.meshCollider.radius;
        dst.meshRenderer.sharedMaterial = src.meshRenderer.sharedMaterial;
        dst.id = src.id;

        dst.meshRenderer.transform.localScale = src.meshRenderer.transform.localScale;
    }
}
