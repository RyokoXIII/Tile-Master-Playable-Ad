using System;
using UnityEngine;

public class ObjectController : MonoBehaviour
{
    public bool canClone = true;

    public MeshFilter meshFilter;

    public MeshRenderer meshRenderer;

    public SphereCollider meshCollider;

    [NonSerialized]
    public bool isCollected;

    public int id;

    public Rigidbody rigidbody;
}
