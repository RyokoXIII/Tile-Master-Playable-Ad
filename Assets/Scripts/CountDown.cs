using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class CountDown : MonoBehaviour
{
    public Text timeText;
    public GameObject subTimer;

    public int currentTime = 15;
    public bool isStart = false;
    public bool hasFinished = false;
    public GameObject downloadButton, ctaUI;


    void Update()
    {
        if (isStart == false && currentTime > 0)
        {
            StartCoroutine(TimerCallBack());
        }
        else if (currentTime == 0)
        {
            StartCoroutine(CTAPopupCallBack());
        }
    }

    IEnumerator TimerCallBack()
    {
        isStart = true;

        int fixTime;

        yield return new WaitForSeconds(1);

        if (hasFinished == false)
        {
            currentTime -= 1;
            if (currentTime < 10)
            {
                timeText.text = "00:0" + currentTime;
            }
            else
            {
                timeText.text = "00:" + currentTime;
            }
            isStart = false;
        }
        else if(hasFinished == true)
        {
            fixTime = currentTime;

            if (fixTime < 10)
            {
                timeText.text = "00:0" + fixTime;
            }
            else
            {
                timeText.text = "00:" + fixTime;
            }
        }
    }

    IEnumerator CTAPopupCallBack()
    {
        yield return new WaitForSeconds(0.3f);
        downloadButton.SetActive(false);


        if (ctaUI.activeInHierarchy == false)
            ctaUI.SetActive(true);


        yield return new WaitForSeconds(0.5f);
        Time.timeScale = 0f;
    }
}
