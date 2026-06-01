import{r as f,j as A}from"./query-BKy-jsDF.js";import{u as P}from"./motion-RU2XUwWQ.js";const y=`
  precision mediump float;
  varying vec2 vUv;
  attribute vec2 a_position;
  void main() {
    vUv = 0.5 * (a_position + 1.0);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,T=`
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer_position;
  uniform float u_scroll_progress;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
    vec2 sine_acc = vec2(0.0);
    vec2 res = vec2(0.0);
    float scale = 8.0;

    for (int j = 0; j < 15; j++) {
      uv = rotate(uv, 1.0);
      sine_acc = rotate(sine_acc, 1.0);
      vec2 layer = uv * scale + float(j) + sine_acc - t;
      sine_acc += sin(layer) + 2.4 * p;
      res += (0.5 + 0.5 * cos(layer)) / scale;
      scale *= 1.2;
    }
    return res.x + res.y;
  }

  void main() {
    vec2 uv = 0.5 * vUv;
    uv.x *= u_ratio;

    vec2 pointer = vUv - u_pointer_position;
    pointer.x *= u_ratio;
    float p = clamp(length(pointer), 0.0, 1.0);
    p = 0.5 * pow(1.0 - p, 2.0);

    float t = 0.001 * u_time;
    vec3 color = vec3(0.0);

    float noise = neuro_shape(uv, t, p);
    noise = 1.2 * pow(noise, 3.0);
    noise += pow(noise, 10.0);
    noise = max(0.0, noise - 0.5);
    noise *= (1.0 - length(vUv - 0.5));

    color = vec3(0.03, 0.06, 0.11);
    color += vec3(0.05, 0.22, 0.28) * sin(3.0 * u_scroll_progress + 1.5);
    color += vec3(0.12, 0.55, 0.52) * p;

    color = color * noise;
    gl_FragColor = vec4(color, noise);
  }
`;function E(t,i,s){const r=t.createShader(s);return r?(t.shaderSource(r,i),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("Shader compile error:",t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}function U(t,i,s){const r=t.createProgram();return r?(t.attachShader(r,i),t.attachShader(r,s),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)?r:(console.error("Program link error:",t.getProgramInfoLog(r)),null)):null}function b(t,i){const s={},r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let a=0;a<r;a++){const u=t.getActiveUniform(i,a);u&&(s[u.name]=t.getUniformLocation(i,u.name))}return s}function C(){const t=f.useRef(null),i=f.useRef(0),s=f.useRef(null),r=f.useRef({}),a=f.useRef({x:0,y:0,tX:0,tY:0}),u=P();return f.useEffect(()=>{if(u)return;const c=t.current;if(!c)return;const e=c.getContext("webgl")??c.getContext("experimental-webgl");if(!(e instanceof WebGLRenderingContext)){console.error("WebGL is not supported.");return}const v=E(e,y,e.VERTEX_SHADER),d=E(e,T,e.FRAGMENT_SHADER);if(!v||!d)return;const l=U(e,v,d);if(!l)return;s.current=e,r.current=b(e,l);const S=new Float32Array([-1,-1,1,-1,-1,1,1,1]),L=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,L),e.bufferData(e.ARRAY_BUFFER,S,e.STATIC_DRAW),e.useProgram(l);const h=e.getAttribLocation(l,"a_position");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const m=()=>{const o=Math.min(window.devicePixelRatio,2);c.width=window.innerWidth*o,c.height=window.innerHeight*o;const n=c.width/c.height,x=r.current.u_ratio;x&&e.uniform1f(x,n),e.viewport(0,0,c.width,c.height)},_=()=>{const o=r.current,n=a.current;o.u_time&&(n.x+=(n.tX-n.x)*.2,n.y+=(n.tY-n.y)*.2,e.uniform1f(o.u_time,performance.now()),o.u_pointer_position&&e.uniform2f(o.u_pointer_position,n.x/window.innerWidth,1-n.y/window.innerHeight),o.u_scroll_progress&&e.uniform1f(o.u_scroll_progress,window.scrollY/(2*window.innerHeight)),e.drawArrays(e.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(_))},p=(o,n)=>{a.current.tX=o,a.current.tY=n},w=o=>p(o.clientX,o.clientY),R=o=>{o.touches[0]&&p(o.touches[0].clientX,o.touches[0].clientY)},g=o=>p(o.clientX,o.clientY);return m(),_(),window.addEventListener("resize",m),window.addEventListener("pointermove",w),window.addEventListener("touchmove",R,{passive:!0}),window.addEventListener("click",g),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",m),window.removeEventListener("pointermove",w),window.removeEventListener("touchmove",R),window.removeEventListener("click",g),e.deleteProgram(l),e.deleteShader(v),e.deleteShader(d)}},[u]),u?A.jsx("div",{className:"pointer-events-none fixed inset-0",style:{zIndex:0,background:"#070e1c"},"aria-hidden":!0}):A.jsx("canvas",{ref:t,className:"pointer-events-none fixed inset-0 h-full w-full opacity-95",style:{zIndex:0,backgroundColor:"#070e1c"},"aria-hidden":!0})}export{C as default};
