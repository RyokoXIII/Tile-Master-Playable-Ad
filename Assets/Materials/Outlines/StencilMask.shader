Shader "Unlit/StencilMask"
{
    Properties
    {
        
    }

    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue" = "Transparent"}

        ZTest Always
        ZWrite Off

        Pass
        {
            Cull Off

            ColorMask 0

            Stencil {
                Ref 1
                Comp Always
                Pass Replace
            }    
        }
    }
}
