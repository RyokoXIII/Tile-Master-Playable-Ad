var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.JointSpring' )
  var i1207 = data
  i1206.spring = i1207[0]
  i1206.damper = i1207[1]
  i1206.targetPosition = i1207[2]
  return i1206
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.JointMotor' )
  var i1209 = data
  i1208.m_TargetVelocity = i1209[0]
  i1208.m_Force = i1209[1]
  i1208.m_FreeSpin = i1209[2]
  return i1208
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.JointLimits' )
  var i1211 = data
  i1210.m_Min = i1211[0]
  i1210.m_Max = i1211[1]
  i1210.m_Bounciness = i1211[2]
  i1210.m_BounceMinVelocity = i1211[3]
  i1210.m_ContactDistance = i1211[4]
  i1210.minBounce = i1211[5]
  i1210.maxBounce = i1211[6]
  return i1210
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.JointDrive' )
  var i1213 = data
  i1212.m_PositionSpring = i1213[0]
  i1212.m_PositionDamper = i1213[1]
  i1212.m_MaximumForce = i1213[2]
  return i1212
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1215 = data
  i1214.m_Spring = i1215[0]
  i1214.m_Damper = i1215[1]
  return i1214
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1217 = data
  i1216.m_Limit = i1217[0]
  i1216.m_Bounciness = i1217[1]
  i1216.m_ContactDistance = i1217[2]
  return i1216
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1219 = data
  i1218.m_ExtremumSlip = i1219[0]
  i1218.m_ExtremumValue = i1219[1]
  i1218.m_AsymptoteSlip = i1219[2]
  i1218.m_AsymptoteValue = i1219[3]
  i1218.m_Stiffness = i1219[4]
  return i1218
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1221 = data
  i1220.m_LowerAngle = i1221[0]
  i1220.m_UpperAngle = i1221[1]
  return i1220
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1223 = data
  i1222.m_MotorSpeed = i1223[0]
  i1222.m_MaximumMotorTorque = i1223[1]
  return i1222
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1225 = data
  i1224.m_DampingRatio = i1225[0]
  i1224.m_Frequency = i1225[1]
  i1224.m_Angle = i1225[2]
  return i1224
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1227 = data
  i1226.m_LowerTranslation = i1227[0]
  i1226.m_UpperTranslation = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1228 = root || new pc.UnityMaterial()
  var i1229 = data
  i1228.name = i1229[0]
  request.r(i1229[1], i1229[2], 0, i1228, 'shader')
  i1228.renderQueue = i1229[3]
  i1228.enableInstancing = !!i1229[4]
  var i1231 = i1229[5]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1231[i + 0]) );
  }
  i1228.floatParameters = i1230
  var i1233 = i1229[6]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1233[i + 0]) );
  }
  i1228.colorParameters = i1232
  var i1235 = i1229[7]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1235[i + 0]) );
  }
  i1228.vectorParameters = i1234
  var i1237 = i1229[8]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1237[i + 0]) );
  }
  i1228.textureParameters = i1236
  var i1239 = i1229[9]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1239[i + 0]) );
  }
  i1228.materialFlags = i1238
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.value = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.value = new pc.Color(i1247[1], i1247[2], i1247[3], i1247[4])
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = new pc.Vec4( i1251[1], i1251[2], i1251[3], i1251[4] )
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1255 = data
  i1254.name = i1255[0]
  request.r(i1255[1], i1255[2], 0, i1254, 'value')
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.enabled = !!i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1261 = data
  i1260.position = new pc.Vec3( i1261[0], i1261[1], i1261[2] )
  i1260.scale = new pc.Vec3( i1261[3], i1261[4], i1261[5] )
  i1260.rotation = new pc.Quat(i1261[6], i1261[7], i1261[8], i1261[9])
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1263 = data
  i1262.enabled = !!i1263[0]
  i1262.aspect = i1263[1]
  i1262.orthographic = !!i1263[2]
  i1262.orthographicSize = i1263[3]
  i1262.backgroundColor = new pc.Color(i1263[4], i1263[5], i1263[6], i1263[7])
  i1262.nearClipPlane = i1263[8]
  i1262.farClipPlane = i1263[9]
  i1262.fieldOfView = i1263[10]
  i1262.depth = i1263[11]
  i1262.clearFlags = i1263[12]
  i1262.cullingMask = i1263[13]
  i1262.rect = i1263[14]
  request.r(i1263[15], i1263[16], 0, i1262, 'targetTexture')
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.tag = i1265[1]
  i1264.enabled = !!i1265[2]
  i1264.isStatic = !!i1265[3]
  i1264.layer = i1265[4]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.type = i1267[1]
  i1266.color = new pc.Color(i1267[2], i1267[3], i1267[4], i1267[5])
  i1266.cullingMask = i1267[6]
  i1266.intensity = i1267[7]
  i1266.range = i1267[8]
  i1266.spotAngle = i1267[9]
  i1266.shadows = i1267[10]
  i1266.shadowNormalBias = i1267[11]
  i1266.shadowBias = i1267[12]
  i1266.shadowStrength = i1267[13]
  i1266.lightmapBakeType = i1267[14]
  i1266.renderMode = i1267[15]
  request.r(i1267[16], i1267[17], 0, i1266, 'cookie')
  i1266.cookieSize = i1267[18]
  return i1266
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1268 = root || request.c( 'SoundManager' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'buttonFX')
  request.r(i1269[2], i1269[3], 0, i1268, 'finishFX')
  request.r(i1269[4], i1269[5], 0, i1268, 'selectFX')
  request.r(i1269[6], i1269[7], 0, i1268, 'src')
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'clip')
  i1270.playOnAwake = !!i1271[2]
  i1270.loop = !!i1271[3]
  i1270.time = i1271[4]
  i1270.enabled = !!i1271[5]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.halfPrecision = !!i1273[1]
  i1272.vertexCount = i1273[2]
  i1272.aabb = i1273[3]
  var i1275 = i1273[4]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( !!i1275[i + 0] );
  }
  i1272.streams = i1274
  i1272.vertices = i1273[5]
  var i1277 = i1273[6]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1277[i + 0]) );
  }
  i1272.subMeshes = i1276
  var i1279 = i1273[7]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 16) {
    i1278.push( new pc.Mat4().setData(i1279[i + 0], i1279[i + 1], i1279[i + 2], i1279[i + 3],  i1279[i + 4], i1279[i + 5], i1279[i + 6], i1279[i + 7],  i1279[i + 8], i1279[i + 9], i1279[i + 10], i1279[i + 11],  i1279[i + 12], i1279[i + 13], i1279[i + 14], i1279[i + 15]) );
  }
  i1272.bindposes = i1278
  var i1281 = i1273[8]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1281[i + 0]) );
  }
  i1272.blendShapes = i1280
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1287 = data
  i1286.triangles = i1287[0]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1293 = data
  i1292.name = i1293[0]
  var i1295 = i1293[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1295[i + 0]) );
  }
  i1292.frames = i1294
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'sharedMesh')
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'additionalVertexStreams')
  i1298.enabled = !!i1299[2]
  request.r(i1299[3], i1299[4], 0, i1298, 'sharedMaterial')
  var i1301 = i1299[5]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 2, i1300, '')
  }
  i1298.sharedMaterials = i1300
  i1298.receiveShadows = !!i1299[6]
  i1298.shadowCastingMode = i1299[7]
  i1298.sortingLayerID = i1299[8]
  i1298.sortingOrder = i1299[9]
  i1298.lightmapIndex = i1299[10]
  i1298.lightmapSceneIndex = i1299[11]
  i1298.lightmapScaleOffset = new pc.Vec4( i1299[12], i1299[13], i1299[14], i1299[15] )
  i1298.lightProbeUsage = i1299[16]
  i1298.reflectionProbeUsage = i1299[17]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1305 = data
  i1304.center = new pc.Vec3( i1305[0], i1305[1], i1305[2] )
  i1304.size = new pc.Vec3( i1305[3], i1305[4], i1305[5] )
  i1304.enabled = !!i1305[6]
  i1304.isTrigger = !!i1305[7]
  request.r(i1305[8], i1305[9], 0, i1304, 'material')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1307 = data
  i1306.enabled = !!i1307[0]
  i1306.isTrigger = !!i1307[1]
  request.r(i1307[2], i1307[3], 0, i1306, 'material')
  i1306.center = new pc.Vec3( i1307[4], i1307[5], i1307[6] )
  i1306.radius = i1307[7]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1309 = data
  i1308.enabled = !!i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'sharedMaterial')
  var i1311 = i1309[3]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1308.sharedMaterials = i1310
  i1308.receiveShadows = !!i1309[4]
  i1308.shadowCastingMode = i1309[5]
  i1308.sortingLayerID = i1309[6]
  i1308.sortingOrder = i1309[7]
  i1308.lightmapIndex = i1309[8]
  i1308.lightmapSceneIndex = i1309[9]
  i1308.lightmapScaleOffset = new pc.Vec4( i1309[10], i1309[11], i1309[12], i1309[13] )
  i1308.lightProbeUsage = i1309[14]
  i1308.reflectionProbeUsage = i1309[15]
  i1308.color = new pc.Color(i1309[16], i1309[17], i1309[18], i1309[19])
  request.r(i1309[20], i1309[21], 0, i1308, 'sprite')
  i1308.flipX = !!i1309[22]
  i1308.flipY = !!i1309[23]
  i1308.drawMode = i1309[24]
  i1308.size = new pc.Vec2( i1309[25], i1309[26] )
  i1308.tileMode = i1309[27]
  i1308.adaptiveModeThreshold = i1309[28]
  i1308.maskInteraction = i1309[29]
  i1308.spriteSortPoint = i1309[30]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'animatorController')
  i1312.updateMode = i1313[2]
  var i1315 = i1313[3]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 2, i1314, '')
  }
  i1312.humanBones = i1314
  i1312.enabled = !!i1313[4]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.width = i1319[1]
  i1318.height = i1319[2]
  i1318.mipmapCount = i1319[3]
  i1318.anisoLevel = i1319[4]
  i1318.filterMode = i1319[5]
  i1318.hdr = !!i1319[6]
  i1318.format = i1319[7]
  i1318.wrapMode = i1319[8]
  i1318.alphaIsTransparency = !!i1319[9]
  i1318.alphaSource = i1319[10]
  return i1318
}

Deserializers["SelectObjectController"] = function (request, data, root) {
  var i1320 = root || request.c( 'SelectObjectController' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'camera')
  request.r(i1321[2], i1321[3], 0, i1320, 'stencilMaskMaterial')
  request.r(i1321[4], i1321[5], 0, i1320, 'outlineMaterial')
  i1320.maxRaycastDistance = i1321[6]
  i1320.layerMaskName = i1321[7]
  request.r(i1321[8], i1321[9], 0, i1320, 'target1')
  request.r(i1321[10], i1321[11], 0, i1320, 'target2')
  var i1323 = i1321[12]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 1, i1322, '')
  }
  i1320.listObject_1A = i1322
  var i1325 = i1321[13]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1320.listObject_1B = i1324
  var i1327 = i1321[14]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1320.listObject_2A = i1326
  var i1329 = i1321[15]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1320.listObject_2B = i1328
  request.r(i1321[16], i1321[17], 0, i1320, 'tick1')
  request.r(i1321[18], i1321[19], 0, i1320, 'tick2')
  request.r(i1321[20], i1321[21], 0, i1320, 'targetObj_1A')
  request.r(i1321[22], i1321[23], 0, i1320, 'targetObj_1B')
  request.r(i1321[24], i1321[25], 0, i1320, 'targetObj_2A')
  request.r(i1321[26], i1321[27], 0, i1320, 'targetObj_2B')
  request.r(i1321[28], i1321[29], 0, i1320, 'guideText')
  request.r(i1321[30], i1321[31], 0, i1320, 'ctaUI')
  request.r(i1321[32], i1321[33], 0, i1320, 'downloadButton')
  request.r(i1321[34], i1321[35], 0, i1320, 'countDown')
  request.r(i1321[36], i1321[37], 0, i1320, 'soundManager')
  request.r(i1321[38], i1321[39], 0, i1320, 'tutorial')
  return i1320
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1332 = root || request.c( 'LevelData' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 2, i1334, '')
  }
  i1332.prefabs = i1334
  var i1337 = i1333[1]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 2, i1336, '')
  }
  i1332.unlockedObjects = i1336
  i1332.levelId = i1333[2]
  i1332.modelCount = i1333[3]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1341 = data
  i1340.mass = i1341[0]
  i1340.drag = i1341[1]
  i1340.angularDrag = i1341[2]
  i1340.useGravity = !!i1341[3]
  i1340.isKinematic = !!i1341[4]
  i1340.constraints = i1341[5]
  i1340.maxAngularVelocity = i1341[6]
  i1340.collisionDetectionMode = i1341[7]
  i1340.interpolation = i1341[8]
  return i1340
}

Deserializers["ObjectController"] = function (request, data, root) {
  var i1342 = root || request.c( 'ObjectController' )
  var i1343 = data
  i1342.canClone = !!i1343[0]
  request.r(i1343[1], i1343[2], 0, i1342, 'meshFilter')
  request.r(i1343[3], i1343[4], 0, i1342, 'meshRenderer')
  request.r(i1343[5], i1343[6], 0, i1342, 'meshCollider')
  i1342.id = i1343[7]
  request.r(i1343[8], i1343[9], 0, i1342, 'rigidbody')
  return i1342
}

Deserializers["GamePlayController"] = function (request, data, root) {
  var i1344 = root || request.c( 'GamePlayController' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 2, i1346, '')
  }
  i1344.levelDatas = i1346
  request.r(i1345[1], i1345[2], 0, i1344, 'bigBox')
  request.r(i1345[3], i1345[4], 0, i1344, 'objectManager')
  request.r(i1345[5], i1345[6], 0, i1344, 'tutorial')
  i1344.gameState = i1345[7]
  return i1344
}

Deserializers["ObjectManager"] = function (request, data, root) {
  var i1350 = root || request.c( 'ObjectManager' )
  var i1351 = data
  i1350.objectPool = request.d('ObjectPool', i1351[0], i1350.objectPool)
  return i1350
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i1352 = root || request.c( 'ObjectPool' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'prefab')
  i1352.prespawnCount = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1355 = data
  i1354.pivot = new pc.Vec2( i1355[0], i1355[1] )
  i1354.anchorMin = new pc.Vec2( i1355[2], i1355[3] )
  i1354.anchorMax = new pc.Vec2( i1355[4], i1355[5] )
  i1354.sizeDelta = new pc.Vec2( i1355[6], i1355[7] )
  i1354.anchoredPosition3D = new pc.Vec3( i1355[8], i1355[9], i1355[10] )
  i1354.rotation = new pc.Quat(i1355[11], i1355[12], i1355[13], i1355[14])
  i1354.scale = new pc.Vec3( i1355[15], i1355[16], i1355[17] )
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.planeDistance = i1357[1]
  i1356.referencePixelsPerUnit = i1357[2]
  i1356.isFallbackOverlay = !!i1357[3]
  i1356.renderMode = i1357[4]
  i1356.renderOrder = i1357[5]
  i1356.sortingLayerName = i1357[6]
  i1356.sortingOrder = i1357[7]
  i1356.scaleFactor = i1357[8]
  request.r(i1357[9], i1357[10], 0, i1356, 'worldCamera')
  i1356.overrideSorting = !!i1357[11]
  i1356.pixelPerfect = !!i1357[12]
  i1356.targetDisplay = i1357[13]
  i1356.overridePixelPerfect = !!i1357[14]
  return i1356
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1359 = data
  i1358.m_UiScaleMode = i1359[0]
  i1358.m_ReferencePixelsPerUnit = i1359[1]
  i1358.m_ScaleFactor = i1359[2]
  i1358.m_ReferenceResolution = new pc.Vec2( i1359[3], i1359[4] )
  i1358.m_ScreenMatchMode = i1359[5]
  i1358.m_MatchWidthOrHeight = i1359[6]
  i1358.m_PhysicalUnit = i1359[7]
  i1358.m_FallbackScreenDPI = i1359[8]
  i1358.m_DefaultSpriteDPI = i1359[9]
  i1358.m_DynamicPixelsPerUnit = i1359[10]
  i1358.m_PresetInfoIsWorld = !!i1359[11]
  return i1358
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1361 = data
  i1360.m_IgnoreReversedGraphics = !!i1361[0]
  i1360.m_BlockingObjects = i1361[1]
  i1360.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1361[2] )
  return i1360
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1362 = root || request.c( 'UIManager' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'soundManager')
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1365 = data
  i1364.cullTransparentMesh = !!i1365[0]
  return i1364
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.UI.Image' )
  var i1367 = data
  request.r(i1367[0], i1367[1], 0, i1366, 'm_Sprite')
  i1366.m_Type = i1367[2]
  i1366.m_PreserveAspect = !!i1367[3]
  i1366.m_FillCenter = !!i1367[4]
  i1366.m_FillMethod = i1367[5]
  i1366.m_FillAmount = i1367[6]
  i1366.m_FillClockwise = !!i1367[7]
  i1366.m_FillOrigin = i1367[8]
  i1366.m_UseSpriteMesh = !!i1367[9]
  i1366.m_PixelsPerUnitMultiplier = i1367[10]
  request.r(i1367[11], i1367[12], 0, i1366, 'm_Material')
  i1366.m_Maskable = !!i1367[13]
  i1366.m_Color = new pc.Color(i1367[14], i1367[15], i1367[16], i1367[17])
  i1366.m_RaycastTarget = !!i1367[18]
  i1366.m_RaycastPadding = new pc.Vec4( i1367[19], i1367[20], i1367[21], i1367[22] )
  return i1366
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.UI.Text' )
  var i1369 = data
  i1368.m_FontData = request.d('UnityEngine.UI.FontData', i1369[0], i1368.m_FontData)
  i1368.m_Text = i1369[1]
  request.r(i1369[2], i1369[3], 0, i1368, 'm_Material')
  i1368.m_Maskable = !!i1369[4]
  i1368.m_Color = new pc.Color(i1369[5], i1369[6], i1369[7], i1369[8])
  i1368.m_RaycastTarget = !!i1369[9]
  i1368.m_RaycastPadding = new pc.Vec4( i1369[10], i1369[11], i1369[12], i1369[13] )
  return i1368
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'm_Font')
  i1370.m_FontSize = i1371[2]
  i1370.m_FontStyle = i1371[3]
  i1370.m_BestFit = !!i1371[4]
  i1370.m_MinSize = i1371[5]
  i1370.m_MaxSize = i1371[6]
  i1370.m_Alignment = i1371[7]
  i1370.m_AlignByGeometry = !!i1371[8]
  i1370.m_RichText = !!i1371[9]
  i1370.m_HorizontalOverflow = i1371[10]
  i1370.m_VerticalOverflow = i1371[11]
  i1370.m_LineSpacing = i1371[12]
  return i1370
}

Deserializers["CountDown"] = function (request, data, root) {
  var i1372 = root || request.c( 'CountDown' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'timeText')
  request.r(i1373[2], i1373[3], 0, i1372, 'subTimer')
  i1372.currentTime = i1373[4]
  i1372.isStart = !!i1373[5]
  i1372.hasFinished = !!i1373[6]
  request.r(i1373[7], i1373[8], 0, i1372, 'downloadButton')
  request.r(i1373[9], i1373[10], 0, i1372, 'ctaUI')
  return i1372
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.UI.Button' )
  var i1375 = data
  i1374.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1375[0], i1374.m_OnClick)
  i1374.m_Navigation = request.d('UnityEngine.UI.Navigation', i1375[1], i1374.m_Navigation)
  i1374.m_Transition = i1375[2]
  i1374.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1375[3], i1374.m_Colors)
  i1374.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1375[4], i1374.m_SpriteState)
  i1374.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1375[5], i1374.m_AnimationTriggers)
  i1374.m_Interactable = !!i1375[6]
  request.r(i1375[7], i1375[8], 0, i1374, 'm_TargetGraphic')
  return i1374
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1377 = data
  i1376.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1377[0], i1376.m_PersistentCalls)
  return i1376
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('UnityEngine.Events.PersistentCall', i1381[i + 0]));
  }
  i1378.m_Calls = i1380
  return i1378
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'm_Target')
  i1384.m_TargetAssemblyTypeName = i1385[2]
  i1384.m_MethodName = i1385[3]
  i1384.m_Mode = i1385[4]
  i1384.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1385[5], i1384.m_Arguments)
  i1384.m_CallState = i1385[6]
  return i1384
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'm_ObjectArgument')
  i1386.m_ObjectArgumentAssemblyTypeName = i1387[2]
  i1386.m_IntArgument = i1387[3]
  i1386.m_FloatArgument = i1387[4]
  i1386.m_StringArgument = i1387[5]
  i1386.m_BoolArgument = !!i1387[6]
  return i1386
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1389 = data
  i1388.m_Mode = i1389[0]
  i1388.m_WrapAround = !!i1389[1]
  request.r(i1389[2], i1389[3], 0, i1388, 'm_SelectOnUp')
  request.r(i1389[4], i1389[5], 0, i1388, 'm_SelectOnDown')
  request.r(i1389[6], i1389[7], 0, i1388, 'm_SelectOnLeft')
  request.r(i1389[8], i1389[9], 0, i1388, 'm_SelectOnRight')
  return i1388
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1391 = data
  i1390.m_NormalColor = new pc.Color(i1391[0], i1391[1], i1391[2], i1391[3])
  i1390.m_HighlightedColor = new pc.Color(i1391[4], i1391[5], i1391[6], i1391[7])
  i1390.m_PressedColor = new pc.Color(i1391[8], i1391[9], i1391[10], i1391[11])
  i1390.m_SelectedColor = new pc.Color(i1391[12], i1391[13], i1391[14], i1391[15])
  i1390.m_DisabledColor = new pc.Color(i1391[16], i1391[17], i1391[18], i1391[19])
  i1390.m_ColorMultiplier = i1391[20]
  i1390.m_FadeDuration = i1391[21]
  return i1390
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'm_HighlightedSprite')
  request.r(i1393[2], i1393[3], 0, i1392, 'm_PressedSprite')
  request.r(i1393[4], i1393[5], 0, i1392, 'm_SelectedSprite')
  request.r(i1393[6], i1393[7], 0, i1392, 'm_DisabledSprite')
  return i1392
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1395 = data
  i1394.m_NormalTrigger = i1395[0]
  i1394.m_HighlightedTrigger = i1395[1]
  i1394.m_PressedTrigger = i1395[2]
  i1394.m_SelectedTrigger = i1395[3]
  i1394.m_DisabledTrigger = i1395[4]
  return i1394
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1397 = data
  request.r(i1397[0], i1397[1], 0, i1396, 'm_FirstSelected')
  i1396.m_sendNavigationEvents = !!i1397[2]
  i1396.m_DragThreshold = i1397[3]
  return i1396
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1399 = data
  i1398.m_HorizontalAxis = i1399[0]
  i1398.m_VerticalAxis = i1399[1]
  i1398.m_SubmitButton = i1399[2]
  i1398.m_CancelButton = i1399[3]
  i1398.m_InputActionsPerSecond = i1399[4]
  i1398.m_RepeatDelay = i1399[5]
  i1398.m_ForceModuleActive = !!i1399[6]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.atlasId = i1401[1]
  i1400.mipmapCount = i1401[2]
  i1400.hdr = !!i1401[3]
  i1400.size = i1401[4]
  i1400.anisoLevel = i1401[5]
  i1400.filterMode = i1401[6]
  i1400.wrapMode = i1401[7]
  var i1403 = i1401[8]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 4) {
    i1402.push( UnityEngine.Rect.MinMaxRect(i1403[i + 0], i1403[i + 1], i1403[i + 2], i1403[i + 3]) );
  }
  i1400.rects = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1407 = data
  i1406.name = i1407[0]
  i1406.index = i1407[1]
  i1406.startup = !!i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1409 = data
  i1408.ambientIntensity = i1409[0]
  i1408.reflectionIntensity = i1409[1]
  i1408.ambientMode = i1409[2]
  i1408.ambientLight = new pc.Color(i1409[3], i1409[4], i1409[5], i1409[6])
  i1408.ambientSkyColor = new pc.Color(i1409[7], i1409[8], i1409[9], i1409[10])
  i1408.ambientGroundColor = new pc.Color(i1409[11], i1409[12], i1409[13], i1409[14])
  i1408.ambientEquatorColor = new pc.Color(i1409[15], i1409[16], i1409[17], i1409[18])
  i1408.fogColor = new pc.Color(i1409[19], i1409[20], i1409[21], i1409[22])
  i1408.fogEndDistance = i1409[23]
  i1408.fogStartDistance = i1409[24]
  i1408.fogDensity = i1409[25]
  i1408.fog = !!i1409[26]
  request.r(i1409[27], i1409[28], 0, i1408, 'skybox')
  i1408.fogMode = i1409[29]
  var i1411 = i1409[30]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1411[i + 0]) );
  }
  i1408.lightmaps = i1410
  i1408.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1409[31], i1408.lightProbes)
  i1408.lightmapsMode = i1409[32]
  i1408.environmentLightingMode = i1409[33]
  i1408.ambientProbe = new pc.SphericalHarmonicsL2(i1409[34])
  request.r(i1409[35], i1409[36], 0, i1408, 'customReflection')
  request.r(i1409[37], i1409[38], 0, i1408, 'defaultReflection')
  i1408.defaultReflectionMode = i1409[39]
  i1408.defaultReflectionResolution = i1409[40]
  i1408.sunLightObjectId = i1409[41]
  i1408.pixelLightCount = i1409[42]
  i1408.defaultReflectionHDR = !!i1409[43]
  i1408.hasLightDataAsset = !!i1409[44]
  i1408.hasManualGenerate = !!i1409[45]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'lightmapColor')
  request.r(i1415[2], i1415[3], 0, i1414, 'lightmapDirection')
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1416 = root || new UnityEngine.LightProbes()
  var i1417 = data
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(i1427[i + 0]);
  }
  i1424.invalidShaderVariants = i1426
  i1424.name = i1425[1]
  var i1429 = i1425[2]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( i1429[i + 0] );
  }
  i1424.shaderDefinedKeywords = i1428
  var i1431 = i1425[3]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1431[i + 0]) );
  }
  i1424.passes = i1430
  var i1433 = i1425[4]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1433[i + 0]) );
  }
  i1424.defaultParameterValues = i1432
  request.r(i1425[5], i1425[6], 0, i1424, 'unityFallbackShader')
  i1424.readDepth = !!i1425[7]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1440 = root || new pc.UnityShaderPass()
  var i1441 = data
  i1440.passType = i1441[0]
  i1440.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[1], i1440.zTest)
  i1440.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[2], i1440.zWrite)
  i1440.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[3], i1440.culling)
  i1440.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1441[4], i1440.blending)
  i1440.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1441[5], i1440.alphaBlending)
  i1440.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[6], i1440.colorWriteMask)
  i1440.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[7], i1440.offsetUnits)
  i1440.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[8], i1440.offsetFactor)
  i1440.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[9], i1440.stencilRef)
  i1440.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[10], i1440.stencilReadMask)
  i1440.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[11], i1440.stencilWriteMask)
  i1440.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[12], i1440.stencilOp)
  i1440.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[13], i1440.stencilOpFront)
  i1440.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[14], i1440.stencilOpBack)
  var i1443 = i1441[15]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1443[i + 0]) );
  }
  i1440.tags = i1442
  var i1445 = i1441[16]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1440.passDefinedKeywords = i1444
  var i1447 = i1441[17]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1447[i + 0]) );
  }
  i1440.variants = i1446
  i1440.readDepth = !!i1441[18]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1449 = data
  i1448.val = i1449[0]
  i1448.name = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1451 = data
  i1450.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[0], i1450.src)
  i1450.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[1], i1450.dst)
  i1450.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[2], i1450.op)
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1453 = data
  i1452.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[0], i1452.pass)
  i1452.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[1], i1452.fail)
  i1452.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[2], i1452.zFail)
  i1452.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[3], i1452.comp)
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = i1457[1]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1461 = data
  var i1463 = i1461[0]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1460.keywords = i1462
  i1460.vertexProgram = i1461[1]
  i1460.fragmentProgram = i1461[2]
  i1460.readDepth = !!i1461[3]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.type = i1467[1]
  i1466.value = new pc.Vec4( i1467[2], i1467[3], i1467[4], i1467[5] )
  i1466.textureValue = i1467[6]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1469 = data
  i1468.name = i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'texture')
  i1468.aabb = i1469[3]
  i1468.vertices = i1469[4]
  i1468.triangles = i1469[5]
  i1468.textureRect = UnityEngine.Rect.MinMaxRect(i1469[6], i1469[7], i1469[8], i1469[9])
  i1468.packedRect = UnityEngine.Rect.MinMaxRect(i1469[10], i1469[11], i1469[12], i1469[13])
  i1468.border = new pc.Vec4( i1469[14], i1469[15], i1469[16], i1469[17] )
  i1468.transparency = i1469[18]
  i1468.bounds = i1469[19]
  i1468.pixelsPerUnit = i1469[20]
  i1468.textureWidth = i1469[21]
  i1468.textureHeight = i1469[22]
  i1468.nativeSize = new pc.Vec2( i1469[23], i1469[24] )
  i1468.pivot = new pc.Vec2( i1469[25], i1469[26] )
  i1468.textureRectOffset = new pc.Vec2( i1469[27], i1469[28] )
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1471 = data
  i1470.name = i1471[0]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.wrapMode = i1473[1]
  i1472.isLooping = !!i1473[2]
  i1472.length = i1473[3]
  var i1475 = i1473[4]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1475[i + 0]) );
  }
  i1472.curves = i1474
  var i1477 = i1473[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1477[i + 0]) );
  }
  i1472.events = i1476
  i1472.halfPrecision = !!i1473[6]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1481 = data
  i1480.path = i1481[0]
  i1480.componentType = i1481[1]
  i1480.property = i1481[2]
  i1480.keys = i1481[3]
  var i1483 = i1481[4]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1483[i + 0]) );
  }
  i1480.objectReferenceKeys = i1482
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1487 = data
  i1486.time = i1487[0]
  request.r(i1487[1], i1487[2], 0, i1486, 'value')
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1491 = data
  i1490.functionName = i1491[0]
  i1490.floatParameter = i1491[1]
  i1490.intParameter = i1491[2]
  i1490.stringParameter = i1491[3]
  request.r(i1491[4], i1491[5], 0, i1490, 'objectReferenceParameter')
  i1490.time = i1491[6]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.ascent = i1493[1]
  i1492.originalLineHeight = i1493[2]
  i1492.fontSize = i1493[3]
  var i1495 = i1493[4]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1495[i + 0]) );
  }
  i1492.characterInfo = i1494
  request.r(i1493[5], i1493[6], 0, i1492, 'texture')
  i1492.originalFontSize = i1493[7]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1499 = data
  i1498.index = i1499[0]
  i1498.advance = i1499[1]
  i1498.bearing = i1499[2]
  i1498.glyphWidth = i1499[3]
  i1498.glyphHeight = i1499[4]
  i1498.minX = i1499[5]
  i1498.maxX = i1499[6]
  i1498.minY = i1499[7]
  i1498.maxY = i1499[8]
  i1498.uvBottomLeftX = i1499[9]
  i1498.uvBottomLeftY = i1499[10]
  i1498.uvBottomRightX = i1499[11]
  i1498.uvBottomRightY = i1499[12]
  i1498.uvTopLeftX = i1499[13]
  i1498.uvTopLeftY = i1499[14]
  i1498.uvTopRightX = i1499[15]
  i1498.uvTopRightY = i1499[16]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1501 = data
  i1500.name = i1501[0]
  var i1503 = i1501[1]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1503[i + 0]) );
  }
  i1500.states = i1502
  var i1505 = i1501[2]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1505[i + 0]) );
  }
  i1500.layers = i1504
  var i1507 = i1501[3]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1507[i + 0]) );
  }
  i1500.parameters = i1506
  var i1509 = i1501[4]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( i1509[i + 0] );
  }
  i1500.animationClips = i1508
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1513 = data
  i1512.cycleOffset = i1513[0]
  i1512.cycleOffsetParameter = i1513[1]
  i1512.cycleOffsetParameterActive = !!i1513[2]
  i1512.mirror = !!i1513[3]
  i1512.mirrorParameter = i1513[4]
  i1512.mirrorParameterActive = !!i1513[5]
  i1512.motionId = i1513[6]
  i1512.nameHash = i1513[7]
  i1512.fullPathHash = i1513[8]
  i1512.speed = i1513[9]
  i1512.speedParameter = i1513[10]
  i1512.speedParameterActive = !!i1513[11]
  i1512.tag = i1513[12]
  i1512.name = i1513[13]
  i1512.writeDefaultValues = !!i1513[14]
  var i1515 = i1513[15]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1515[i + 0]) );
  }
  i1512.transitions = i1514
  var i1517 = i1513[16]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 2) {
  request.r(i1517[i + 0], i1517[i + 1], 2, i1516, '')
  }
  i1512.behaviours = i1516
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1521 = data
  i1520.fullPath = i1521[0]
  i1520.canTransitionToSelf = !!i1521[1]
  i1520.duration = i1521[2]
  i1520.exitTime = i1521[3]
  i1520.hasExitTime = !!i1521[4]
  i1520.hasFixedDuration = !!i1521[5]
  i1520.interruptionSource = i1521[6]
  i1520.offset = i1521[7]
  i1520.orderedInterruption = !!i1521[8]
  i1520.destinationStateNameHash = i1521[9]
  i1520.destinationStateMachineId = i1521[10]
  i1520.isExit = !!i1521[11]
  i1520.mute = !!i1521[12]
  i1520.solo = !!i1521[13]
  var i1523 = i1521[14]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1523[i + 0]) );
  }
  i1520.conditions = i1522
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1529 = data
  i1528.blendingMode = i1529[0]
  i1528.defaultWeight = i1529[1]
  i1528.name = i1529[2]
  i1528.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1529[3], i1528.stateMachine)
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1531 = data
  i1530.id = i1531[0]
  i1530.defaultStateNameHash = i1531[1]
  var i1533 = i1531[2]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1533[i + 0]) );
  }
  i1530.entryTransitions = i1532
  var i1535 = i1531[3]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1535[i + 0]) );
  }
  i1530.anyStateTransitions = i1534
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1539 = data
  i1538.destinationStateNameHash = i1539[0]
  i1538.destinationStateMachineId = i1539[1]
  i1538.isExit = !!i1539[2]
  i1538.mute = !!i1539[3]
  i1538.solo = !!i1539[4]
  var i1541 = i1539[5]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1541[i + 0]) );
  }
  i1538.conditions = i1540
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1545 = data
  i1544.defaultBool = !!i1545[0]
  i1544.defaultFloat = i1545[1]
  i1544.defaultInt = i1545[2]
  i1544.name = i1545[3]
  i1544.nameHash = i1545[4]
  i1544.type = i1545[5]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1547 = data
  var i1549 = i1547[0]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1549[i + 0]) );
  }
  i1546.files = i1548
  i1546.componentToPrefabIds = i1547[1]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1553 = data
  i1552.path = i1553[0]
  request.r(i1553[1], i1553[2], 0, i1552, 'unityObject')
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1557[i + 0]) );
  }
  i1554.scriptsExecutionOrder = i1556
  var i1559 = i1555[1]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1559[i + 0]) );
  }
  i1554.sortingLayers = i1558
  var i1561 = i1555[2]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1561[i + 0]) );
  }
  i1554.cullingLayers = i1560
  i1554.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1555[3], i1554.timeSettings)
  i1554.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1555[4], i1554.physicsSettings)
  i1554.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1555[5], i1554.physics2DSettings)
  i1554.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1555[6], i1554.qualitySettings)
  i1554.removeShadows = !!i1555[7]
  i1554.autoInstantiatePrefabs = !!i1555[8]
  i1554.enableAutoInstancing = !!i1555[9]
  i1554.lightmapEncodingQuality = i1555[10]
  i1554.desiredColorSpace = i1555[11]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.value = i1565[1]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1569 = data
  i1568.id = i1569[0]
  i1568.name = i1569[1]
  i1568.value = i1569[2]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1573 = data
  i1572.id = i1573[0]
  i1572.name = i1573[1]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1575 = data
  i1574.fixedDeltaTime = i1575[0]
  i1574.maximumDeltaTime = i1575[1]
  i1574.timeScale = i1575[2]
  i1574.maximumParticleTimestep = i1575[3]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1577 = data
  i1576.gravity = new pc.Vec3( i1577[0], i1577[1], i1577[2] )
  i1576.defaultSolverIterations = i1577[3]
  i1576.bounceThreshold = i1577[4]
  i1576.autoSyncTransforms = !!i1577[5]
  i1576.autoSimulation = !!i1577[6]
  var i1579 = i1577[7]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1579[i + 0]) );
  }
  i1576.collisionMatrix = i1578
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.layerId = i1583[1]
  i1582.otherLayerId = i1583[2]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'material')
  i1584.gravity = new pc.Vec2( i1585[2], i1585[3] )
  i1584.positionIterations = i1585[4]
  i1584.velocityIterations = i1585[5]
  i1584.velocityThreshold = i1585[6]
  i1584.maxLinearCorrection = i1585[7]
  i1584.maxAngularCorrection = i1585[8]
  i1584.maxTranslationSpeed = i1585[9]
  i1584.maxRotationSpeed = i1585[10]
  i1584.timeToSleep = i1585[11]
  i1584.linearSleepTolerance = i1585[12]
  i1584.angularSleepTolerance = i1585[13]
  i1584.defaultContactOffset = i1585[14]
  i1584.autoSimulation = !!i1585[15]
  i1584.queriesHitTriggers = !!i1585[16]
  i1584.queriesStartInColliders = !!i1585[17]
  i1584.callbacksOnDisable = !!i1585[18]
  i1584.reuseCollisionCallbacks = !!i1585[19]
  i1584.autoSyncTransforms = !!i1585[20]
  var i1587 = i1585[21]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1587[i + 0]) );
  }
  i1584.collisionMatrix = i1586
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.layerId = i1591[1]
  i1590.otherLayerId = i1591[2]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1593 = data
  var i1595 = i1593[0]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1595[i + 0]) );
  }
  i1592.qualityLevels = i1594
  var i1597 = i1593[1]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( i1597[i + 0] );
  }
  i1592.names = i1596
  i1592.shadows = i1593[2]
  i1592.anisotropicFiltering = i1593[3]
  i1592.antiAliasing = i1593[4]
  i1592.lodBias = i1593[5]
  i1592.shadowCascades = i1593[6]
  i1592.shadowDistance = i1593[7]
  i1592.shadowmaskMode = i1593[8]
  i1592.shadowProjection = i1593[9]
  i1592.shadowResolution = i1593[10]
  i1592.softParticles = !!i1593[11]
  i1592.softVegetation = !!i1593[12]
  i1592.activeColorSpace = i1593[13]
  i1592.desiredColorSpace = i1593[14]
  i1592.masterTextureLimit = i1593[15]
  i1592.maxQueuedFrames = i1593[16]
  i1592.particleRaycastBudget = i1593[17]
  i1592.pixelLightCount = i1593[18]
  i1592.realtimeReflectionProbes = !!i1593[19]
  i1592.shadowCascade2Split = i1593[20]
  i1592.shadowCascade4Split = new pc.Vec3( i1593[21], i1593[22], i1593[23] )
  i1592.streamingMipmapsActive = !!i1593[24]
  i1592.vSyncCount = i1593[25]
  i1592.asyncUploadBufferSize = i1593[26]
  i1592.asyncUploadTimeSlice = i1593[27]
  i1592.billboardsFaceCameraPosition = !!i1593[28]
  i1592.shadowNearPlaneOffset = i1593[29]
  i1592.streamingMipmapsMemoryBudget = i1593[30]
  i1592.maximumLODLevel = i1593[31]
  i1592.streamingMipmapsAddAllCameras = !!i1593[32]
  i1592.streamingMipmapsMaxLevelReduction = i1593[33]
  i1592.streamingMipmapsRenderersPerFrame = i1593[34]
  i1592.resolutionScalingFixedDPIFactor = i1593[35]
  i1592.streamingMipmapsMaxFileIORequests = i1593[36]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1603 = data
  i1602.weight = i1603[0]
  i1602.vertices = i1603[1]
  i1602.normals = i1603[2]
  i1602.tangents = i1603[3]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1607 = data
  i1606.mode = i1607[0]
  i1606.parameter = i1607[1]
  i1606.threshold = i1607[2]
  return i1606
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"shaderDefinedKeywords":2,"passes":3,"defaultParameterValues":4,"unityFallbackShader":5,"readDepth":7},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[25],"53":[25],"54":[25],"55":[25],"56":[25],"57":[25],"58":[25],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[2],"74":[11],"75":[76],"77":[76],"29":[28],"78":[28],"79":[34,28],"80":[11],"81":[34,28],"82":[28],"83":[11,28],"84":[28,34],"85":[28],"86":[28],"87":[28],"32":[29],"35":[34,28],"88":[28],"31":[29],"89":[28],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[28],"98":[34,28],"99":[28],"100":[28],"101":[28],"102":[28],"36":[34,28],"103":[28],"104":[39],"105":[39],"40":[39],"106":[39],"107":[2],"108":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MonoBehaviour","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","SelectObjectController","UnityEngine.GameObject","CountDown","LevelData","ObjectController","UnityEngine.Rigidbody","GamePlayController","ObjectManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.16f1";

Deserializers.productName = "Tile-Master-Playable-Ad";

Deserializers.lunaInitializationTime = "09/23/2021 10:06:56";

Deserializers.lunaVersion = "2.4.0";

Deserializers.lunaSHA = "7b8cbca8c495efce4f9d153d909ba0d3ff6521ee";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.7.1,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.27,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:D:/Studio Projects/Luna/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.TileMasterPlayableAd";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

