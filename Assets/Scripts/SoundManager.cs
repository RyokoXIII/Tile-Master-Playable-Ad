using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public AudioClip buttonFX, finishFX, selectFX;

    public AudioSource src;


    public void PlaySound(string clip)
    {
        switch (clip)
        {
            case "button":
                src.PlayOneShot(buttonFX);
                break;
            case "finish":
                src.PlayOneShot(finishFX);
                break;
            case "select":
                src.PlayOneShot(selectFX);
                break;
        }
    }
}
