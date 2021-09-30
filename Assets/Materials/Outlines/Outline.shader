Shader "Unlit/Outline"
{
    Properties
    {
        _Color ("Color", Color) = (1, 1, 1, 1)
        _Scale ("Scale", Range(0, 1)) = 0.05
    }
    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue" = "Transparent+1"}

        Pass
        {
            Cull Off

            ZTest Always
            ZWrite Off

            Stencil
            {
                Ref 1
                Comp NotEqual
            }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
                float3 normal : NORMAL;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            fixed4 _Color;
            float _Scale;

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex + v.normal * _Scale);

                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                return _Color;
            }
            ENDCG
        }
    }
}
