using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu()]
public class LevelData : ScriptableObject
{
    public ObjectController[] prefabs;

    public ObjectController[] unlockedObjects;

    public int levelId;

    public int modelCount;
}
