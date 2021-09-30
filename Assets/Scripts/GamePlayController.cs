using System.Collections;
using UnityEngine;

public class GamePlayController : MonoBehaviour
{
    public LevelData[] levelDatas;

    private LevelData currentLevelData;
    public GameObject bigBox;
    public ObjectManager objectManager;
    public GameObject tutorial;

    public enum GameState
    {
        Playing,
        Completed,
        Paused
    }

    public GameState gameState = GameState.Playing;


    public void Start()
    {

        StartLevel();

        Physics.gravity = new Vector3(1, -100f, 1);

        QualitySettings.vSyncCount = 0;
        Application.targetFrameRate = 60;
    }

    private void StartLevel()
    {
        gameState = GameState.Playing;
        currentLevelData = levelDatas[0];


        Vector3 newBoundCenter = new Vector3(bigBox.transform.position.x + 8, bigBox.transform.position.y + 30, bigBox.transform.position.z);
        Vector3 newBoundSize = new Vector3(bigBox.transform.position.x, bigBox.transform.position.y + 50, bigBox.transform.position.z);

        objectManager.Spawn(currentLevelData, newBoundCenter, newBoundSize);

        StartCoroutine(ShowTutorial());
    }

    IEnumerator ShowTutorial()
    {
        yield return new WaitForSeconds(1f);

        tutorial.SetActive(true);
    }
}
