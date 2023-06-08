using UnityEngine;

public class UIManager : MonoBehaviour
{
    public SoundManager soundManager;

    public void ButtonClicked()
    {
        soundManager.PlaySound("button");
        //Luna.Unity.LifeCycle.GameEnded();
        //Luna.Unity.Playable.InstallFullGame();
        Debug.Log("CTA!");
    }
}
