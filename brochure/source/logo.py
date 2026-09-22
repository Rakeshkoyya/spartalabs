from PIL import Image, ImageFilter
import numpy as np
S=3
src=Image.open('logo-original.webp').convert('RGB')
src=src.resize((src.width*S,src.height*S),Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=2,percent=60,threshold=2))
im=np.asarray(src).astype(float)/255
bg=np.array([254,254,254])/255
a=np.clip(np.max((bg-im)/bg,axis=2),0,1); a[a<0.035]=0
fg=np.clip(np.where(a[...,None]>0,(im-bg*(1-a[...,None]))/np.maximum(a[...,None],1e-6),0),0,1)
img=Image.fromarray((np.dstack([fg,a])*255).astype(np.uint8),'RGBA')
def crop(box=None):
    x=img.crop(tuple(v*S for v in box)) if box else img
    return x.crop(x.getbbox())
def whiten(x):
    arr=np.asarray(x).astype(float); sat=arr[...,2]-arr[...,0]
    t=np.clip((150-sat)/110,0,1); out=arr.copy()
    out[...,:3]=arr[...,:3]*(1-t[...,None])+np.array([244,247,252.])*t[...,None]
    return Image.fromarray(out.astype(np.uint8),'RGBA')
for name,box in [('logo-full',None),('logo-mark',(380,120,900,720)),('logo-wordmark',(90,730,1170,990))]:
    x=crop(box); x.save(f'../logo/{name}.png',optimize=True); whiten(x).save(f'../logo/{name}-white.png',optimize=True); print(name,x.size)
