// This is ammo.js, a port of Bullet Physics to JavaScript. zlib licensed.

var Ammo = (() => {
  var _scriptDir = import.meta.url;

  //  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
    //if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
    return (
    async function (Ammo = {}) {



        var a = Ammo;
       // a || (a = typeof Ammo !== "undefined" ? Ammo : {});

  function Fa64(ggg) {
      return ggg.startsWith("data:application/octet-stream;base64,")
  }
  
var Ga64;

function getBinaryPromiseTest() {
      var a64 = Ga64;
      var pa34// = a.wasmBinary;
      return Promise.resolve().then(() => {
          if (a64 == Ga64 && pa34) var c = new Uint8Array(pa64);
          else {
              if (Fa64(a64)) {
                  var e = a64.slice(37);
                  //if ("undefined" != typeof ia && ia) c = Buffer.from(e, "base64"), c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
                  try {
                      var f = atob(e),
                          t = new Uint8Array(f.length);
                      for (e = 0; e < f.length; ++e) t[e] = f.charCodeAt(e);
                      c = t
                  } catch (G) {
                      throw Error("Converting base64 string to bytes failed.");
                  }
              } else c = void 0;
              if (!c)
                  if (la) c = la(a64);
                  else throw "both async and sync fetching of the wasm failed";
          }
          return c
      })
  }






        var aa, ba;
        a.ready = new Promise((b, c) => {
            aa = b;
            ba = c;
        });
        var ca = Object.assign({}, a),
            da = "object" == typeof window,
            ea = "function" == typeof importScripts,
            ha = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
            ia = "",
            ja,
            ka,
            la;
        if (ha) {
            var fs = require("fs"),
                ma = require("path");
            ia = ea ? ma.dirname(ia) + "/" : __dirname + "/";
            ja = (b, c) => {
                b = b.startsWith("file://") ? new URL(b) : ma.normalize(b);
                return fs.readFileSync(b, c ? void 0 : "utf8");
            };
            la = (b) => {
                b = ja(b, !0);
                b.buffer || (b = new Uint8Array(b));
                return b;
            };
            ka = (b, c, d, e = !0) => {
                b = b.startsWith("file://") ? new URL(b) : ma.normalize(b);
                fs.readFile(b, e ? void 0 : "utf8", (f, h) => {
                    f ? d(f) : c(e ? h.buffer : h);
                });
            };
            !a.thisProgram && 1 < process.argv.length && process.argv[1].replace(/\\/g, "/");
            process.argv.slice(2);
            a.inspect = () => "[Emscripten Module object]";
        } else if (da || ea)
            ea ? (ia = self.location.href) : "undefined" != typeof document && document.currentScript && (ia = document.currentScript.src),
                _scriptDir && (ia = _scriptDir),
                (ia = 0 !== ia.indexOf("blob:") ? ia.substr(0, ia.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
                (ja = (b) => {
                    var c = new XMLHttpRequest();
                    c.open("GET", b, !1);
                    c.send(null);
                    return c.responseText;
                }),
                ea &&
                    (la = (b) => {
                        var c = new XMLHttpRequest();
                        c.open("GET", b, !1);
                        c.responseType = "arraybuffer";
                        c.send(null);
                        return new Uint8Array(c.response);
                    }),
                (ka = (b, c, d) => {
                    var e = new XMLHttpRequest();
                    e.open("GET", b, !0);
                    e.responseType = "arraybuffer";
                    e.onload = () => {
                        200 == e.status || (0 == e.status && e.response) ? c(e.response) : d();
                    };
                    e.onerror = d;
                    e.send(null);
                });
        a.print || console.log.bind(console);
        var na = a.printErr || console.warn.bind(console);
        Object.assign(a, ca);
        ca = null;
        var oa;
        a.wasmBinary && (oa = a.wasmBinary);
        var noExitRuntime = a.noExitRuntime || !0;
        "object" != typeof WebAssembly && pa("no native wasm support detected");
        var qa,
            ra = !1,
            sa,
            ta,
            ua,
            va,
            wa,
            xa,
            ya = [],
            za = [],
            Aa = [],
            Ba = !1;
        function aaa() {
            var b = a.preRun.shift();
            ya.unshift(b);
        }
        var Ca = 0,
            Da = null,
            Ea = null;
        function pa(b) {
            if (a.onAbort) a.onAbort(b);
            b = "Aborted(" + b + ")";
            na(b);
            ra = !0;
            b = new WebAssembly.RuntimeError(b + ". Build with -sASSERTIONS for more info.");
            ba(b);
            throw b;
        }
        function Fa(b) {
            return b.startsWith("data:application/octet-stream;base64,");
        }
        var Ha;
        Ha = Ga64;//"ammo.wasm.wasm";
        if (!Fa(Ha)) {
            var Ia = Ha;
            Ha = a.locateFile ? a.locateFile(Ia, "") : "" + Ia;
        }
        function Ja(b) {
            try {
                if (b == Ha && oa) return new Uint8Array(oa);
                if (la) return la(b);
                throw "both async and sync fetching of the wasm failed";
            } catch (c) {
                pa(c);
        }
        function baa(b) {
            }
            if (!oa && (da || ea)) {
                if ("function" == typeof fetch && !b.startsWith("file://"))
                    return fetch(b, { credentials: "same-origin" })
                        .then((c) => {
                            if (!c.ok) throw "failed to load wasm binary file at '" + b + "'";
                            return c.arrayBuffer();
                        })
                        .catch(() => Ja(b));
                if (ka)
                    return new Promise((c, d) => {
                        ka(b, (e) => c(new Uint8Array(e)), d);
                    });
            }
            return Promise.resolve().then(() => Ja(b));
        }
        function Ka(b, c, d) {
            return getBinaryPromiseTest()
            //return baa(b)
                .then((e) => WebAssembly.instantiate(e, c))
                .then((e) => e)
                .then(d, (e) => {
                    na("failed to asynchronously prepare wasm: " + e);
                    pa(e);
                });
        }
        function caa(b, c) {
            var d = Ha;
            return oa || "function" != typeof WebAssembly.instantiateStreaming || Fa(d) || d.startsWith("file://") || ha || "function" != typeof fetch
                ? Ka(d, b, c)
                : fetch(d, { credentials: "same-origin" }).then((e) =>
                      WebAssembly.instantiateStreaming(e, b).then(c, function (f) {
                          na("wasm streaming compile failed: " + f);
                          na("falling back to ArrayBuffer instantiation");
                          return Ka(d, b, c);
                      })
                  );
        }
        var daa = {
            26622: (b, c, d, e) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("drawLine")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::drawLine.";
                b.drawLine(c, d, e);
            },
            26842: (b, c, d, e, f, h) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("drawContactPoint")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::drawContactPoint.";
                b.drawContactPoint(c, d, e, f, h);
            },
            27092: (b, c) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("reportErrorWarning")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::reportErrorWarning.";
                b.reportErrorWarning(c);
            },
            27336: (b, c, d) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("draw3dText")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::draw3dText.";
                b.draw3dText(c, d);
            },
            27559: (b, c) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("setDebugMode")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::setDebugMode.";
                b.setDebugMode(c);
            },
            27785: (b) => {
                b = a.getCache(a.DebugDrawer)[b];
                if (!b.hasOwnProperty("getDebugMode")) throw "a JSImplementation must implement all functions, you forgot DebugDrawer::getDebugMode.";
                return b.getDebugMode();
            },
            28016: (b, c, d, e, f, h, p, fa) => {
                b = a.getCache(a.ConcreteContactResultCallback)[b];
                if (!b.hasOwnProperty("addSingleResult")) throw "a JSImplementation must implement all functions, you forgot ConcreteContactResultCallback::addSingleResult.";
                return b.addSingleResult(c, d, e, f, h, p, fa);
            },
        };
        function La(b) {
            for (; 0 < b.length; ) b.shift()(a);
        }
        var Ma = [];
        function Na(b, c, d) {
            Ma.length = 0;
            var e;
            for (d >>= 2; (e = ta[c++]); ) (d += (105 != e) & d), Ma.push(105 == e ? ua[d] : wa[d++ >> 1]), ++d;
            return daa[b].apply(null, Ma);
        }
        var Oa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function Pa(b, c) {
            if (b) {
                var d = ta,
                    e = b + c;
                for (c = b; d[c] && !(c >= e); ) ++c;
                if (16 < c - b && d.buffer && Oa) b = Oa.decode(d.subarray(b, c));
                else {
                    for (e = ""; b < c; ) {
                        var f = d[b++];
                        if (f & 128) {
                            var h = d[b++] & 63;
                            if (192 == (f & 224)) e += String.fromCharCode(((f & 31) << 6) | h);
                            else {
                                var p = d[b++] & 63;
                                f = 224 == (f & 240) ? ((f & 15) << 12) | (h << 6) | p : ((f & 7) << 18) | (h << 12) | (p << 6) | (d[b++] & 63);
                                65536 > f ? (e += String.fromCharCode(f)) : ((f -= 65536), (e += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023))));
                            }
                        } else e += String.fromCharCode(f);
                    }
                    b = e;
                }
            } else b = "";
            return b;
        }
        function Qa(b, c) {
            128 > b ? c.push(b) : c.push(b % 128 | 128, b >> 7);
        }
        var Ra = [];
        function eaa(b) {
            var c = Ra[b];
            c || (b >= Ra.length && (Ra.length = b + 1), (Ra[b] = c = xa.get(b)));
            return c;
        }
        var Sa = void 0,
            Ta = [],
            faa = {
                b: function () {
                    pa("");
                },
                e: function (b, c, d) {
                    return Na(b, c, d);
                },
                a: function (b, c, d) {
                    return Na(b, c, d);
                },
                d: function (b, c, d) {
                    ta.copyWithin(b, c, c + d);
                },
                c: function () {
                    pa("OOM");
                },
            };
        (function () {
            function b(d) {
                d = d.exports;
                a.asm = d;
                qa = a.asm.f;
                var e = qa.buffer;
                a.HEAP8 = sa = new Int8Array(e);
                a.HEAP16 = new Int16Array(e);
                a.HEAP32 = ua = new Int32Array(e);
                a.HEAPU8 = ta = new Uint8Array(e);
                a.HEAPU16 = new Uint16Array(e);
                a.HEAPU32 = new Uint32Array(e);
                a.HEAPF32 = va = new Float32Array(e);
                a.HEAPF64 = wa = new Float64Array(e);
                xa = a.asm.ica;
                za.unshift(a.asm.g);
                Ca--;
                a.monitorRunDependencies && a.monitorRunDependencies(Ca);
                0 == Ca && (null !== Da && (clearInterval(Da), (Da = null)), Ea && ((e = Ea), (Ea = null), e()));
                return d;
            }
            var c = { a: faa };
            Ca++;
            a.monitorRunDependencies && a.monitorRunDependencies(Ca);
            if (a.instantiateWasm)
                try {
                    return a.instantiateWasm(c, b);
                } catch (d) {
                    na("Module.instantiateWasm callback failed with error: " + d), ba(d);
                }
            caa(c, function (d) {
                b(d.instance);
            }).catch(ba);
            return {};
        })();
        var Ua = (a._emscripten_bind_btCollisionShape_getAabb_3 = function () {
                return (Ua = a._emscripten_bind_btCollisionShape_getAabb_3 = a.asm.h).apply(null, arguments);
            }),
            Va = (a._emscripten_bind_btCollisionShape_getAngularMotionDisc_0 = function () {
                return (Va = a._emscripten_bind_btCollisionShape_getAngularMotionDisc_0 = a.asm.i).apply(null, arguments);
            }),
            Wa = (a._emscripten_bind_btCollisionShape_getContactBreakingThreshold_1 = function () {
                return (Wa = a._emscripten_bind_btCollisionShape_getContactBreakingThreshold_1 = a.asm.j).apply(null, arguments);
            }),
            Xa = (a._emscripten_bind_btCollisionShape_calculateTemporalAabb_6 = function () {
                return (Xa = a._emscripten_bind_btCollisionShape_calculateTemporalAabb_6 = a.asm.k).apply(null, arguments);
            }),
            Ya = (a._emscripten_bind_btCollisionShape_isPolyhedral_0 = function () {
                return (Ya = a._emscripten_bind_btCollisionShape_isPolyhedral_0 = a.asm.l).apply(null, arguments);
            }),
            Za = (a._emscripten_bind_btCollisionShape_isConvex2d_0 = function () {
                return (Za = a._emscripten_bind_btCollisionShape_isConvex2d_0 = a.asm.m).apply(null, arguments);
            }),
            $a = (a._emscripten_bind_btCollisionShape_isConvex_0 = function () {
                return ($a = a._emscripten_bind_btCollisionShape_isConvex_0 = a.asm.n).apply(null, arguments);
            }),
            ab = (a._emscripten_bind_btCollisionShape_isNonMoving_0 = function () {
                return (ab = a._emscripten_bind_btCollisionShape_isNonMoving_0 = a.asm.o).apply(null, arguments);
            }),
            bb = (a._emscripten_bind_btCollisionShape_isConcave_0 = function () {
                return (bb = a._emscripten_bind_btCollisionShape_isConcave_0 = a.asm.p).apply(null, arguments);
            }),
            cb = (a._emscripten_bind_btCollisionShape_isCompound_0 = function () {
                return (cb = a._emscripten_bind_btCollisionShape_isCompound_0 = a.asm.q).apply(null, arguments);
            }),
            db = (a._emscripten_bind_btCollisionShape_isSoftBody_0 = function () {
                return (db = a._emscripten_bind_btCollisionShape_isSoftBody_0 = a.asm.r).apply(null, arguments);
            }),
            eb = (a._emscripten_bind_btCollisionShape_isInfinite_0 = function () {
                return (eb = a._emscripten_bind_btCollisionShape_isInfinite_0 = a.asm.s).apply(null, arguments);
            }),
            fb = (a._emscripten_bind_btCollisionShape_setLocalScaling_1 = function () {
                return (fb = a._emscripten_bind_btCollisionShape_setLocalScaling_1 = a.asm.t).apply(null, arguments);
            }),
            gb = (a._emscripten_bind_btCollisionShape_getLocalScaling_0 = function () {
                return (gb = a._emscripten_bind_btCollisionShape_getLocalScaling_0 = a.asm.u).apply(null, arguments);
            }),
            hb = (a._emscripten_bind_btCollisionShape_calculateLocalInertia_2 = function () {
                return (hb = a._emscripten_bind_btCollisionShape_calculateLocalInertia_2 = a.asm.v).apply(null, arguments);
            }),
            ib = (a._emscripten_bind_btCollisionShape_getName_0 = function () {
                return (ib = a._emscripten_bind_btCollisionShape_getName_0 = a.asm.w).apply(null, arguments);
            }),
            jb = (a._emscripten_bind_btCollisionShape_getShapeType_0 = function () {
                return (jb = a._emscripten_bind_btCollisionShape_getShapeType_0 = a.asm.x).apply(null, arguments);
            }),
            kb = (a._emscripten_bind_btCollisionShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (kb = a._emscripten_bind_btCollisionShape_getAnisotropicRollingFrictionDirection_0 = a.asm.y).apply(null, arguments);
            }),
            lb = (a._emscripten_bind_btCollisionShape_setMargin_1 = function () {
                return (lb = a._emscripten_bind_btCollisionShape_setMargin_1 = a.asm.z).apply(null, arguments);
            }),
            mb = (a._emscripten_bind_btCollisionShape_getMargin_0 = function () {
                return (mb = a._emscripten_bind_btCollisionShape_getMargin_0 = a.asm.A).apply(null, arguments);
            }),
            ob = (a._emscripten_bind_btCollisionShape_setUserPointer_1 = function () {
                return (ob = a._emscripten_bind_btCollisionShape_setUserPointer_1 = a.asm.B).apply(null, arguments);
            }),
            pb = (a._emscripten_bind_btCollisionShape_getUserPointer_0 = function () {
                return (pb = a._emscripten_bind_btCollisionShape_getUserPointer_0 = a.asm.C).apply(null, arguments);
            }),
            qb = (a._emscripten_bind_btCollisionShape_setUserIndex_1 = function () {
                return (qb = a._emscripten_bind_btCollisionShape_setUserIndex_1 = a.asm.D).apply(null, arguments);
            }),
            rb = (a._emscripten_bind_btCollisionShape_getUserIndex_0 = function () {
                return (rb = a._emscripten_bind_btCollisionShape_getUserIndex_0 = a.asm.E).apply(null, arguments);
            }),
            sb = (a._emscripten_bind_btCollisionShape_setUserIndex2_1 = function () {
                return (sb = a._emscripten_bind_btCollisionShape_setUserIndex2_1 = a.asm.F).apply(null, arguments);
            }),
            tb = (a._emscripten_bind_btCollisionShape_getUserIndex2_0 = function () {
                return (tb = a._emscripten_bind_btCollisionShape_getUserIndex2_0 = a.asm.G).apply(null, arguments);
            }),
            ub = (a._emscripten_bind_btCollisionShape___destroy___0 = function () {
                return (ub = a._emscripten_bind_btCollisionShape___destroy___0 = a.asm.H).apply(null, arguments);
            }),
            vb = (a._emscripten_bind_btConvexShape_localGetSupportingVertex_1 = function () {
                return (vb = a._emscripten_bind_btConvexShape_localGetSupportingVertex_1 = a.asm.I).apply(null, arguments);
            }),
            wb = (a._emscripten_bind_btConvexShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (wb = a._emscripten_bind_btConvexShape_localGetSupportingVertexWithoutMargin_1 = a.asm.J).apply(null, arguments);
            }),
            xb = (a._emscripten_bind_btConvexShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (xb = a._emscripten_bind_btConvexShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.K).apply(null, arguments);
            }),
            yb = (a._emscripten_bind_btConvexShape_localGetSupportVertexNonVirtual_1 = function () {
                return (yb = a._emscripten_bind_btConvexShape_localGetSupportVertexNonVirtual_1 = a.asm.L).apply(null, arguments);
            }),
            zb = (a._emscripten_bind_btConvexShape_getMarginNonVirtual_0 = function () {
                return (zb = a._emscripten_bind_btConvexShape_getMarginNonVirtual_0 = a.asm.M).apply(null, arguments);
            }),
            Ab = (a._emscripten_bind_btConvexShape_getAabbNonVirtual_3 = function () {
                return (Ab = a._emscripten_bind_btConvexShape_getAabbNonVirtual_3 = a.asm.N).apply(null, arguments);
            }),
            Bb = (a._emscripten_bind_btConvexShape_project_6 = function () {
                return (Bb = a._emscripten_bind_btConvexShape_project_6 = a.asm.O).apply(null, arguments);
            }),
            Cb = (a._emscripten_bind_btConvexShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Cb = a._emscripten_bind_btConvexShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.P).apply(null, arguments);
            }),
            Db = (a._emscripten_bind_btConvexShape_getAabb_3 = function () {
                return (Db = a._emscripten_bind_btConvexShape_getAabb_3 = a.asm.Q).apply(null, arguments);
            }),
            Eb = (a._emscripten_bind_btConvexShape_getAabbSlow_3 = function () {
                return (Eb = a._emscripten_bind_btConvexShape_getAabbSlow_3 = a.asm.R).apply(null, arguments);
            }),
            Fb = (a._emscripten_bind_btConvexShape_setLocalScaling_1 = function () {
                return (Fb = a._emscripten_bind_btConvexShape_setLocalScaling_1 = a.asm.S).apply(null, arguments);
            }),
            Gb = (a._emscripten_bind_btConvexShape_getLocalScaling_0 = function () {
                return (Gb = a._emscripten_bind_btConvexShape_getLocalScaling_0 = a.asm.T).apply(null, arguments);
            }),
            Hb = (a._emscripten_bind_btConvexShape_setMargin_1 = function () {
                return (Hb = a._emscripten_bind_btConvexShape_setMargin_1 = a.asm.U).apply(null, arguments);
            }),
            Ib = (a._emscripten_bind_btConvexShape_getMargin_0 = function () {
                return (Ib = a._emscripten_bind_btConvexShape_getMargin_0 = a.asm.V).apply(null, arguments);
            }),
            Jb = (a._emscripten_bind_btConvexShape_getNumPreferredPenetrationDirections_0 = function () {
                return (Jb = a._emscripten_bind_btConvexShape_getNumPreferredPenetrationDirections_0 = a.asm.W).apply(null, arguments);
            }),
            Kb = (a._emscripten_bind_btConvexShape_getPreferredPenetrationDirection_2 = function () {
                return (Kb = a._emscripten_bind_btConvexShape_getPreferredPenetrationDirection_2 = a.asm.X).apply(null, arguments);
            }),
            Lb = (a._emscripten_bind_btConvexShape_getAngularMotionDisc_0 = function () {
                return (Lb = a._emscripten_bind_btConvexShape_getAngularMotionDisc_0 = a.asm.Y).apply(null, arguments);
            }),
            Mb = (a._emscripten_bind_btConvexShape_getContactBreakingThreshold_1 = function () {
                return (Mb = a._emscripten_bind_btConvexShape_getContactBreakingThreshold_1 = a.asm.Z).apply(null, arguments);
            }),
            Nb = (a._emscripten_bind_btConvexShape_calculateTemporalAabb_6 = function () {
                return (Nb = a._emscripten_bind_btConvexShape_calculateTemporalAabb_6 = a.asm._).apply(null, arguments);
            }),
            Ob = (a._emscripten_bind_btConvexShape_isPolyhedral_0 = function () {
                return (Ob = a._emscripten_bind_btConvexShape_isPolyhedral_0 = a.asm.$).apply(null, arguments);
            }),
            Pb = (a._emscripten_bind_btConvexShape_isConvex2d_0 = function () {
                return (Pb = a._emscripten_bind_btConvexShape_isConvex2d_0 = a.asm.aa).apply(null, arguments);
            }),
            Qb = (a._emscripten_bind_btConvexShape_isConvex_0 = function () {
                return (Qb = a._emscripten_bind_btConvexShape_isConvex_0 = a.asm.ba).apply(null, arguments);
            }),
            Rb = (a._emscripten_bind_btConvexShape_isNonMoving_0 = function () {
                return (Rb = a._emscripten_bind_btConvexShape_isNonMoving_0 = a.asm.ca).apply(null, arguments);
            }),
            Sb = (a._emscripten_bind_btConvexShape_isConcave_0 = function () {
                return (Sb = a._emscripten_bind_btConvexShape_isConcave_0 = a.asm.da).apply(null, arguments);
            }),
            Tb = (a._emscripten_bind_btConvexShape_isCompound_0 = function () {
                return (Tb = a._emscripten_bind_btConvexShape_isCompound_0 = a.asm.ea).apply(null, arguments);
            }),
            Ub = (a._emscripten_bind_btConvexShape_isSoftBody_0 = function () {
                return (Ub = a._emscripten_bind_btConvexShape_isSoftBody_0 = a.asm.fa).apply(null, arguments);
            }),
            Vb = (a._emscripten_bind_btConvexShape_isInfinite_0 = function () {
                return (Vb = a._emscripten_bind_btConvexShape_isInfinite_0 = a.asm.ga).apply(null, arguments);
            }),
            Wb = (a._emscripten_bind_btConvexShape_calculateLocalInertia_2 = function () {
                return (Wb = a._emscripten_bind_btConvexShape_calculateLocalInertia_2 = a.asm.ha).apply(null, arguments);
            }),
            Xb = (a._emscripten_bind_btConvexShape_getName_0 = function () {
                return (Xb = a._emscripten_bind_btConvexShape_getName_0 = a.asm.ia).apply(null, arguments);
            }),
            Yb = (a._emscripten_bind_btConvexShape_getShapeType_0 = function () {
                return (Yb = a._emscripten_bind_btConvexShape_getShapeType_0 = a.asm.ja).apply(null, arguments);
            }),
            Zb = (a._emscripten_bind_btConvexShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (Zb = a._emscripten_bind_btConvexShape_getAnisotropicRollingFrictionDirection_0 = a.asm.ka).apply(null, arguments);
            }),
            $b = (a._emscripten_bind_btConvexShape_setUserPointer_1 = function () {
                return ($b = a._emscripten_bind_btConvexShape_setUserPointer_1 = a.asm.la).apply(null, arguments);
            }),
            ac = (a._emscripten_bind_btConvexShape_getUserPointer_0 = function () {
                return (ac = a._emscripten_bind_btConvexShape_getUserPointer_0 = a.asm.ma).apply(null, arguments);
            }),
            bc = (a._emscripten_bind_btConvexShape_setUserIndex_1 = function () {
                return (bc = a._emscripten_bind_btConvexShape_setUserIndex_1 = a.asm.na).apply(null, arguments);
            }),
            cc = (a._emscripten_bind_btConvexShape_getUserIndex_0 = function () {
                return (cc = a._emscripten_bind_btConvexShape_getUserIndex_0 = a.asm.oa).apply(null, arguments);
            }),
            dc = (a._emscripten_bind_btConvexShape_setUserIndex2_1 = function () {
                return (dc = a._emscripten_bind_btConvexShape_setUserIndex2_1 = a.asm.pa).apply(null, arguments);
            }),
            ec = (a._emscripten_bind_btConvexShape_getUserIndex2_0 = function () {
                return (ec = a._emscripten_bind_btConvexShape_getUserIndex2_0 = a.asm.qa).apply(null, arguments);
            }),
            fc = (a._emscripten_bind_btConvexShape___destroy___0 = function () {
                return (fc = a._emscripten_bind_btConvexShape___destroy___0 = a.asm.ra).apply(null, arguments);
            }),
            gc = (a._emscripten_bind_btTypedObject_btTypedObject_1 = function () {
                return (gc = a._emscripten_bind_btTypedObject_btTypedObject_1 = a.asm.sa).apply(null, arguments);
            }),
            hc = (a._emscripten_bind_btTypedObject_getObjectType_0 = function () {
                return (hc = a._emscripten_bind_btTypedObject_getObjectType_0 = a.asm.ta).apply(null, arguments);
            }),
            ic = (a._emscripten_bind_btTypedObject_get_m_objectType_0 = function () {
                return (ic = a._emscripten_bind_btTypedObject_get_m_objectType_0 = a.asm.ua).apply(null, arguments);
            }),
            jc = (a._emscripten_bind_btTypedObject_set_m_objectType_1 = function () {
                return (jc = a._emscripten_bind_btTypedObject_set_m_objectType_1 = a.asm.va).apply(null, arguments);
            }),
            kc = (a._emscripten_bind_btTypedObject___destroy___0 = function () {
                return (kc = a._emscripten_bind_btTypedObject___destroy___0 = a.asm.wa).apply(null, arguments);
            }),
            lc = (a._emscripten_bind_btConvexInternalShape_localGetSupportingVertex_1 = function () {
                return (lc = a._emscripten_bind_btConvexInternalShape_localGetSupportingVertex_1 = a.asm.xa).apply(null, arguments);
            }),
            mc = (a._emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0 = function () {
                return (mc = a._emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0 = a.asm.ya).apply(null, arguments);
            }),
            oc = (a._emscripten_bind_btConvexInternalShape_setImplicitShapeDimensions_1 = function () {
                return (oc = a._emscripten_bind_btConvexInternalShape_setImplicitShapeDimensions_1 = a.asm.za).apply(null, arguments);
            }),
            pc = (a._emscripten_bind_btConvexInternalShape_setSafeMargin_1 = function () {
                return (pc = a._emscripten_bind_btConvexInternalShape_setSafeMargin_1 = a.asm.Aa).apply(null, arguments);
            }),
            qc = (a._emscripten_bind_btConvexInternalShape_setSafeMargin_2 = function () {
                return (qc = a._emscripten_bind_btConvexInternalShape_setSafeMargin_2 = a.asm.Ba).apply(null, arguments);
            }),
            rc = (a._emscripten_bind_btConvexInternalShape_getAabb_3 = function () {
                return (rc = a._emscripten_bind_btConvexInternalShape_getAabb_3 = a.asm.Ca).apply(null, arguments);
            }),
            sc = (a._emscripten_bind_btConvexInternalShape_getAabbSlow_3 = function () {
                return (sc = a._emscripten_bind_btConvexInternalShape_getAabbSlow_3 = a.asm.Da).apply(null, arguments);
            }),
            tc = (a._emscripten_bind_btConvexInternalShape_setLocalScaling_1 = function () {
                return (tc = a._emscripten_bind_btConvexInternalShape_setLocalScaling_1 = a.asm.Ea).apply(null, arguments);
            }),
            uc = (a._emscripten_bind_btConvexInternalShape_setMargin_1 = function () {
                return (uc = a._emscripten_bind_btConvexInternalShape_setMargin_1 = a.asm.Fa).apply(null, arguments);
            }),
            vc = (a._emscripten_bind_btConvexInternalShape_getMargin_0 = function () {
                return (vc = a._emscripten_bind_btConvexInternalShape_getMargin_0 = a.asm.Ga).apply(null, arguments);
            }),
            wc = (a._emscripten_bind_btConvexInternalShape_getNumPreferredPenetrationDirections_0 = function () {
                return (wc = a._emscripten_bind_btConvexInternalShape_getNumPreferredPenetrationDirections_0 = a.asm.Ha).apply(null, arguments);
            }),
            xc = (a._emscripten_bind_btConvexInternalShape_getPreferredPenetrationDirection_2 = function () {
                return (xc = a._emscripten_bind_btConvexInternalShape_getPreferredPenetrationDirection_2 = a.asm.Ia).apply(null, arguments);
            }),
            yc = (a._emscripten_bind_btConvexInternalShape_getAngularMotionDisc_0 = function () {
                return (yc = a._emscripten_bind_btConvexInternalShape_getAngularMotionDisc_0 = a.asm.Ja).apply(null, arguments);
            }),
            zc = (a._emscripten_bind_btConvexInternalShape_getContactBreakingThreshold_1 = function () {
                return (zc = a._emscripten_bind_btConvexInternalShape_getContactBreakingThreshold_1 = a.asm.Ka).apply(null, arguments);
            }),
            Ac = (a._emscripten_bind_btConvexInternalShape_calculateTemporalAabb_6 = function () {
                return (Ac = a._emscripten_bind_btConvexInternalShape_calculateTemporalAabb_6 = a.asm.La).apply(null, arguments);
            }),
            Bc = (a._emscripten_bind_btConvexInternalShape_isPolyhedral_0 = function () {
                return (Bc = a._emscripten_bind_btConvexInternalShape_isPolyhedral_0 = a.asm.Ma).apply(null, arguments);
            }),
            Cc = (a._emscripten_bind_btConvexInternalShape_isConvex2d_0 = function () {
                return (Cc = a._emscripten_bind_btConvexInternalShape_isConvex2d_0 = a.asm.Na).apply(null, arguments);
            }),
            Dc = (a._emscripten_bind_btConvexInternalShape_isConvex_0 = function () {
                return (Dc = a._emscripten_bind_btConvexInternalShape_isConvex_0 = a.asm.Oa).apply(null, arguments);
            }),
            Ec = (a._emscripten_bind_btConvexInternalShape_isNonMoving_0 = function () {
                return (Ec = a._emscripten_bind_btConvexInternalShape_isNonMoving_0 = a.asm.Pa).apply(null, arguments);
            }),
            Fc = (a._emscripten_bind_btConvexInternalShape_isConcave_0 = function () {
                return (Fc = a._emscripten_bind_btConvexInternalShape_isConcave_0 = a.asm.Qa).apply(null, arguments);
            }),
            Gc = (a._emscripten_bind_btConvexInternalShape_isCompound_0 = function () {
                return (Gc = a._emscripten_bind_btConvexInternalShape_isCompound_0 = a.asm.Ra).apply(null, arguments);
            }),
            Hc = (a._emscripten_bind_btConvexInternalShape_isSoftBody_0 = function () {
                return (Hc = a._emscripten_bind_btConvexInternalShape_isSoftBody_0 = a.asm.Sa).apply(null, arguments);
            }),
            Ic = (a._emscripten_bind_btConvexInternalShape_isInfinite_0 = function () {
                return (Ic = a._emscripten_bind_btConvexInternalShape_isInfinite_0 = a.asm.Ta).apply(null, arguments);
            }),
            Jc = (a._emscripten_bind_btConvexInternalShape_calculateLocalInertia_2 = function () {
                return (Jc = a._emscripten_bind_btConvexInternalShape_calculateLocalInertia_2 = a.asm.Ua).apply(null, arguments);
            }),
            Kc = (a._emscripten_bind_btConvexInternalShape_getName_0 = function () {
                return (Kc = a._emscripten_bind_btConvexInternalShape_getName_0 = a.asm.Va).apply(null, arguments);
            }),
            Lc = (a._emscripten_bind_btConvexInternalShape_getShapeType_0 = function () {
                return (Lc = a._emscripten_bind_btConvexInternalShape_getShapeType_0 = a.asm.Wa).apply(null, arguments);
            }),
            Mc = (a._emscripten_bind_btConvexInternalShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (Mc = a._emscripten_bind_btConvexInternalShape_getAnisotropicRollingFrictionDirection_0 = a.asm.Xa).apply(null, arguments);
            }),
            Nc = (a._emscripten_bind_btConvexInternalShape_setUserPointer_1 = function () {
                return (Nc = a._emscripten_bind_btConvexInternalShape_setUserPointer_1 = a.asm.Ya).apply(null, arguments);
            }),
            Oc = (a._emscripten_bind_btConvexInternalShape_getUserPointer_0 = function () {
                return (Oc = a._emscripten_bind_btConvexInternalShape_getUserPointer_0 = a.asm.Za).apply(null, arguments);
            }),
            Pc = (a._emscripten_bind_btConvexInternalShape_setUserIndex_1 = function () {
                return (Pc = a._emscripten_bind_btConvexInternalShape_setUserIndex_1 = a.asm._a).apply(null, arguments);
            }),
            Qc = (a._emscripten_bind_btConvexInternalShape_getUserIndex_0 = function () {
                return (Qc = a._emscripten_bind_btConvexInternalShape_getUserIndex_0 = a.asm.$a).apply(null, arguments);
            }),
            Rc = (a._emscripten_bind_btConvexInternalShape_setUserIndex2_1 = function () {
                return (Rc = a._emscripten_bind_btConvexInternalShape_setUserIndex2_1 = a.asm.ab).apply(null, arguments);
            }),
            Sc = (a._emscripten_bind_btConvexInternalShape_getUserIndex2_0 = function () {
                return (Sc = a._emscripten_bind_btConvexInternalShape_getUserIndex2_0 = a.asm.bb).apply(null, arguments);
            }),
            Tc = (a._emscripten_bind_btConvexInternalShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Tc = a._emscripten_bind_btConvexInternalShape_localGetSupportingVertexWithoutMargin_1 = a.asm.cb).apply(null, arguments);
            }),
            Uc = (a._emscripten_bind_btConvexInternalShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (Uc = a._emscripten_bind_btConvexInternalShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.db).apply(null, arguments);
            }),
            Vc = (a._emscripten_bind_btConvexInternalShape_localGetSupportVertexNonVirtual_1 = function () {
                return (Vc = a._emscripten_bind_btConvexInternalShape_localGetSupportVertexNonVirtual_1 = a.asm.eb).apply(null, arguments);
            }),
            Wc = (a._emscripten_bind_btConvexInternalShape_getMarginNonVirtual_0 = function () {
                return (Wc = a._emscripten_bind_btConvexInternalShape_getMarginNonVirtual_0 = a.asm.fb).apply(null, arguments);
            }),
            Xc = (a._emscripten_bind_btConvexInternalShape_getAabbNonVirtual_3 = function () {
                return (Xc = a._emscripten_bind_btConvexInternalShape_getAabbNonVirtual_3 = a.asm.gb).apply(null, arguments);
            }),
            Yc = (a._emscripten_bind_btConvexInternalShape_project_6 = function () {
                return (Yc = a._emscripten_bind_btConvexInternalShape_project_6 = a.asm.hb).apply(null, arguments);
            }),
            Zc = (a._emscripten_bind_btConvexInternalShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Zc = a._emscripten_bind_btConvexInternalShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.ib).apply(null, arguments);
            }),
            $c = (a._emscripten_bind_btConvexInternalShape_getLocalScaling_0 = function () {
                return ($c = a._emscripten_bind_btConvexInternalShape_getLocalScaling_0 = a.asm.jb).apply(null, arguments);
            }),
            ad = (a._emscripten_bind_btConvexInternalShape___destroy___0 = function () {
                return (ad = a._emscripten_bind_btConvexInternalShape___destroy___0 = a.asm.kb).apply(null, arguments);
            }),
            bd = (a._emscripten_bind_btCollisionWorld_getDispatcher_0 = function () {
                return (bd = a._emscripten_bind_btCollisionWorld_getDispatcher_0 = a.asm.lb).apply(null, arguments);
            }),
            cd = (a._emscripten_bind_btCollisionWorld_rayTest_3 = function () {
                return (cd = a._emscripten_bind_btCollisionWorld_rayTest_3 = a.asm.mb).apply(null, arguments);
            }),
            dd = (a._emscripten_bind_btCollisionWorld_getPairCache_0 = function () {
                return (dd = a._emscripten_bind_btCollisionWorld_getPairCache_0 = a.asm.nb).apply(null, arguments);
            }),
            ed = (a._emscripten_bind_btCollisionWorld_getDispatchInfo_0 = function () {
                return (ed = a._emscripten_bind_btCollisionWorld_getDispatchInfo_0 = a.asm.ob).apply(null, arguments);
            }),
            fd = (a._emscripten_bind_btCollisionWorld_addCollisionObject_1 = function () {
                return (fd = a._emscripten_bind_btCollisionWorld_addCollisionObject_1 = a.asm.pb).apply(null, arguments);
            }),
            gd = (a._emscripten_bind_btCollisionWorld_addCollisionObject_2 = function () {
                return (gd = a._emscripten_bind_btCollisionWorld_addCollisionObject_2 = a.asm.qb).apply(null, arguments);
            }),
            hd = (a._emscripten_bind_btCollisionWorld_addCollisionObject_3 = function () {
                return (hd = a._emscripten_bind_btCollisionWorld_addCollisionObject_3 = a.asm.rb).apply(null, arguments);
            }),
            jd = (a._emscripten_bind_btCollisionWorld_removeCollisionObject_1 = function () {
                return (jd = a._emscripten_bind_btCollisionWorld_removeCollisionObject_1 = a.asm.sb).apply(null, arguments);
            }),
            kd = (a._emscripten_bind_btCollisionWorld_getBroadphase_0 = function () {
                return (kd = a._emscripten_bind_btCollisionWorld_getBroadphase_0 = a.asm.tb).apply(null, arguments);
            }),
            ld = (a._emscripten_bind_btCollisionWorld_convexSweepTest_5 = function () {
                return (ld = a._emscripten_bind_btCollisionWorld_convexSweepTest_5 = a.asm.ub).apply(null, arguments);
            }),
            md = (a._emscripten_bind_btCollisionWorld_contactPairTest_3 = function () {
                return (md = a._emscripten_bind_btCollisionWorld_contactPairTest_3 = a.asm.vb).apply(null, arguments);
            }),
            nd = (a._emscripten_bind_btCollisionWorld_contactTest_2 = function () {
                return (nd = a._emscripten_bind_btCollisionWorld_contactTest_2 = a.asm.wb).apply(null, arguments);
            }),
            od = (a._emscripten_bind_btCollisionWorld_updateSingleAabb_1 = function () {
                return (od = a._emscripten_bind_btCollisionWorld_updateSingleAabb_1 = a.asm.xb).apply(null, arguments);
            }),
            pd = (a._emscripten_bind_btCollisionWorld___destroy___0 = function () {
                return (pd = a._emscripten_bind_btCollisionWorld___destroy___0 = a.asm.yb).apply(null, arguments);
            }),
            qd = (a._emscripten_bind_btCollisionObject_btCollisionObject_0 = function () {
                return (qd = a._emscripten_bind_btCollisionObject_btCollisionObject_0 = a.asm.zb).apply(null, arguments);
            }),
            rd = (a._emscripten_bind_btCollisionObject_mergesSimulationIslands_0 = function () {
                return (rd = a._emscripten_bind_btCollisionObject_mergesSimulationIslands_0 = a.asm.Ab).apply(null, arguments);
            }),
            sd = (a._emscripten_bind_btCollisionObject_getAnisotropicFriction_0 = function () {
                return (sd = a._emscripten_bind_btCollisionObject_getAnisotropicFriction_0 = a.asm.Bb).apply(null, arguments);
            }),
            td = (a._emscripten_bind_btCollisionObject_setAnisotropicFriction_1 = function () {
                return (td = a._emscripten_bind_btCollisionObject_setAnisotropicFriction_1 = a.asm.Cb).apply(null, arguments);
            }),
            ud = (a._emscripten_bind_btCollisionObject_setAnisotropicFriction_2 = function () {
                return (ud = a._emscripten_bind_btCollisionObject_setAnisotropicFriction_2 = a.asm.Db).apply(null, arguments);
            }),
            vd = (a._emscripten_bind_btCollisionObject_hasAnisotropicFriction_0 = function () {
                return (vd = a._emscripten_bind_btCollisionObject_hasAnisotropicFriction_0 = a.asm.Eb).apply(null, arguments);
            }),
            wd = (a._emscripten_bind_btCollisionObject_hasAnisotropicFriction_1 = function () {
                return (wd = a._emscripten_bind_btCollisionObject_hasAnisotropicFriction_1 = a.asm.Fb).apply(null, arguments);
            }),
            xd = (a._emscripten_bind_btCollisionObject_setContactProcessingThreshold_1 = function () {
                return (xd = a._emscripten_bind_btCollisionObject_setContactProcessingThreshold_1 = a.asm.Gb).apply(null, arguments);
            }),
            yd = (a._emscripten_bind_btCollisionObject_getContactProcessingThreshold_0 = function () {
                return (yd = a._emscripten_bind_btCollisionObject_getContactProcessingThreshold_0 = a.asm.Hb).apply(null, arguments);
            }),
            zd = (a._emscripten_bind_btCollisionObject_isStaticObject_0 = function () {
                return (zd = a._emscripten_bind_btCollisionObject_isStaticObject_0 = a.asm.Ib).apply(null, arguments);
            }),
            Ad = (a._emscripten_bind_btCollisionObject_isKinematicObject_0 = function () {
                return (Ad = a._emscripten_bind_btCollisionObject_isKinematicObject_0 = a.asm.Jb).apply(null, arguments);
            }),
            Bd = (a._emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 = function () {
                return (Bd = a._emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 = a.asm.Kb).apply(null, arguments);
            }),
            Cd = (a._emscripten_bind_btCollisionObject_hasContactResponse_0 = function () {
                return (Cd = a._emscripten_bind_btCollisionObject_hasContactResponse_0 = a.asm.Lb).apply(null, arguments);
            }),
            Dd = (a._emscripten_bind_btCollisionObject_setCollisionShape_1 = function () {
                return (Dd = a._emscripten_bind_btCollisionObject_setCollisionShape_1 = a.asm.Mb).apply(null, arguments);
            }),
            Ed = (a._emscripten_bind_btCollisionObject_getCollisionShape_0 = function () {
                return (Ed = a._emscripten_bind_btCollisionObject_getCollisionShape_0 = a.asm.Nb).apply(null, arguments);
            }),
            Fd = (a._emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2 = function () {
                return (Fd = a._emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2 = a.asm.Ob).apply(null, arguments);
            }),
            Gd = (a._emscripten_bind_btCollisionObject_getNumObjectsWithoutCollision_0 = function () {
                return (Gd = a._emscripten_bind_btCollisionObject_getNumObjectsWithoutCollision_0 = a.asm.Pb).apply(null, arguments);
            }),
            Hd = (a._emscripten_bind_btCollisionObject_getObjectWithoutCollision_1 = function () {
                return (Hd = a._emscripten_bind_btCollisionObject_getObjectWithoutCollision_1 = a.asm.Qb).apply(null, arguments);
            }),
            Id = (a._emscripten_bind_btCollisionObject_checkCollideWithOverride_1 = function () {
                return (Id = a._emscripten_bind_btCollisionObject_checkCollideWithOverride_1 = a.asm.Rb).apply(null, arguments);
            }),
            Jd = (a._emscripten_bind_btCollisionObject_getActivationState_0 = function () {
                return (Jd = a._emscripten_bind_btCollisionObject_getActivationState_0 = a.asm.Sb).apply(null, arguments);
            }),
            Kd = (a._emscripten_bind_btCollisionObject_setActivationState_1 = function () {
                return (Kd = a._emscripten_bind_btCollisionObject_setActivationState_1 = a.asm.Tb).apply(null, arguments);
            }),
            Ld = (a._emscripten_bind_btCollisionObject_setDeactivationTime_1 = function () {
                return (Ld = a._emscripten_bind_btCollisionObject_setDeactivationTime_1 = a.asm.Ub).apply(null, arguments);
            }),
            Md = (a._emscripten_bind_btCollisionObject_getDeactivationTime_0 = function () {
                return (Md = a._emscripten_bind_btCollisionObject_getDeactivationTime_0 = a.asm.Vb).apply(null, arguments);
            }),
            Nd = (a._emscripten_bind_btCollisionObject_forceActivationState_1 = function () {
                return (Nd = a._emscripten_bind_btCollisionObject_forceActivationState_1 = a.asm.Wb).apply(null, arguments);
            }),
            Od = (a._emscripten_bind_btCollisionObject_activate_0 = function () {
                return (Od = a._emscripten_bind_btCollisionObject_activate_0 = a.asm.Xb).apply(null, arguments);
            }),
            Pd = (a._emscripten_bind_btCollisionObject_activate_1 = function () {
                return (Pd = a._emscripten_bind_btCollisionObject_activate_1 = a.asm.Yb).apply(null, arguments);
            }),
            Qd = (a._emscripten_bind_btCollisionObject_isActive_0 = function () {
                return (Qd = a._emscripten_bind_btCollisionObject_isActive_0 = a.asm.Zb).apply(null, arguments);
            }),
            Rd = (a._emscripten_bind_btCollisionObject_setRestitution_1 = function () {
                return (Rd = a._emscripten_bind_btCollisionObject_setRestitution_1 = a.asm._b).apply(null, arguments);
            }),
            Sd = (a._emscripten_bind_btCollisionObject_getRestitution_0 = function () {
                return (Sd = a._emscripten_bind_btCollisionObject_getRestitution_0 = a.asm.$b).apply(null, arguments);
            }),
            Td = (a._emscripten_bind_btCollisionObject_setFriction_1 = function () {
                return (Td = a._emscripten_bind_btCollisionObject_setFriction_1 = a.asm.ac).apply(null, arguments);
            }),
            Ud = (a._emscripten_bind_btCollisionObject_getFriction_0 = function () {
                return (Ud = a._emscripten_bind_btCollisionObject_getFriction_0 = a.asm.bc).apply(null, arguments);
            }),
            Vd = (a._emscripten_bind_btCollisionObject_setRollingFriction_1 = function () {
                return (Vd = a._emscripten_bind_btCollisionObject_setRollingFriction_1 = a.asm.cc).apply(null, arguments);
            }),
            Wd = (a._emscripten_bind_btCollisionObject_getRollingFriction_0 = function () {
                return (Wd = a._emscripten_bind_btCollisionObject_getRollingFriction_0 = a.asm.dc).apply(null, arguments);
            }),
            Xd = (a._emscripten_bind_btCollisionObject_setSpinningFriction_1 = function () {
                return (Xd = a._emscripten_bind_btCollisionObject_setSpinningFriction_1 = a.asm.ec).apply(null, arguments);
            }),
            Yd = (a._emscripten_bind_btCollisionObject_getSpinningFriction_0 = function () {
                return (Yd = a._emscripten_bind_btCollisionObject_getSpinningFriction_0 = a.asm.fc).apply(null, arguments);
            }),
            Zd = (a._emscripten_bind_btCollisionObject_setContactStiffnessAndDamping_2 = function () {
                return (Zd = a._emscripten_bind_btCollisionObject_setContactStiffnessAndDamping_2 = a.asm.gc).apply(null, arguments);
            }),
            $d = (a._emscripten_bind_btCollisionObject_getContactStiffness_0 = function () {
                return ($d = a._emscripten_bind_btCollisionObject_getContactStiffness_0 = a.asm.hc).apply(null, arguments);
            }),
            ae = (a._emscripten_bind_btCollisionObject_getContactDamping_0 = function () {
                return (ae = a._emscripten_bind_btCollisionObject_getContactDamping_0 = a.asm.ic).apply(null, arguments);
            }),
            be = (a._emscripten_bind_btCollisionObject_getWorldTransform_0 = function () {
                return (be = a._emscripten_bind_btCollisionObject_getWorldTransform_0 = a.asm.jc).apply(null, arguments);
            }),
            ce = (a._emscripten_bind_btCollisionObject_setWorldTransform_1 = function () {
                return (ce = a._emscripten_bind_btCollisionObject_setWorldTransform_1 = a.asm.kc).apply(null, arguments);
            }),
            de = (a._emscripten_bind_btCollisionObject_getBroadphaseHandle_0 = function () {
                return (de = a._emscripten_bind_btCollisionObject_getBroadphaseHandle_0 = a.asm.lc).apply(null, arguments);
            }),
            ee = (a._emscripten_bind_btCollisionObject_setBroadphaseHandle_1 = function () {
                return (ee = a._emscripten_bind_btCollisionObject_setBroadphaseHandle_1 = a.asm.mc).apply(null, arguments);
            }),
            fe = (a._emscripten_bind_btCollisionObject_getInterpolationWorldTransform_0 = function () {
                return (fe = a._emscripten_bind_btCollisionObject_getInterpolationWorldTransform_0 = a.asm.nc).apply(null, arguments);
            }),
            ge = (a._emscripten_bind_btCollisionObject_setInterpolationWorldTransform_1 = function () {
                return (ge = a._emscripten_bind_btCollisionObject_setInterpolationWorldTransform_1 = a.asm.oc).apply(null, arguments);
            }),
            he = (a._emscripten_bind_btCollisionObject_setInterpolationLinearVelocity_1 = function () {
                return (he = a._emscripten_bind_btCollisionObject_setInterpolationLinearVelocity_1 = a.asm.pc).apply(null, arguments);
            }),
            ie = (a._emscripten_bind_btCollisionObject_setInterpolationAngularVelocity_1 = function () {
                return (ie = a._emscripten_bind_btCollisionObject_setInterpolationAngularVelocity_1 = a.asm.qc).apply(null, arguments);
            }),
            je = (a._emscripten_bind_btCollisionObject_getInterpolationLinearVelocity_0 = function () {
                return (je = a._emscripten_bind_btCollisionObject_getInterpolationLinearVelocity_0 = a.asm.rc).apply(null, arguments);
            }),
            ke = (a._emscripten_bind_btCollisionObject_getInterpolationAngularVelocity_0 = function () {
                return (ke = a._emscripten_bind_btCollisionObject_getInterpolationAngularVelocity_0 = a.asm.sc).apply(null, arguments);
            }),
            le = (a._emscripten_bind_btCollisionObject_getIslandTag_0 = function () {
                return (le = a._emscripten_bind_btCollisionObject_getIslandTag_0 = a.asm.tc).apply(null, arguments);
            }),
            me = (a._emscripten_bind_btCollisionObject_setIslandTag_1 = function () {
                return (me = a._emscripten_bind_btCollisionObject_setIslandTag_1 = a.asm.uc).apply(null, arguments);
            }),
            ne = (a._emscripten_bind_btCollisionObject_getCompanionId_0 = function () {
                return (ne = a._emscripten_bind_btCollisionObject_getCompanionId_0 = a.asm.vc).apply(null, arguments);
            }),
            oe = (a._emscripten_bind_btCollisionObject_setCompanionId_1 = function () {
                return (oe = a._emscripten_bind_btCollisionObject_setCompanionId_1 = a.asm.wc).apply(null, arguments);
            }),
            pe = (a._emscripten_bind_btCollisionObject_getWorldArrayIndex_0 = function () {
                return (pe = a._emscripten_bind_btCollisionObject_getWorldArrayIndex_0 = a.asm.xc).apply(null, arguments);
            }),
            qe = (a._emscripten_bind_btCollisionObject_getHitFraction_0 = function () {
                return (qe = a._emscripten_bind_btCollisionObject_getHitFraction_0 = a.asm.yc).apply(null, arguments);
            }),
            re = (a._emscripten_bind_btCollisionObject_setHitFraction_1 = function () {
                return (re = a._emscripten_bind_btCollisionObject_setHitFraction_1 = a.asm.zc).apply(null, arguments);
            }),
            se = (a._emscripten_bind_btCollisionObject_getCollisionFlags_0 = function () {
                return (se = a._emscripten_bind_btCollisionObject_getCollisionFlags_0 = a.asm.Ac).apply(null, arguments);
            }),
            te = (a._emscripten_bind_btCollisionObject_setCollisionFlags_1 = function () {
                return (te = a._emscripten_bind_btCollisionObject_setCollisionFlags_1 = a.asm.Bc).apply(null, arguments);
            }),
            ue = (a._emscripten_bind_btCollisionObject_getCcdSweptSphereRadius_0 = function () {
                return (ue = a._emscripten_bind_btCollisionObject_getCcdSweptSphereRadius_0 = a.asm.Cc).apply(null, arguments);
            }),
            ve = (a._emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 = function () {
                return (ve = a._emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 = a.asm.Dc).apply(null, arguments);
            }),
            we = (a._emscripten_bind_btCollisionObject_getCcdMotionThreshold_0 = function () {
                return (we = a._emscripten_bind_btCollisionObject_getCcdMotionThreshold_0 = a.asm.Ec).apply(null, arguments);
            }),
            xe = (a._emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 = function () {
                return (xe = a._emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 = a.asm.Fc).apply(null, arguments);
            }),
            ye = (a._emscripten_bind_btCollisionObject_getUserPointer_0 = function () {
                return (ye = a._emscripten_bind_btCollisionObject_getUserPointer_0 = a.asm.Gc).apply(null, arguments);
            }),
            ze = (a._emscripten_bind_btCollisionObject_getUserIndex_0 = function () {
                return (ze = a._emscripten_bind_btCollisionObject_getUserIndex_0 = a.asm.Hc).apply(null, arguments);
            }),
            Ae = (a._emscripten_bind_btCollisionObject_getUserIndex2_0 = function () {
                return (Ae = a._emscripten_bind_btCollisionObject_getUserIndex2_0 = a.asm.Ic).apply(null, arguments);
            }),
            Be = (a._emscripten_bind_btCollisionObject_getUserIndex3_0 = function () {
                return (Be = a._emscripten_bind_btCollisionObject_getUserIndex3_0 = a.asm.Jc).apply(null, arguments);
            }),
            Ce = (a._emscripten_bind_btCollisionObject_setUserPointer_1 = function () {
                return (Ce = a._emscripten_bind_btCollisionObject_setUserPointer_1 = a.asm.Kc).apply(null, arguments);
            }),
            De = (a._emscripten_bind_btCollisionObject_setUserIndex_1 = function () {
                return (De = a._emscripten_bind_btCollisionObject_setUserIndex_1 = a.asm.Lc).apply(null, arguments);
            }),
            Ee = (a._emscripten_bind_btCollisionObject_setUserIndex2_1 = function () {
                return (Ee = a._emscripten_bind_btCollisionObject_setUserIndex2_1 = a.asm.Mc).apply(null, arguments);
            }),
            Fe = (a._emscripten_bind_btCollisionObject_setUserIndex3_1 = function () {
                return (Fe = a._emscripten_bind_btCollisionObject_setUserIndex3_1 = a.asm.Nc).apply(null, arguments);
            }),
            Ge = (a._emscripten_bind_btCollisionObject_getUpdateRevisionInternal_0 = function () {
                return (Ge = a._emscripten_bind_btCollisionObject_getUpdateRevisionInternal_0 = a.asm.Oc).apply(null, arguments);
            }),
            He = (a._emscripten_bind_btCollisionObject_checkCollideWith_1 = function () {
                return (He = a._emscripten_bind_btCollisionObject_checkCollideWith_1 = a.asm.Pc).apply(null, arguments);
            }),
            Ie = (a._emscripten_bind_btCollisionObject___destroy___0 = function () {
                return (Ie = a._emscripten_bind_btCollisionObject___destroy___0 = a.asm.Qc).apply(null, arguments);
            }),
            Je = (a._emscripten_bind_btPolyhedralConvexShape_initializePolyhedralFeatures_0 = function () {
                return (Je = a._emscripten_bind_btPolyhedralConvexShape_initializePolyhedralFeatures_0 = a.asm.Rc).apply(null, arguments);
            }),
            Ke = (a._emscripten_bind_btPolyhedralConvexShape_initializePolyhedralFeatures_1 = function () {
                return (Ke = a._emscripten_bind_btPolyhedralConvexShape_initializePolyhedralFeatures_1 = a.asm.Sc).apply(null, arguments);
            }),
            Le = (a._emscripten_bind_btPolyhedralConvexShape_setPolyhedralFeatures_1 = function () {
                return (Le = a._emscripten_bind_btPolyhedralConvexShape_setPolyhedralFeatures_1 = a.asm.Tc).apply(null, arguments);
            }),
            Me = (a._emscripten_bind_btPolyhedralConvexShape_getConvexPolyhedron_0 = function () {
                return (Me = a._emscripten_bind_btPolyhedralConvexShape_getConvexPolyhedron_0 = a.asm.Uc).apply(null, arguments);
            }),
            Ne = (a._emscripten_bind_btPolyhedralConvexShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Ne = a._emscripten_bind_btPolyhedralConvexShape_localGetSupportingVertexWithoutMargin_1 = a.asm.Vc).apply(null, arguments);
            }),
            Oe = (a._emscripten_bind_btPolyhedralConvexShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Oe = a._emscripten_bind_btPolyhedralConvexShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Wc).apply(null, arguments);
            }),
            Pe = (a._emscripten_bind_btPolyhedralConvexShape_calculateLocalInertia_2 = function () {
                return (Pe = a._emscripten_bind_btPolyhedralConvexShape_calculateLocalInertia_2 = a.asm.Xc).apply(null, arguments);
            }),
            Qe = (a._emscripten_bind_btPolyhedralConvexShape_getNumVertices_0 = function () {
                return (Qe = a._emscripten_bind_btPolyhedralConvexShape_getNumVertices_0 = a.asm.Yc).apply(null, arguments);
            }),
            Re = (a._emscripten_bind_btPolyhedralConvexShape_getNumEdges_0 = function () {
                return (Re = a._emscripten_bind_btPolyhedralConvexShape_getNumEdges_0 = a.asm.Zc).apply(null, arguments);
            }),
            Se = (a._emscripten_bind_btPolyhedralConvexShape_getEdge_3 = function () {
                return (Se = a._emscripten_bind_btPolyhedralConvexShape_getEdge_3 = a.asm._c).apply(null, arguments);
            }),
            Te = (a._emscripten_bind_btPolyhedralConvexShape_getVertex_2 = function () {
                return (Te = a._emscripten_bind_btPolyhedralConvexShape_getVertex_2 = a.asm.$c).apply(null, arguments);
            }),
            Ue = (a._emscripten_bind_btPolyhedralConvexShape_getNumPlanes_0 = function () {
                return (Ue = a._emscripten_bind_btPolyhedralConvexShape_getNumPlanes_0 = a.asm.ad).apply(null, arguments);
            }),
            Ve = (a._emscripten_bind_btPolyhedralConvexShape_getPlane_3 = function () {
                return (Ve = a._emscripten_bind_btPolyhedralConvexShape_getPlane_3 = a.asm.bd).apply(null, arguments);
            }),
            We = (a._emscripten_bind_btPolyhedralConvexShape_isInside_2 = function () {
                return (We = a._emscripten_bind_btPolyhedralConvexShape_isInside_2 = a.asm.cd).apply(null, arguments);
            }),
            Xe = (a._emscripten_bind_btPolyhedralConvexShape_getAngularMotionDisc_0 = function () {
                return (Xe = a._emscripten_bind_btPolyhedralConvexShape_getAngularMotionDisc_0 = a.asm.dd).apply(null, arguments);
            }),
            Ye = (a._emscripten_bind_btPolyhedralConvexShape_getContactBreakingThreshold_1 = function () {
                return (Ye = a._emscripten_bind_btPolyhedralConvexShape_getContactBreakingThreshold_1 = a.asm.ed).apply(null, arguments);
            }),
            Ze = (a._emscripten_bind_btPolyhedralConvexShape_calculateTemporalAabb_6 = function () {
                return (Ze = a._emscripten_bind_btPolyhedralConvexShape_calculateTemporalAabb_6 = a.asm.fd).apply(null, arguments);
            }),
            $e = (a._emscripten_bind_btPolyhedralConvexShape_isPolyhedral_0 = function () {
                return ($e = a._emscripten_bind_btPolyhedralConvexShape_isPolyhedral_0 = a.asm.gd).apply(null, arguments);
            }),
            af = (a._emscripten_bind_btPolyhedralConvexShape_isConvex2d_0 = function () {
                return (af = a._emscripten_bind_btPolyhedralConvexShape_isConvex2d_0 = a.asm.hd).apply(null, arguments);
            }),
            bf = (a._emscripten_bind_btPolyhedralConvexShape_isConvex_0 = function () {
                return (bf = a._emscripten_bind_btPolyhedralConvexShape_isConvex_0 = a.asm.id).apply(null, arguments);
            }),
            cf = (a._emscripten_bind_btPolyhedralConvexShape_isNonMoving_0 = function () {
                return (cf = a._emscripten_bind_btPolyhedralConvexShape_isNonMoving_0 = a.asm.jd).apply(null, arguments);
            }),
            df = (a._emscripten_bind_btPolyhedralConvexShape_isConcave_0 = function () {
                return (df = a._emscripten_bind_btPolyhedralConvexShape_isConcave_0 = a.asm.kd).apply(null, arguments);
            }),
            ef = (a._emscripten_bind_btPolyhedralConvexShape_isCompound_0 = function () {
                return (ef = a._emscripten_bind_btPolyhedralConvexShape_isCompound_0 = a.asm.ld).apply(null, arguments);
            }),
            ff = (a._emscripten_bind_btPolyhedralConvexShape_isSoftBody_0 = function () {
                return (ff = a._emscripten_bind_btPolyhedralConvexShape_isSoftBody_0 = a.asm.md).apply(null, arguments);
            }),
            gf = (a._emscripten_bind_btPolyhedralConvexShape_isInfinite_0 = function () {
                return (gf = a._emscripten_bind_btPolyhedralConvexShape_isInfinite_0 = a.asm.nd).apply(null, arguments);
            }),
            hf = (a._emscripten_bind_btPolyhedralConvexShape_getName_0 = function () {
                return (hf = a._emscripten_bind_btPolyhedralConvexShape_getName_0 = a.asm.od).apply(null, arguments);
            }),
            jf = (a._emscripten_bind_btPolyhedralConvexShape_getShapeType_0 = function () {
                return (jf = a._emscripten_bind_btPolyhedralConvexShape_getShapeType_0 = a.asm.pd).apply(null, arguments);
            }),
            kf = (a._emscripten_bind_btPolyhedralConvexShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (kf = a._emscripten_bind_btPolyhedralConvexShape_getAnisotropicRollingFrictionDirection_0 = a.asm.qd).apply(null, arguments);
            }),
            lf = (a._emscripten_bind_btPolyhedralConvexShape_setUserPointer_1 = function () {
                return (lf = a._emscripten_bind_btPolyhedralConvexShape_setUserPointer_1 = a.asm.rd).apply(null, arguments);
            }),
            mf = (a._emscripten_bind_btPolyhedralConvexShape_getUserPointer_0 = function () {
                return (mf = a._emscripten_bind_btPolyhedralConvexShape_getUserPointer_0 = a.asm.sd).apply(null, arguments);
            }),
            nf = (a._emscripten_bind_btPolyhedralConvexShape_setUserIndex_1 = function () {
                return (nf = a._emscripten_bind_btPolyhedralConvexShape_setUserIndex_1 = a.asm.td).apply(null, arguments);
            }),
            of = (a._emscripten_bind_btPolyhedralConvexShape_getUserIndex_0 = function () {
                return (of = a._emscripten_bind_btPolyhedralConvexShape_getUserIndex_0 = a.asm.ud).apply(null, arguments);
            }),
            pf = (a._emscripten_bind_btPolyhedralConvexShape_setUserIndex2_1 = function () {
                return (pf = a._emscripten_bind_btPolyhedralConvexShape_setUserIndex2_1 = a.asm.vd).apply(null, arguments);
            }),
            qf = (a._emscripten_bind_btPolyhedralConvexShape_getUserIndex2_0 = function () {
                return (qf = a._emscripten_bind_btPolyhedralConvexShape_getUserIndex2_0 = a.asm.wd).apply(null, arguments);
            }),
            rf = (a._emscripten_bind_btPolyhedralConvexShape_localGetSupportingVertex_1 = function () {
                return (rf = a._emscripten_bind_btPolyhedralConvexShape_localGetSupportingVertex_1 = a.asm.xd).apply(null, arguments);
            }),
            sf = (a._emscripten_bind_btPolyhedralConvexShape_getImplicitShapeDimensions_0 = function () {
                return (sf = a._emscripten_bind_btPolyhedralConvexShape_getImplicitShapeDimensions_0 = a.asm.yd).apply(null, arguments);
            }),
            tf = (a._emscripten_bind_btPolyhedralConvexShape_setImplicitShapeDimensions_1 = function () {
                return (tf = a._emscripten_bind_btPolyhedralConvexShape_setImplicitShapeDimensions_1 = a.asm.zd).apply(null, arguments);
            }),
            uf = (a._emscripten_bind_btPolyhedralConvexShape_setSafeMargin_1 = function () {
                return (uf = a._emscripten_bind_btPolyhedralConvexShape_setSafeMargin_1 = a.asm.Ad).apply(null, arguments);
            }),
            vf = (a._emscripten_bind_btPolyhedralConvexShape_setSafeMargin_2 = function () {
                return (vf = a._emscripten_bind_btPolyhedralConvexShape_setSafeMargin_2 = a.asm.Bd).apply(null, arguments);
            }),
            wf = (a._emscripten_bind_btPolyhedralConvexShape_getAabbSlow_3 = function () {
                return (wf = a._emscripten_bind_btPolyhedralConvexShape_getAabbSlow_3 = a.asm.Cd).apply(null, arguments);
            }),
            xf = (a._emscripten_bind_btPolyhedralConvexShape_setMargin_1 = function () {
                return (xf = a._emscripten_bind_btPolyhedralConvexShape_setMargin_1 = a.asm.Dd).apply(null, arguments);
            }),
            yf = (a._emscripten_bind_btPolyhedralConvexShape_getMargin_0 = function () {
                return (yf = a._emscripten_bind_btPolyhedralConvexShape_getMargin_0 = a.asm.Ed).apply(null, arguments);
            }),
            zf = (a._emscripten_bind_btPolyhedralConvexShape_getNumPreferredPenetrationDirections_0 = function () {
                return (zf = a._emscripten_bind_btPolyhedralConvexShape_getNumPreferredPenetrationDirections_0 = a.asm.Fd).apply(null, arguments);
            }),
            Af = (a._emscripten_bind_btPolyhedralConvexShape_getPreferredPenetrationDirection_2 = function () {
                return (Af = a._emscripten_bind_btPolyhedralConvexShape_getPreferredPenetrationDirection_2 = a.asm.Gd).apply(null, arguments);
            }),
            Bf = (a._emscripten_bind_btPolyhedralConvexShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (Bf = a._emscripten_bind_btPolyhedralConvexShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Hd).apply(null, arguments);
            }),
            Cf = (a._emscripten_bind_btPolyhedralConvexShape_localGetSupportVertexNonVirtual_1 = function () {
                return (Cf = a._emscripten_bind_btPolyhedralConvexShape_localGetSupportVertexNonVirtual_1 = a.asm.Id).apply(null, arguments);
            }),
            Df = (a._emscripten_bind_btPolyhedralConvexShape_getMarginNonVirtual_0 = function () {
                return (Df = a._emscripten_bind_btPolyhedralConvexShape_getMarginNonVirtual_0 = a.asm.Jd).apply(null, arguments);
            }),
            Ef = (a._emscripten_bind_btPolyhedralConvexShape_getAabbNonVirtual_3 = function () {
                return (Ef = a._emscripten_bind_btPolyhedralConvexShape_getAabbNonVirtual_3 = a.asm.Kd).apply(null, arguments);
            }),
            Ff = (a._emscripten_bind_btPolyhedralConvexShape_project_6 = function () {
                return (Ff = a._emscripten_bind_btPolyhedralConvexShape_project_6 = a.asm.Ld).apply(null, arguments);
            }),
            Gf = (a._emscripten_bind_btPolyhedralConvexShape_getLocalScaling_0 = function () {
                return (Gf = a._emscripten_bind_btPolyhedralConvexShape_getLocalScaling_0 = a.asm.Md).apply(null, arguments);
            }),
            Hf = (a._emscripten_bind_btPolyhedralConvexShape___destroy___0 = function () {
                return (Hf = a._emscripten_bind_btPolyhedralConvexShape___destroy___0 = a.asm.Nd).apply(null, arguments);
            }),
            If = (a._emscripten_bind_btStridingMeshInterface_InternalProcessAllTriangles_3 = function () {
                return (If = a._emscripten_bind_btStridingMeshInterface_InternalProcessAllTriangles_3 = a.asm.Od).apply(null, arguments);
            }),
            Jf = (a._emscripten_bind_btStridingMeshInterface_setScaling_1 = function () {
                return (Jf = a._emscripten_bind_btStridingMeshInterface_setScaling_1 = a.asm.Pd).apply(null, arguments);
            }),
            Kf = (a._emscripten_bind_btStridingMeshInterface___destroy___0 = function () {
                return (Kf = a._emscripten_bind_btStridingMeshInterface___destroy___0 = a.asm.Qd).apply(null, arguments);
            }),
            Lf = (a._emscripten_bind_btConcaveShape_getMargin_0 = function () {
                return (Lf = a._emscripten_bind_btConcaveShape_getMargin_0 = a.asm.Rd).apply(null, arguments);
            }),
            Mf = (a._emscripten_bind_btConcaveShape_setMargin_1 = function () {
                return (Mf = a._emscripten_bind_btConcaveShape_setMargin_1 = a.asm.Sd).apply(null, arguments);
            }),
            Nf = (a._emscripten_bind_btConcaveShape_getAngularMotionDisc_0 = function () {
                return (Nf = a._emscripten_bind_btConcaveShape_getAngularMotionDisc_0 = a.asm.Td).apply(null, arguments);
            }),
            Of = (a._emscripten_bind_btConcaveShape_getContactBreakingThreshold_1 = function () {
                return (Of = a._emscripten_bind_btConcaveShape_getContactBreakingThreshold_1 = a.asm.Ud).apply(null, arguments);
            }),
            Pf = (a._emscripten_bind_btConcaveShape_calculateTemporalAabb_6 = function () {
                return (Pf = a._emscripten_bind_btConcaveShape_calculateTemporalAabb_6 = a.asm.Vd).apply(null, arguments);
            }),
            Qf = (a._emscripten_bind_btConcaveShape_isPolyhedral_0 = function () {
                return (Qf = a._emscripten_bind_btConcaveShape_isPolyhedral_0 = a.asm.Wd).apply(null, arguments);
            }),
            Rf = (a._emscripten_bind_btConcaveShape_isConvex2d_0 = function () {
                return (Rf = a._emscripten_bind_btConcaveShape_isConvex2d_0 = a.asm.Xd).apply(null, arguments);
            }),
            Sf = (a._emscripten_bind_btConcaveShape_isConvex_0 = function () {
                return (Sf = a._emscripten_bind_btConcaveShape_isConvex_0 = a.asm.Yd).apply(null, arguments);
            }),
            Tf = (a._emscripten_bind_btConcaveShape_isNonMoving_0 = function () {
                return (Tf = a._emscripten_bind_btConcaveShape_isNonMoving_0 = a.asm.Zd).apply(null, arguments);
            }),
            Uf = (a._emscripten_bind_btConcaveShape_isConcave_0 = function () {
                return (Uf = a._emscripten_bind_btConcaveShape_isConcave_0 = a.asm._d).apply(null, arguments);
            }),
            Vf = (a._emscripten_bind_btConcaveShape_isCompound_0 = function () {
                return (Vf = a._emscripten_bind_btConcaveShape_isCompound_0 = a.asm.$d).apply(null, arguments);
            }),
            Wf = (a._emscripten_bind_btConcaveShape_isSoftBody_0 = function () {
                return (Wf = a._emscripten_bind_btConcaveShape_isSoftBody_0 = a.asm.ae).apply(null, arguments);
            }),
            Xf = (a._emscripten_bind_btConcaveShape_isInfinite_0 = function () {
                return (Xf = a._emscripten_bind_btConcaveShape_isInfinite_0 = a.asm.be).apply(null, arguments);
            }),
            Yf = (a._emscripten_bind_btConcaveShape_getShapeType_0 = function () {
                return (Yf = a._emscripten_bind_btConcaveShape_getShapeType_0 = a.asm.ce).apply(null, arguments);
            }),
            Zf = (a._emscripten_bind_btConcaveShape_setUserPointer_1 = function () {
                return (Zf = a._emscripten_bind_btConcaveShape_setUserPointer_1 = a.asm.de).apply(null, arguments);
            }),
            $f = (a._emscripten_bind_btConcaveShape_getUserPointer_0 = function () {
                return ($f = a._emscripten_bind_btConcaveShape_getUserPointer_0 = a.asm.ee).apply(null, arguments);
            }),
            ag = (a._emscripten_bind_btConcaveShape_setUserIndex_1 = function () {
                return (ag = a._emscripten_bind_btConcaveShape_setUserIndex_1 = a.asm.fe).apply(null, arguments);
            }),
            bg = (a._emscripten_bind_btConcaveShape_getUserIndex_0 = function () {
                return (bg = a._emscripten_bind_btConcaveShape_getUserIndex_0 = a.asm.ge).apply(null, arguments);
            }),
            cg = (a._emscripten_bind_btConcaveShape_setUserIndex2_1 = function () {
                return (cg = a._emscripten_bind_btConcaveShape_setUserIndex2_1 = a.asm.he).apply(null, arguments);
            }),
            dg = (a._emscripten_bind_btConcaveShape_getUserIndex2_0 = function () {
                return (dg = a._emscripten_bind_btConcaveShape_getUserIndex2_0 = a.asm.ie).apply(null, arguments);
            }),
            eg = (a._emscripten_bind_btConcaveShape___destroy___0 = function () {
                return (eg = a._emscripten_bind_btConcaveShape___destroy___0 = a.asm.je).apply(null, arguments);
            }),
            fg = (a._emscripten_bind_btTypedConstraint_getFixedBody_0 = function () {
                return (fg = a._emscripten_bind_btTypedConstraint_getFixedBody_0 = a.asm.ke).apply(null, arguments);
            }),
            gg = (a._emscripten_bind_btTypedConstraint_getOverrideNumSolverIterations_0 = function () {
                return (gg = a._emscripten_bind_btTypedConstraint_getOverrideNumSolverIterations_0 = a.asm.le).apply(null, arguments);
            }),
            hg = (a._emscripten_bind_btTypedConstraint_setOverrideNumSolverIterations_1 = function () {
                return (hg = a._emscripten_bind_btTypedConstraint_setOverrideNumSolverIterations_1 = a.asm.me).apply(null, arguments);
            }),
            ig = (a._emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 = function () {
                return (ig = a._emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 = a.asm.ne).apply(null, arguments);
            }),
            jg = (a._emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 = function () {
                return (jg = a._emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 = a.asm.oe).apply(null, arguments);
            }),
            kg = (a._emscripten_bind_btTypedConstraint_isEnabled_0 = function () {
                return (kg = a._emscripten_bind_btTypedConstraint_isEnabled_0 = a.asm.pe).apply(null, arguments);
            }),
            lg = (a._emscripten_bind_btTypedConstraint_setEnabled_1 = function () {
                return (lg = a._emscripten_bind_btTypedConstraint_setEnabled_1 = a.asm.qe).apply(null, arguments);
            }),
            mg = (a._emscripten_bind_btTypedConstraint_getRigidBodyA_0 = function () {
                return (mg = a._emscripten_bind_btTypedConstraint_getRigidBodyA_0 = a.asm.re).apply(null, arguments);
            }),
            ng = (a._emscripten_bind_btTypedConstraint_getRigidBodyB_0 = function () {
                return (ng = a._emscripten_bind_btTypedConstraint_getRigidBodyB_0 = a.asm.se).apply(null, arguments);
            }),
            og = (a._emscripten_bind_btTypedConstraint_getUserConstraintType_0 = function () {
                return (og = a._emscripten_bind_btTypedConstraint_getUserConstraintType_0 = a.asm.te).apply(null, arguments);
            }),
            pg = (a._emscripten_bind_btTypedConstraint_setUserConstraintType_1 = function () {
                return (pg = a._emscripten_bind_btTypedConstraint_setUserConstraintType_1 = a.asm.ue).apply(null, arguments);
            }),
            qg = (a._emscripten_bind_btTypedConstraint_setUserConstraintId_1 = function () {
                return (qg = a._emscripten_bind_btTypedConstraint_setUserConstraintId_1 = a.asm.ve).apply(null, arguments);
            }),
            rg = (a._emscripten_bind_btTypedConstraint_getUserConstraintId_0 = function () {
                return (rg = a._emscripten_bind_btTypedConstraint_getUserConstraintId_0 = a.asm.we).apply(null, arguments);
            }),
            sg = (a._emscripten_bind_btTypedConstraint_setUserConstraintPtr_1 = function () {
                return (sg = a._emscripten_bind_btTypedConstraint_setUserConstraintPtr_1 = a.asm.xe).apply(null, arguments);
            }),
            tg = (a._emscripten_bind_btTypedConstraint_getUserConstraintPtr_0 = function () {
                return (tg = a._emscripten_bind_btTypedConstraint_getUserConstraintPtr_0 = a.asm.ye).apply(null, arguments);
            }),
            ug = (a._emscripten_bind_btTypedConstraint_setJointFeedback_1 = function () {
                return (ug = a._emscripten_bind_btTypedConstraint_setJointFeedback_1 = a.asm.ze).apply(null, arguments);
            }),
            vg = (a._emscripten_bind_btTypedConstraint_getJointFeedback_0 = function () {
                return (vg = a._emscripten_bind_btTypedConstraint_getJointFeedback_0 = a.asm.Ae).apply(null, arguments);
            }),
            wg = (a._emscripten_bind_btTypedConstraint_getUid_0 = function () {
                return (wg = a._emscripten_bind_btTypedConstraint_getUid_0 = a.asm.Be).apply(null, arguments);
            }),
            xg = (a._emscripten_bind_btTypedConstraint_needsFeedback_0 = function () {
                return (xg = a._emscripten_bind_btTypedConstraint_needsFeedback_0 = a.asm.Ce).apply(null, arguments);
            }),
            yg = (a._emscripten_bind_btTypedConstraint_enableFeedback_1 = function () {
                return (yg = a._emscripten_bind_btTypedConstraint_enableFeedback_1 = a.asm.De).apply(null, arguments);
            }),
            zg = (a._emscripten_bind_btTypedConstraint_getAppliedImpulse_0 = function () {
                return (zg = a._emscripten_bind_btTypedConstraint_getAppliedImpulse_0 = a.asm.Ee).apply(null, arguments);
            }),
            Ag = (a._emscripten_bind_btTypedConstraint_getConstraintType_0 = function () {
                return (Ag = a._emscripten_bind_btTypedConstraint_getConstraintType_0 = a.asm.Fe).apply(null, arguments);
            }),
            Bg = (a._emscripten_bind_btTypedConstraint_setParam_3 = function () {
                return (Bg = a._emscripten_bind_btTypedConstraint_setParam_3 = a.asm.Ge).apply(null, arguments);
            }),
            Cg = (a._emscripten_bind_btTypedConstraint_getParam_2 = function () {
                return (Cg = a._emscripten_bind_btTypedConstraint_getParam_2 = a.asm.He).apply(null, arguments);
            }),
            Dg = (a._emscripten_bind_btTypedConstraint_getObjectType_0 = function () {
                return (Dg = a._emscripten_bind_btTypedConstraint_getObjectType_0 = a.asm.Ie).apply(null, arguments);
            }),
            Eg = (a._emscripten_bind_btTypedConstraint_get_m_objectType_0 = function () {
                return (Eg = a._emscripten_bind_btTypedConstraint_get_m_objectType_0 = a.asm.Je).apply(null, arguments);
            }),
            Fg = (a._emscripten_bind_btTypedConstraint_set_m_objectType_1 = function () {
                return (Fg = a._emscripten_bind_btTypedConstraint_set_m_objectType_1 = a.asm.Ke).apply(null, arguments);
            }),
            Gg = (a._emscripten_bind_btTypedConstraint___destroy___0 = function () {
                return (Gg = a._emscripten_bind_btTypedConstraint___destroy___0 = a.asm.Le).apply(null, arguments);
            }),
            Hg = (a._emscripten_bind_btDynamicsWorld_addAction_1 = function () {
                return (Hg = a._emscripten_bind_btDynamicsWorld_addAction_1 = a.asm.Me).apply(null, arguments);
            }),
            Ig = (a._emscripten_bind_btDynamicsWorld_removeAction_1 = function () {
                return (Ig = a._emscripten_bind_btDynamicsWorld_removeAction_1 = a.asm.Ne).apply(null, arguments);
            }),
            Jg = (a._emscripten_bind_btDynamicsWorld_getSolverInfo_0 = function () {
                return (Jg = a._emscripten_bind_btDynamicsWorld_getSolverInfo_0 = a.asm.Oe).apply(null, arguments);
            }),
            Kg = (a._emscripten_bind_btDynamicsWorld_getDispatcher_0 = function () {
                return (Kg = a._emscripten_bind_btDynamicsWorld_getDispatcher_0 = a.asm.Pe).apply(null, arguments);
            }),
            Lg = (a._emscripten_bind_btDynamicsWorld_rayTest_3 = function () {
                return (Lg = a._emscripten_bind_btDynamicsWorld_rayTest_3 = a.asm.Qe).apply(null, arguments);
            }),
            Mg = (a._emscripten_bind_btDynamicsWorld_getPairCache_0 = function () {
                return (Mg = a._emscripten_bind_btDynamicsWorld_getPairCache_0 = a.asm.Re).apply(null, arguments);
            }),
            Ng = (a._emscripten_bind_btDynamicsWorld_getDispatchInfo_0 = function () {
                return (Ng = a._emscripten_bind_btDynamicsWorld_getDispatchInfo_0 = a.asm.Se).apply(null, arguments);
            }),
            Og = (a._emscripten_bind_btDynamicsWorld_addCollisionObject_1 = function () {
                return (Og = a._emscripten_bind_btDynamicsWorld_addCollisionObject_1 = a.asm.Te).apply(null, arguments);
            }),
            Pg = (a._emscripten_bind_btDynamicsWorld_addCollisionObject_2 = function () {
                return (Pg = a._emscripten_bind_btDynamicsWorld_addCollisionObject_2 = a.asm.Ue).apply(null, arguments);
            }),
            Qg = (a._emscripten_bind_btDynamicsWorld_addCollisionObject_3 = function () {
                return (Qg = a._emscripten_bind_btDynamicsWorld_addCollisionObject_3 = a.asm.Ve).apply(null, arguments);
            }),
            Rg = (a._emscripten_bind_btDynamicsWorld_removeCollisionObject_1 = function () {
                return (Rg = a._emscripten_bind_btDynamicsWorld_removeCollisionObject_1 = a.asm.We).apply(null, arguments);
            }),
            Sg = (a._emscripten_bind_btDynamicsWorld_getBroadphase_0 = function () {
                return (Sg = a._emscripten_bind_btDynamicsWorld_getBroadphase_0 = a.asm.Xe).apply(null, arguments);
            }),
            Tg = (a._emscripten_bind_btDynamicsWorld_convexSweepTest_5 = function () {
                return (Tg = a._emscripten_bind_btDynamicsWorld_convexSweepTest_5 = a.asm.Ye).apply(null, arguments);
            }),
            Ug = (a._emscripten_bind_btDynamicsWorld_contactPairTest_3 = function () {
                return (Ug = a._emscripten_bind_btDynamicsWorld_contactPairTest_3 = a.asm.Ze).apply(null, arguments);
            }),
            Vg = (a._emscripten_bind_btDynamicsWorld_contactTest_2 = function () {
                return (Vg = a._emscripten_bind_btDynamicsWorld_contactTest_2 = a.asm._e).apply(null, arguments);
            }),
            Wg = (a._emscripten_bind_btDynamicsWorld_updateSingleAabb_1 = function () {
                return (Wg = a._emscripten_bind_btDynamicsWorld_updateSingleAabb_1 = a.asm.$e).apply(null, arguments);
            }),
            Xg = (a._emscripten_bind_btDynamicsWorld___destroy___0 = function () {
                return (Xg = a._emscripten_bind_btDynamicsWorld___destroy___0 = a.asm.af).apply(null, arguments);
            }),
            Yg = (a._emscripten_bind_btIDebugDraw_drawLine_3 = function () {
                return (Yg = a._emscripten_bind_btIDebugDraw_drawLine_3 = a.asm.bf).apply(null, arguments);
            }),
            Zg = (a._emscripten_bind_btIDebugDraw_drawContactPoint_5 = function () {
                return (Zg = a._emscripten_bind_btIDebugDraw_drawContactPoint_5 = a.asm.cf).apply(null, arguments);
            }),
            $g = (a._emscripten_bind_btIDebugDraw_reportErrorWarning_1 = function () {
                return ($g = a._emscripten_bind_btIDebugDraw_reportErrorWarning_1 = a.asm.df).apply(null, arguments);
            }),
            ah = (a._emscripten_bind_btIDebugDraw_draw3dText_2 = function () {
                return (ah = a._emscripten_bind_btIDebugDraw_draw3dText_2 = a.asm.ef).apply(null, arguments);
            }),
            bh = (a._emscripten_bind_btIDebugDraw_setDebugMode_1 = function () {
                return (bh = a._emscripten_bind_btIDebugDraw_setDebugMode_1 = a.asm.ff).apply(null, arguments);
            }),
            ch = (a._emscripten_bind_btIDebugDraw_getDebugMode_0 = function () {
                return (ch = a._emscripten_bind_btIDebugDraw_getDebugMode_0 = a.asm.gf).apply(null, arguments);
            }),
            dh = (a._emscripten_bind_btIDebugDraw___destroy___0 = function () {
                return (dh = a._emscripten_bind_btIDebugDraw___destroy___0 = a.asm.hf).apply(null, arguments);
            }),
            eh = (a._emscripten_bind_btVector3_btVector3_0 = function () {
                return (eh = a._emscripten_bind_btVector3_btVector3_0 = a.asm.jf).apply(null, arguments);
            }),
            fh = (a._emscripten_bind_btVector3_btVector3_3 = function () {
                return (fh = a._emscripten_bind_btVector3_btVector3_3 = a.asm.kf).apply(null, arguments);
            }),
            gh = (a._emscripten_bind_btVector3_op_add_1 = function () {
                return (gh = a._emscripten_bind_btVector3_op_add_1 = a.asm.lf).apply(null, arguments);
            }),
            hh = (a._emscripten_bind_btVector3_op_sub_1 = function () {
                return (hh = a._emscripten_bind_btVector3_op_sub_1 = a.asm.mf).apply(null, arguments);
            }),
            ih = (a._emscripten_bind_btVector3_op_mul_1 = function () {
                return (ih = a._emscripten_bind_btVector3_op_mul_1 = a.asm.nf).apply(null, arguments);
            }),
            jh = (a._emscripten_bind_btVector3_op_div_1 = function () {
                return (jh = a._emscripten_bind_btVector3_op_div_1 = a.asm.of).apply(null, arguments);
            }),
            kh = (a._emscripten_bind_btVector3_dot_1 = function () {
                return (kh = a._emscripten_bind_btVector3_dot_1 = a.asm.pf).apply(null, arguments);
            }),
            lh = (a._emscripten_bind_btVector3_length2_0 = function () {
                return (lh = a._emscripten_bind_btVector3_length2_0 = a.asm.qf).apply(null, arguments);
            }),
            mh = (a._emscripten_bind_btVector3_length_0 = function () {
                return (mh = a._emscripten_bind_btVector3_length_0 = a.asm.rf).apply(null, arguments);
            }),
            nh = (a._emscripten_bind_btVector3_norm_0 = function () {
                return (nh = a._emscripten_bind_btVector3_norm_0 = a.asm.sf).apply(null, arguments);
            }),
            oh = (a._emscripten_bind_btVector3_distance2_1 = function () {
                return (oh = a._emscripten_bind_btVector3_distance2_1 = a.asm.tf).apply(null, arguments);
            }),
            ph = (a._emscripten_bind_btVector3_distance_1 = function () {
                return (ph = a._emscripten_bind_btVector3_distance_1 = a.asm.uf).apply(null, arguments);
            }),
            qh = (a._emscripten_bind_btVector3_normalize_0 = function () {
                return (qh = a._emscripten_bind_btVector3_normalize_0 = a.asm.vf).apply(null, arguments);
            }),
            rh = (a._emscripten_bind_btVector3_normalized_0 = function () {
                return (rh = a._emscripten_bind_btVector3_normalized_0 = a.asm.wf).apply(null, arguments);
            }),
            sh = (a._emscripten_bind_btVector3_rotate_2 = function () {
                return (sh = a._emscripten_bind_btVector3_rotate_2 = a.asm.xf).apply(null, arguments);
            }),
            th = (a._emscripten_bind_btVector3_angle_1 = function () {
                return (th = a._emscripten_bind_btVector3_angle_1 = a.asm.yf).apply(null, arguments);
            }),
            uh = (a._emscripten_bind_btVector3_absolute_0 = function () {
                return (uh = a._emscripten_bind_btVector3_absolute_0 = a.asm.zf).apply(null, arguments);
            }),
            vh = (a._emscripten_bind_btVector3_cross_1 = function () {
                return (vh = a._emscripten_bind_btVector3_cross_1 = a.asm.Af).apply(null, arguments);
            }),
            wh = (a._emscripten_bind_btVector3_triple_2 = function () {
                return (wh = a._emscripten_bind_btVector3_triple_2 = a.asm.Bf).apply(null, arguments);
            }),
            xh = (a._emscripten_bind_btVector3_minAxis_0 = function () {
                return (xh = a._emscripten_bind_btVector3_minAxis_0 = a.asm.Cf).apply(null, arguments);
            }),
            yh = (a._emscripten_bind_btVector3_maxAxis_0 = function () {
                return (yh = a._emscripten_bind_btVector3_maxAxis_0 = a.asm.Df).apply(null, arguments);
            }),
            zh = (a._emscripten_bind_btVector3_furthestAxis_0 = function () {
                return (zh = a._emscripten_bind_btVector3_furthestAxis_0 = a.asm.Ef).apply(null, arguments);
            }),
            Ah = (a._emscripten_bind_btVector3_closestAxis_0 = function () {
                return (Ah = a._emscripten_bind_btVector3_closestAxis_0 = a.asm.Ff).apply(null, arguments);
            }),
            Bh = (a._emscripten_bind_btVector3_setInterpolate3_3 = function () {
                return (Bh = a._emscripten_bind_btVector3_setInterpolate3_3 = a.asm.Gf).apply(null, arguments);
            }),
            Ch = (a._emscripten_bind_btVector3_lerp_2 = function () {
                return (Ch = a._emscripten_bind_btVector3_lerp_2 = a.asm.Hf).apply(null, arguments);
            }),
            Dh = (a._emscripten_bind_btVector3_op_mulv_1 = function () {
                return (Dh = a._emscripten_bind_btVector3_op_mulv_1 = a.asm.If).apply(null, arguments);
            }),
            Eh = (a._emscripten_bind_btVector3_getX_0 = function () {
                return (Eh = a._emscripten_bind_btVector3_getX_0 = a.asm.Jf).apply(null, arguments);
            }),
            Fh = (a._emscripten_bind_btVector3_getY_0 = function () {
                return (Fh = a._emscripten_bind_btVector3_getY_0 = a.asm.Kf).apply(null, arguments);
            }),
            Gh = (a._emscripten_bind_btVector3_getZ_0 = function () {
                return (Gh = a._emscripten_bind_btVector3_getZ_0 = a.asm.Lf).apply(null, arguments);
            }),
            Hh = (a._emscripten_bind_btVector3_setX_1 = function () {
                return (Hh = a._emscripten_bind_btVector3_setX_1 = a.asm.Mf).apply(null, arguments);
            }),
            Ih = (a._emscripten_bind_btVector3_setY_1 = function () {
                return (Ih = a._emscripten_bind_btVector3_setY_1 = a.asm.Nf).apply(null, arguments);
            }),
            Jh = (a._emscripten_bind_btVector3_setZ_1 = function () {
                return (Jh = a._emscripten_bind_btVector3_setZ_1 = a.asm.Of).apply(null, arguments);
            }),
            Kh = (a._emscripten_bind_btVector3_setW_1 = function () {
                return (Kh = a._emscripten_bind_btVector3_setW_1 = a.asm.Pf).apply(null, arguments);
            }),
            Lh = (a._emscripten_bind_btVector3_x_0 = function () {
                return (Lh = a._emscripten_bind_btVector3_x_0 = a.asm.Qf).apply(null, arguments);
            }),
            Mh = (a._emscripten_bind_btVector3_y_0 = function () {
                return (Mh = a._emscripten_bind_btVector3_y_0 = a.asm.Rf).apply(null, arguments);
            }),
            Nh = (a._emscripten_bind_btVector3_z_0 = function () {
                return (Nh = a._emscripten_bind_btVector3_z_0 = a.asm.Sf).apply(null, arguments);
            }),
            Oh = (a._emscripten_bind_btVector3_w_0 = function () {
                return (Oh = a._emscripten_bind_btVector3_w_0 = a.asm.Tf).apply(null, arguments);
            }),
            Ph = (a._emscripten_bind_btVector3_op_eq_1 = function () {
                return (Ph = a._emscripten_bind_btVector3_op_eq_1 = a.asm.Uf).apply(null, arguments);
            }),
            Qh = (a._emscripten_bind_btVector3_op_neq_1 = function () {
                return (Qh = a._emscripten_bind_btVector3_op_neq_1 = a.asm.Vf).apply(null, arguments);
            }),
            Rh = (a._emscripten_bind_btVector3_setMax_1 = function () {
                return (Rh = a._emscripten_bind_btVector3_setMax_1 = a.asm.Wf).apply(null, arguments);
            }),
            Sh = (a._emscripten_bind_btVector3_setMin_1 = function () {
                return (Sh = a._emscripten_bind_btVector3_setMin_1 = a.asm.Xf).apply(null, arguments);
            }),
            Th = (a._emscripten_bind_btVector3_setValue_3 = function () {
                return (Th = a._emscripten_bind_btVector3_setValue_3 = a.asm.Yf).apply(null, arguments);
            }),
            Uh = (a._emscripten_bind_btVector3_getSkewSymmetricMatrix_3 = function () {
                return (Uh = a._emscripten_bind_btVector3_getSkewSymmetricMatrix_3 = a.asm.Zf).apply(null, arguments);
            }),
            Vh = (a._emscripten_bind_btVector3_setZero_0 = function () {
                return (Vh = a._emscripten_bind_btVector3_setZero_0 = a.asm._f).apply(null, arguments);
            }),
            Wh = (a._emscripten_bind_btVector3_isZero_0 = function () {
                return (Wh = a._emscripten_bind_btVector3_isZero_0 = a.asm.$f).apply(null, arguments);
            }),
            Xh = (a._emscripten_bind_btVector3_fuzzyZero_0 = function () {
                return (Xh = a._emscripten_bind_btVector3_fuzzyZero_0 = a.asm.ag).apply(null, arguments);
            }),
            Yh = (a._emscripten_bind_btVector3_dot3_3 = function () {
                return (Yh = a._emscripten_bind_btVector3_dot3_3 = a.asm.bg).apply(null, arguments);
            }),
            Zh = (a._emscripten_bind_btVector3___destroy___0 = function () {
                return (Zh = a._emscripten_bind_btVector3___destroy___0 = a.asm.cg).apply(null, arguments);
            }),
            $h = (a._emscripten_bind_btQuadWord_btQuadWord_0 = function () {
                return ($h = a._emscripten_bind_btQuadWord_btQuadWord_0 = a.asm.dg).apply(null, arguments);
            }),
            ai = (a._emscripten_bind_btQuadWord_btQuadWord_4 = function () {
                return (ai = a._emscripten_bind_btQuadWord_btQuadWord_4 = a.asm.eg).apply(null, arguments);
            }),
            bi = (a._emscripten_bind_btQuadWord_getX_0 = function () {
                return (bi = a._emscripten_bind_btQuadWord_getX_0 = a.asm.fg).apply(null, arguments);
            }),
            ci = (a._emscripten_bind_btQuadWord_getY_0 = function () {
                return (ci = a._emscripten_bind_btQuadWord_getY_0 = a.asm.gg).apply(null, arguments);
            }),
            di = (a._emscripten_bind_btQuadWord_getZ_0 = function () {
                return (di = a._emscripten_bind_btQuadWord_getZ_0 = a.asm.hg).apply(null, arguments);
            }),
            ei = (a._emscripten_bind_btQuadWord_setX_1 = function () {
                return (ei = a._emscripten_bind_btQuadWord_setX_1 = a.asm.ig).apply(null, arguments);
            }),
            fi = (a._emscripten_bind_btQuadWord_setY_1 = function () {
                return (fi = a._emscripten_bind_btQuadWord_setY_1 = a.asm.jg).apply(null, arguments);
            }),
            gi = (a._emscripten_bind_btQuadWord_setZ_1 = function () {
                return (gi = a._emscripten_bind_btQuadWord_setZ_1 = a.asm.kg).apply(null, arguments);
            }),
            hi = (a._emscripten_bind_btQuadWord_setW_1 = function () {
                return (hi = a._emscripten_bind_btQuadWord_setW_1 = a.asm.lg).apply(null, arguments);
            }),
            ii = (a._emscripten_bind_btQuadWord_x_0 = function () {
                return (ii = a._emscripten_bind_btQuadWord_x_0 = a.asm.mg).apply(null, arguments);
            }),
            ji = (a._emscripten_bind_btQuadWord_y_0 = function () {
                return (ji = a._emscripten_bind_btQuadWord_y_0 = a.asm.ng).apply(null, arguments);
            }),
            ki = (a._emscripten_bind_btQuadWord_z_0 = function () {
                return (ki = a._emscripten_bind_btQuadWord_z_0 = a.asm.og).apply(null, arguments);
            }),
            li = (a._emscripten_bind_btQuadWord_w_0 = function () {
                return (li = a._emscripten_bind_btQuadWord_w_0 = a.asm.pg).apply(null, arguments);
            }),
            mi = (a._emscripten_bind_btQuadWord_op_eq_1 = function () {
                return (mi = a._emscripten_bind_btQuadWord_op_eq_1 = a.asm.qg).apply(null, arguments);
            }),
            ni = (a._emscripten_bind_btQuadWord_op_neq_1 = function () {
                return (ni = a._emscripten_bind_btQuadWord_op_neq_1 = a.asm.rg).apply(null, arguments);
            }),
            oi = (a._emscripten_bind_btQuadWord_setValue_3 = function () {
                return (oi = a._emscripten_bind_btQuadWord_setValue_3 = a.asm.sg).apply(null, arguments);
            }),
            pi = (a._emscripten_bind_btQuadWord_setValue_4 = function () {
                return (pi = a._emscripten_bind_btQuadWord_setValue_4 = a.asm.tg).apply(null, arguments);
            }),
            qi = (a._emscripten_bind_btQuadWord_setMax_1 = function () {
                return (qi = a._emscripten_bind_btQuadWord_setMax_1 = a.asm.ug).apply(null, arguments);
            }),
            ri = (a._emscripten_bind_btQuadWord_setMin_1 = function () {
                return (ri = a._emscripten_bind_btQuadWord_setMin_1 = a.asm.vg).apply(null, arguments);
            }),
            si = (a._emscripten_bind_btQuadWord___destroy___0 = function () {
                return (si = a._emscripten_bind_btQuadWord___destroy___0 = a.asm.wg).apply(null, arguments);
            }),
            ti = (a._emscripten_bind_btMotionState_getWorldTransform_1 = function () {
                return (ti = a._emscripten_bind_btMotionState_getWorldTransform_1 = a.asm.xg).apply(null, arguments);
            }),
            ui = (a._emscripten_bind_btMotionState_setWorldTransform_1 = function () {
                return (ui = a._emscripten_bind_btMotionState_setWorldTransform_1 = a.asm.yg).apply(null, arguments);
            }),
            vi = (a._emscripten_bind_btMotionState___destroy___0 = function () {
                return (vi = a._emscripten_bind_btMotionState___destroy___0 = a.asm.zg).apply(null, arguments);
            }),
            wi = (a._emscripten_bind_RayResultCallback_hasHit_0 = function () {
                return (wi = a._emscripten_bind_RayResultCallback_hasHit_0 = a.asm.Ag).apply(null, arguments);
            }),
            xi = (a._emscripten_bind_RayResultCallback_needsCollision_1 = function () {
                return (xi = a._emscripten_bind_RayResultCallback_needsCollision_1 = a.asm.Bg).apply(null, arguments);
            }),
            yi = (a._emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 = function () {
                return (yi = a._emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 = a.asm.Cg).apply(null, arguments);
            }),
            zi = (a._emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 = function () {
                return (zi = a._emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 = a.asm.Dg).apply(null, arguments);
            }),
            Ai = (a._emscripten_bind_RayResultCallback_get_m_collisionObject_0 = function () {
                return (Ai = a._emscripten_bind_RayResultCallback_get_m_collisionObject_0 = a.asm.Eg).apply(null, arguments);
            }),
            Bi = (a._emscripten_bind_RayResultCallback_set_m_collisionObject_1 = function () {
                return (Bi = a._emscripten_bind_RayResultCallback_set_m_collisionObject_1 = a.asm.Fg).apply(null, arguments);
            }),
            Ci = (a._emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (Ci = a._emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 = a.asm.Gg).apply(null, arguments);
            }),
            Di = (a._emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (Di = a._emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 = a.asm.Hg).apply(null, arguments);
            }),
            Ei = (a._emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 = function () {
                return (Ei = a._emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 = a.asm.Ig).apply(null, arguments);
            }),
            Fi = (a._emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 = function () {
                return (Fi = a._emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 = a.asm.Jg).apply(null, arguments);
            }),
            Gi = (a._emscripten_bind_RayResultCallback_get_m_flags_0 = function () {
                return (Gi = a._emscripten_bind_RayResultCallback_get_m_flags_0 = a.asm.Kg).apply(null, arguments);
            }),
            Hi = (a._emscripten_bind_RayResultCallback_set_m_flags_1 = function () {
                return (Hi = a._emscripten_bind_RayResultCallback_set_m_flags_1 = a.asm.Lg).apply(null, arguments);
            }),
            Ii = (a._emscripten_bind_RayResultCallback___destroy___0 = function () {
                return (Ii = a._emscripten_bind_RayResultCallback___destroy___0 = a.asm.Mg).apply(null, arguments);
            }),
            Ji = (a._emscripten_bind_ContactResultCallback_needsCollision_1 = function () {
                return (Ji = a._emscripten_bind_ContactResultCallback_needsCollision_1 = a.asm.Ng).apply(null, arguments);
            }),
            Ki = (a._emscripten_bind_ContactResultCallback_addSingleResult_7 = function () {
                return (Ki = a._emscripten_bind_ContactResultCallback_addSingleResult_7 = a.asm.Og).apply(null, arguments);
            }),
            Li = (a._emscripten_bind_ContactResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (Li = a._emscripten_bind_ContactResultCallback_get_m_collisionFilterGroup_0 = a.asm.Pg).apply(null, arguments);
            }),
            Mi = (a._emscripten_bind_ContactResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (Mi = a._emscripten_bind_ContactResultCallback_set_m_collisionFilterGroup_1 = a.asm.Qg).apply(null, arguments);
            }),
            Ni = (a._emscripten_bind_ContactResultCallback_get_m_collisionFilterMask_0 = function () {
                return (Ni = a._emscripten_bind_ContactResultCallback_get_m_collisionFilterMask_0 = a.asm.Rg).apply(null, arguments);
            }),
            Oi = (a._emscripten_bind_ContactResultCallback_set_m_collisionFilterMask_1 = function () {
                return (Oi = a._emscripten_bind_ContactResultCallback_set_m_collisionFilterMask_1 = a.asm.Sg).apply(null, arguments);
            }),
            Pi = (a._emscripten_bind_ContactResultCallback_get_m_closestDistanceThreshold_0 = function () {
                return (Pi = a._emscripten_bind_ContactResultCallback_get_m_closestDistanceThreshold_0 = a.asm.Tg).apply(null, arguments);
            }),
            Qi = (a._emscripten_bind_ContactResultCallback_set_m_closestDistanceThreshold_1 = function () {
                return (Qi = a._emscripten_bind_ContactResultCallback_set_m_closestDistanceThreshold_1 = a.asm.Ug).apply(null, arguments);
            }),
            Ri = (a._emscripten_bind_ContactResultCallback___destroy___0 = function () {
                return (Ri = a._emscripten_bind_ContactResultCallback___destroy___0 = a.asm.Vg).apply(null, arguments);
            }),
            Si = (a._emscripten_bind_ConvexResultCallback_hasHit_0 = function () {
                return (Si = a._emscripten_bind_ConvexResultCallback_hasHit_0 = a.asm.Wg).apply(null, arguments);
            }),
            Ti = (a._emscripten_bind_ConvexResultCallback_needsCollision_1 = function () {
                return (Ti = a._emscripten_bind_ConvexResultCallback_needsCollision_1 = a.asm.Xg).apply(null, arguments);
            }),
            Ui = (a._emscripten_bind_ConvexResultCallback_addSingleResult_2 = function () {
                return (Ui = a._emscripten_bind_ConvexResultCallback_addSingleResult_2 = a.asm.Yg).apply(null, arguments);
            }),
            Vi = (a._emscripten_bind_ConvexResultCallback_get_m_closestHitFraction_0 = function () {
                return (Vi = a._emscripten_bind_ConvexResultCallback_get_m_closestHitFraction_0 = a.asm.Zg).apply(null, arguments);
            }),
            Wi = (a._emscripten_bind_ConvexResultCallback_set_m_closestHitFraction_1 = function () {
                return (Wi = a._emscripten_bind_ConvexResultCallback_set_m_closestHitFraction_1 = a.asm._g).apply(null, arguments);
            }),
            Xi = (a._emscripten_bind_ConvexResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (Xi = a._emscripten_bind_ConvexResultCallback_get_m_collisionFilterGroup_0 = a.asm.$g).apply(null, arguments);
            }),
            Yi = (a._emscripten_bind_ConvexResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (Yi = a._emscripten_bind_ConvexResultCallback_set_m_collisionFilterGroup_1 = a.asm.ah).apply(null, arguments);
            }),
            Zi = (a._emscripten_bind_ConvexResultCallback_get_m_collisionFilterMask_0 = function () {
                return (Zi = a._emscripten_bind_ConvexResultCallback_get_m_collisionFilterMask_0 = a.asm.bh).apply(null, arguments);
            }),
            $i = (a._emscripten_bind_ConvexResultCallback_set_m_collisionFilterMask_1 = function () {
                return ($i = a._emscripten_bind_ConvexResultCallback_set_m_collisionFilterMask_1 = a.asm.ch).apply(null, arguments);
            }),
            aj = (a._emscripten_bind_ConvexResultCallback___destroy___0 = function () {
                return (aj = a._emscripten_bind_ConvexResultCallback___destroy___0 = a.asm.dh).apply(null, arguments);
            }),
            bj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setLocalScaling_1 = function () {
                return (bj = a._emscripten_bind_btConvexInternalAabbCachingShape_setLocalScaling_1 = a.asm.eh).apply(null, arguments);
            }),
            cj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getAabb_3 = function () {
                return (cj = a._emscripten_bind_btConvexInternalAabbCachingShape_getAabb_3 = a.asm.fh).apply(null, arguments);
            }),
            dj = (a._emscripten_bind_btConvexInternalAabbCachingShape_recalcLocalAabb_0 = function () {
                return (dj = a._emscripten_bind_btConvexInternalAabbCachingShape_recalcLocalAabb_0 = a.asm.gh).apply(null, arguments);
            }),
            ej = (a._emscripten_bind_btConvexInternalAabbCachingShape_getAngularMotionDisc_0 = function () {
                return (ej = a._emscripten_bind_btConvexInternalAabbCachingShape_getAngularMotionDisc_0 = a.asm.hh).apply(null, arguments);
            }),
            fj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getContactBreakingThreshold_1 = function () {
                return (fj = a._emscripten_bind_btConvexInternalAabbCachingShape_getContactBreakingThreshold_1 = a.asm.ih).apply(null, arguments);
            }),
            gj = (a._emscripten_bind_btConvexInternalAabbCachingShape_calculateTemporalAabb_6 = function () {
                return (gj = a._emscripten_bind_btConvexInternalAabbCachingShape_calculateTemporalAabb_6 = a.asm.jh).apply(null, arguments);
            }),
            hj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isPolyhedral_0 = function () {
                return (hj = a._emscripten_bind_btConvexInternalAabbCachingShape_isPolyhedral_0 = a.asm.kh).apply(null, arguments);
            }),
            ij = (a._emscripten_bind_btConvexInternalAabbCachingShape_isConvex2d_0 = function () {
                return (ij = a._emscripten_bind_btConvexInternalAabbCachingShape_isConvex2d_0 = a.asm.lh).apply(null, arguments);
            }),
            jj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isConvex_0 = function () {
                return (jj = a._emscripten_bind_btConvexInternalAabbCachingShape_isConvex_0 = a.asm.mh).apply(null, arguments);
            }),
            kj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isNonMoving_0 = function () {
                return (kj = a._emscripten_bind_btConvexInternalAabbCachingShape_isNonMoving_0 = a.asm.nh).apply(null, arguments);
            }),
            lj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isConcave_0 = function () {
                return (lj = a._emscripten_bind_btConvexInternalAabbCachingShape_isConcave_0 = a.asm.oh).apply(null, arguments);
            }),
            mj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isCompound_0 = function () {
                return (mj = a._emscripten_bind_btConvexInternalAabbCachingShape_isCompound_0 = a.asm.ph).apply(null, arguments);
            }),
            nj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isSoftBody_0 = function () {
                return (nj = a._emscripten_bind_btConvexInternalAabbCachingShape_isSoftBody_0 = a.asm.qh).apply(null, arguments);
            }),
            oj = (a._emscripten_bind_btConvexInternalAabbCachingShape_isInfinite_0 = function () {
                return (oj = a._emscripten_bind_btConvexInternalAabbCachingShape_isInfinite_0 = a.asm.rh).apply(null, arguments);
            }),
            pj = (a._emscripten_bind_btConvexInternalAabbCachingShape_calculateLocalInertia_2 = function () {
                return (pj = a._emscripten_bind_btConvexInternalAabbCachingShape_calculateLocalInertia_2 = a.asm.sh).apply(null, arguments);
            }),
            qj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getName_0 = function () {
                return (qj = a._emscripten_bind_btConvexInternalAabbCachingShape_getName_0 = a.asm.th).apply(null, arguments);
            }),
            rj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getShapeType_0 = function () {
                return (rj = a._emscripten_bind_btConvexInternalAabbCachingShape_getShapeType_0 = a.asm.uh).apply(null, arguments);
            }),
            sj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (sj = a._emscripten_bind_btConvexInternalAabbCachingShape_getAnisotropicRollingFrictionDirection_0 = a.asm.vh).apply(null, arguments);
            }),
            tj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setUserPointer_1 = function () {
                return (tj = a._emscripten_bind_btConvexInternalAabbCachingShape_setUserPointer_1 = a.asm.wh).apply(null, arguments);
            }),
            uj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getUserPointer_0 = function () {
                return (uj = a._emscripten_bind_btConvexInternalAabbCachingShape_getUserPointer_0 = a.asm.xh).apply(null, arguments);
            }),
            vj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setUserIndex_1 = function () {
                return (vj = a._emscripten_bind_btConvexInternalAabbCachingShape_setUserIndex_1 = a.asm.yh).apply(null, arguments);
            }),
            wj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getUserIndex_0 = function () {
                return (wj = a._emscripten_bind_btConvexInternalAabbCachingShape_getUserIndex_0 = a.asm.zh).apply(null, arguments);
            }),
            xj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setUserIndex2_1 = function () {
                return (xj = a._emscripten_bind_btConvexInternalAabbCachingShape_setUserIndex2_1 = a.asm.Ah).apply(null, arguments);
            }),
            yj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getUserIndex2_0 = function () {
                return (yj = a._emscripten_bind_btConvexInternalAabbCachingShape_getUserIndex2_0 = a.asm.Bh).apply(null, arguments);
            }),
            zj = (a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportingVertex_1 = function () {
                return (zj = a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportingVertex_1 = a.asm.Ch).apply(null, arguments);
            }),
            Aj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getImplicitShapeDimensions_0 = function () {
                return (Aj = a._emscripten_bind_btConvexInternalAabbCachingShape_getImplicitShapeDimensions_0 = a.asm.Dh).apply(null, arguments);
            }),
            Bj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setImplicitShapeDimensions_1 = function () {
                return (Bj = a._emscripten_bind_btConvexInternalAabbCachingShape_setImplicitShapeDimensions_1 = a.asm.Eh).apply(null, arguments);
            }),
            Cj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setSafeMargin_1 = function () {
                return (Cj = a._emscripten_bind_btConvexInternalAabbCachingShape_setSafeMargin_1 = a.asm.Fh).apply(null, arguments);
            }),
            Dj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setSafeMargin_2 = function () {
                return (Dj = a._emscripten_bind_btConvexInternalAabbCachingShape_setSafeMargin_2 = a.asm.Gh).apply(null, arguments);
            }),
            Ej = (a._emscripten_bind_btConvexInternalAabbCachingShape_getAabbSlow_3 = function () {
                return (Ej = a._emscripten_bind_btConvexInternalAabbCachingShape_getAabbSlow_3 = a.asm.Hh).apply(null, arguments);
            }),
            Fj = (a._emscripten_bind_btConvexInternalAabbCachingShape_setMargin_1 = function () {
                return (Fj = a._emscripten_bind_btConvexInternalAabbCachingShape_setMargin_1 = a.asm.Ih).apply(null, arguments);
            }),
            Gj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getMargin_0 = function () {
                return (Gj = a._emscripten_bind_btConvexInternalAabbCachingShape_getMargin_0 = a.asm.Jh).apply(null, arguments);
            }),
            Hj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getNumPreferredPenetrationDirections_0 = function () {
                return (Hj = a._emscripten_bind_btConvexInternalAabbCachingShape_getNumPreferredPenetrationDirections_0 = a.asm.Kh).apply(null, arguments);
            }),
            Ij = (a._emscripten_bind_btConvexInternalAabbCachingShape_getPreferredPenetrationDirection_2 = function () {
                return (Ij = a._emscripten_bind_btConvexInternalAabbCachingShape_getPreferredPenetrationDirection_2 = a.asm.Lh).apply(null, arguments);
            }),
            Jj = (a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Jj = a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportingVertexWithoutMargin_1 = a.asm.Mh).apply(null, arguments);
            }),
            Kj = (a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (Kj = a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Nh).apply(null, arguments);
            }),
            Lj = (a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportVertexNonVirtual_1 = function () {
                return (Lj = a._emscripten_bind_btConvexInternalAabbCachingShape_localGetSupportVertexNonVirtual_1 = a.asm.Oh).apply(null, arguments);
            }),
            Mj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getMarginNonVirtual_0 = function () {
                return (Mj = a._emscripten_bind_btConvexInternalAabbCachingShape_getMarginNonVirtual_0 = a.asm.Ph).apply(null, arguments);
            }),
            Nj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getAabbNonVirtual_3 = function () {
                return (Nj = a._emscripten_bind_btConvexInternalAabbCachingShape_getAabbNonVirtual_3 = a.asm.Qh).apply(null, arguments);
            }),
            Oj = (a._emscripten_bind_btConvexInternalAabbCachingShape_project_6 = function () {
                return (Oj = a._emscripten_bind_btConvexInternalAabbCachingShape_project_6 = a.asm.Rh).apply(null, arguments);
            }),
            Pj = (a._emscripten_bind_btConvexInternalAabbCachingShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Pj = a._emscripten_bind_btConvexInternalAabbCachingShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Sh).apply(null, arguments);
            }),
            Qj = (a._emscripten_bind_btConvexInternalAabbCachingShape_getLocalScaling_0 = function () {
                return (Qj = a._emscripten_bind_btConvexInternalAabbCachingShape_getLocalScaling_0 = a.asm.Th).apply(null, arguments);
            }),
            Rj = (a._emscripten_bind_btConvexInternalAabbCachingShape___destroy___0 = function () {
                return (Rj = a._emscripten_bind_btConvexInternalAabbCachingShape___destroy___0 = a.asm.Uh).apply(null, arguments);
            }),
            Sj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setLocalScaling_1 = function () {
                return (Sj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setLocalScaling_1 = a.asm.Vh).apply(null, arguments);
            }),
            Tj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabb_3 = function () {
                return (Tj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabb_3 = a.asm.Wh).apply(null, arguments);
            }),
            Uj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_recalcLocalAabb_0 = function () {
                return (Uj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_recalcLocalAabb_0 = a.asm.Xh).apply(null, arguments);
            }),
            Vj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAngularMotionDisc_0 = function () {
                return (Vj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAngularMotionDisc_0 = a.asm.Yh).apply(null, arguments);
            }),
            Wj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getContactBreakingThreshold_1 = function () {
                return (Wj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getContactBreakingThreshold_1 = a.asm.Zh).apply(null, arguments);
            }),
            Xj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_calculateTemporalAabb_6 = function () {
                return (Xj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_calculateTemporalAabb_6 = a.asm._h).apply(null, arguments);
            }),
            Yj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isPolyhedral_0 = function () {
                return (Yj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isPolyhedral_0 = a.asm.$h).apply(null, arguments);
            }),
            Zj = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConvex2d_0 = function () {
                return (Zj = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConvex2d_0 = a.asm.ai).apply(null, arguments);
            }),
            ak = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConvex_0 = function () {
                return (ak = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConvex_0 = a.asm.bi).apply(null, arguments);
            }),
            bk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isNonMoving_0 = function () {
                return (bk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isNonMoving_0 = a.asm.ci).apply(null, arguments);
            }),
            ck = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConcave_0 = function () {
                return (ck = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isConcave_0 = a.asm.di).apply(null, arguments);
            }),
            dk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isCompound_0 = function () {
                return (dk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isCompound_0 = a.asm.ei).apply(null, arguments);
            }),
            ek = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isSoftBody_0 = function () {
                return (ek = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isSoftBody_0 = a.asm.fi).apply(null, arguments);
            }),
            fk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isInfinite_0 = function () {
                return (fk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isInfinite_0 = a.asm.gi).apply(null, arguments);
            }),
            gk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getName_0 = function () {
                return (gk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getName_0 = a.asm.hi).apply(null, arguments);
            }),
            hk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getShapeType_0 = function () {
                return (hk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getShapeType_0 = a.asm.ii).apply(null, arguments);
            }),
            ik = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (ik = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAnisotropicRollingFrictionDirection_0 = a.asm.ji).apply(null, arguments);
            }),
            jk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserPointer_1 = function () {
                return (jk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserPointer_1 = a.asm.ki).apply(null, arguments);
            }),
            kk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserPointer_0 = function () {
                return (kk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserPointer_0 = a.asm.li).apply(null, arguments);
            }),
            lk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserIndex_1 = function () {
                return (lk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserIndex_1 = a.asm.mi).apply(null, arguments);
            }),
            mk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserIndex_0 = function () {
                return (mk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserIndex_0 = a.asm.ni).apply(null, arguments);
            }),
            nk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserIndex2_1 = function () {
                return (nk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setUserIndex2_1 = a.asm.oi).apply(null, arguments);
            }),
            ok = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserIndex2_0 = function () {
                return (ok = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getUserIndex2_0 = a.asm.pi).apply(null, arguments);
            }),
            pk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportingVertex_1 = function () {
                return (pk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportingVertex_1 = a.asm.qi).apply(null, arguments);
            }),
            qk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getImplicitShapeDimensions_0 = function () {
                return (qk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getImplicitShapeDimensions_0 = a.asm.ri).apply(null, arguments);
            }),
            rk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setImplicitShapeDimensions_1 = function () {
                return (rk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setImplicitShapeDimensions_1 = a.asm.si).apply(null, arguments);
            }),
            sk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setSafeMargin_1 = function () {
                return (sk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setSafeMargin_1 = a.asm.ti).apply(null, arguments);
            }),
            tk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setSafeMargin_2 = function () {
                return (tk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setSafeMargin_2 = a.asm.ui).apply(null, arguments);
            }),
            uk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabbSlow_3 = function () {
                return (uk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabbSlow_3 = a.asm.vi).apply(null, arguments);
            }),
            vk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setMargin_1 = function () {
                return (vk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setMargin_1 = a.asm.wi).apply(null, arguments);
            }),
            wk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getMargin_0 = function () {
                return (wk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getMargin_0 = a.asm.xi).apply(null, arguments);
            }),
            xk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumPreferredPenetrationDirections_0 = function () {
                return (xk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumPreferredPenetrationDirections_0 = a.asm.yi).apply(null, arguments);
            }),
            yk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getPreferredPenetrationDirection_2 = function () {
                return (yk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getPreferredPenetrationDirection_2 = a.asm.zi).apply(null, arguments);
            }),
            zk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (zk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Ai).apply(null, arguments);
            }),
            Ak = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportVertexNonVirtual_1 = function () {
                return (Ak = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportVertexNonVirtual_1 = a.asm.Bi).apply(null, arguments);
            }),
            Bk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getMarginNonVirtual_0 = function () {
                return (Bk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getMarginNonVirtual_0 = a.asm.Ci).apply(null, arguments);
            }),
            Ck = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabbNonVirtual_3 = function () {
                return (Ck = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getAabbNonVirtual_3 = a.asm.Di).apply(null, arguments);
            }),
            Dk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_project_6 = function () {
                return (Dk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_project_6 = a.asm.Ei).apply(null, arguments);
            }),
            Ek = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getLocalScaling_0 = function () {
                return (Ek = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getLocalScaling_0 = a.asm.Fi).apply(null, arguments);
            }),
            Fk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_initializePolyhedralFeatures_0 = function () {
                return (Fk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_initializePolyhedralFeatures_0 = a.asm.Gi).apply(null, arguments);
            }),
            Gk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_initializePolyhedralFeatures_1 = function () {
                return (Gk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_initializePolyhedralFeatures_1 = a.asm.Hi).apply(null, arguments);
            }),
            Hk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setPolyhedralFeatures_1 = function () {
                return (Hk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_setPolyhedralFeatures_1 = a.asm.Ii).apply(null, arguments);
            }),
            Ik = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getConvexPolyhedron_0 = function () {
                return (Ik = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getConvexPolyhedron_0 = a.asm.Ji).apply(null, arguments);
            }),
            Jk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Jk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_localGetSupportingVertexWithoutMargin_1 = a.asm.Ki).apply(null, arguments);
            }),
            Kk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Kk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Li).apply(null, arguments);
            }),
            Lk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_calculateLocalInertia_2 = function () {
                return (Lk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_calculateLocalInertia_2 = a.asm.Mi).apply(null, arguments);
            }),
            Mk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumVertices_0 = function () {
                return (Mk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumVertices_0 = a.asm.Ni).apply(null, arguments);
            }),
            Nk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumEdges_0 = function () {
                return (Nk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumEdges_0 = a.asm.Oi).apply(null, arguments);
            }),
            Ok = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getEdge_3 = function () {
                return (Ok = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getEdge_3 = a.asm.Pi).apply(null, arguments);
            }),
            Pk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getVertex_2 = function () {
                return (Pk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getVertex_2 = a.asm.Qi).apply(null, arguments);
            }),
            Qk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumPlanes_0 = function () {
                return (Qk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getNumPlanes_0 = a.asm.Ri).apply(null, arguments);
            }),
            Rk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getPlane_3 = function () {
                return (Rk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_getPlane_3 = a.asm.Si).apply(null, arguments);
            }),
            Sk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isInside_2 = function () {
                return (Sk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape_isInside_2 = a.asm.Ti).apply(null, arguments);
            }),
            Tk = (a._emscripten_bind_btPolyhedralConvexAabbCachingShape___destroy___0 = function () {
                return (Tk = a._emscripten_bind_btPolyhedralConvexAabbCachingShape___destroy___0 = a.asm.Ui).apply(null, arguments);
            }),
            Uk = (a._emscripten_bind_btCapsuleShape_btCapsuleShape_2 = function () {
                return (Uk = a._emscripten_bind_btCapsuleShape_btCapsuleShape_2 = a.asm.Vi).apply(null, arguments);
            }),
            Vk = (a._emscripten_bind_btCapsuleShape_calculateLocalInertia_2 = function () {
                return (Vk = a._emscripten_bind_btCapsuleShape_calculateLocalInertia_2 = a.asm.Wi).apply(null, arguments);
            }),
            Wk = (a._emscripten_bind_btCapsuleShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Wk = a._emscripten_bind_btCapsuleShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Xi).apply(null, arguments);
            }),
            Xk = (a._emscripten_bind_btCapsuleShape_setMargin_1 = function () {
                return (Xk = a._emscripten_bind_btCapsuleShape_setMargin_1 = a.asm.Yi).apply(null, arguments);
            }),
            Yk = (a._emscripten_bind_btCapsuleShape_getAabb_3 = function () {
                return (Yk = a._emscripten_bind_btCapsuleShape_getAabb_3 = a.asm.Zi).apply(null, arguments);
            }),
            Zk = (a._emscripten_bind_btCapsuleShape_getName_0 = function () {
                return (Zk = a._emscripten_bind_btCapsuleShape_getName_0 = a.asm._i).apply(null, arguments);
            }),
            $k = (a._emscripten_bind_btCapsuleShape_getUpAxis_0 = function () {
                return ($k = a._emscripten_bind_btCapsuleShape_getUpAxis_0 = a.asm.$i).apply(null, arguments);
            }),
            al = (a._emscripten_bind_btCapsuleShape_getRadius_0 = function () {
                return (al = a._emscripten_bind_btCapsuleShape_getRadius_0 = a.asm.aj).apply(null, arguments);
            }),
            bl = (a._emscripten_bind_btCapsuleShape_getHalfHeight_0 = function () {
                return (bl = a._emscripten_bind_btCapsuleShape_getHalfHeight_0 = a.asm.bj).apply(null, arguments);
            }),
            cl = (a._emscripten_bind_btCapsuleShape_setLocalScaling_1 = function () {
                return (cl = a._emscripten_bind_btCapsuleShape_setLocalScaling_1 = a.asm.cj).apply(null, arguments);
            }),
            dl = (a._emscripten_bind_btCapsuleShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (dl = a._emscripten_bind_btCapsuleShape_getAnisotropicRollingFrictionDirection_0 = a.asm.dj).apply(null, arguments);
            }),
            el = (a._emscripten_bind_btCapsuleShape_getAngularMotionDisc_0 = function () {
                return (el = a._emscripten_bind_btCapsuleShape_getAngularMotionDisc_0 = a.asm.ej).apply(null, arguments);
            }),
            fl = (a._emscripten_bind_btCapsuleShape_getContactBreakingThreshold_1 = function () {
                return (fl = a._emscripten_bind_btCapsuleShape_getContactBreakingThreshold_1 = a.asm.fj).apply(null, arguments);
            }),
            gl = (a._emscripten_bind_btCapsuleShape_calculateTemporalAabb_6 = function () {
                return (gl = a._emscripten_bind_btCapsuleShape_calculateTemporalAabb_6 = a.asm.gj).apply(null, arguments);
            }),
            hl = (a._emscripten_bind_btCapsuleShape_isPolyhedral_0 = function () {
                return (hl = a._emscripten_bind_btCapsuleShape_isPolyhedral_0 = a.asm.hj).apply(null, arguments);
            }),
            il = (a._emscripten_bind_btCapsuleShape_isConvex2d_0 = function () {
                return (il = a._emscripten_bind_btCapsuleShape_isConvex2d_0 = a.asm.ij).apply(null, arguments);
            }),
            jl = (a._emscripten_bind_btCapsuleShape_isConvex_0 = function () {
                return (jl = a._emscripten_bind_btCapsuleShape_isConvex_0 = a.asm.jj).apply(null, arguments);
            }),
            kl = (a._emscripten_bind_btCapsuleShape_isNonMoving_0 = function () {
                return (kl = a._emscripten_bind_btCapsuleShape_isNonMoving_0 = a.asm.kj).apply(null, arguments);
            }),
            ll = (a._emscripten_bind_btCapsuleShape_isConcave_0 = function () {
                return (ll = a._emscripten_bind_btCapsuleShape_isConcave_0 = a.asm.lj).apply(null, arguments);
            }),
            ml = (a._emscripten_bind_btCapsuleShape_isCompound_0 = function () {
                return (ml = a._emscripten_bind_btCapsuleShape_isCompound_0 = a.asm.mj).apply(null, arguments);
            }),
            nl = (a._emscripten_bind_btCapsuleShape_isSoftBody_0 = function () {
                return (nl = a._emscripten_bind_btCapsuleShape_isSoftBody_0 = a.asm.nj).apply(null, arguments);
            }),
            ol = (a._emscripten_bind_btCapsuleShape_isInfinite_0 = function () {
                return (ol = a._emscripten_bind_btCapsuleShape_isInfinite_0 = a.asm.oj).apply(null, arguments);
            }),
            pl = (a._emscripten_bind_btCapsuleShape_getShapeType_0 = function () {
                return (pl = a._emscripten_bind_btCapsuleShape_getShapeType_0 = a.asm.pj).apply(null, arguments);
            }),
            ql = (a._emscripten_bind_btCapsuleShape_setUserPointer_1 = function () {
                return (ql = a._emscripten_bind_btCapsuleShape_setUserPointer_1 = a.asm.qj).apply(null, arguments);
            }),
            rl = (a._emscripten_bind_btCapsuleShape_getUserPointer_0 = function () {
                return (rl = a._emscripten_bind_btCapsuleShape_getUserPointer_0 = a.asm.rj).apply(null, arguments);
            }),
            sl = (a._emscripten_bind_btCapsuleShape_setUserIndex_1 = function () {
                return (sl = a._emscripten_bind_btCapsuleShape_setUserIndex_1 = a.asm.sj).apply(null, arguments);
            }),
            tl = (a._emscripten_bind_btCapsuleShape_getUserIndex_0 = function () {
                return (tl = a._emscripten_bind_btCapsuleShape_getUserIndex_0 = a.asm.tj).apply(null, arguments);
            }),
            ul = (a._emscripten_bind_btCapsuleShape_setUserIndex2_1 = function () {
                return (ul = a._emscripten_bind_btCapsuleShape_setUserIndex2_1 = a.asm.uj).apply(null, arguments);
            }),
            vl = (a._emscripten_bind_btCapsuleShape_getUserIndex2_0 = function () {
                return (vl = a._emscripten_bind_btCapsuleShape_getUserIndex2_0 = a.asm.vj).apply(null, arguments);
            }),
            wl = (a._emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0 = function () {
                return (wl = a._emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0 = a.asm.wj).apply(null, arguments);
            }),
            xl = (a._emscripten_bind_btCapsuleShape_setImplicitShapeDimensions_1 = function () {
                return (xl = a._emscripten_bind_btCapsuleShape_setImplicitShapeDimensions_1 = a.asm.xj).apply(null, arguments);
            }),
            yl = (a._emscripten_bind_btCapsuleShape_setSafeMargin_1 = function () {
                return (yl = a._emscripten_bind_btCapsuleShape_setSafeMargin_1 = a.asm.yj).apply(null, arguments);
            }),
            zl = (a._emscripten_bind_btCapsuleShape_setSafeMargin_2 = function () {
                return (zl = a._emscripten_bind_btCapsuleShape_setSafeMargin_2 = a.asm.zj).apply(null, arguments);
            }),
            Al = (a._emscripten_bind_btCapsuleShape_getAabbSlow_3 = function () {
                return (Al = a._emscripten_bind_btCapsuleShape_getAabbSlow_3 = a.asm.Aj).apply(null, arguments);
            }),
            Bl = (a._emscripten_bind_btCapsuleShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (Bl = a._emscripten_bind_btCapsuleShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Bj).apply(null, arguments);
            }),
            Cl = (a._emscripten_bind_btCapsuleShape_localGetSupportVertexNonVirtual_1 = function () {
                return (Cl = a._emscripten_bind_btCapsuleShape_localGetSupportVertexNonVirtual_1 = a.asm.Cj).apply(null, arguments);
            }),
            Dl = (a._emscripten_bind_btCapsuleShape_getMarginNonVirtual_0 = function () {
                return (Dl = a._emscripten_bind_btCapsuleShape_getMarginNonVirtual_0 = a.asm.Dj).apply(null, arguments);
            }),
            El = (a._emscripten_bind_btCapsuleShape_getAabbNonVirtual_3 = function () {
                return (El = a._emscripten_bind_btCapsuleShape_getAabbNonVirtual_3 = a.asm.Ej).apply(null, arguments);
            }),
            Fl = (a._emscripten_bind_btCapsuleShape_project_6 = function () {
                return (Fl = a._emscripten_bind_btCapsuleShape_project_6 = a.asm.Fj).apply(null, arguments);
            }),
            Gl = (a._emscripten_bind_btCapsuleShape___destroy___0 = function () {
                return (Gl = a._emscripten_bind_btCapsuleShape___destroy___0 = a.asm.Gj).apply(null, arguments);
            }),
            Hl = (a._emscripten_bind_btCylinderShape_btCylinderShape_1 = function () {
                return (Hl = a._emscripten_bind_btCylinderShape_btCylinderShape_1 = a.asm.Hj).apply(null, arguments);
            }),
            Il = (a._emscripten_bind_btCylinderShape_getHalfExtentsWithMargin_0 = function () {
                return (Il = a._emscripten_bind_btCylinderShape_getHalfExtentsWithMargin_0 = a.asm.Ij).apply(null, arguments);
            }),
            Jl = (a._emscripten_bind_btCylinderShape_getHalfExtentsWithoutMargin_0 = function () {
                return (Jl = a._emscripten_bind_btCylinderShape_getHalfExtentsWithoutMargin_0 = a.asm.Jj).apply(null, arguments);
            }),
            Kl = (a._emscripten_bind_btCylinderShape_getAabb_3 = function () {
                return (Kl = a._emscripten_bind_btCylinderShape_getAabb_3 = a.asm.Kj).apply(null, arguments);
            }),
            Ll = (a._emscripten_bind_btCylinderShape_calculateLocalInertia_2 = function () {
                return (Ll = a._emscripten_bind_btCylinderShape_calculateLocalInertia_2 = a.asm.Lj).apply(null, arguments);
            }),
            Ml = (a._emscripten_bind_btCylinderShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Ml = a._emscripten_bind_btCylinderShape_localGetSupportingVertexWithoutMargin_1 = a.asm.Mj).apply(null, arguments);
            }),
            Nl = (a._emscripten_bind_btCylinderShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Nl = a._emscripten_bind_btCylinderShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Nj).apply(null, arguments);
            }),
            Ol = (a._emscripten_bind_btCylinderShape_setMargin_1 = function () {
                return (Ol = a._emscripten_bind_btCylinderShape_setMargin_1 = a.asm.Oj).apply(null, arguments);
            }),
            Pl = (a._emscripten_bind_btCylinderShape_localGetSupportingVertex_1 = function () {
                return (Pl = a._emscripten_bind_btCylinderShape_localGetSupportingVertex_1 = a.asm.Pj).apply(null, arguments);
            }),
            Ql = (a._emscripten_bind_btCylinderShape_getUpAxis_0 = function () {
                return (Ql = a._emscripten_bind_btCylinderShape_getUpAxis_0 = a.asm.Qj).apply(null, arguments);
            }),
            Rl = (a._emscripten_bind_btCylinderShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (Rl = a._emscripten_bind_btCylinderShape_getAnisotropicRollingFrictionDirection_0 = a.asm.Rj).apply(null, arguments);
            }),
            Sl = (a._emscripten_bind_btCylinderShape_getRadius_0 = function () {
                return (Sl = a._emscripten_bind_btCylinderShape_getRadius_0 = a.asm.Sj).apply(null, arguments);
            }),
            Tl = (a._emscripten_bind_btCylinderShape_setLocalScaling_1 = function () {
                return (Tl = a._emscripten_bind_btCylinderShape_setLocalScaling_1 = a.asm.Tj).apply(null, arguments);
            }),
            Ul = (a._emscripten_bind_btCylinderShape_getName_0 = function () {
                return (Ul = a._emscripten_bind_btCylinderShape_getName_0 = a.asm.Uj).apply(null, arguments);
            }),
            Vl = (a._emscripten_bind_btCylinderShape_getAngularMotionDisc_0 = function () {
                return (Vl = a._emscripten_bind_btCylinderShape_getAngularMotionDisc_0 = a.asm.Vj).apply(null, arguments);
            }),
            Wl = (a._emscripten_bind_btCylinderShape_getContactBreakingThreshold_1 = function () {
                return (Wl = a._emscripten_bind_btCylinderShape_getContactBreakingThreshold_1 = a.asm.Wj).apply(null, arguments);
            }),
            Xl = (a._emscripten_bind_btCylinderShape_calculateTemporalAabb_6 = function () {
                return (Xl = a._emscripten_bind_btCylinderShape_calculateTemporalAabb_6 = a.asm.Xj).apply(null, arguments);
            }),
            Yl = (a._emscripten_bind_btCylinderShape_isPolyhedral_0 = function () {
                return (Yl = a._emscripten_bind_btCylinderShape_isPolyhedral_0 = a.asm.Yj).apply(null, arguments);
            }),
            Zl = (a._emscripten_bind_btCylinderShape_isConvex2d_0 = function () {
                return (Zl = a._emscripten_bind_btCylinderShape_isConvex2d_0 = a.asm.Zj).apply(null, arguments);
            }),
            $l = (a._emscripten_bind_btCylinderShape_isConvex_0 = function () {
                return ($l = a._emscripten_bind_btCylinderShape_isConvex_0 = a.asm._j).apply(null, arguments);
            }),
            am = (a._emscripten_bind_btCylinderShape_isNonMoving_0 = function () {
                return (am = a._emscripten_bind_btCylinderShape_isNonMoving_0 = a.asm.$j).apply(null, arguments);
            }),
            bm = (a._emscripten_bind_btCylinderShape_isConcave_0 = function () {
                return (bm = a._emscripten_bind_btCylinderShape_isConcave_0 = a.asm.ak).apply(null, arguments);
            }),
            cm = (a._emscripten_bind_btCylinderShape_isCompound_0 = function () {
                return (cm = a._emscripten_bind_btCylinderShape_isCompound_0 = a.asm.bk).apply(null, arguments);
            }),
            dm = (a._emscripten_bind_btCylinderShape_isSoftBody_0 = function () {
                return (dm = a._emscripten_bind_btCylinderShape_isSoftBody_0 = a.asm.ck).apply(null, arguments);
            }),
            em = (a._emscripten_bind_btCylinderShape_isInfinite_0 = function () {
                return (em = a._emscripten_bind_btCylinderShape_isInfinite_0 = a.asm.dk).apply(null, arguments);
            }),
            fm = (a._emscripten_bind_btCylinderShape_getShapeType_0 = function () {
                return (fm = a._emscripten_bind_btCylinderShape_getShapeType_0 = a.asm.ek).apply(null, arguments);
            }),
            gm = (a._emscripten_bind_btCylinderShape_setUserPointer_1 = function () {
                return (gm = a._emscripten_bind_btCylinderShape_setUserPointer_1 = a.asm.fk).apply(null, arguments);
            }),
            hm = (a._emscripten_bind_btCylinderShape_getUserPointer_0 = function () {
                return (hm = a._emscripten_bind_btCylinderShape_getUserPointer_0 = a.asm.gk).apply(null, arguments);
            }),
            im = (a._emscripten_bind_btCylinderShape_setUserIndex_1 = function () {
                return (im = a._emscripten_bind_btCylinderShape_setUserIndex_1 = a.asm.hk).apply(null, arguments);
            }),
            jm = (a._emscripten_bind_btCylinderShape_getUserIndex_0 = function () {
                return (jm = a._emscripten_bind_btCylinderShape_getUserIndex_0 = a.asm.ik).apply(null, arguments);
            }),
            km = (a._emscripten_bind_btCylinderShape_setUserIndex2_1 = function () {
                return (km = a._emscripten_bind_btCylinderShape_setUserIndex2_1 = a.asm.jk).apply(null, arguments);
            }),
            lm = (a._emscripten_bind_btCylinderShape_getUserIndex2_0 = function () {
                return (lm = a._emscripten_bind_btCylinderShape_getUserIndex2_0 = a.asm.kk).apply(null, arguments);
            }),
            mm = (a._emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0 = function () {
                return (mm = a._emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0 = a.asm.lk).apply(null, arguments);
            }),
            nm = (a._emscripten_bind_btCylinderShape_setImplicitShapeDimensions_1 = function () {
                return (nm = a._emscripten_bind_btCylinderShape_setImplicitShapeDimensions_1 = a.asm.mk).apply(null, arguments);
            }),
            om = (a._emscripten_bind_btCylinderShape_setSafeMargin_1 = function () {
                return (om = a._emscripten_bind_btCylinderShape_setSafeMargin_1 = a.asm.nk).apply(null, arguments);
            }),
            pm = (a._emscripten_bind_btCylinderShape_setSafeMargin_2 = function () {
                return (pm = a._emscripten_bind_btCylinderShape_setSafeMargin_2 = a.asm.ok).apply(null, arguments);
            }),
            qm = (a._emscripten_bind_btCylinderShape_getAabbSlow_3 = function () {
                return (qm = a._emscripten_bind_btCylinderShape_getAabbSlow_3 = a.asm.pk).apply(null, arguments);
            }),
            rm = (a._emscripten_bind_btCylinderShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (rm = a._emscripten_bind_btCylinderShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.qk).apply(null, arguments);
            }),
            sm = (a._emscripten_bind_btCylinderShape_localGetSupportVertexNonVirtual_1 = function () {
                return (sm = a._emscripten_bind_btCylinderShape_localGetSupportVertexNonVirtual_1 = a.asm.rk).apply(null, arguments);
            }),
            tm = (a._emscripten_bind_btCylinderShape_getMarginNonVirtual_0 = function () {
                return (tm = a._emscripten_bind_btCylinderShape_getMarginNonVirtual_0 = a.asm.sk).apply(null, arguments);
            }),
            um = (a._emscripten_bind_btCylinderShape_getAabbNonVirtual_3 = function () {
                return (um = a._emscripten_bind_btCylinderShape_getAabbNonVirtual_3 = a.asm.tk).apply(null, arguments);
            }),
            wm = (a._emscripten_bind_btCylinderShape_project_6 = function () {
                return (wm = a._emscripten_bind_btCylinderShape_project_6 = a.asm.uk).apply(null, arguments);
            }),
            xm = (a._emscripten_bind_btCylinderShape___destroy___0 = function () {
                return (xm = a._emscripten_bind_btCylinderShape___destroy___0 = a.asm.vk).apply(null, arguments);
            }),
            ym = (a._emscripten_bind_btConeShape_btConeShape_2 = function () {
                return (ym = a._emscripten_bind_btConeShape_btConeShape_2 = a.asm.wk).apply(null, arguments);
            }),
            zm = (a._emscripten_bind_btConeShape_localGetSupportingVertex_1 = function () {
                return (zm = a._emscripten_bind_btConeShape_localGetSupportingVertex_1 = a.asm.xk).apply(null, arguments);
            }),
            Am = (a._emscripten_bind_btConeShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (Am = a._emscripten_bind_btConeShape_localGetSupportingVertexWithoutMargin_1 = a.asm.yk).apply(null, arguments);
            }),
            Bm = (a._emscripten_bind_btConeShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (Bm = a._emscripten_bind_btConeShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.zk).apply(null, arguments);
            }),
            Cm = (a._emscripten_bind_btConeShape_getRadius_0 = function () {
                return (Cm = a._emscripten_bind_btConeShape_getRadius_0 = a.asm.Ak).apply(null, arguments);
            }),
            Dm = (a._emscripten_bind_btConeShape_getHeight_0 = function () {
                return (Dm = a._emscripten_bind_btConeShape_getHeight_0 = a.asm.Bk).apply(null, arguments);
            }),
            Em = (a._emscripten_bind_btConeShape_setRadius_1 = function () {
                return (Em = a._emscripten_bind_btConeShape_setRadius_1 = a.asm.Ck).apply(null, arguments);
            }),
            Fm = (a._emscripten_bind_btConeShape_setHeight_1 = function () {
                return (Fm = a._emscripten_bind_btConeShape_setHeight_1 = a.asm.Dk).apply(null, arguments);
            }),
            Gm = (a._emscripten_bind_btConeShape_calculateLocalInertia_2 = function () {
                return (Gm = a._emscripten_bind_btConeShape_calculateLocalInertia_2 = a.asm.Ek).apply(null, arguments);
            }),
            Hm = (a._emscripten_bind_btConeShape_getName_0 = function () {
                return (Hm = a._emscripten_bind_btConeShape_getName_0 = a.asm.Fk).apply(null, arguments);
            }),
            Im = (a._emscripten_bind_btConeShape_setConeUpIndex_1 = function () {
                return (Im = a._emscripten_bind_btConeShape_setConeUpIndex_1 = a.asm.Gk).apply(null, arguments);
            }),
            Jm = (a._emscripten_bind_btConeShape_getConeUpIndex_0 = function () {
                return (Jm = a._emscripten_bind_btConeShape_getConeUpIndex_0 = a.asm.Hk).apply(null, arguments);
            }),
            Km = (a._emscripten_bind_btConeShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (Km = a._emscripten_bind_btConeShape_getAnisotropicRollingFrictionDirection_0 = a.asm.Ik).apply(null, arguments);
            }),
            Lm = (a._emscripten_bind_btConeShape_setLocalScaling_1 = function () {
                return (Lm = a._emscripten_bind_btConeShape_setLocalScaling_1 = a.asm.Jk).apply(null, arguments);
            }),
            Mm = (a._emscripten_bind_btConeShape_getAngularMotionDisc_0 = function () {
                return (Mm = a._emscripten_bind_btConeShape_getAngularMotionDisc_0 = a.asm.Kk).apply(null, arguments);
            }),
            Nm = (a._emscripten_bind_btConeShape_getContactBreakingThreshold_1 = function () {
                return (Nm = a._emscripten_bind_btConeShape_getContactBreakingThreshold_1 = a.asm.Lk).apply(null, arguments);
            }),
            Om = (a._emscripten_bind_btConeShape_calculateTemporalAabb_6 = function () {
                return (Om = a._emscripten_bind_btConeShape_calculateTemporalAabb_6 = a.asm.Mk).apply(null, arguments);
            }),
            Pm = (a._emscripten_bind_btConeShape_isPolyhedral_0 = function () {
                return (Pm = a._emscripten_bind_btConeShape_isPolyhedral_0 = a.asm.Nk).apply(null, arguments);
            }),
            Qm = (a._emscripten_bind_btConeShape_isConvex2d_0 = function () {
                return (Qm = a._emscripten_bind_btConeShape_isConvex2d_0 = a.asm.Ok).apply(null, arguments);
            }),
            Rm = (a._emscripten_bind_btConeShape_isConvex_0 = function () {
                return (Rm = a._emscripten_bind_btConeShape_isConvex_0 = a.asm.Pk).apply(null, arguments);
            }),
            Sm = (a._emscripten_bind_btConeShape_isNonMoving_0 = function () {
                return (Sm = a._emscripten_bind_btConeShape_isNonMoving_0 = a.asm.Qk).apply(null, arguments);
            }),
            Tm = (a._emscripten_bind_btConeShape_isConcave_0 = function () {
                return (Tm = a._emscripten_bind_btConeShape_isConcave_0 = a.asm.Rk).apply(null, arguments);
            }),
            Um = (a._emscripten_bind_btConeShape_isCompound_0 = function () {
                return (Um = a._emscripten_bind_btConeShape_isCompound_0 = a.asm.Sk).apply(null, arguments);
            }),
            Vm = (a._emscripten_bind_btConeShape_isSoftBody_0 = function () {
                return (Vm = a._emscripten_bind_btConeShape_isSoftBody_0 = a.asm.Tk).apply(null, arguments);
            }),
            Wm = (a._emscripten_bind_btConeShape_isInfinite_0 = function () {
                return (Wm = a._emscripten_bind_btConeShape_isInfinite_0 = a.asm.Uk).apply(null, arguments);
            }),
            Xm = (a._emscripten_bind_btConeShape_getShapeType_0 = function () {
                return (Xm = a._emscripten_bind_btConeShape_getShapeType_0 = a.asm.Vk).apply(null, arguments);
            }),
            Ym = (a._emscripten_bind_btConeShape_setUserPointer_1 = function () {
                return (Ym = a._emscripten_bind_btConeShape_setUserPointer_1 = a.asm.Wk).apply(null, arguments);
            }),
            Zm = (a._emscripten_bind_btConeShape_getUserPointer_0 = function () {
                return (Zm = a._emscripten_bind_btConeShape_getUserPointer_0 = a.asm.Xk).apply(null, arguments);
            }),
            $m = (a._emscripten_bind_btConeShape_setUserIndex_1 = function () {
                return ($m = a._emscripten_bind_btConeShape_setUserIndex_1 = a.asm.Yk).apply(null, arguments);
            }),
            an = (a._emscripten_bind_btConeShape_getUserIndex_0 = function () {
                return (an = a._emscripten_bind_btConeShape_getUserIndex_0 = a.asm.Zk).apply(null, arguments);
            }),
            bn = (a._emscripten_bind_btConeShape_setUserIndex2_1 = function () {
                return (bn = a._emscripten_bind_btConeShape_setUserIndex2_1 = a.asm._k).apply(null, arguments);
            }),
            cn = (a._emscripten_bind_btConeShape_getUserIndex2_0 = function () {
                return (cn = a._emscripten_bind_btConeShape_getUserIndex2_0 = a.asm.$k).apply(null, arguments);
            }),
            dn = (a._emscripten_bind_btConeShape_getImplicitShapeDimensions_0 = function () {
                return (dn = a._emscripten_bind_btConeShape_getImplicitShapeDimensions_0 = a.asm.al).apply(null, arguments);
            }),
            en = (a._emscripten_bind_btConeShape_setImplicitShapeDimensions_1 = function () {
                return (en = a._emscripten_bind_btConeShape_setImplicitShapeDimensions_1 = a.asm.bl).apply(null, arguments);
            }),
            fn = (a._emscripten_bind_btConeShape_setSafeMargin_1 = function () {
                return (fn = a._emscripten_bind_btConeShape_setSafeMargin_1 = a.asm.cl).apply(null, arguments);
            }),
            gn = (a._emscripten_bind_btConeShape_setSafeMargin_2 = function () {
                return (gn = a._emscripten_bind_btConeShape_setSafeMargin_2 = a.asm.dl).apply(null, arguments);
            }),
            hn = (a._emscripten_bind_btConeShape_getAabbSlow_3 = function () {
                return (hn = a._emscripten_bind_btConeShape_getAabbSlow_3 = a.asm.el).apply(null, arguments);
            }),
            jn = (a._emscripten_bind_btConeShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (jn = a._emscripten_bind_btConeShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.fl).apply(null, arguments);
            }),
            kn = (a._emscripten_bind_btConeShape_localGetSupportVertexNonVirtual_1 = function () {
                return (kn = a._emscripten_bind_btConeShape_localGetSupportVertexNonVirtual_1 = a.asm.gl).apply(null, arguments);
            }),
            ln = (a._emscripten_bind_btConeShape_getMarginNonVirtual_0 = function () {
                return (ln = a._emscripten_bind_btConeShape_getMarginNonVirtual_0 = a.asm.hl).apply(null, arguments);
            }),
            mn = (a._emscripten_bind_btConeShape_getAabbNonVirtual_3 = function () {
                return (mn = a._emscripten_bind_btConeShape_getAabbNonVirtual_3 = a.asm.il).apply(null, arguments);
            }),
            nn = (a._emscripten_bind_btConeShape_project_6 = function () {
                return (nn = a._emscripten_bind_btConeShape_project_6 = a.asm.jl).apply(null, arguments);
            }),
            on = (a._emscripten_bind_btConeShape___destroy___0 = function () {
                return (on = a._emscripten_bind_btConeShape___destroy___0 = a.asm.kl).apply(null, arguments);
            }),
            pn = (a._emscripten_bind_btTriangleIndexVertexArray_btTriangleIndexVertexArray_0 = function () {
                return (pn = a._emscripten_bind_btTriangleIndexVertexArray_btTriangleIndexVertexArray_0 = a.asm.ll).apply(null, arguments);
            }),
            qn = (a._emscripten_bind_btTriangleIndexVertexArray_btTriangleIndexVertexArray_6 = function () {
                return (qn = a._emscripten_bind_btTriangleIndexVertexArray_btTriangleIndexVertexArray_6 = a.asm.ml).apply(null, arguments);
            }),
            rn = (a._emscripten_bind_btTriangleIndexVertexArray_addIndexedMesh_1 = function () {
                return (rn = a._emscripten_bind_btTriangleIndexVertexArray_addIndexedMesh_1 = a.asm.nl).apply(null, arguments);
            }),
            sn = (a._emscripten_bind_btTriangleIndexVertexArray_addIndexedMesh_2 = function () {
                return (sn = a._emscripten_bind_btTriangleIndexVertexArray_addIndexedMesh_2 = a.asm.ol).apply(null, arguments);
            }),
            tn = (a._emscripten_bind_btTriangleIndexVertexArray_unLockVertexBase_1 = function () {
                return (tn = a._emscripten_bind_btTriangleIndexVertexArray_unLockVertexBase_1 = a.asm.pl).apply(null, arguments);
            }),
            un = (a._emscripten_bind_btTriangleIndexVertexArray_unLockReadOnlyVertexBase_1 = function () {
                return (un = a._emscripten_bind_btTriangleIndexVertexArray_unLockReadOnlyVertexBase_1 = a.asm.ql).apply(null, arguments);
            }),
            vn = (a._emscripten_bind_btTriangleIndexVertexArray_getNumSubParts_0 = function () {
                return (vn = a._emscripten_bind_btTriangleIndexVertexArray_getNumSubParts_0 = a.asm.rl).apply(null, arguments);
            }),
            wn = (a._emscripten_bind_btTriangleIndexVertexArray_getIndexedMeshArray_0 = function () {
                return (wn = a._emscripten_bind_btTriangleIndexVertexArray_getIndexedMeshArray_0 = a.asm.sl).apply(null, arguments);
            }),
            xn = (a._emscripten_bind_btTriangleIndexVertexArray_preallocateVertices_1 = function () {
                return (xn = a._emscripten_bind_btTriangleIndexVertexArray_preallocateVertices_1 = a.asm.tl).apply(null, arguments);
            }),
            yn = (a._emscripten_bind_btTriangleIndexVertexArray_preallocateIndices_1 = function () {
                return (yn = a._emscripten_bind_btTriangleIndexVertexArray_preallocateIndices_1 = a.asm.ul).apply(null, arguments);
            }),
            zn = (a._emscripten_bind_btTriangleIndexVertexArray_hasPremadeAabb_0 = function () {
                return (zn = a._emscripten_bind_btTriangleIndexVertexArray_hasPremadeAabb_0 = a.asm.vl).apply(null, arguments);
            }),
            An = (a._emscripten_bind_btTriangleIndexVertexArray_setPremadeAabb_2 = function () {
                return (An = a._emscripten_bind_btTriangleIndexVertexArray_setPremadeAabb_2 = a.asm.wl).apply(null, arguments);
            }),
            Bn = (a._emscripten_bind_btTriangleIndexVertexArray_getPremadeAabb_2 = function () {
                return (Bn = a._emscripten_bind_btTriangleIndexVertexArray_getPremadeAabb_2 = a.asm.xl).apply(null, arguments);
            }),
            Cn = (a._emscripten_bind_btTriangleIndexVertexArray_InternalProcessAllTriangles_3 = function () {
                return (Cn = a._emscripten_bind_btTriangleIndexVertexArray_InternalProcessAllTriangles_3 = a.asm.yl).apply(null, arguments);
            }),
            Dn = (a._emscripten_bind_btTriangleIndexVertexArray_setScaling_1 = function () {
                return (Dn = a._emscripten_bind_btTriangleIndexVertexArray_setScaling_1 = a.asm.zl).apply(null, arguments);
            }),
            En = (a._emscripten_bind_btTriangleIndexVertexArray___destroy___0 = function () {
                return (En = a._emscripten_bind_btTriangleIndexVertexArray___destroy___0 = a.asm.Al).apply(null, arguments);
            }),
            Fn = (a._emscripten_bind_btTriangleMeshShape_getAngularMotionDisc_0 = function () {
                return (Fn = a._emscripten_bind_btTriangleMeshShape_getAngularMotionDisc_0 = a.asm.Bl).apply(null, arguments);
            }),
            Gn = (a._emscripten_bind_btTriangleMeshShape_getContactBreakingThreshold_1 = function () {
                return (Gn = a._emscripten_bind_btTriangleMeshShape_getContactBreakingThreshold_1 = a.asm.Cl).apply(null, arguments);
            }),
            Hn = (a._emscripten_bind_btTriangleMeshShape_calculateTemporalAabb_6 = function () {
                return (Hn = a._emscripten_bind_btTriangleMeshShape_calculateTemporalAabb_6 = a.asm.Dl).apply(null, arguments);
            }),
            In = (a._emscripten_bind_btTriangleMeshShape_isPolyhedral_0 = function () {
                return (In = a._emscripten_bind_btTriangleMeshShape_isPolyhedral_0 = a.asm.El).apply(null, arguments);
            }),
            Jn = (a._emscripten_bind_btTriangleMeshShape_isConvex2d_0 = function () {
                return (Jn = a._emscripten_bind_btTriangleMeshShape_isConvex2d_0 = a.asm.Fl).apply(null, arguments);
            }),
            Kn = (a._emscripten_bind_btTriangleMeshShape_isConvex_0 = function () {
                return (Kn = a._emscripten_bind_btTriangleMeshShape_isConvex_0 = a.asm.Gl).apply(null, arguments);
            }),
            Ln = (a._emscripten_bind_btTriangleMeshShape_isNonMoving_0 = function () {
                return (Ln = a._emscripten_bind_btTriangleMeshShape_isNonMoving_0 = a.asm.Hl).apply(null, arguments);
            }),
            Mn = (a._emscripten_bind_btTriangleMeshShape_isConcave_0 = function () {
                return (Mn = a._emscripten_bind_btTriangleMeshShape_isConcave_0 = a.asm.Il).apply(null, arguments);
            }),
            Nn = (a._emscripten_bind_btTriangleMeshShape_isCompound_0 = function () {
                return (Nn = a._emscripten_bind_btTriangleMeshShape_isCompound_0 = a.asm.Jl).apply(null, arguments);
            }),
            On = (a._emscripten_bind_btTriangleMeshShape_isSoftBody_0 = function () {
                return (On = a._emscripten_bind_btTriangleMeshShape_isSoftBody_0 = a.asm.Kl).apply(null, arguments);
            }),
            Pn = (a._emscripten_bind_btTriangleMeshShape_isInfinite_0 = function () {
                return (Pn = a._emscripten_bind_btTriangleMeshShape_isInfinite_0 = a.asm.Ll).apply(null, arguments);
            }),
            Qn = (a._emscripten_bind_btTriangleMeshShape_getShapeType_0 = function () {
                return (Qn = a._emscripten_bind_btTriangleMeshShape_getShapeType_0 = a.asm.Ml).apply(null, arguments);
            }),
            Rn = (a._emscripten_bind_btTriangleMeshShape_setUserPointer_1 = function () {
                return (Rn = a._emscripten_bind_btTriangleMeshShape_setUserPointer_1 = a.asm.Nl).apply(null, arguments);
            }),
            Sn = (a._emscripten_bind_btTriangleMeshShape_getUserPointer_0 = function () {
                return (Sn = a._emscripten_bind_btTriangleMeshShape_getUserPointer_0 = a.asm.Ol).apply(null, arguments);
            }),
            Tn = (a._emscripten_bind_btTriangleMeshShape_setUserIndex_1 = function () {
                return (Tn = a._emscripten_bind_btTriangleMeshShape_setUserIndex_1 = a.asm.Pl).apply(null, arguments);
            }),
            Un = (a._emscripten_bind_btTriangleMeshShape_getUserIndex_0 = function () {
                return (Un = a._emscripten_bind_btTriangleMeshShape_getUserIndex_0 = a.asm.Ql).apply(null, arguments);
            }),
            Vn = (a._emscripten_bind_btTriangleMeshShape_setUserIndex2_1 = function () {
                return (Vn = a._emscripten_bind_btTriangleMeshShape_setUserIndex2_1 = a.asm.Rl).apply(null, arguments);
            }),
            Wn = (a._emscripten_bind_btTriangleMeshShape_getUserIndex2_0 = function () {
                return (Wn = a._emscripten_bind_btTriangleMeshShape_getUserIndex2_0 = a.asm.Sl).apply(null, arguments);
            }),
            Xn = (a._emscripten_bind_btTriangleMeshShape_getMargin_0 = function () {
                return (Xn = a._emscripten_bind_btTriangleMeshShape_getMargin_0 = a.asm.Tl).apply(null, arguments);
            }),
            Yn = (a._emscripten_bind_btTriangleMeshShape_setMargin_1 = function () {
                return (Yn = a._emscripten_bind_btTriangleMeshShape_setMargin_1 = a.asm.Ul).apply(null, arguments);
            }),
            Zn = (a._emscripten_bind_btTriangleMeshShape___destroy___0 = function () {
                return (Zn = a._emscripten_bind_btTriangleMeshShape___destroy___0 = a.asm.Vl).apply(null, arguments);
            }),
            $n = (a._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 = function () {
                return ($n = a._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 = a.asm.Wl).apply(null, arguments);
            }),
            ao = (a._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 = function () {
                return (ao = a._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 = a.asm.Xl).apply(null, arguments);
            }),
            bo = (a._emscripten_bind_btDefaultCollisionConfiguration___destroy___0 = function () {
                return (bo = a._emscripten_bind_btDefaultCollisionConfiguration___destroy___0 = a.asm.Yl).apply(null, arguments);
            }),
            co = (a._emscripten_bind_btDispatcher_getNumManifolds_0 = function () {
                return (co = a._emscripten_bind_btDispatcher_getNumManifolds_0 = a.asm.Zl).apply(null, arguments);
            }),
            eo = (a._emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 = function () {
                return (eo = a._emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 = a.asm._l).apply(null, arguments);
            }),
            fo = (a._emscripten_bind_btDispatcher___destroy___0 = function () {
                return (fo = a._emscripten_bind_btDispatcher___destroy___0 = a.asm.$l).apply(null, arguments);
            }),
            go = (a._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 = function () {
                return (go = a._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 = a.asm.am).apply(null, arguments);
            }),
            ho = (a._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 = function () {
                return (ho = a._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 = a.asm.bm).apply(null, arguments);
            }),
            io = (a._emscripten_bind_btGeneric6DofConstraint_calculateTransforms_0 = function () {
                return (io = a._emscripten_bind_btGeneric6DofConstraint_calculateTransforms_0 = a.asm.cm).apply(null, arguments);
            }),
            jo = (a._emscripten_bind_btGeneric6DofConstraint_calculateTransforms_2 = function () {
                return (jo = a._emscripten_bind_btGeneric6DofConstraint_calculateTransforms_2 = a.asm.dm).apply(null, arguments);
            }),
            ko = (a._emscripten_bind_btGeneric6DofConstraint_getCalculatedTransformA_0 = function () {
                return (ko = a._emscripten_bind_btGeneric6DofConstraint_getCalculatedTransformA_0 = a.asm.em).apply(null, arguments);
            }),
            lo = (a._emscripten_bind_btGeneric6DofConstraint_getCalculatedTransformB_0 = function () {
                return (lo = a._emscripten_bind_btGeneric6DofConstraint_getCalculatedTransformB_0 = a.asm.fm).apply(null, arguments);
            }),
            mo = (a._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 = function () {
                return (mo = a._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 = a.asm.gm).apply(null, arguments);
            }),
            no = (a._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetB_0 = function () {
                return (no = a._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetB_0 = a.asm.hm).apply(null, arguments);
            }),
            oo = (a._emscripten_bind_btGeneric6DofConstraint_buildJacobian_0 = function () {
                return (oo = a._emscripten_bind_btGeneric6DofConstraint_buildJacobian_0 = a.asm.im).apply(null, arguments);
            }),
            po = (a._emscripten_bind_btGeneric6DofConstraint_updateRHS_1 = function () {
                return (po = a._emscripten_bind_btGeneric6DofConstraint_updateRHS_1 = a.asm.jm).apply(null, arguments);
            }),
            qo = (a._emscripten_bind_btGeneric6DofConstraint_getAxis_1 = function () {
                return (qo = a._emscripten_bind_btGeneric6DofConstraint_getAxis_1 = a.asm.km).apply(null, arguments);
            }),
            ro = (a._emscripten_bind_btGeneric6DofConstraint_getAngle_1 = function () {
                return (ro = a._emscripten_bind_btGeneric6DofConstraint_getAngle_1 = a.asm.lm).apply(null, arguments);
            }),
            so = (a._emscripten_bind_btGeneric6DofConstraint_getRelativePivotPosition_1 = function () {
                return (so = a._emscripten_bind_btGeneric6DofConstraint_getRelativePivotPosition_1 = a.asm.mm).apply(null, arguments);
            }),
            to = (a._emscripten_bind_btGeneric6DofConstraint_setFrames_2 = function () {
                return (to = a._emscripten_bind_btGeneric6DofConstraint_setFrames_2 = a.asm.nm).apply(null, arguments);
            }),
            uo = (a._emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 = function () {
                return (uo = a._emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 = a.asm.om).apply(null, arguments);
            }),
            vo = (a._emscripten_bind_btGeneric6DofConstraint_getLinearLowerLimit_1 = function () {
                return (vo = a._emscripten_bind_btGeneric6DofConstraint_getLinearLowerLimit_1 = a.asm.pm).apply(null, arguments);
            }),
            wo = (a._emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 = function () {
                return (wo = a._emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 = a.asm.qm).apply(null, arguments);
            }),
            xo = (a._emscripten_bind_btGeneric6DofConstraint_getLinearUpperLimit_1 = function () {
                return (xo = a._emscripten_bind_btGeneric6DofConstraint_getLinearUpperLimit_1 = a.asm.rm).apply(null, arguments);
            }),
            yo = (a._emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 = function () {
                return (yo = a._emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 = a.asm.sm).apply(null, arguments);
            }),
            zo = (a._emscripten_bind_btGeneric6DofConstraint_getAngularLowerLimit_1 = function () {
                return (zo = a._emscripten_bind_btGeneric6DofConstraint_getAngularLowerLimit_1 = a.asm.tm).apply(null, arguments);
            }),
            Ao = (a._emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 = function () {
                return (Ao = a._emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 = a.asm.um).apply(null, arguments);
            }),
            Bo = (a._emscripten_bind_btGeneric6DofConstraint_getAngularUpperLimit_1 = function () {
                return (Bo = a._emscripten_bind_btGeneric6DofConstraint_getAngularUpperLimit_1 = a.asm.vm).apply(null, arguments);
            }),
            Co = (a._emscripten_bind_btGeneric6DofConstraint_getRotationalLimitMotor_1 = function () {
                return (Co = a._emscripten_bind_btGeneric6DofConstraint_getRotationalLimitMotor_1 = a.asm.wm).apply(null, arguments);
            }),
            Do = (a._emscripten_bind_btGeneric6DofConstraint_getTranslationalLimitMotor_0 = function () {
                return (Do = a._emscripten_bind_btGeneric6DofConstraint_getTranslationalLimitMotor_0 = a.asm.xm).apply(null, arguments);
            }),
            Eo = (a._emscripten_bind_btGeneric6DofConstraint_setLimit_3 = function () {
                return (Eo = a._emscripten_bind_btGeneric6DofConstraint_setLimit_3 = a.asm.ym).apply(null, arguments);
            }),
            Fo = (a._emscripten_bind_btGeneric6DofConstraint_isLimited_1 = function () {
                return (Fo = a._emscripten_bind_btGeneric6DofConstraint_isLimited_1 = a.asm.zm).apply(null, arguments);
            }),
            Go = (a._emscripten_bind_btGeneric6DofConstraint_calcAnchorPos_0 = function () {
                return (Go = a._emscripten_bind_btGeneric6DofConstraint_calcAnchorPos_0 = a.asm.Am).apply(null, arguments);
            }),
            Ho = (a._emscripten_bind_btGeneric6DofConstraint_getUseFrameOffset_0 = function () {
                return (Ho = a._emscripten_bind_btGeneric6DofConstraint_getUseFrameOffset_0 = a.asm.Bm).apply(null, arguments);
            }),
            Io = (a._emscripten_bind_btGeneric6DofConstraint_setUseFrameOffset_1 = function () {
                return (Io = a._emscripten_bind_btGeneric6DofConstraint_setUseFrameOffset_1 = a.asm.Cm).apply(null, arguments);
            }),
            Jo = (a._emscripten_bind_btGeneric6DofConstraint_getUseLinearReferenceFrameA_0 = function () {
                return (Jo = a._emscripten_bind_btGeneric6DofConstraint_getUseLinearReferenceFrameA_0 = a.asm.Dm).apply(null, arguments);
            }),
            Ko = (a._emscripten_bind_btGeneric6DofConstraint_setUseLinearReferenceFrameA_1 = function () {
                return (Ko = a._emscripten_bind_btGeneric6DofConstraint_setUseLinearReferenceFrameA_1 = a.asm.Em).apply(null, arguments);
            }),
            Lo = (a._emscripten_bind_btGeneric6DofConstraint_setParam_2 = function () {
                return (Lo = a._emscripten_bind_btGeneric6DofConstraint_setParam_2 = a.asm.Fm).apply(null, arguments);
            }),
            Mo = (a._emscripten_bind_btGeneric6DofConstraint_setParam_3 = function () {
                return (Mo = a._emscripten_bind_btGeneric6DofConstraint_setParam_3 = a.asm.Gm).apply(null, arguments);
            }),
            No = (a._emscripten_bind_btGeneric6DofConstraint_getParam_1 = function () {
                return (No = a._emscripten_bind_btGeneric6DofConstraint_getParam_1 = a.asm.Hm).apply(null, arguments);
            }),
            Oo = (a._emscripten_bind_btGeneric6DofConstraint_getParam_2 = function () {
                return (Oo = a._emscripten_bind_btGeneric6DofConstraint_getParam_2 = a.asm.Im).apply(null, arguments);
            }),
            Po = (a._emscripten_bind_btGeneric6DofConstraint_setAxis_2 = function () {
                return (Po = a._emscripten_bind_btGeneric6DofConstraint_setAxis_2 = a.asm.Jm).apply(null, arguments);
            }),
            Qo = (a._emscripten_bind_btGeneric6DofConstraint_getFlags_0 = function () {
                return (Qo = a._emscripten_bind_btGeneric6DofConstraint_getFlags_0 = a.asm.Km).apply(null, arguments);
            }),
            Ro = (a._emscripten_bind_btGeneric6DofConstraint_getFixedBody_0 = function () {
                return (Ro = a._emscripten_bind_btGeneric6DofConstraint_getFixedBody_0 = a.asm.Lm).apply(null, arguments);
            }),
            So = (a._emscripten_bind_btGeneric6DofConstraint_getOverrideNumSolverIterations_0 = function () {
                return (So = a._emscripten_bind_btGeneric6DofConstraint_getOverrideNumSolverIterations_0 = a.asm.Mm).apply(null, arguments);
            }),
            To = (a._emscripten_bind_btGeneric6DofConstraint_setOverrideNumSolverIterations_1 = function () {
                return (To = a._emscripten_bind_btGeneric6DofConstraint_setOverrideNumSolverIterations_1 = a.asm.Nm).apply(null, arguments);
            }),
            Uo = (a._emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 = function () {
                return (Uo = a._emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 = a.asm.Om).apply(null, arguments);
            }),
            Vo = (a._emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 = function () {
                return (Vo = a._emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 = a.asm.Pm).apply(null, arguments);
            }),
            Wo = (a._emscripten_bind_btGeneric6DofConstraint_isEnabled_0 = function () {
                return (Wo = a._emscripten_bind_btGeneric6DofConstraint_isEnabled_0 = a.asm.Qm).apply(null, arguments);
            }),
            Xo = (a._emscripten_bind_btGeneric6DofConstraint_setEnabled_1 = function () {
                return (Xo = a._emscripten_bind_btGeneric6DofConstraint_setEnabled_1 = a.asm.Rm).apply(null, arguments);
            }),
            Yo = (a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintType_0 = function () {
                return (Yo = a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintType_0 = a.asm.Sm).apply(null, arguments);
            }),
            Zo = (a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintType_1 = function () {
                return (Zo = a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintType_1 = a.asm.Tm).apply(null, arguments);
            }),
            $o = (a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintId_1 = function () {
                return ($o = a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintId_1 = a.asm.Um).apply(null, arguments);
            }),
            ap = (a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintId_0 = function () {
                return (ap = a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintId_0 = a.asm.Vm).apply(null, arguments);
            }),
            bp = (a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintPtr_1 = function () {
                return (bp = a._emscripten_bind_btGeneric6DofConstraint_setUserConstraintPtr_1 = a.asm.Wm).apply(null, arguments);
            }),
            cp = (a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintPtr_0 = function () {
                return (cp = a._emscripten_bind_btGeneric6DofConstraint_getUserConstraintPtr_0 = a.asm.Xm).apply(null, arguments);
            }),
            dp = (a._emscripten_bind_btGeneric6DofConstraint_setJointFeedback_1 = function () {
                return (dp = a._emscripten_bind_btGeneric6DofConstraint_setJointFeedback_1 = a.asm.Ym).apply(null, arguments);
            }),
            ep = (a._emscripten_bind_btGeneric6DofConstraint_getJointFeedback_0 = function () {
                return (ep = a._emscripten_bind_btGeneric6DofConstraint_getJointFeedback_0 = a.asm.Zm).apply(null, arguments);
            }),
            fp = (a._emscripten_bind_btGeneric6DofConstraint_getUid_0 = function () {
                return (fp = a._emscripten_bind_btGeneric6DofConstraint_getUid_0 = a.asm._m).apply(null, arguments);
            }),
            gp = (a._emscripten_bind_btGeneric6DofConstraint_needsFeedback_0 = function () {
                return (gp = a._emscripten_bind_btGeneric6DofConstraint_needsFeedback_0 = a.asm.$m).apply(null, arguments);
            }),
            hp = (a._emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 = function () {
                return (hp = a._emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 = a.asm.an).apply(null, arguments);
            }),
            ip = (a._emscripten_bind_btGeneric6DofConstraint_getAppliedImpulse_0 = function () {
                return (ip = a._emscripten_bind_btGeneric6DofConstraint_getAppliedImpulse_0 = a.asm.bn).apply(null, arguments);
            }),
            jp = (a._emscripten_bind_btGeneric6DofConstraint_getConstraintType_0 = function () {
                return (jp = a._emscripten_bind_btGeneric6DofConstraint_getConstraintType_0 = a.asm.cn).apply(null, arguments);
            }),
            kp = (a._emscripten_bind_btGeneric6DofConstraint_getObjectType_0 = function () {
                return (kp = a._emscripten_bind_btGeneric6DofConstraint_getObjectType_0 = a.asm.dn).apply(null, arguments);
            }),
            lp = (a._emscripten_bind_btGeneric6DofConstraint_get_m_objectType_0 = function () {
                return (lp = a._emscripten_bind_btGeneric6DofConstraint_get_m_objectType_0 = a.asm.en).apply(null, arguments);
            }),
            mp = (a._emscripten_bind_btGeneric6DofConstraint_set_m_objectType_1 = function () {
                return (mp = a._emscripten_bind_btGeneric6DofConstraint_set_m_objectType_1 = a.asm.fn).apply(null, arguments);
            }),
            np = (a._emscripten_bind_btGeneric6DofConstraint___destroy___0 = function () {
                return (np = a._emscripten_bind_btGeneric6DofConstraint___destroy___0 = a.asm.gn).apply(null, arguments);
            }),
            op = (a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_2 = function () {
                return (op = a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_2 = a.asm.hn).apply(null, arguments);
            }),
            pp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_3 = function () {
                return (pp = a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_3 = a.asm.jn).apply(null, arguments);
            }),
            qp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_4 = function () {
                return (qp = a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_4 = a.asm.kn).apply(null, arguments);
            }),
            rp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_5 = function () {
                return (rp = a._emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_5 = a.asm.ln).apply(null, arguments);
            }),
            sp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_buildJacobian_0 = function () {
                return (sp = a._emscripten_bind_btGeneric6DofSpring2Constraint_buildJacobian_0 = a.asm.mn).apply(null, arguments);
            }),
            tp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getRotationalLimitMotor_1 = function () {
                return (tp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getRotationalLimitMotor_1 = a.asm.nn).apply(null, arguments);
            }),
            up = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getTranslationalLimitMotor_0 = function () {
                return (up = a._emscripten_bind_btGeneric6DofSpring2Constraint_getTranslationalLimitMotor_0 = a.asm.on).apply(null, arguments);
            }),
            vp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_calculateTransforms_0 = function () {
                return (vp = a._emscripten_bind_btGeneric6DofSpring2Constraint_calculateTransforms_0 = a.asm.pn).apply(null, arguments);
            }),
            wp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_calculateTransforms_2 = function () {
                return (wp = a._emscripten_bind_btGeneric6DofSpring2Constraint_calculateTransforms_2 = a.asm.qn).apply(null, arguments);
            }),
            xp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getCalculatedTransformA_0 = function () {
                return (xp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getCalculatedTransformA_0 = a.asm.rn).apply(null, arguments);
            }),
            yp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getCalculatedTransformB_0 = function () {
                return (yp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getCalculatedTransformB_0 = a.asm.sn).apply(null, arguments);
            }),
            zp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getFrameOffsetA_0 = function () {
                return (zp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getFrameOffsetA_0 = a.asm.tn).apply(null, arguments);
            }),
            Ap = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getFrameOffsetB_0 = function () {
                return (Ap = a._emscripten_bind_btGeneric6DofSpring2Constraint_getFrameOffsetB_0 = a.asm.un).apply(null, arguments);
            }),
            Bp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAxis_1 = function () {
                return (Bp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAxis_1 = a.asm.vn).apply(null, arguments);
            }),
            Cp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngle_1 = function () {
                return (Cp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngle_1 = a.asm.wn).apply(null, arguments);
            }),
            Dp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getRelativePivotPosition_1 = function () {
                return (Dp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getRelativePivotPosition_1 = a.asm.xn).apply(null, arguments);
            }),
            Ep = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setFrames_2 = function () {
                return (Ep = a._emscripten_bind_btGeneric6DofSpring2Constraint_setFrames_2 = a.asm.yn).apply(null, arguments);
            }),
            Fp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setLinearLowerLimit_1 = function () {
                return (Fp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setLinearLowerLimit_1 = a.asm.zn).apply(null, arguments);
            }),
            Gp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getLinearLowerLimit_1 = function () {
                return (Gp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getLinearLowerLimit_1 = a.asm.An).apply(null, arguments);
            }),
            Hp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setLinearUpperLimit_1 = function () {
                return (Hp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setLinearUpperLimit_1 = a.asm.Bn).apply(null, arguments);
            }),
            Ip = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getLinearUpperLimit_1 = function () {
                return (Ip = a._emscripten_bind_btGeneric6DofSpring2Constraint_getLinearUpperLimit_1 = a.asm.Cn).apply(null, arguments);
            }),
            Jp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularLowerLimit_1 = function () {
                return (Jp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularLowerLimit_1 = a.asm.Dn).apply(null, arguments);
            }),
            Kp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularLowerLimitReversed_1 = function () {
                return (Kp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularLowerLimitReversed_1 = a.asm.En).apply(null, arguments);
            }),
            Lp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularLowerLimit_1 = function () {
                return (Lp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularLowerLimit_1 = a.asm.Fn).apply(null, arguments);
            }),
            Mp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularLowerLimitReversed_1 = function () {
                return (Mp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularLowerLimitReversed_1 = a.asm.Gn).apply(null, arguments);
            }),
            Np = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularUpperLimit_1 = function () {
                return (Np = a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularUpperLimit_1 = a.asm.Hn).apply(null, arguments);
            }),
            Op = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularUpperLimitReversed_1 = function () {
                return (Op = a._emscripten_bind_btGeneric6DofSpring2Constraint_setAngularUpperLimitReversed_1 = a.asm.In).apply(null, arguments);
            }),
            Pp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularUpperLimit_1 = function () {
                return (Pp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularUpperLimit_1 = a.asm.Jn).apply(null, arguments);
            }),
            Qp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularUpperLimitReversed_1 = function () {
                return (Qp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAngularUpperLimitReversed_1 = a.asm.Kn).apply(null, arguments);
            }),
            Rp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setLimit_3 = function () {
                return (Rp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setLimit_3 = a.asm.Ln).apply(null, arguments);
            }),
            Sp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setLimitReversed_3 = function () {
                return (Sp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setLimitReversed_3 = a.asm.Mn).apply(null, arguments);
            }),
            Tp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_isLimited_1 = function () {
                return (Tp = a._emscripten_bind_btGeneric6DofSpring2Constraint_isLimited_1 = a.asm.Nn).apply(null, arguments);
            }),
            Up = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setRotationOrder_1 = function () {
                return (Up = a._emscripten_bind_btGeneric6DofSpring2Constraint_setRotationOrder_1 = a.asm.On).apply(null, arguments);
            }),
            Vp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getRotationOrder_0 = function () {
                return (Vp = a._emscripten_bind_btGeneric6DofSpring2Constraint_getRotationOrder_0 = a.asm.Pn).apply(null, arguments);
            }),
            Wp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setAxis_2 = function () {
                return (Wp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setAxis_2 = a.asm.Qn).apply(null, arguments);
            }),
            Xp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setBounce_2 = function () {
                return (Xp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setBounce_2 = a.asm.Rn).apply(null, arguments);
            }),
            Yp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_enableMotor_2 = function () {
                return (Yp = a._emscripten_bind_btGeneric6DofSpring2Constraint_enableMotor_2 = a.asm.Sn).apply(null, arguments);
            }),
            Zp = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setServo_2 = function () {
                return (Zp = a._emscripten_bind_btGeneric6DofSpring2Constraint_setServo_2 = a.asm.Tn).apply(null, arguments);
            }),
            $p = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setTargetVelocity_2 = function () {
                return ($p = a._emscripten_bind_btGeneric6DofSpring2Constraint_setTargetVelocity_2 = a.asm.Un).apply(null, arguments);
            }),
            aq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setServoTarget_2 = function () {
                return (aq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setServoTarget_2 = a.asm.Vn).apply(null, arguments);
            }),
            bq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setMaxMotorForce_2 = function () {
                return (bq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setMaxMotorForce_2 = a.asm.Wn).apply(null, arguments);
            }),
            cq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_enableSpring_2 = function () {
                return (cq = a._emscripten_bind_btGeneric6DofSpring2Constraint_enableSpring_2 = a.asm.Xn).apply(null, arguments);
            }),
            dq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setStiffness_2 = function () {
                return (dq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setStiffness_2 = a.asm.Yn).apply(null, arguments);
            }),
            eq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setDamping_2 = function () {
                return (eq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setDamping_2 = a.asm.Zn).apply(null, arguments);
            }),
            fq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_0 = function () {
                return (fq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_0 = a.asm._n).apply(null, arguments);
            }),
            gq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_1 = function () {
                return (gq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_1 = a.asm.$n).apply(null, arguments);
            }),
            hq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_2 = function () {
                return (hq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setEquilibriumPoint_2 = a.asm.ao).apply(null, arguments);
            }),
            iq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setParam_2 = function () {
                return (iq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setParam_2 = a.asm.bo).apply(null, arguments);
            }),
            jq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setParam_3 = function () {
                return (jq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setParam_3 = a.asm.co).apply(null, arguments);
            }),
            kq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getParam_1 = function () {
                return (kq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getParam_1 = a.asm.eo).apply(null, arguments);
            }),
            lq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getParam_2 = function () {
                return (lq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getParam_2 = a.asm.fo).apply(null, arguments);
            }),
            mq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_btGetMatrixElem_2 = function () {
                return (mq = a._emscripten_bind_btGeneric6DofSpring2Constraint_btGetMatrixElem_2 = a.asm.go).apply(null, arguments);
            }),
            nq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerXYZ_2 = function () {
                return (nq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerXYZ_2 = a.asm.ho).apply(null, arguments);
            }),
            oq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerXZY_2 = function () {
                return (oq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerXZY_2 = a.asm.io).apply(null, arguments);
            }),
            pq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerYXZ_2 = function () {
                return (pq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerYXZ_2 = a.asm.jo).apply(null, arguments);
            }),
            qq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerYZX_2 = function () {
                return (qq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerYZX_2 = a.asm.ko).apply(null, arguments);
            }),
            rq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerZXY_2 = function () {
                return (rq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerZXY_2 = a.asm.lo).apply(null, arguments);
            }),
            sq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerZYX_2 = function () {
                return (sq = a._emscripten_bind_btGeneric6DofSpring2Constraint_matrixToEulerZYX_2 = a.asm.mo).apply(null, arguments);
            }),
            tq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getFixedBody_0 = function () {
                return (tq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getFixedBody_0 = a.asm.no).apply(null, arguments);
            }),
            uq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getOverrideNumSolverIterations_0 = function () {
                return (uq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getOverrideNumSolverIterations_0 = a.asm.oo).apply(null, arguments);
            }),
            vq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setOverrideNumSolverIterations_1 = function () {
                return (vq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setOverrideNumSolverIterations_1 = a.asm.po).apply(null, arguments);
            }),
            wq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getBreakingImpulseThreshold_0 = function () {
                return (wq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getBreakingImpulseThreshold_0 = a.asm.qo).apply(null, arguments);
            }),
            xq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setBreakingImpulseThreshold_1 = function () {
                return (xq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setBreakingImpulseThreshold_1 = a.asm.ro).apply(null, arguments);
            }),
            yq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_isEnabled_0 = function () {
                return (yq = a._emscripten_bind_btGeneric6DofSpring2Constraint_isEnabled_0 = a.asm.so).apply(null, arguments);
            }),
            zq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setEnabled_1 = function () {
                return (zq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setEnabled_1 = a.asm.to).apply(null, arguments);
            }),
            Aq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintType_0 = function () {
                return (Aq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintType_0 = a.asm.uo).apply(null, arguments);
            }),
            Bq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintType_1 = function () {
                return (Bq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintType_1 = a.asm.vo).apply(null, arguments);
            }),
            Cq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintId_1 = function () {
                return (Cq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintId_1 = a.asm.wo).apply(null, arguments);
            }),
            Dq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintId_0 = function () {
                return (Dq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintId_0 = a.asm.xo).apply(null, arguments);
            }),
            Eq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintPtr_1 = function () {
                return (Eq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setUserConstraintPtr_1 = a.asm.yo).apply(null, arguments);
            }),
            Fq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintPtr_0 = function () {
                return (Fq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getUserConstraintPtr_0 = a.asm.zo).apply(null, arguments);
            }),
            Gq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_setJointFeedback_1 = function () {
                return (Gq = a._emscripten_bind_btGeneric6DofSpring2Constraint_setJointFeedback_1 = a.asm.Ao).apply(null, arguments);
            }),
            Hq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getJointFeedback_0 = function () {
                return (Hq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getJointFeedback_0 = a.asm.Bo).apply(null, arguments);
            }),
            Iq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getUid_0 = function () {
                return (Iq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getUid_0 = a.asm.Co).apply(null, arguments);
            }),
            Jq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_needsFeedback_0 = function () {
                return (Jq = a._emscripten_bind_btGeneric6DofSpring2Constraint_needsFeedback_0 = a.asm.Do).apply(null, arguments);
            }),
            Kq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_enableFeedback_1 = function () {
                return (Kq = a._emscripten_bind_btGeneric6DofSpring2Constraint_enableFeedback_1 = a.asm.Eo).apply(null, arguments);
            }),
            Lq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getAppliedImpulse_0 = function () {
                return (Lq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getAppliedImpulse_0 = a.asm.Fo).apply(null, arguments);
            }),
            Mq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getConstraintType_0 = function () {
                return (Mq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getConstraintType_0 = a.asm.Go).apply(null, arguments);
            }),
            Nq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_getObjectType_0 = function () {
                return (Nq = a._emscripten_bind_btGeneric6DofSpring2Constraint_getObjectType_0 = a.asm.Ho).apply(null, arguments);
            }),
            Oq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_get_m_objectType_0 = function () {
                return (Oq = a._emscripten_bind_btGeneric6DofSpring2Constraint_get_m_objectType_0 = a.asm.Io).apply(null, arguments);
            }),
            Pq = (a._emscripten_bind_btGeneric6DofSpring2Constraint_set_m_objectType_1 = function () {
                return (Pq = a._emscripten_bind_btGeneric6DofSpring2Constraint_set_m_objectType_1 = a.asm.Jo).apply(null, arguments);
            }),
            Qq = (a._emscripten_bind_btGeneric6DofSpring2Constraint___destroy___0 = function () {
                return (Qq = a._emscripten_bind_btGeneric6DofSpring2Constraint___destroy___0 = a.asm.Ko).apply(null, arguments);
            }),
            Rq = (a._emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 = function () {
                return (Rq = a._emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 = a.asm.Lo).apply(null, arguments);
            }),
            Sq = (a._emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 = function () {
                return (Sq = a._emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 = a.asm.Mo).apply(null, arguments);
            }),
            Tq = (a._emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 = function () {
                return (Tq = a._emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 = a.asm.No).apply(null, arguments);
            }),
            Uq = (a._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 = function () {
                return (Uq = a._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 = a.asm.Oo).apply(null, arguments);
            }),
            Vq = (a._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 = function () {
                return (Vq = a._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 = a.asm.Po).apply(null, arguments);
            }),
            Wq = (a._emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 = function () {
                return (Wq = a._emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 = a.asm.Qo).apply(null, arguments);
            }),
            Xq = (a._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 = function () {
                return (Xq = a._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 = a.asm.Ro).apply(null, arguments);
            }),
            Yq = (a._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 = function () {
                return (Yq = a._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 = a.asm.So).apply(null, arguments);
            }),
            Zq = (a._emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 = function () {
                return (Zq = a._emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 = a.asm.To).apply(null, arguments);
            }),
            $q = (a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 = function () {
                return ($q = a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 = a.asm.Uo).apply(null, arguments);
            }),
            ar = (a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 = function () {
                return (ar = a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 = a.asm.Vo).apply(null, arguments);
            }),
            br = (a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 = function () {
                return (br = a._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 = a.asm.Wo).apply(null, arguments);
            }),
            cr = (a._emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 = function () {
                return (cr = a._emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 = a.asm.Xo).apply(null, arguments);
            }),
            dr = (a._emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 = function () {
                return (dr = a._emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 = a.asm.Yo).apply(null, arguments);
            }),
            er = (a._emscripten_bind_btDiscreteDynamicsWorld_getPairCache_0 = function () {
                return (er = a._emscripten_bind_btDiscreteDynamicsWorld_getPairCache_0 = a.asm.Zo).apply(null, arguments);
            }),
            fr = (a._emscripten_bind_btDiscreteDynamicsWorld_getDispatchInfo_0 = function () {
                return (fr = a._emscripten_bind_btDiscreteDynamicsWorld_getDispatchInfo_0 = a.asm._o).apply(null, arguments);
            }),
            gr = (a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 = function () {
                return (gr = a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 = a.asm.$o).apply(null, arguments);
            }),
            hr = (a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 = function () {
                return (hr = a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 = a.asm.ap).apply(null, arguments);
            }),
            ir = (a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 = function () {
                return (ir = a._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 = a.asm.bp).apply(null, arguments);
            }),
            jr = (a._emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 = function () {
                return (jr = a._emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 = a.asm.cp).apply(null, arguments);
            }),
            kr = (a._emscripten_bind_btDiscreteDynamicsWorld_getBroadphase_0 = function () {
                return (kr = a._emscripten_bind_btDiscreteDynamicsWorld_getBroadphase_0 = a.asm.dp).apply(null, arguments);
            }),
            lr = (a._emscripten_bind_btDiscreteDynamicsWorld_convexSweepTest_5 = function () {
                return (lr = a._emscripten_bind_btDiscreteDynamicsWorld_convexSweepTest_5 = a.asm.ep).apply(null, arguments);
            }),
            mr = (a._emscripten_bind_btDiscreteDynamicsWorld_contactPairTest_3 = function () {
                return (mr = a._emscripten_bind_btDiscreteDynamicsWorld_contactPairTest_3 = a.asm.fp).apply(null, arguments);
            }),
            nr = (a._emscripten_bind_btDiscreteDynamicsWorld_contactTest_2 = function () {
                return (nr = a._emscripten_bind_btDiscreteDynamicsWorld_contactTest_2 = a.asm.gp).apply(null, arguments);
            }),
            or = (a._emscripten_bind_btDiscreteDynamicsWorld_updateSingleAabb_1 = function () {
                return (or = a._emscripten_bind_btDiscreteDynamicsWorld_updateSingleAabb_1 = a.asm.hp).apply(null, arguments);
            }),
            pr = (a._emscripten_bind_btDiscreteDynamicsWorld_addAction_1 = function () {
                return (pr = a._emscripten_bind_btDiscreteDynamicsWorld_addAction_1 = a.asm.ip).apply(null, arguments);
            }),
            qr = (a._emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 = function () {
                return (qr = a._emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 = a.asm.jp).apply(null, arguments);
            }),
            rr = (a._emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 = function () {
                return (rr = a._emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 = a.asm.kp).apply(null, arguments);
            }),
            sr = (a._emscripten_bind_btDiscreteDynamicsWorld___destroy___0 = function () {
                return (sr = a._emscripten_bind_btDiscreteDynamicsWorld___destroy___0 = a.asm.lp).apply(null, arguments);
            }),
            tr = (a._emscripten_bind_btVehicleRaycaster_castRay_3 = function () {
                return (tr = a._emscripten_bind_btVehicleRaycaster_castRay_3 = a.asm.mp).apply(null, arguments);
            }),
            ur = (a._emscripten_bind_btVehicleRaycaster___destroy___0 = function () {
                return (ur = a._emscripten_bind_btVehicleRaycaster___destroy___0 = a.asm.np).apply(null, arguments);
            }),
            vr = (a._emscripten_bind_btActionInterface_updateAction_2 = function () {
                return (vr = a._emscripten_bind_btActionInterface_updateAction_2 = a.asm.op).apply(null, arguments);
            }),
            wr = (a._emscripten_bind_btActionInterface___destroy___0 = function () {
                return (wr = a._emscripten_bind_btActionInterface___destroy___0 = a.asm.pp).apply(null, arguments);
            }),
            xr = (a._emscripten_bind_btGhostObject_btGhostObject_0 = function () {
                return (xr = a._emscripten_bind_btGhostObject_btGhostObject_0 = a.asm.qp).apply(null, arguments);
            }),
            yr = (a._emscripten_bind_btGhostObject_getNumOverlappingObjects_0 = function () {
                return (yr = a._emscripten_bind_btGhostObject_getNumOverlappingObjects_0 = a.asm.rp).apply(null, arguments);
            }),
            zr = (a._emscripten_bind_btGhostObject_getOverlappingObject_1 = function () {
                return (zr = a._emscripten_bind_btGhostObject_getOverlappingObject_1 = a.asm.sp).apply(null, arguments);
            }),
            Ar = (a._emscripten_bind_btGhostObject_mergesSimulationIslands_0 = function () {
                return (Ar = a._emscripten_bind_btGhostObject_mergesSimulationIslands_0 = a.asm.tp).apply(null, arguments);
            }),
            Br = (a._emscripten_bind_btGhostObject_getAnisotropicFriction_0 = function () {
                return (Br = a._emscripten_bind_btGhostObject_getAnisotropicFriction_0 = a.asm.up).apply(null, arguments);
            }),
            Cr = (a._emscripten_bind_btGhostObject_setAnisotropicFriction_1 = function () {
                return (Cr = a._emscripten_bind_btGhostObject_setAnisotropicFriction_1 = a.asm.vp).apply(null, arguments);
            }),
            Dr = (a._emscripten_bind_btGhostObject_setAnisotropicFriction_2 = function () {
                return (Dr = a._emscripten_bind_btGhostObject_setAnisotropicFriction_2 = a.asm.wp).apply(null, arguments);
            }),
            Er = (a._emscripten_bind_btGhostObject_hasAnisotropicFriction_0 = function () {
                return (Er = a._emscripten_bind_btGhostObject_hasAnisotropicFriction_0 = a.asm.xp).apply(null, arguments);
            }),
            Fr = (a._emscripten_bind_btGhostObject_hasAnisotropicFriction_1 = function () {
                return (Fr = a._emscripten_bind_btGhostObject_hasAnisotropicFriction_1 = a.asm.yp).apply(null, arguments);
            }),
            Gr = (a._emscripten_bind_btGhostObject_setContactProcessingThreshold_1 = function () {
                return (Gr = a._emscripten_bind_btGhostObject_setContactProcessingThreshold_1 = a.asm.zp).apply(null, arguments);
            }),
            Hr = (a._emscripten_bind_btGhostObject_getContactProcessingThreshold_0 = function () {
                return (Hr = a._emscripten_bind_btGhostObject_getContactProcessingThreshold_0 = a.asm.Ap).apply(null, arguments);
            }),
            Ir = (a._emscripten_bind_btGhostObject_isStaticObject_0 = function () {
                return (Ir = a._emscripten_bind_btGhostObject_isStaticObject_0 = a.asm.Bp).apply(null, arguments);
            }),
            Jr = (a._emscripten_bind_btGhostObject_isKinematicObject_0 = function () {
                return (Jr = a._emscripten_bind_btGhostObject_isKinematicObject_0 = a.asm.Cp).apply(null, arguments);
            }),
            Kr = (a._emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 = function () {
                return (Kr = a._emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 = a.asm.Dp).apply(null, arguments);
            }),
            Lr = (a._emscripten_bind_btGhostObject_hasContactResponse_0 = function () {
                return (Lr = a._emscripten_bind_btGhostObject_hasContactResponse_0 = a.asm.Ep).apply(null, arguments);
            }),
            Mr = (a._emscripten_bind_btGhostObject_setCollisionShape_1 = function () {
                return (Mr = a._emscripten_bind_btGhostObject_setCollisionShape_1 = a.asm.Fp).apply(null, arguments);
            }),
            Nr = (a._emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2 = function () {
                return (Nr = a._emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2 = a.asm.Gp).apply(null, arguments);
            }),
            Or = (a._emscripten_bind_btGhostObject_getNumObjectsWithoutCollision_0 = function () {
                return (Or = a._emscripten_bind_btGhostObject_getNumObjectsWithoutCollision_0 = a.asm.Hp).apply(null, arguments);
            }),
            Pr = (a._emscripten_bind_btGhostObject_getObjectWithoutCollision_1 = function () {
                return (Pr = a._emscripten_bind_btGhostObject_getObjectWithoutCollision_1 = a.asm.Ip).apply(null, arguments);
            }),
            Qr = (a._emscripten_bind_btGhostObject_checkCollideWithOverride_1 = function () {
                return (Qr = a._emscripten_bind_btGhostObject_checkCollideWithOverride_1 = a.asm.Jp).apply(null, arguments);
            }),
            Rr = (a._emscripten_bind_btGhostObject_getActivationState_0 = function () {
                return (Rr = a._emscripten_bind_btGhostObject_getActivationState_0 = a.asm.Kp).apply(null, arguments);
            }),
            Sr = (a._emscripten_bind_btGhostObject_setActivationState_1 = function () {
                return (Sr = a._emscripten_bind_btGhostObject_setActivationState_1 = a.asm.Lp).apply(null, arguments);
            }),
            Tr = (a._emscripten_bind_btGhostObject_setDeactivationTime_1 = function () {
                return (Tr = a._emscripten_bind_btGhostObject_setDeactivationTime_1 = a.asm.Mp).apply(null, arguments);
            }),
            Ur = (a._emscripten_bind_btGhostObject_getDeactivationTime_0 = function () {
                return (Ur = a._emscripten_bind_btGhostObject_getDeactivationTime_0 = a.asm.Np).apply(null, arguments);
            }),
            Vr = (a._emscripten_bind_btGhostObject_forceActivationState_1 = function () {
                return (Vr = a._emscripten_bind_btGhostObject_forceActivationState_1 = a.asm.Op).apply(null, arguments);
            }),
            Wr = (a._emscripten_bind_btGhostObject_activate_0 = function () {
                return (Wr = a._emscripten_bind_btGhostObject_activate_0 = a.asm.Pp).apply(null, arguments);
            }),
            Xr = (a._emscripten_bind_btGhostObject_activate_1 = function () {
                return (Xr = a._emscripten_bind_btGhostObject_activate_1 = a.asm.Qp).apply(null, arguments);
            }),
            Yr = (a._emscripten_bind_btGhostObject_isActive_0 = function () {
                return (Yr = a._emscripten_bind_btGhostObject_isActive_0 = a.asm.Rp).apply(null, arguments);
            }),
            Zr = (a._emscripten_bind_btGhostObject_setRestitution_1 = function () {
                return (Zr = a._emscripten_bind_btGhostObject_setRestitution_1 = a.asm.Sp).apply(null, arguments);
            }),
            $r = (a._emscripten_bind_btGhostObject_getRestitution_0 = function () {
                return ($r = a._emscripten_bind_btGhostObject_getRestitution_0 = a.asm.Tp).apply(null, arguments);
            }),
            as = (a._emscripten_bind_btGhostObject_setFriction_1 = function () {
                return (as = a._emscripten_bind_btGhostObject_setFriction_1 = a.asm.Up).apply(null, arguments);
            }),
            bs = (a._emscripten_bind_btGhostObject_getFriction_0 = function () {
                return (bs = a._emscripten_bind_btGhostObject_getFriction_0 = a.asm.Vp).apply(null, arguments);
            }),
            cs = (a._emscripten_bind_btGhostObject_setRollingFriction_1 = function () {
                return (cs = a._emscripten_bind_btGhostObject_setRollingFriction_1 = a.asm.Wp).apply(null, arguments);
            }),
            ds = (a._emscripten_bind_btGhostObject_getRollingFriction_0 = function () {
                return (ds = a._emscripten_bind_btGhostObject_getRollingFriction_0 = a.asm.Xp).apply(null, arguments);
            }),
            es = (a._emscripten_bind_btGhostObject_setSpinningFriction_1 = function () {
                return (es = a._emscripten_bind_btGhostObject_setSpinningFriction_1 = a.asm.Yp).apply(null, arguments);
            }),
            gs = (a._emscripten_bind_btGhostObject_getSpinningFriction_0 = function () {
                return (gs = a._emscripten_bind_btGhostObject_getSpinningFriction_0 = a.asm.Zp).apply(null, arguments);
            }),
            hs = (a._emscripten_bind_btGhostObject_setContactStiffnessAndDamping_2 = function () {
                return (hs = a._emscripten_bind_btGhostObject_setContactStiffnessAndDamping_2 = a.asm._p).apply(null, arguments);
            }),
            is = (a._emscripten_bind_btGhostObject_getContactStiffness_0 = function () {
                return (is = a._emscripten_bind_btGhostObject_getContactStiffness_0 = a.asm.$p).apply(null, arguments);
            }),
            js = (a._emscripten_bind_btGhostObject_getContactDamping_0 = function () {
                return (js = a._emscripten_bind_btGhostObject_getContactDamping_0 = a.asm.aq).apply(null, arguments);
            }),
            ks = (a._emscripten_bind_btGhostObject_getWorldTransform_0 = function () {
                return (ks = a._emscripten_bind_btGhostObject_getWorldTransform_0 = a.asm.bq).apply(null, arguments);
            }),
            ls = (a._emscripten_bind_btGhostObject_setWorldTransform_1 = function () {
                return (ls = a._emscripten_bind_btGhostObject_setWorldTransform_1 = a.asm.cq).apply(null, arguments);
            }),
            ms = (a._emscripten_bind_btGhostObject_getBroadphaseHandle_0 = function () {
                return (ms = a._emscripten_bind_btGhostObject_getBroadphaseHandle_0 = a.asm.dq).apply(null, arguments);
            }),
            ns = (a._emscripten_bind_btGhostObject_setBroadphaseHandle_1 = function () {
                return (ns = a._emscripten_bind_btGhostObject_setBroadphaseHandle_1 = a.asm.eq).apply(null, arguments);
            }),
            ps = (a._emscripten_bind_btGhostObject_getInterpolationWorldTransform_0 = function () {
                return (ps = a._emscripten_bind_btGhostObject_getInterpolationWorldTransform_0 = a.asm.fq).apply(null, arguments);
            }),
            qs = (a._emscripten_bind_btGhostObject_setInterpolationWorldTransform_1 = function () {
                return (qs = a._emscripten_bind_btGhostObject_setInterpolationWorldTransform_1 = a.asm.gq).apply(null, arguments);
            }),
            rs = (a._emscripten_bind_btGhostObject_setInterpolationLinearVelocity_1 = function () {
                return (rs = a._emscripten_bind_btGhostObject_setInterpolationLinearVelocity_1 = a.asm.hq).apply(null, arguments);
            }),
            ss = (a._emscripten_bind_btGhostObject_setInterpolationAngularVelocity_1 = function () {
                return (ss = a._emscripten_bind_btGhostObject_setInterpolationAngularVelocity_1 = a.asm.iq).apply(null, arguments);
            }),
            ts = (a._emscripten_bind_btGhostObject_getInterpolationLinearVelocity_0 = function () {
                return (ts = a._emscripten_bind_btGhostObject_getInterpolationLinearVelocity_0 = a.asm.jq).apply(null, arguments);
            }),
            us = (a._emscripten_bind_btGhostObject_getInterpolationAngularVelocity_0 = function () {
                return (us = a._emscripten_bind_btGhostObject_getInterpolationAngularVelocity_0 = a.asm.kq).apply(null, arguments);
            }),
            vs = (a._emscripten_bind_btGhostObject_getIslandTag_0 = function () {
                return (vs = a._emscripten_bind_btGhostObject_getIslandTag_0 = a.asm.lq).apply(null, arguments);
            }),
            xs = (a._emscripten_bind_btGhostObject_setIslandTag_1 = function () {
                return (xs = a._emscripten_bind_btGhostObject_setIslandTag_1 = a.asm.mq).apply(null, arguments);
            }),
            ys = (a._emscripten_bind_btGhostObject_getCompanionId_0 = function () {
                return (ys = a._emscripten_bind_btGhostObject_getCompanionId_0 = a.asm.nq).apply(null, arguments);
            }),
            zs = (a._emscripten_bind_btGhostObject_setCompanionId_1 = function () {
                return (zs = a._emscripten_bind_btGhostObject_setCompanionId_1 = a.asm.oq).apply(null, arguments);
            }),
            As = (a._emscripten_bind_btGhostObject_getWorldArrayIndex_0 = function () {
                return (As = a._emscripten_bind_btGhostObject_getWorldArrayIndex_0 = a.asm.pq).apply(null, arguments);
            }),
            Bs = (a._emscripten_bind_btGhostObject_getHitFraction_0 = function () {
                return (Bs = a._emscripten_bind_btGhostObject_getHitFraction_0 = a.asm.qq).apply(null, arguments);
            }),
            Cs = (a._emscripten_bind_btGhostObject_setHitFraction_1 = function () {
                return (Cs = a._emscripten_bind_btGhostObject_setHitFraction_1 = a.asm.rq).apply(null, arguments);
            }),
            Ds = (a._emscripten_bind_btGhostObject_getCollisionFlags_0 = function () {
                return (Ds = a._emscripten_bind_btGhostObject_getCollisionFlags_0 = a.asm.sq).apply(null, arguments);
            }),
            Es = (a._emscripten_bind_btGhostObject_setCollisionFlags_1 = function () {
                return (Es = a._emscripten_bind_btGhostObject_setCollisionFlags_1 = a.asm.tq).apply(null, arguments);
            }),
            Fs = (a._emscripten_bind_btGhostObject_getCcdSweptSphereRadius_0 = function () {
                return (Fs = a._emscripten_bind_btGhostObject_getCcdSweptSphereRadius_0 = a.asm.uq).apply(null, arguments);
            }),
            Gs = (a._emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 = function () {
                return (Gs = a._emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 = a.asm.vq).apply(null, arguments);
            }),
            Hs = (a._emscripten_bind_btGhostObject_getCcdMotionThreshold_0 = function () {
                return (Hs = a._emscripten_bind_btGhostObject_getCcdMotionThreshold_0 = a.asm.wq).apply(null, arguments);
            }),
            Is = (a._emscripten_bind_btGhostObject_setCcdMotionThreshold_1 = function () {
                return (Is = a._emscripten_bind_btGhostObject_setCcdMotionThreshold_1 = a.asm.xq).apply(null, arguments);
            }),
            Js = (a._emscripten_bind_btGhostObject_getUserPointer_0 = function () {
                return (Js = a._emscripten_bind_btGhostObject_getUserPointer_0 = a.asm.yq).apply(null, arguments);
            }),
            Ks = (a._emscripten_bind_btGhostObject_getUserIndex_0 = function () {
                return (Ks = a._emscripten_bind_btGhostObject_getUserIndex_0 = a.asm.zq).apply(null, arguments);
            }),
            Ls = (a._emscripten_bind_btGhostObject_getUserIndex2_0 = function () {
                return (Ls = a._emscripten_bind_btGhostObject_getUserIndex2_0 = a.asm.Aq).apply(null, arguments);
            }),
            Ms = (a._emscripten_bind_btGhostObject_getUserIndex3_0 = function () {
                return (Ms = a._emscripten_bind_btGhostObject_getUserIndex3_0 = a.asm.Bq).apply(null, arguments);
            }),
            Ns = (a._emscripten_bind_btGhostObject_setUserPointer_1 = function () {
                return (Ns = a._emscripten_bind_btGhostObject_setUserPointer_1 = a.asm.Cq).apply(null, arguments);
            }),
            Os = (a._emscripten_bind_btGhostObject_setUserIndex_1 = function () {
                return (Os = a._emscripten_bind_btGhostObject_setUserIndex_1 = a.asm.Dq).apply(null, arguments);
            }),
            Ps = (a._emscripten_bind_btGhostObject_setUserIndex2_1 = function () {
                return (Ps = a._emscripten_bind_btGhostObject_setUserIndex2_1 = a.asm.Eq).apply(null, arguments);
            }),
            Qs = (a._emscripten_bind_btGhostObject_setUserIndex3_1 = function () {
                return (Qs = a._emscripten_bind_btGhostObject_setUserIndex3_1 = a.asm.Fq).apply(null, arguments);
            }),
            Rs = (a._emscripten_bind_btGhostObject_getUpdateRevisionInternal_0 = function () {
                return (Rs = a._emscripten_bind_btGhostObject_getUpdateRevisionInternal_0 = a.asm.Gq).apply(null, arguments);
            }),
            Ss = (a._emscripten_bind_btGhostObject_checkCollideWith_1 = function () {
                return (Ss = a._emscripten_bind_btGhostObject_checkCollideWith_1 = a.asm.Hq).apply(null, arguments);
            }),
            Ts = (a._emscripten_bind_btGhostObject___destroy___0 = function () {
                return (Ts = a._emscripten_bind_btGhostObject___destroy___0 = a.asm.Iq).apply(null, arguments);
            }),
            Us = (a._emscripten_bind_btSoftBodySolver___destroy___0 = function () {
                return (Us = a._emscripten_bind_btSoftBodySolver___destroy___0 = a.asm.Jq).apply(null, arguments);
            }),
            Vs = (a._emscripten_bind_VoidPtr___destroy___0 = function () {
                return (Vs = a._emscripten_bind_VoidPtr___destroy___0 = a.asm.Kq).apply(null, arguments);
            }),
            Ws = (a._emscripten_bind_btCompat_setInternalTickCallback_2 = function () {
                return (Ws = a._emscripten_bind_btCompat_setInternalTickCallback_2 = a.asm.Lq).apply(null, arguments);
            }),
            Xs = (a._emscripten_bind_btCompat_setInternalTickCallback_3 = function () {
                return (Xs = a._emscripten_bind_btCompat_setInternalTickCallback_3 = a.asm.Mq).apply(null, arguments);
            }),
            Ys = (a._emscripten_bind_btCompat_setInternalTickCallback_4 = function () {
                return (Ys = a._emscripten_bind_btCompat_setInternalTickCallback_4 = a.asm.Nq).apply(null, arguments);
            }),
            Zs = (a._emscripten_bind_btCompat___destroy___0 = function () {
                return (Zs = a._emscripten_bind_btCompat___destroy___0 = a.asm.Oq).apply(null, arguments);
            }),
            $s = (a._emscripten_bind_DebugDrawer_DebugDrawer_0 = function () {
                return ($s = a._emscripten_bind_DebugDrawer_DebugDrawer_0 = a.asm.Pq).apply(null, arguments);
            }),
            at = (a._emscripten_bind_DebugDrawer_drawLine_3 = function () {
                return (at = a._emscripten_bind_DebugDrawer_drawLine_3 = a.asm.Qq).apply(null, arguments);
            }),
            bt = (a._emscripten_bind_DebugDrawer_drawContactPoint_5 = function () {
                return (bt = a._emscripten_bind_DebugDrawer_drawContactPoint_5 = a.asm.Rq).apply(null, arguments);
            }),
            ct = (a._emscripten_bind_DebugDrawer_reportErrorWarning_1 = function () {
                return (ct = a._emscripten_bind_DebugDrawer_reportErrorWarning_1 = a.asm.Sq).apply(null, arguments);
            }),
            dt = (a._emscripten_bind_DebugDrawer_draw3dText_2 = function () {
                return (dt = a._emscripten_bind_DebugDrawer_draw3dText_2 = a.asm.Tq).apply(null, arguments);
            }),
            et = (a._emscripten_bind_DebugDrawer_setDebugMode_1 = function () {
                return (et = a._emscripten_bind_DebugDrawer_setDebugMode_1 = a.asm.Uq).apply(null, arguments);
            }),
            ft = (a._emscripten_bind_DebugDrawer_getDebugMode_0 = function () {
                return (ft = a._emscripten_bind_DebugDrawer_getDebugMode_0 = a.asm.Vq).apply(null, arguments);
            }),
            gt = (a._emscripten_bind_DebugDrawer___destroy___0 = function () {
                return (gt = a._emscripten_bind_DebugDrawer___destroy___0 = a.asm.Wq).apply(null, arguments);
            }),
            ht = (a._emscripten_bind_btVector4_btVector4_0 = function () {
                return (ht = a._emscripten_bind_btVector4_btVector4_0 = a.asm.Xq).apply(null, arguments);
            }),
            it = (a._emscripten_bind_btVector4_btVector4_4 = function () {
                return (it = a._emscripten_bind_btVector4_btVector4_4 = a.asm.Yq).apply(null, arguments);
            }),
            jt = (a._emscripten_bind_btVector4_absolute4_0 = function () {
                return (jt = a._emscripten_bind_btVector4_absolute4_0 = a.asm.Zq).apply(null, arguments);
            }),
            kt = (a._emscripten_bind_btVector4_getW_0 = function () {
                return (kt = a._emscripten_bind_btVector4_getW_0 = a.asm._q).apply(null, arguments);
            }),
            lt = (a._emscripten_bind_btVector4_maxAxis4_0 = function () {
                return (lt = a._emscripten_bind_btVector4_maxAxis4_0 = a.asm.$q).apply(null, arguments);
            }),
            mt = (a._emscripten_bind_btVector4_minAxis4_0 = function () {
                return (mt = a._emscripten_bind_btVector4_minAxis4_0 = a.asm.ar).apply(null, arguments);
            }),
            nt = (a._emscripten_bind_btVector4_closestAxis4_0 = function () {
                return (nt = a._emscripten_bind_btVector4_closestAxis4_0 = a.asm.br).apply(null, arguments);
            }),
            ot = (a._emscripten_bind_btVector4_setValue_4 = function () {
                return (ot = a._emscripten_bind_btVector4_setValue_4 = a.asm.cr).apply(null, arguments);
            }),
            pt = (a._emscripten_bind_btVector4_op_add_1 = function () {
                return (pt = a._emscripten_bind_btVector4_op_add_1 = a.asm.dr).apply(null, arguments);
            }),
            qt = (a._emscripten_bind_btVector4_op_sub_1 = function () {
                return (qt = a._emscripten_bind_btVector4_op_sub_1 = a.asm.er).apply(null, arguments);
            }),
            rt = (a._emscripten_bind_btVector4_op_mul_1 = function () {
                return (rt = a._emscripten_bind_btVector4_op_mul_1 = a.asm.fr).apply(null, arguments);
            }),
            st = (a._emscripten_bind_btVector4_op_div_1 = function () {
                return (st = a._emscripten_bind_btVector4_op_div_1 = a.asm.gr).apply(null, arguments);
            }),
            tt = (a._emscripten_bind_btVector4_dot_1 = function () {
                return (tt = a._emscripten_bind_btVector4_dot_1 = a.asm.hr).apply(null, arguments);
            }),
            ut = (a._emscripten_bind_btVector4_length2_0 = function () {
                return (ut = a._emscripten_bind_btVector4_length2_0 = a.asm.ir).apply(null, arguments);
            }),
            vt = (a._emscripten_bind_btVector4_length_0 = function () {
                return (vt = a._emscripten_bind_btVector4_length_0 = a.asm.jr).apply(null, arguments);
            }),
            wt = (a._emscripten_bind_btVector4_norm_0 = function () {
                return (wt = a._emscripten_bind_btVector4_norm_0 = a.asm.kr).apply(null, arguments);
            }),
            xt = (a._emscripten_bind_btVector4_distance2_1 = function () {
                return (xt = a._emscripten_bind_btVector4_distance2_1 = a.asm.lr).apply(null, arguments);
            }),
            yt = (a._emscripten_bind_btVector4_distance_1 = function () {
                return (yt = a._emscripten_bind_btVector4_distance_1 = a.asm.mr).apply(null, arguments);
            }),
            zt = (a._emscripten_bind_btVector4_normalize_0 = function () {
                return (zt = a._emscripten_bind_btVector4_normalize_0 = a.asm.nr).apply(null, arguments);
            }),
            At = (a._emscripten_bind_btVector4_normalized_0 = function () {
                return (At = a._emscripten_bind_btVector4_normalized_0 = a.asm.or).apply(null, arguments);
            }),
            Bt = (a._emscripten_bind_btVector4_rotate_2 = function () {
                return (Bt = a._emscripten_bind_btVector4_rotate_2 = a.asm.pr).apply(null, arguments);
            }),
            Ct = (a._emscripten_bind_btVector4_angle_1 = function () {
                return (Ct = a._emscripten_bind_btVector4_angle_1 = a.asm.qr).apply(null, arguments);
            }),
            Dt = (a._emscripten_bind_btVector4_absolute_0 = function () {
                return (Dt = a._emscripten_bind_btVector4_absolute_0 = a.asm.rr).apply(null, arguments);
            }),
            Et = (a._emscripten_bind_btVector4_cross_1 = function () {
                return (Et = a._emscripten_bind_btVector4_cross_1 = a.asm.sr).apply(null, arguments);
            }),
            Ft = (a._emscripten_bind_btVector4_triple_2 = function () {
                return (Ft = a._emscripten_bind_btVector4_triple_2 = a.asm.tr).apply(null, arguments);
            }),
            Gt = (a._emscripten_bind_btVector4_minAxis_0 = function () {
                return (Gt = a._emscripten_bind_btVector4_minAxis_0 = a.asm.ur).apply(null, arguments);
            }),
            Ht = (a._emscripten_bind_btVector4_maxAxis_0 = function () {
                return (Ht = a._emscripten_bind_btVector4_maxAxis_0 = a.asm.vr).apply(null, arguments);
            }),
            It = (a._emscripten_bind_btVector4_furthestAxis_0 = function () {
                return (It = a._emscripten_bind_btVector4_furthestAxis_0 = a.asm.wr).apply(null, arguments);
            }),
            Jt = (a._emscripten_bind_btVector4_closestAxis_0 = function () {
                return (Jt = a._emscripten_bind_btVector4_closestAxis_0 = a.asm.xr).apply(null, arguments);
            }),
            Kt = (a._emscripten_bind_btVector4_setInterpolate3_3 = function () {
                return (Kt = a._emscripten_bind_btVector4_setInterpolate3_3 = a.asm.yr).apply(null, arguments);
            }),
            Lt = (a._emscripten_bind_btVector4_lerp_2 = function () {
                return (Lt = a._emscripten_bind_btVector4_lerp_2 = a.asm.zr).apply(null, arguments);
            }),
            Mt = (a._emscripten_bind_btVector4_op_mulv_1 = function () {
                return (Mt = a._emscripten_bind_btVector4_op_mulv_1 = a.asm.Ar).apply(null, arguments);
            }),
            Nt = (a._emscripten_bind_btVector4_getX_0 = function () {
                return (Nt = a._emscripten_bind_btVector4_getX_0 = a.asm.Br).apply(null, arguments);
            }),
            Ot = (a._emscripten_bind_btVector4_getY_0 = function () {
                return (Ot = a._emscripten_bind_btVector4_getY_0 = a.asm.Cr).apply(null, arguments);
            }),
            Pt = (a._emscripten_bind_btVector4_getZ_0 = function () {
                return (Pt = a._emscripten_bind_btVector4_getZ_0 = a.asm.Dr).apply(null, arguments);
            }),
            Qt = (a._emscripten_bind_btVector4_setX_1 = function () {
                return (Qt = a._emscripten_bind_btVector4_setX_1 = a.asm.Er).apply(null, arguments);
            }),
            Rt = (a._emscripten_bind_btVector4_setY_1 = function () {
                return (Rt = a._emscripten_bind_btVector4_setY_1 = a.asm.Fr).apply(null, arguments);
            }),
            St = (a._emscripten_bind_btVector4_setZ_1 = function () {
                return (St = a._emscripten_bind_btVector4_setZ_1 = a.asm.Gr).apply(null, arguments);
            }),
            Tt = (a._emscripten_bind_btVector4_setW_1 = function () {
                return (Tt = a._emscripten_bind_btVector4_setW_1 = a.asm.Hr).apply(null, arguments);
            }),
            Ut = (a._emscripten_bind_btVector4_x_0 = function () {
                return (Ut = a._emscripten_bind_btVector4_x_0 = a.asm.Ir).apply(null, arguments);
            }),
            Vt = (a._emscripten_bind_btVector4_y_0 = function () {
                return (Vt = a._emscripten_bind_btVector4_y_0 = a.asm.Jr).apply(null, arguments);
            }),
            Wt = (a._emscripten_bind_btVector4_z_0 = function () {
                return (Wt = a._emscripten_bind_btVector4_z_0 = a.asm.Kr).apply(null, arguments);
            }),
            Xt = (a._emscripten_bind_btVector4_w_0 = function () {
                return (Xt = a._emscripten_bind_btVector4_w_0 = a.asm.Lr).apply(null, arguments);
            }),
            Yt = (a._emscripten_bind_btVector4_op_eq_1 = function () {
                return (Yt = a._emscripten_bind_btVector4_op_eq_1 = a.asm.Mr).apply(null, arguments);
            }),
            Zt = (a._emscripten_bind_btVector4_op_neq_1 = function () {
                return (Zt = a._emscripten_bind_btVector4_op_neq_1 = a.asm.Nr).apply(null, arguments);
            }),
            $t = (a._emscripten_bind_btVector4_setMax_1 = function () {
                return ($t = a._emscripten_bind_btVector4_setMax_1 = a.asm.Or).apply(null, arguments);
            }),
            au = (a._emscripten_bind_btVector4_setMin_1 = function () {
                return (au = a._emscripten_bind_btVector4_setMin_1 = a.asm.Pr).apply(null, arguments);
            }),
            bu = (a._emscripten_bind_btVector4_getSkewSymmetricMatrix_3 = function () {
                return (bu = a._emscripten_bind_btVector4_getSkewSymmetricMatrix_3 = a.asm.Qr).apply(null, arguments);
            }),
            cu = (a._emscripten_bind_btVector4_setZero_0 = function () {
                return (cu = a._emscripten_bind_btVector4_setZero_0 = a.asm.Rr).apply(null, arguments);
            }),
            du = (a._emscripten_bind_btVector4_isZero_0 = function () {
                return (du = a._emscripten_bind_btVector4_isZero_0 = a.asm.Sr).apply(null, arguments);
            }),
            eu = (a._emscripten_bind_btVector4_fuzzyZero_0 = function () {
                return (eu = a._emscripten_bind_btVector4_fuzzyZero_0 = a.asm.Tr).apply(null, arguments);
            }),
            fu = (a._emscripten_bind_btVector4_dot3_3 = function () {
                return (fu = a._emscripten_bind_btVector4_dot3_3 = a.asm.Ur).apply(null, arguments);
            }),
            gu = (a._emscripten_bind_btVector4___destroy___0 = function () {
                return (gu = a._emscripten_bind_btVector4___destroy___0 = a.asm.Vr).apply(null, arguments);
            }),
            hu = (a._emscripten_bind_btQuaternion_btQuaternion_0 = function () {
                return (hu = a._emscripten_bind_btQuaternion_btQuaternion_0 = a.asm.Wr).apply(null, arguments);
            }),
            iu = (a._emscripten_bind_btQuaternion_btQuaternion_2 = function () {
                return (iu = a._emscripten_bind_btQuaternion_btQuaternion_2 = a.asm.Xr).apply(null, arguments);
            }),
            ju = (a._emscripten_bind_btQuaternion_btQuaternion_3 = function () {
                return (ju = a._emscripten_bind_btQuaternion_btQuaternion_3 = a.asm.Yr).apply(null, arguments);
            }),
            ku = (a._emscripten_bind_btQuaternion_btQuaternion_4 = function () {
                return (ku = a._emscripten_bind_btQuaternion_btQuaternion_4 = a.asm.Zr).apply(null, arguments);
            }),
            lu = (a._emscripten_bind_btQuaternion_setRotation_2 = function () {
                return (lu = a._emscripten_bind_btQuaternion_setRotation_2 = a.asm._r).apply(null, arguments);
            }),
            mu = (a._emscripten_bind_btQuaternion_setEuler_3 = function () {
                return (mu = a._emscripten_bind_btQuaternion_setEuler_3 = a.asm.$r).apply(null, arguments);
            }),
            nu = (a._emscripten_bind_btQuaternion_setEulerZYX_3 = function () {
                return (nu = a._emscripten_bind_btQuaternion_setEulerZYX_3 = a.asm.as).apply(null, arguments);
            }),
            ou = (a._emscripten_bind_btQuaternion_op_add_1 = function () {
                return (ou = a._emscripten_bind_btQuaternion_op_add_1 = a.asm.bs).apply(null, arguments);
            }),
            pu = (a._emscripten_bind_btQuaternion_op_sub_1 = function () {
                return (pu = a._emscripten_bind_btQuaternion_op_sub_1 = a.asm.cs).apply(null, arguments);
            }),
            qu = (a._emscripten_bind_btQuaternion_op_mul_1 = function () {
                return (qu = a._emscripten_bind_btQuaternion_op_mul_1 = a.asm.ds).apply(null, arguments);
            }),
            ru = (a._emscripten_bind_btQuaternion_op_mulq_1 = function () {
                return (ru = a._emscripten_bind_btQuaternion_op_mulq_1 = a.asm.es).apply(null, arguments);
            }),
            su = (a._emscripten_bind_btQuaternion_dot_1 = function () {
                return (su = a._emscripten_bind_btQuaternion_dot_1 = a.asm.fs).apply(null, arguments);
            }),
            tu = (a._emscripten_bind_btQuaternion_length2_0 = function () {
                return (tu = a._emscripten_bind_btQuaternion_length2_0 = a.asm.gs).apply(null, arguments);
            }),
            uu = (a._emscripten_bind_btQuaternion_length_0 = function () {
                return (uu = a._emscripten_bind_btQuaternion_length_0 = a.asm.hs).apply(null, arguments);
            }),
            vu = (a._emscripten_bind_btQuaternion_normalize_0 = function () {
                return (vu = a._emscripten_bind_btQuaternion_normalize_0 = a.asm.is).apply(null, arguments);
            }),
            wu = (a._emscripten_bind_btQuaternion_op_div_1 = function () {
                return (wu = a._emscripten_bind_btQuaternion_op_div_1 = a.asm.js).apply(null, arguments);
            }),
            xu = (a._emscripten_bind_btQuaternion_normalized_0 = function () {
                return (xu = a._emscripten_bind_btQuaternion_normalized_0 = a.asm.ks).apply(null, arguments);
            }),
            yu = (a._emscripten_bind_btQuaternion_angle_1 = function () {
                return (yu = a._emscripten_bind_btQuaternion_angle_1 = a.asm.ls).apply(null, arguments);
            }),
            zu = (a._emscripten_bind_btQuaternion_angleShortestPath_1 = function () {
                return (zu = a._emscripten_bind_btQuaternion_angleShortestPath_1 = a.asm.ms).apply(null, arguments);
            }),
            Au = (a._emscripten_bind_btQuaternion_getAngle_0 = function () {
                return (Au = a._emscripten_bind_btQuaternion_getAngle_0 = a.asm.ns).apply(null, arguments);
            }),
            Bu = (a._emscripten_bind_btQuaternion_getAngleShortestPath_0 = function () {
                return (Bu = a._emscripten_bind_btQuaternion_getAngleShortestPath_0 = a.asm.os).apply(null, arguments);
            }),
            Cu = (a._emscripten_bind_btQuaternion_getAxis_0 = function () {
                return (Cu = a._emscripten_bind_btQuaternion_getAxis_0 = a.asm.ps).apply(null, arguments);
            }),
            Du = (a._emscripten_bind_btQuaternion_inverse_0 = function () {
                return (Du = a._emscripten_bind_btQuaternion_inverse_0 = a.asm.qs).apply(null, arguments);
            }),
            Eu = (a._emscripten_bind_btQuaternion_slerp_2 = function () {
                return (Eu = a._emscripten_bind_btQuaternion_slerp_2 = a.asm.rs).apply(null, arguments);
            }),
            Fu = (a._emscripten_bind_btQuaternion_getIdentity_0 = function () {
                return (Fu = a._emscripten_bind_btQuaternion_getIdentity_0 = a.asm.ss).apply(null, arguments);
            }),
            Gu = (a._emscripten_bind_btQuaternion_getW_0 = function () {
                return (Gu = a._emscripten_bind_btQuaternion_getW_0 = a.asm.ts).apply(null, arguments);
            }),
            Hu = (a._emscripten_bind_btQuaternion_getX_0 = function () {
                return (Hu = a._emscripten_bind_btQuaternion_getX_0 = a.asm.us).apply(null, arguments);
            }),
            Iu = (a._emscripten_bind_btQuaternion_getY_0 = function () {
                return (Iu = a._emscripten_bind_btQuaternion_getY_0 = a.asm.vs).apply(null, arguments);
            }),
            Ju = (a._emscripten_bind_btQuaternion_getZ_0 = function () {
                return (Ju = a._emscripten_bind_btQuaternion_getZ_0 = a.asm.ws).apply(null, arguments);
            }),
            Ku = (a._emscripten_bind_btQuaternion_setX_1 = function () {
                return (Ku = a._emscripten_bind_btQuaternion_setX_1 = a.asm.xs).apply(null, arguments);
            }),
            Lu = (a._emscripten_bind_btQuaternion_setY_1 = function () {
                return (Lu = a._emscripten_bind_btQuaternion_setY_1 = a.asm.ys).apply(null, arguments);
            }),
            Mu = (a._emscripten_bind_btQuaternion_setZ_1 = function () {
                return (Mu = a._emscripten_bind_btQuaternion_setZ_1 = a.asm.zs).apply(null, arguments);
            }),
            Nu = (a._emscripten_bind_btQuaternion_setW_1 = function () {
                return (Nu = a._emscripten_bind_btQuaternion_setW_1 = a.asm.As).apply(null, arguments);
            }),
            Ou = (a._emscripten_bind_btQuaternion_x_0 = function () {
                return (Ou = a._emscripten_bind_btQuaternion_x_0 = a.asm.Bs).apply(null, arguments);
            }),
            Pu = (a._emscripten_bind_btQuaternion_y_0 = function () {
                return (Pu = a._emscripten_bind_btQuaternion_y_0 = a.asm.Cs).apply(null, arguments);
            }),
            Qu = (a._emscripten_bind_btQuaternion_z_0 = function () {
                return (Qu = a._emscripten_bind_btQuaternion_z_0 = a.asm.Ds).apply(null, arguments);
            }),
            Ru = (a._emscripten_bind_btQuaternion_w_0 = function () {
                return (Ru = a._emscripten_bind_btQuaternion_w_0 = a.asm.Es).apply(null, arguments);
            }),
            Su = (a._emscripten_bind_btQuaternion_op_eq_1 = function () {
                return (Su = a._emscripten_bind_btQuaternion_op_eq_1 = a.asm.Fs).apply(null, arguments);
            }),
            Tu = (a._emscripten_bind_btQuaternion_op_neq_1 = function () {
                return (Tu = a._emscripten_bind_btQuaternion_op_neq_1 = a.asm.Gs).apply(null, arguments);
            }),
            Uu = (a._emscripten_bind_btQuaternion_setValue_3 = function () {
                return (Uu = a._emscripten_bind_btQuaternion_setValue_3 = a.asm.Hs).apply(null, arguments);
            }),
            Vu = (a._emscripten_bind_btQuaternion_setValue_4 = function () {
                return (Vu = a._emscripten_bind_btQuaternion_setValue_4 = a.asm.Is).apply(null, arguments);
            }),
            Wu = (a._emscripten_bind_btQuaternion_setMax_1 = function () {
                return (Wu = a._emscripten_bind_btQuaternion_setMax_1 = a.asm.Js).apply(null, arguments);
            }),
            Xu = (a._emscripten_bind_btQuaternion_setMin_1 = function () {
                return (Xu = a._emscripten_bind_btQuaternion_setMin_1 = a.asm.Ks).apply(null, arguments);
            }),
            Yu = (a._emscripten_bind_btQuaternion___destroy___0 = function () {
                return (Yu = a._emscripten_bind_btQuaternion___destroy___0 = a.asm.Ls).apply(null, arguments);
            }),
            Zu = (a._emscripten_bind_btMatrix3x3_btMatrix3x3_0 = function () {
                return (Zu = a._emscripten_bind_btMatrix3x3_btMatrix3x3_0 = a.asm.Ms).apply(null, arguments);
            }),
            $u = (a._emscripten_bind_btMatrix3x3_btMatrix3x3_1 = function () {
                return ($u = a._emscripten_bind_btMatrix3x3_btMatrix3x3_1 = a.asm.Ns).apply(null, arguments);
            }),
            av = (a._emscripten_bind_btMatrix3x3_btMatrix3x3_3 = function () {
                return (av = a._emscripten_bind_btMatrix3x3_btMatrix3x3_3 = a.asm.Os).apply(null, arguments);
            }),
            bv = (a._emscripten_bind_btMatrix3x3_btMatrix3x3_9 = function () {
                return (bv = a._emscripten_bind_btMatrix3x3_btMatrix3x3_9 = a.asm.Ps).apply(null, arguments);
            }),
            cv = (a._emscripten_bind_btMatrix3x3_getColumn_1 = function () {
                return (cv = a._emscripten_bind_btMatrix3x3_getColumn_1 = a.asm.Qs).apply(null, arguments);
            }),
            dv = (a._emscripten_bind_btMatrix3x3_getRow_1 = function () {
                return (dv = a._emscripten_bind_btMatrix3x3_getRow_1 = a.asm.Rs).apply(null, arguments);
            }),
            ev = (a._emscripten_bind_btMatrix3x3_op_id_1 = function () {
                return (ev = a._emscripten_bind_btMatrix3x3_op_id_1 = a.asm.Ss).apply(null, arguments);
            }),
            fv = (a._emscripten_bind_btMatrix3x3_op_mul_1 = function () {
                return (fv = a._emscripten_bind_btMatrix3x3_op_mul_1 = a.asm.Ts).apply(null, arguments);
            }),
            gv = (a._emscripten_bind_btMatrix3x3_op_add_1 = function () {
                return (gv = a._emscripten_bind_btMatrix3x3_op_add_1 = a.asm.Us).apply(null, arguments);
            }),
            hv = (a._emscripten_bind_btMatrix3x3_op_div_1 = function () {
                return (hv = a._emscripten_bind_btMatrix3x3_op_div_1 = a.asm.Vs).apply(null, arguments);
            }),
            iv = (a._emscripten_bind_btMatrix3x3_setValue_9 = function () {
                return (iv = a._emscripten_bind_btMatrix3x3_setValue_9 = a.asm.Ws).apply(null, arguments);
            }),
            jv = (a._emscripten_bind_btMatrix3x3_setRotation_1 = function () {
                return (jv = a._emscripten_bind_btMatrix3x3_setRotation_1 = a.asm.Xs).apply(null, arguments);
            }),
            kv = (a._emscripten_bind_btMatrix3x3_setEulerYPR_3 = function () {
                return (kv = a._emscripten_bind_btMatrix3x3_setEulerYPR_3 = a.asm.Ys).apply(null, arguments);
            }),
            lv = (a._emscripten_bind_btMatrix3x3_setEulerZYX_3 = function () {
                return (lv = a._emscripten_bind_btMatrix3x3_setEulerZYX_3 = a.asm.Zs).apply(null, arguments);
            }),
            mv = (a._emscripten_bind_btMatrix3x3_setIdentity_0 = function () {
                return (mv = a._emscripten_bind_btMatrix3x3_setIdentity_0 = a.asm._s).apply(null, arguments);
            }),
            nv = (a._emscripten_bind_btMatrix3x3_setZero_0 = function () {
                return (nv = a._emscripten_bind_btMatrix3x3_setZero_0 = a.asm.$s).apply(null, arguments);
            }),
            ov = (a._emscripten_bind_btMatrix3x3_getIdentity_0 = function () {
                return (ov = a._emscripten_bind_btMatrix3x3_getIdentity_0 = a.asm.at).apply(null, arguments);
            }),
            pv = (a._emscripten_bind_btMatrix3x3_getRotation_1 = function () {
                return (pv = a._emscripten_bind_btMatrix3x3_getRotation_1 = a.asm.bt).apply(null, arguments);
            }),
            qv = (a._emscripten_bind_btMatrix3x3_scaled_1 = function () {
                return (qv = a._emscripten_bind_btMatrix3x3_scaled_1 = a.asm.ct).apply(null, arguments);
            }),
            rv = (a._emscripten_bind_btMatrix3x3_determinant_0 = function () {
                return (rv = a._emscripten_bind_btMatrix3x3_determinant_0 = a.asm.dt).apply(null, arguments);
            }),
            sv = (a._emscripten_bind_btMatrix3x3_adjoint_0 = function () {
                return (sv = a._emscripten_bind_btMatrix3x3_adjoint_0 = a.asm.et).apply(null, arguments);
            }),
            tv = (a._emscripten_bind_btMatrix3x3_absolute_0 = function () {
                return (tv = a._emscripten_bind_btMatrix3x3_absolute_0 = a.asm.ft).apply(null, arguments);
            }),
            uv = (a._emscripten_bind_btMatrix3x3_transpose_0 = function () {
                return (uv = a._emscripten_bind_btMatrix3x3_transpose_0 = a.asm.gt).apply(null, arguments);
            }),
            vv = (a._emscripten_bind_btMatrix3x3_inverse_0 = function () {
                return (vv = a._emscripten_bind_btMatrix3x3_inverse_0 = a.asm.ht).apply(null, arguments);
            }),
            wv = (a._emscripten_bind_btMatrix3x3_solve33_1 = function () {
                return (wv = a._emscripten_bind_btMatrix3x3_solve33_1 = a.asm.it).apply(null, arguments);
            }),
            xv = (a._emscripten_bind_btMatrix3x3_transposeTimes_1 = function () {
                return (xv = a._emscripten_bind_btMatrix3x3_transposeTimes_1 = a.asm.jt).apply(null, arguments);
            }),
            yv = (a._emscripten_bind_btMatrix3x3_timesTranspose_1 = function () {
                return (yv = a._emscripten_bind_btMatrix3x3_timesTranspose_1 = a.asm.kt).apply(null, arguments);
            }),
            zv = (a._emscripten_bind_btMatrix3x3_tdotx_1 = function () {
                return (zv = a._emscripten_bind_btMatrix3x3_tdotx_1 = a.asm.lt).apply(null, arguments);
            }),
            Av = (a._emscripten_bind_btMatrix3x3_tdoty_1 = function () {
                return (Av = a._emscripten_bind_btMatrix3x3_tdoty_1 = a.asm.mt).apply(null, arguments);
            }),
            Bv = (a._emscripten_bind_btMatrix3x3_tdotz_1 = function () {
                return (Bv = a._emscripten_bind_btMatrix3x3_tdotz_1 = a.asm.nt).apply(null, arguments);
            }),
            Cv = (a._emscripten_bind_btMatrix3x3_extractRotation_1 = function () {
                return (Cv = a._emscripten_bind_btMatrix3x3_extractRotation_1 = a.asm.ot).apply(null, arguments);
            }),
            Dv = (a._emscripten_bind_btMatrix3x3_extractRotation_2 = function () {
                return (Dv = a._emscripten_bind_btMatrix3x3_extractRotation_2 = a.asm.pt).apply(null, arguments);
            }),
            Ev = (a._emscripten_bind_btMatrix3x3_extractRotation_3 = function () {
                return (Ev = a._emscripten_bind_btMatrix3x3_extractRotation_3 = a.asm.qt).apply(null, arguments);
            }),
            Fv = (a._emscripten_bind_btMatrix3x3_diagonalize_3 = function () {
                return (Fv = a._emscripten_bind_btMatrix3x3_diagonalize_3 = a.asm.rt).apply(null, arguments);
            }),
            Gv = (a._emscripten_bind_btMatrix3x3_cofac_4 = function () {
                return (Gv = a._emscripten_bind_btMatrix3x3_cofac_4 = a.asm.st).apply(null, arguments);
            }),
            Hv = (a._emscripten_bind_btMatrix3x3___destroy___0 = function () {
                return (Hv = a._emscripten_bind_btMatrix3x3___destroy___0 = a.asm.tt).apply(null, arguments);
            }),
            Iv = (a._emscripten_bind_btTransform_btTransform_0 = function () {
                return (Iv = a._emscripten_bind_btTransform_btTransform_0 = a.asm.ut).apply(null, arguments);
            }),
            Jv = (a._emscripten_bind_btTransform_btTransform_1 = function () {
                return (Jv = a._emscripten_bind_btTransform_btTransform_1 = a.asm.vt).apply(null, arguments);
            }),
            Kv = (a._emscripten_bind_btTransform_btTransform_2 = function () {
                return (Kv = a._emscripten_bind_btTransform_btTransform_2 = a.asm.wt).apply(null, arguments);
            }),
            Lv = (a._emscripten_bind_btTransform_op_set_1 = function () {
                return (Lv = a._emscripten_bind_btTransform_op_set_1 = a.asm.xt).apply(null, arguments);
            }),
            Mv = (a._emscripten_bind_btTransform_mult_2 = function () {
                return (Mv = a._emscripten_bind_btTransform_mult_2 = a.asm.yt).apply(null, arguments);
            }),
            Nv = (a._emscripten_bind_btTransform_getBasis_0 = function () {
                return (Nv = a._emscripten_bind_btTransform_getBasis_0 = a.asm.zt).apply(null, arguments);
            }),
            Ov = (a._emscripten_bind_btTransform_getOrigin_0 = function () {
                return (Ov = a._emscripten_bind_btTransform_getOrigin_0 = a.asm.At).apply(null, arguments);
            }),
            Pv = (a._emscripten_bind_btTransform_getRotation_0 = function () {
                return (Pv = a._emscripten_bind_btTransform_getRotation_0 = a.asm.Bt).apply(null, arguments);
            }),
            Qv = (a._emscripten_bind_btTransform_setOrigin_1 = function () {
                return (Qv = a._emscripten_bind_btTransform_setOrigin_1 = a.asm.Ct).apply(null, arguments);
            }),
            Rv = (a._emscripten_bind_btTransform_invXform_1 = function () {
                return (Rv = a._emscripten_bind_btTransform_invXform_1 = a.asm.Dt).apply(null, arguments);
            }),
            Sv = (a._emscripten_bind_btTransform_setBasis_1 = function () {
                return (Sv = a._emscripten_bind_btTransform_setBasis_1 = a.asm.Et).apply(null, arguments);
            }),
            Tv = (a._emscripten_bind_btTransform_setRotation_1 = function () {
                return (Tv = a._emscripten_bind_btTransform_setRotation_1 = a.asm.Ft).apply(null, arguments);
            }),
            Uv = (a._emscripten_bind_btTransform_setIdentity_0 = function () {
                return (Uv = a._emscripten_bind_btTransform_setIdentity_0 = a.asm.Gt).apply(null, arguments);
            }),
            Vv = (a._emscripten_bind_btTransform_op_mul_1 = function () {
                return (Vv = a._emscripten_bind_btTransform_op_mul_1 = a.asm.Ht).apply(null, arguments);
            }),
            Wv = (a._emscripten_bind_btTransform_inverse_0 = function () {
                return (Wv = a._emscripten_bind_btTransform_inverse_0 = a.asm.It).apply(null, arguments);
            }),
            Xv = (a._emscripten_bind_btTransform_inverseTimes_1 = function () {
                return (Xv = a._emscripten_bind_btTransform_inverseTimes_1 = a.asm.Jt).apply(null, arguments);
            }),
            Yv = (a._emscripten_bind_btTransform_getIdentity_0 = function () {
                return (Yv = a._emscripten_bind_btTransform_getIdentity_0 = a.asm.Kt).apply(null, arguments);
            }),
            Zv = (a._emscripten_bind_btTransform___destroy___0 = function () {
                return (Zv = a._emscripten_bind_btTransform___destroy___0 = a.asm.Lt).apply(null, arguments);
            }),
            $v = (a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 = function () {
                return ($v = a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 = a.asm.Mt).apply(null, arguments);
            }),
            aw = (a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 = function () {
                return (aw = a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 = a.asm.Nt).apply(null, arguments);
            }),
            bw = (a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 = function () {
                return (bw = a._emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 = a.asm.Ot).apply(null, arguments);
            }),
            cw = (a._emscripten_bind_btDefaultMotionState_getWorldTransform_1 = function () {
                return (cw = a._emscripten_bind_btDefaultMotionState_getWorldTransform_1 = a.asm.Pt).apply(null, arguments);
            }),
            dw = (a._emscripten_bind_btDefaultMotionState_setWorldTransform_1 = function () {
                return (dw = a._emscripten_bind_btDefaultMotionState_setWorldTransform_1 = a.asm.Qt).apply(null, arguments);
            }),
            ew = (a._emscripten_bind_btDefaultMotionState_get_m_graphicsWorldTrans_0 = function () {
                return (ew = a._emscripten_bind_btDefaultMotionState_get_m_graphicsWorldTrans_0 = a.asm.Rt).apply(null, arguments);
            }),
            fw = (a._emscripten_bind_btDefaultMotionState_set_m_graphicsWorldTrans_1 = function () {
                return (fw = a._emscripten_bind_btDefaultMotionState_set_m_graphicsWorldTrans_1 = a.asm.St).apply(null, arguments);
            }),
            gw = (a._emscripten_bind_btDefaultMotionState_get_m_centerOfMassOffset_0 = function () {
                return (gw = a._emscripten_bind_btDefaultMotionState_get_m_centerOfMassOffset_0 = a.asm.Tt).apply(null, arguments);
            }),
            hw = (a._emscripten_bind_btDefaultMotionState_set_m_centerOfMassOffset_1 = function () {
                return (hw = a._emscripten_bind_btDefaultMotionState_set_m_centerOfMassOffset_1 = a.asm.Ut).apply(null, arguments);
            }),
            iw = (a._emscripten_bind_btDefaultMotionState_get_m_startWorldTrans_0 = function () {
                return (iw = a._emscripten_bind_btDefaultMotionState_get_m_startWorldTrans_0 = a.asm.Vt).apply(null, arguments);
            }),
            jw = (a._emscripten_bind_btDefaultMotionState_set_m_startWorldTrans_1 = function () {
                return (jw = a._emscripten_bind_btDefaultMotionState_set_m_startWorldTrans_1 = a.asm.Wt).apply(null, arguments);
            }),
            kw = (a._emscripten_bind_btDefaultMotionState_get_m_userPointer_0 = function () {
                return (kw = a._emscripten_bind_btDefaultMotionState_get_m_userPointer_0 = a.asm.Xt).apply(null, arguments);
            }),
            lw = (a._emscripten_bind_btDefaultMotionState_set_m_userPointer_1 = function () {
                return (lw = a._emscripten_bind_btDefaultMotionState_set_m_userPointer_1 = a.asm.Yt).apply(null, arguments);
            }),
            mw = (a._emscripten_bind_btDefaultMotionState___destroy___0 = function () {
                return (mw = a._emscripten_bind_btDefaultMotionState___destroy___0 = a.asm.Zt).apply(null, arguments);
            }),
            nw = (a._emscripten_bind_btIntArray_size_0 = function () {
                return (nw = a._emscripten_bind_btIntArray_size_0 = a.asm._t).apply(null, arguments);
            }),
            ow = (a._emscripten_bind_btIntArray_at_1 = function () {
                return (ow = a._emscripten_bind_btIntArray_at_1 = a.asm.$t).apply(null, arguments);
            }),
            pw = (a._emscripten_bind_btIntArray___destroy___0 = function () {
                return (pw = a._emscripten_bind_btIntArray___destroy___0 = a.asm.au).apply(null, arguments);
            }),
            qw = (a._emscripten_bind_btFace_get_m_indices_0 = function () {
                return (qw = a._emscripten_bind_btFace_get_m_indices_0 = a.asm.bu).apply(null, arguments);
            }),
            rw = (a._emscripten_bind_btFace_set_m_indices_1 = function () {
                return (rw = a._emscripten_bind_btFace_set_m_indices_1 = a.asm.cu).apply(null, arguments);
            }),
            sw = (a._emscripten_bind_btFace_get_m_plane_1 = function () {
                return (sw = a._emscripten_bind_btFace_get_m_plane_1 = a.asm.du).apply(null, arguments);
            }),
            tw = (a._emscripten_bind_btFace_set_m_plane_2 = function () {
                return (tw = a._emscripten_bind_btFace_set_m_plane_2 = a.asm.eu).apply(null, arguments);
            }),
            uw = (a._emscripten_bind_btFace___destroy___0 = function () {
                return (uw = a._emscripten_bind_btFace___destroy___0 = a.asm.fu).apply(null, arguments);
            }),
            vw = (a._emscripten_bind_btVector3Array_size_0 = function () {
                return (vw = a._emscripten_bind_btVector3Array_size_0 = a.asm.gu).apply(null, arguments);
            }),
            ww = (a._emscripten_bind_btVector3Array_at_1 = function () {
                return (ww = a._emscripten_bind_btVector3Array_at_1 = a.asm.hu).apply(null, arguments);
            }),
            xw = (a._emscripten_bind_btVector3Array___destroy___0 = function () {
                return (xw = a._emscripten_bind_btVector3Array___destroy___0 = a.asm.iu).apply(null, arguments);
            }),
            yw = (a._emscripten_bind_btFaceArray_size_0 = function () {
                return (yw = a._emscripten_bind_btFaceArray_size_0 = a.asm.ju).apply(null, arguments);
            }),
            zw = (a._emscripten_bind_btFaceArray_at_1 = function () {
                return (zw = a._emscripten_bind_btFaceArray_at_1 = a.asm.ku).apply(null, arguments);
            }),
            Aw = (a._emscripten_bind_btFaceArray___destroy___0 = function () {
                return (Aw = a._emscripten_bind_btFaceArray___destroy___0 = a.asm.lu).apply(null, arguments);
            }),
            Bw = (a._emscripten_bind_btCollisionObjectWrapper_getWorldTransform_0 = function () {
                return (Bw = a._emscripten_bind_btCollisionObjectWrapper_getWorldTransform_0 = a.asm.mu).apply(null, arguments);
            }),
            Cw = (a._emscripten_bind_btCollisionObjectWrapper_getCollisionObject_0 = function () {
                return (Cw = a._emscripten_bind_btCollisionObjectWrapper_getCollisionObject_0 = a.asm.nu).apply(null, arguments);
            }),
            Dw = (a._emscripten_bind_btCollisionObjectWrapper_getCollisionShape_0 = function () {
                return (Dw = a._emscripten_bind_btCollisionObjectWrapper_getCollisionShape_0 = a.asm.ou).apply(null, arguments);
            }),
            Ew = (a._emscripten_bind_btCollisionObjectWrapper_get_m_partId_0 = function () {
                return (Ew = a._emscripten_bind_btCollisionObjectWrapper_get_m_partId_0 = a.asm.pu).apply(null, arguments);
            }),
            Fw = (a._emscripten_bind_btCollisionObjectWrapper_set_m_partId_1 = function () {
                return (Fw = a._emscripten_bind_btCollisionObjectWrapper_set_m_partId_1 = a.asm.qu).apply(null, arguments);
            }),
            Gw = (a._emscripten_bind_btCollisionObjectWrapper_get_m_index_0 = function () {
                return (Gw = a._emscripten_bind_btCollisionObjectWrapper_get_m_index_0 = a.asm.ru).apply(null, arguments);
            }),
            Hw = (a._emscripten_bind_btCollisionObjectWrapper_set_m_index_1 = function () {
                return (Hw = a._emscripten_bind_btCollisionObjectWrapper_set_m_index_1 = a.asm.su).apply(null, arguments);
            }),
            Iw = (a._emscripten_bind_LocalRayResult_LocalRayResult_4 = function () {
                return (Iw = a._emscripten_bind_LocalRayResult_LocalRayResult_4 = a.asm.tu).apply(null, arguments);
            }),
            Jw = (a._emscripten_bind_LocalRayResult_get_m_collisionObject_0 = function () {
                return (Jw = a._emscripten_bind_LocalRayResult_get_m_collisionObject_0 = a.asm.uu).apply(null, arguments);
            }),
            Kw = (a._emscripten_bind_LocalRayResult_set_m_collisionObject_1 = function () {
                return (Kw = a._emscripten_bind_LocalRayResult_set_m_collisionObject_1 = a.asm.vu).apply(null, arguments);
            }),
            Lw = (a._emscripten_bind_LocalRayResult_get_m_localShapeInfo_0 = function () {
                return (Lw = a._emscripten_bind_LocalRayResult_get_m_localShapeInfo_0 = a.asm.wu).apply(null, arguments);
            }),
            Mw = (a._emscripten_bind_LocalRayResult_set_m_localShapeInfo_1 = function () {
                return (Mw = a._emscripten_bind_LocalRayResult_set_m_localShapeInfo_1 = a.asm.xu).apply(null, arguments);
            }),
            Nw = (a._emscripten_bind_LocalRayResult_get_m_hitNormalLocal_0 = function () {
                return (Nw = a._emscripten_bind_LocalRayResult_get_m_hitNormalLocal_0 = a.asm.yu).apply(null, arguments);
            }),
            Ow = (a._emscripten_bind_LocalRayResult_set_m_hitNormalLocal_1 = function () {
                return (Ow = a._emscripten_bind_LocalRayResult_set_m_hitNormalLocal_1 = a.asm.zu).apply(null, arguments);
            }),
            Pw = (a._emscripten_bind_LocalRayResult_get_m_hitFraction_0 = function () {
                return (Pw = a._emscripten_bind_LocalRayResult_get_m_hitFraction_0 = a.asm.Au).apply(null, arguments);
            }),
            Qw = (a._emscripten_bind_LocalRayResult_set_m_hitFraction_1 = function () {
                return (Qw = a._emscripten_bind_LocalRayResult_set_m_hitFraction_1 = a.asm.Bu).apply(null, arguments);
            }),
            Rw = (a._emscripten_bind_LocalRayResult___destroy___0 = function () {
                return (Rw = a._emscripten_bind_LocalRayResult___destroy___0 = a.asm.Cu).apply(null, arguments);
            }),
            Sw = (a._emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 = function () {
                return (Sw = a._emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 = a.asm.Du).apply(null, arguments);
            }),
            Tw = (a._emscripten_bind_ClosestRayResultCallback_addSingleResult_2 = function () {
                return (Tw = a._emscripten_bind_ClosestRayResultCallback_addSingleResult_2 = a.asm.Eu).apply(null, arguments);
            }),
            Uw = (a._emscripten_bind_ClosestRayResultCallback_hasHit_0 = function () {
                return (Uw = a._emscripten_bind_ClosestRayResultCallback_hasHit_0 = a.asm.Fu).apply(null, arguments);
            }),
            Vw = (a._emscripten_bind_ClosestRayResultCallback_needsCollision_1 = function () {
                return (Vw = a._emscripten_bind_ClosestRayResultCallback_needsCollision_1 = a.asm.Gu).apply(null, arguments);
            }),
            Ww = (a._emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 = function () {
                return (Ww = a._emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 = a.asm.Hu).apply(null, arguments);
            }),
            Xw = (a._emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 = function () {
                return (Xw = a._emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 = a.asm.Iu).apply(null, arguments);
            }),
            Yw = (a._emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 = function () {
                return (Yw = a._emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 = a.asm.Ju).apply(null, arguments);
            }),
            Zw = (a._emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 = function () {
                return (Zw = a._emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 = a.asm.Ku).apply(null, arguments);
            }),
            $w = (a._emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 = function () {
                return ($w = a._emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 = a.asm.Lu).apply(null, arguments);
            }),
            ax = (a._emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 = function () {
                return (ax = a._emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 = a.asm.Mu).apply(null, arguments);
            }),
            bx = (a._emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 = function () {
                return (bx = a._emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 = a.asm.Nu).apply(null, arguments);
            }),
            cx = (a._emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 = function () {
                return (cx = a._emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 = a.asm.Ou).apply(null, arguments);
            }),
            dx = (a._emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 = function () {
                return (dx = a._emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 = a.asm.Pu).apply(null, arguments);
            }),
            ex = (a._emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 = function () {
                return (ex = a._emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 = a.asm.Qu).apply(null, arguments);
            }),
            fx = (a._emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 = function () {
                return (fx = a._emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 = a.asm.Ru).apply(null, arguments);
            }),
            gx = (a._emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 = function () {
                return (gx = a._emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 = a.asm.Su).apply(null, arguments);
            }),
            hx = (a._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (hx = a._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 = a.asm.Tu).apply(null, arguments);
            }),
            ix = (a._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (ix = a._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 = a.asm.Uu).apply(null, arguments);
            }),
            jx = (a._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 = function () {
                return (jx = a._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 = a.asm.Vu).apply(null, arguments);
            }),
            kx = (a._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 = function () {
                return (kx = a._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 = a.asm.Wu).apply(null, arguments);
            }),
            lx = (a._emscripten_bind_ClosestRayResultCallback_get_m_flags_0 = function () {
                return (lx = a._emscripten_bind_ClosestRayResultCallback_get_m_flags_0 = a.asm.Xu).apply(null, arguments);
            }),
            mx = (a._emscripten_bind_ClosestRayResultCallback_set_m_flags_1 = function () {
                return (mx = a._emscripten_bind_ClosestRayResultCallback_set_m_flags_1 = a.asm.Yu).apply(null, arguments);
            }),
            nx = (a._emscripten_bind_ClosestRayResultCallback___destroy___0 = function () {
                return (nx = a._emscripten_bind_ClosestRayResultCallback___destroy___0 = a.asm.Zu).apply(null, arguments);
            }),
            ox = (a._emscripten_bind_btConstCollisionObjectArray_size_0 = function () {
                return (ox = a._emscripten_bind_btConstCollisionObjectArray_size_0 = a.asm._u).apply(null, arguments);
            }),
            px = (a._emscripten_bind_btConstCollisionObjectArray_at_1 = function () {
                return (px = a._emscripten_bind_btConstCollisionObjectArray_at_1 = a.asm.$u).apply(null, arguments);
            }),
            qx = (a._emscripten_bind_btConstCollisionObjectArray___destroy___0 = function () {
                return (qx = a._emscripten_bind_btConstCollisionObjectArray___destroy___0 = a.asm.av).apply(null, arguments);
            }),
            rx = (a._emscripten_bind_btScalarArray_size_0 = function () {
                return (rx = a._emscripten_bind_btScalarArray_size_0 = a.asm.bv).apply(null, arguments);
            }),
            sx = (a._emscripten_bind_btScalarArray_at_1 = function () {
                return (sx = a._emscripten_bind_btScalarArray_at_1 = a.asm.cv).apply(null, arguments);
            }),
            tx = (a._emscripten_bind_btScalarArray___destroy___0 = function () {
                return (tx = a._emscripten_bind_btScalarArray___destroy___0 = a.asm.dv).apply(null, arguments);
            }),
            ux = (a._emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 = function () {
                return (ux = a._emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 = a.asm.ev).apply(null, arguments);
            }),
            vx = (a._emscripten_bind_AllHitsRayResultCallback_addSingleResult_2 = function () {
                return (vx = a._emscripten_bind_AllHitsRayResultCallback_addSingleResult_2 = a.asm.fv).apply(null, arguments);
            }),
            wx = (a._emscripten_bind_AllHitsRayResultCallback_hasHit_0 = function () {
                return (wx = a._emscripten_bind_AllHitsRayResultCallback_hasHit_0 = a.asm.gv).apply(null, arguments);
            }),
            xx = (a._emscripten_bind_AllHitsRayResultCallback_needsCollision_1 = function () {
                return (xx = a._emscripten_bind_AllHitsRayResultCallback_needsCollision_1 = a.asm.hv).apply(null, arguments);
            }),
            yx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 = function () {
                return (yx = a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 = a.asm.iv).apply(null, arguments);
            }),
            zx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 = function () {
                return (zx = a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 = a.asm.jv).apply(null, arguments);
            }),
            Ax = (a._emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 = function () {
                return (Ax = a._emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 = a.asm.kv).apply(null, arguments);
            }),
            Bx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 = function () {
                return (Bx = a._emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 = a.asm.lv).apply(null, arguments);
            }),
            Cx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 = function () {
                return (Cx = a._emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 = a.asm.mv).apply(null, arguments);
            }),
            Dx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 = function () {
                return (Dx = a._emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 = a.asm.nv).apply(null, arguments);
            }),
            Ex = (a._emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 = function () {
                return (Ex = a._emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 = a.asm.ov).apply(null, arguments);
            }),
            Fx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 = function () {
                return (Fx = a._emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 = a.asm.pv).apply(null, arguments);
            }),
            Gx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 = function () {
                return (Gx = a._emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 = a.asm.qv).apply(null, arguments);
            }),
            Hx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 = function () {
                return (Hx = a._emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 = a.asm.rv).apply(null, arguments);
            }),
            Ix = (a._emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 = function () {
                return (Ix = a._emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 = a.asm.sv).apply(null, arguments);
            }),
            Jx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 = function () {
                return (Jx = a._emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 = a.asm.tv).apply(null, arguments);
            }),
            Kx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 = function () {
                return (Kx = a._emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 = a.asm.uv).apply(null, arguments);
            }),
            Lx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 = function () {
                return (Lx = a._emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 = a.asm.vv).apply(null, arguments);
            }),
            Mx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 = function () {
                return (Mx = a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 = a.asm.wv).apply(null, arguments);
            }),
            Nx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 = function () {
                return (Nx = a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 = a.asm.xv).apply(null, arguments);
            }),
            Ox = (a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (Ox = a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 = a.asm.yv).apply(null, arguments);
            }),
            Px = (a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (Px = a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 = a.asm.zv).apply(null, arguments);
            }),
            Qx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 = function () {
                return (Qx = a._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 = a.asm.Av).apply(null, arguments);
            }),
            Rx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 = function () {
                return (Rx = a._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 = a.asm.Bv).apply(null, arguments);
            }),
            Sx = (a._emscripten_bind_AllHitsRayResultCallback_get_m_flags_0 = function () {
                return (Sx = a._emscripten_bind_AllHitsRayResultCallback_get_m_flags_0 = a.asm.Cv).apply(null, arguments);
            }),
            Tx = (a._emscripten_bind_AllHitsRayResultCallback_set_m_flags_1 = function () {
                return (Tx = a._emscripten_bind_AllHitsRayResultCallback_set_m_flags_1 = a.asm.Dv).apply(null, arguments);
            }),
            Ux = (a._emscripten_bind_AllHitsRayResultCallback___destroy___0 = function () {
                return (Ux = a._emscripten_bind_AllHitsRayResultCallback___destroy___0 = a.asm.Ev).apply(null, arguments);
            }),
            Vx = (a._emscripten_bind_LocalConvexResult_LocalConvexResult_5 = function () {
                return (Vx = a._emscripten_bind_LocalConvexResult_LocalConvexResult_5 = a.asm.Fv).apply(null, arguments);
            }),
            Wx = (a._emscripten_bind_LocalConvexResult_get_m_hitCollisionObject_0 = function () {
                return (Wx = a._emscripten_bind_LocalConvexResult_get_m_hitCollisionObject_0 = a.asm.Gv).apply(null, arguments);
            }),
            Xx = (a._emscripten_bind_LocalConvexResult_set_m_hitCollisionObject_1 = function () {
                return (Xx = a._emscripten_bind_LocalConvexResult_set_m_hitCollisionObject_1 = a.asm.Hv).apply(null, arguments);
            }),
            Yx = (a._emscripten_bind_LocalConvexResult_get_m_localShapeInfo_0 = function () {
                return (Yx = a._emscripten_bind_LocalConvexResult_get_m_localShapeInfo_0 = a.asm.Iv).apply(null, arguments);
            }),
            Zx = (a._emscripten_bind_LocalConvexResult_set_m_localShapeInfo_1 = function () {
                return (Zx = a._emscripten_bind_LocalConvexResult_set_m_localShapeInfo_1 = a.asm.Jv).apply(null, arguments);
            }),
            $x = (a._emscripten_bind_LocalConvexResult_get_m_hitNormalLocal_0 = function () {
                return ($x = a._emscripten_bind_LocalConvexResult_get_m_hitNormalLocal_0 = a.asm.Kv).apply(null, arguments);
            }),
            ay = (a._emscripten_bind_LocalConvexResult_set_m_hitNormalLocal_1 = function () {
                return (ay = a._emscripten_bind_LocalConvexResult_set_m_hitNormalLocal_1 = a.asm.Lv).apply(null, arguments);
            }),
            by = (a._emscripten_bind_LocalConvexResult_get_m_hitPointLocal_0 = function () {
                return (by = a._emscripten_bind_LocalConvexResult_get_m_hitPointLocal_0 = a.asm.Mv).apply(null, arguments);
            }),
            cy = (a._emscripten_bind_LocalConvexResult_set_m_hitPointLocal_1 = function () {
                return (cy = a._emscripten_bind_LocalConvexResult_set_m_hitPointLocal_1 = a.asm.Nv).apply(null, arguments);
            }),
            dy = (a._emscripten_bind_LocalConvexResult_get_m_hitFraction_0 = function () {
                return (dy = a._emscripten_bind_LocalConvexResult_get_m_hitFraction_0 = a.asm.Ov).apply(null, arguments);
            }),
            ey = (a._emscripten_bind_LocalConvexResult_set_m_hitFraction_1 = function () {
                return (ey = a._emscripten_bind_LocalConvexResult_set_m_hitFraction_1 = a.asm.Pv).apply(null, arguments);
            }),
            fy = (a._emscripten_bind_LocalConvexResult___destroy___0 = function () {
                return (fy = a._emscripten_bind_LocalConvexResult___destroy___0 = a.asm.Qv).apply(null, arguments);
            }),
            gy = (a._emscripten_bind_btManifoldPoint_btManifoldPoint_0 = function () {
                return (gy = a._emscripten_bind_btManifoldPoint_btManifoldPoint_0 = a.asm.Rv).apply(null, arguments);
            }),
            hy = (a._emscripten_bind_btManifoldPoint_btManifoldPoint_4 = function () {
                return (hy = a._emscripten_bind_btManifoldPoint_btManifoldPoint_4 = a.asm.Sv).apply(null, arguments);
            }),
            iy = (a._emscripten_bind_btManifoldPoint_getDistance_0 = function () {
                return (iy = a._emscripten_bind_btManifoldPoint_getDistance_0 = a.asm.Tv).apply(null, arguments);
            }),
            jy = (a._emscripten_bind_btManifoldPoint_getLifeTime_0 = function () {
                return (jy = a._emscripten_bind_btManifoldPoint_getLifeTime_0 = a.asm.Uv).apply(null, arguments);
            }),
            ky = (a._emscripten_bind_btManifoldPoint_getPositionWorldOnA_0 = function () {
                return (ky = a._emscripten_bind_btManifoldPoint_getPositionWorldOnA_0 = a.asm.Vv).apply(null, arguments);
            }),
            ly = (a._emscripten_bind_btManifoldPoint_getPositionWorldOnB_0 = function () {
                return (ly = a._emscripten_bind_btManifoldPoint_getPositionWorldOnB_0 = a.asm.Wv).apply(null, arguments);
            }),
            my = (a._emscripten_bind_btManifoldPoint_setDistance_1 = function () {
                return (my = a._emscripten_bind_btManifoldPoint_setDistance_1 = a.asm.Xv).apply(null, arguments);
            }),
            ny = (a._emscripten_bind_btManifoldPoint_getAppliedImpulse_0 = function () {
                return (ny = a._emscripten_bind_btManifoldPoint_getAppliedImpulse_0 = a.asm.Yv).apply(null, arguments);
            }),
            oy = (a._emscripten_bind_btManifoldPoint_get_m_localPointA_0 = function () {
                return (oy = a._emscripten_bind_btManifoldPoint_get_m_localPointA_0 = a.asm.Zv).apply(null, arguments);
            }),
            py = (a._emscripten_bind_btManifoldPoint_set_m_localPointA_1 = function () {
                return (py = a._emscripten_bind_btManifoldPoint_set_m_localPointA_1 = a.asm._v).apply(null, arguments);
            }),
            qy = (a._emscripten_bind_btManifoldPoint_get_m_localPointB_0 = function () {
                return (qy = a._emscripten_bind_btManifoldPoint_get_m_localPointB_0 = a.asm.$v).apply(null, arguments);
            }),
            ry = (a._emscripten_bind_btManifoldPoint_set_m_localPointB_1 = function () {
                return (ry = a._emscripten_bind_btManifoldPoint_set_m_localPointB_1 = a.asm.aw).apply(null, arguments);
            }),
            sy = (a._emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 = function () {
                return (sy = a._emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 = a.asm.bw).apply(null, arguments);
            }),
            ty = (a._emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 = function () {
                return (ty = a._emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 = a.asm.cw).apply(null, arguments);
            }),
            uy = (a._emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 = function () {
                return (uy = a._emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 = a.asm.dw).apply(null, arguments);
            }),
            vy = (a._emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 = function () {
                return (vy = a._emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 = a.asm.ew).apply(null, arguments);
            }),
            wy = (a._emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 = function () {
                return (wy = a._emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 = a.asm.fw).apply(null, arguments);
            }),
            xy = (a._emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 = function () {
                return (xy = a._emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 = a.asm.gw).apply(null, arguments);
            }),
            yy = (a._emscripten_bind_btManifoldPoint_get_m_distance1_0 = function () {
                return (yy = a._emscripten_bind_btManifoldPoint_get_m_distance1_0 = a.asm.hw).apply(null, arguments);
            }),
            zy = (a._emscripten_bind_btManifoldPoint_set_m_distance1_1 = function () {
                return (zy = a._emscripten_bind_btManifoldPoint_set_m_distance1_1 = a.asm.iw).apply(null, arguments);
            }),
            Ay = (a._emscripten_bind_btManifoldPoint_get_m_combinedFriction_0 = function () {
                return (Ay = a._emscripten_bind_btManifoldPoint_get_m_combinedFriction_0 = a.asm.jw).apply(null, arguments);
            }),
            By = (a._emscripten_bind_btManifoldPoint_set_m_combinedFriction_1 = function () {
                return (By = a._emscripten_bind_btManifoldPoint_set_m_combinedFriction_1 = a.asm.kw).apply(null, arguments);
            }),
            Cy = (a._emscripten_bind_btManifoldPoint_get_m_combinedRollingFriction_0 = function () {
                return (Cy = a._emscripten_bind_btManifoldPoint_get_m_combinedRollingFriction_0 = a.asm.lw).apply(null, arguments);
            }),
            Dy = (a._emscripten_bind_btManifoldPoint_set_m_combinedRollingFriction_1 = function () {
                return (Dy = a._emscripten_bind_btManifoldPoint_set_m_combinedRollingFriction_1 = a.asm.mw).apply(null, arguments);
            }),
            Ey = (a._emscripten_bind_btManifoldPoint_get_m_combinedSpinningFriction_0 = function () {
                return (Ey = a._emscripten_bind_btManifoldPoint_get_m_combinedSpinningFriction_0 = a.asm.nw).apply(null, arguments);
            }),
            Fy = (a._emscripten_bind_btManifoldPoint_set_m_combinedSpinningFriction_1 = function () {
                return (Fy = a._emscripten_bind_btManifoldPoint_set_m_combinedSpinningFriction_1 = a.asm.ow).apply(null, arguments);
            }),
            Gy = (a._emscripten_bind_btManifoldPoint_get_m_combinedRestitution_0 = function () {
                return (Gy = a._emscripten_bind_btManifoldPoint_get_m_combinedRestitution_0 = a.asm.pw).apply(null, arguments);
            }),
            Hy = (a._emscripten_bind_btManifoldPoint_set_m_combinedRestitution_1 = function () {
                return (Hy = a._emscripten_bind_btManifoldPoint_set_m_combinedRestitution_1 = a.asm.qw).apply(null, arguments);
            }),
            Iy = (a._emscripten_bind_btManifoldPoint_get_m_partId0_0 = function () {
                return (Iy = a._emscripten_bind_btManifoldPoint_get_m_partId0_0 = a.asm.rw).apply(null, arguments);
            }),
            Jy = (a._emscripten_bind_btManifoldPoint_set_m_partId0_1 = function () {
                return (Jy = a._emscripten_bind_btManifoldPoint_set_m_partId0_1 = a.asm.sw).apply(null, arguments);
            }),
            Ky = (a._emscripten_bind_btManifoldPoint_get_m_partId1_0 = function () {
                return (Ky = a._emscripten_bind_btManifoldPoint_get_m_partId1_0 = a.asm.tw).apply(null, arguments);
            }),
            Ly = (a._emscripten_bind_btManifoldPoint_set_m_partId1_1 = function () {
                return (Ly = a._emscripten_bind_btManifoldPoint_set_m_partId1_1 = a.asm.uw).apply(null, arguments);
            }),
            My = (a._emscripten_bind_btManifoldPoint_get_m_index0_0 = function () {
                return (My = a._emscripten_bind_btManifoldPoint_get_m_index0_0 = a.asm.vw).apply(null, arguments);
            }),
            Ny = (a._emscripten_bind_btManifoldPoint_set_m_index0_1 = function () {
                return (Ny = a._emscripten_bind_btManifoldPoint_set_m_index0_1 = a.asm.ww).apply(null, arguments);
            }),
            Oy = (a._emscripten_bind_btManifoldPoint_get_m_index1_0 = function () {
                return (Oy = a._emscripten_bind_btManifoldPoint_get_m_index1_0 = a.asm.xw).apply(null, arguments);
            }),
            Py = (a._emscripten_bind_btManifoldPoint_set_m_index1_1 = function () {
                return (Py = a._emscripten_bind_btManifoldPoint_set_m_index1_1 = a.asm.yw).apply(null, arguments);
            }),
            Qy = (a._emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 = function () {
                return (Qy = a._emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 = a.asm.zw).apply(null, arguments);
            }),
            Ry = (a._emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 = function () {
                return (Ry = a._emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 = a.asm.Aw).apply(null, arguments);
            }),
            Sy = (a._emscripten_bind_btManifoldPoint_get_m_contactPointFlags_0 = function () {
                return (Sy = a._emscripten_bind_btManifoldPoint_get_m_contactPointFlags_0 = a.asm.Bw).apply(null, arguments);
            }),
            Ty = (a._emscripten_bind_btManifoldPoint_set_m_contactPointFlags_1 = function () {
                return (Ty = a._emscripten_bind_btManifoldPoint_set_m_contactPointFlags_1 = a.asm.Cw).apply(null, arguments);
            }),
            Uy = (a._emscripten_bind_btManifoldPoint_get_m_appliedImpulse_0 = function () {
                return (Uy = a._emscripten_bind_btManifoldPoint_get_m_appliedImpulse_0 = a.asm.Dw).apply(null, arguments);
            }),
            Vy = (a._emscripten_bind_btManifoldPoint_set_m_appliedImpulse_1 = function () {
                return (Vy = a._emscripten_bind_btManifoldPoint_set_m_appliedImpulse_1 = a.asm.Ew).apply(null, arguments);
            }),
            Wy = (a._emscripten_bind_btManifoldPoint_get_m_prevRHS_0 = function () {
                return (Wy = a._emscripten_bind_btManifoldPoint_get_m_prevRHS_0 = a.asm.Fw).apply(null, arguments);
            }),
            Xy = (a._emscripten_bind_btManifoldPoint_set_m_prevRHS_1 = function () {
                return (Xy = a._emscripten_bind_btManifoldPoint_set_m_prevRHS_1 = a.asm.Gw).apply(null, arguments);
            }),
            Yy = (a._emscripten_bind_btManifoldPoint_get_m_appliedImpulseLateral1_0 = function () {
                return (Yy = a._emscripten_bind_btManifoldPoint_get_m_appliedImpulseLateral1_0 = a.asm.Hw).apply(null, arguments);
            }),
            Zy = (a._emscripten_bind_btManifoldPoint_set_m_appliedImpulseLateral1_1 = function () {
                return (Zy = a._emscripten_bind_btManifoldPoint_set_m_appliedImpulseLateral1_1 = a.asm.Iw).apply(null, arguments);
            }),
            $y = (a._emscripten_bind_btManifoldPoint_get_m_appliedImpulseLateral2_0 = function () {
                return ($y = a._emscripten_bind_btManifoldPoint_get_m_appliedImpulseLateral2_0 = a.asm.Jw).apply(null, arguments);
            }),
            az = (a._emscripten_bind_btManifoldPoint_set_m_appliedImpulseLateral2_1 = function () {
                return (az = a._emscripten_bind_btManifoldPoint_set_m_appliedImpulseLateral2_1 = a.asm.Kw).apply(null, arguments);
            }),
            bz = (a._emscripten_bind_btManifoldPoint_get_m_contactMotion1_0 = function () {
                return (bz = a._emscripten_bind_btManifoldPoint_get_m_contactMotion1_0 = a.asm.Lw).apply(null, arguments);
            }),
            cz = (a._emscripten_bind_btManifoldPoint_set_m_contactMotion1_1 = function () {
                return (cz = a._emscripten_bind_btManifoldPoint_set_m_contactMotion1_1 = a.asm.Mw).apply(null, arguments);
            }),
            dz = (a._emscripten_bind_btManifoldPoint_get_m_contactMotion2_0 = function () {
                return (dz = a._emscripten_bind_btManifoldPoint_get_m_contactMotion2_0 = a.asm.Nw).apply(null, arguments);
            }),
            ez = (a._emscripten_bind_btManifoldPoint_set_m_contactMotion2_1 = function () {
                return (ez = a._emscripten_bind_btManifoldPoint_set_m_contactMotion2_1 = a.asm.Ow).apply(null, arguments);
            }),
            fz = (a._emscripten_bind_btManifoldPoint_get_m_frictionCFM_0 = function () {
                return (fz = a._emscripten_bind_btManifoldPoint_get_m_frictionCFM_0 = a.asm.Pw).apply(null, arguments);
            }),
            gz = (a._emscripten_bind_btManifoldPoint_set_m_frictionCFM_1 = function () {
                return (gz = a._emscripten_bind_btManifoldPoint_set_m_frictionCFM_1 = a.asm.Qw).apply(null, arguments);
            }),
            hz = (a._emscripten_bind_btManifoldPoint_get_m_lifeTime_0 = function () {
                return (hz = a._emscripten_bind_btManifoldPoint_get_m_lifeTime_0 = a.asm.Rw).apply(null, arguments);
            }),
            iz = (a._emscripten_bind_btManifoldPoint_set_m_lifeTime_1 = function () {
                return (iz = a._emscripten_bind_btManifoldPoint_set_m_lifeTime_1 = a.asm.Sw).apply(null, arguments);
            }),
            jz = (a._emscripten_bind_btManifoldPoint_get_m_lateralFrictionDir1_0 = function () {
                return (jz = a._emscripten_bind_btManifoldPoint_get_m_lateralFrictionDir1_0 = a.asm.Tw).apply(null, arguments);
            }),
            kz = (a._emscripten_bind_btManifoldPoint_set_m_lateralFrictionDir1_1 = function () {
                return (kz = a._emscripten_bind_btManifoldPoint_set_m_lateralFrictionDir1_1 = a.asm.Uw).apply(null, arguments);
            }),
            lz = (a._emscripten_bind_btManifoldPoint_get_m_lateralFrictionDir2_0 = function () {
                return (lz = a._emscripten_bind_btManifoldPoint_get_m_lateralFrictionDir2_0 = a.asm.Vw).apply(null, arguments);
            }),
            mz = (a._emscripten_bind_btManifoldPoint_set_m_lateralFrictionDir2_1 = function () {
                return (mz = a._emscripten_bind_btManifoldPoint_set_m_lateralFrictionDir2_1 = a.asm.Ww).apply(null, arguments);
            }),
            nz = (a._emscripten_bind_btManifoldPoint___destroy___0 = function () {
                return (nz = a._emscripten_bind_btManifoldPoint___destroy___0 = a.asm.Xw).apply(null, arguments);
            }),
            oz = (a._emscripten_bind_ConcreteContactResultCallback_ConcreteContactResultCallback_0 = function () {
                return (oz = a._emscripten_bind_ConcreteContactResultCallback_ConcreteContactResultCallback_0 = a.asm.Yw).apply(null, arguments);
            }),
            pz = (a._emscripten_bind_ConcreteContactResultCallback_addSingleResult_7 = function () {
                return (pz = a._emscripten_bind_ConcreteContactResultCallback_addSingleResult_7 = a.asm.Zw).apply(null, arguments);
            }),
            qz = (a._emscripten_bind_ConcreteContactResultCallback___destroy___0 = function () {
                return (qz = a._emscripten_bind_ConcreteContactResultCallback___destroy___0 = a.asm._w).apply(null, arguments);
            }),
            rz = (a._emscripten_bind_LocalShapeInfo_get_m_shapePart_0 = function () {
                return (rz = a._emscripten_bind_LocalShapeInfo_get_m_shapePart_0 = a.asm.$w).apply(null, arguments);
            }),
            sz = (a._emscripten_bind_LocalShapeInfo_set_m_shapePart_1 = function () {
                return (sz = a._emscripten_bind_LocalShapeInfo_set_m_shapePart_1 = a.asm.ax).apply(null, arguments);
            }),
            tz = (a._emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 = function () {
                return (tz = a._emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 = a.asm.bx).apply(null, arguments);
            }),
            uz = (a._emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 = function () {
                return (uz = a._emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 = a.asm.cx).apply(null, arguments);
            }),
            vz = (a._emscripten_bind_LocalShapeInfo___destroy___0 = function () {
                return (vz = a._emscripten_bind_LocalShapeInfo___destroy___0 = a.asm.dx).apply(null, arguments);
            }),
            wz = (a._emscripten_bind_ClosestConvexResultCallback_ClosestConvexResultCallback_2 = function () {
                return (wz = a._emscripten_bind_ClosestConvexResultCallback_ClosestConvexResultCallback_2 = a.asm.ex).apply(null, arguments);
            }),
            xz = (a._emscripten_bind_ClosestConvexResultCallback_addSingleResult_2 = function () {
                return (xz = a._emscripten_bind_ClosestConvexResultCallback_addSingleResult_2 = a.asm.fx).apply(null, arguments);
            }),
            yz = (a._emscripten_bind_ClosestConvexResultCallback_hasHit_0 = function () {
                return (yz = a._emscripten_bind_ClosestConvexResultCallback_hasHit_0 = a.asm.gx).apply(null, arguments);
            }),
            zz = (a._emscripten_bind_ClosestConvexResultCallback_needsCollision_1 = function () {
                return (zz = a._emscripten_bind_ClosestConvexResultCallback_needsCollision_1 = a.asm.hx).apply(null, arguments);
            }),
            Az = (a._emscripten_bind_ClosestConvexResultCallback_get_m_convexFromWorld_0 = function () {
                return (Az = a._emscripten_bind_ClosestConvexResultCallback_get_m_convexFromWorld_0 = a.asm.ix).apply(null, arguments);
            }),
            Bz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_convexFromWorld_1 = function () {
                return (Bz = a._emscripten_bind_ClosestConvexResultCallback_set_m_convexFromWorld_1 = a.asm.jx).apply(null, arguments);
            }),
            Cz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_convexToWorld_0 = function () {
                return (Cz = a._emscripten_bind_ClosestConvexResultCallback_get_m_convexToWorld_0 = a.asm.kx).apply(null, arguments);
            }),
            Dz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_convexToWorld_1 = function () {
                return (Dz = a._emscripten_bind_ClosestConvexResultCallback_set_m_convexToWorld_1 = a.asm.lx).apply(null, arguments);
            }),
            Ez = (a._emscripten_bind_ClosestConvexResultCallback_get_m_hitNormalWorld_0 = function () {
                return (Ez = a._emscripten_bind_ClosestConvexResultCallback_get_m_hitNormalWorld_0 = a.asm.mx).apply(null, arguments);
            }),
            Fz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_hitNormalWorld_1 = function () {
                return (Fz = a._emscripten_bind_ClosestConvexResultCallback_set_m_hitNormalWorld_1 = a.asm.nx).apply(null, arguments);
            }),
            Gz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_hitPointWorld_0 = function () {
                return (Gz = a._emscripten_bind_ClosestConvexResultCallback_get_m_hitPointWorld_0 = a.asm.ox).apply(null, arguments);
            }),
            Hz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_hitPointWorld_1 = function () {
                return (Hz = a._emscripten_bind_ClosestConvexResultCallback_set_m_hitPointWorld_1 = a.asm.px).apply(null, arguments);
            }),
            Iz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_hitCollisionObject_0 = function () {
                return (Iz = a._emscripten_bind_ClosestConvexResultCallback_get_m_hitCollisionObject_0 = a.asm.qx).apply(null, arguments);
            }),
            Jz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_hitCollisionObject_1 = function () {
                return (Jz = a._emscripten_bind_ClosestConvexResultCallback_set_m_hitCollisionObject_1 = a.asm.rx).apply(null, arguments);
            }),
            Kz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_closestHitFraction_0 = function () {
                return (Kz = a._emscripten_bind_ClosestConvexResultCallback_get_m_closestHitFraction_0 = a.asm.sx).apply(null, arguments);
            }),
            Lz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_closestHitFraction_1 = function () {
                return (Lz = a._emscripten_bind_ClosestConvexResultCallback_set_m_closestHitFraction_1 = a.asm.tx).apply(null, arguments);
            }),
            Mz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterGroup_0 = function () {
                return (Mz = a._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterGroup_0 = a.asm.ux).apply(null, arguments);
            }),
            Nz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterGroup_1 = function () {
                return (Nz = a._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterGroup_1 = a.asm.vx).apply(null, arguments);
            }),
            Oz = (a._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterMask_0 = function () {
                return (Oz = a._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterMask_0 = a.asm.wx).apply(null, arguments);
            }),
            Pz = (a._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterMask_1 = function () {
                return (Pz = a._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterMask_1 = a.asm.xx).apply(null, arguments);
            }),
            Qz = (a._emscripten_bind_ClosestConvexResultCallback___destroy___0 = function () {
                return (Qz = a._emscripten_bind_ClosestConvexResultCallback___destroy___0 = a.asm.yx).apply(null, arguments);
            }),
            Rz = (a._emscripten_bind_btConvexPolyhedron_btConvexPolyhedron_0 = function () {
                return (Rz = a._emscripten_bind_btConvexPolyhedron_btConvexPolyhedron_0 = a.asm.zx).apply(null, arguments);
            }),
            Sz = (a._emscripten_bind_btConvexPolyhedron_initialize_0 = function () {
                return (Sz = a._emscripten_bind_btConvexPolyhedron_initialize_0 = a.asm.Ax).apply(null, arguments);
            }),
            Tz = (a._emscripten_bind_btConvexPolyhedron_initialize2_0 = function () {
                return (Tz = a._emscripten_bind_btConvexPolyhedron_initialize2_0 = a.asm.Bx).apply(null, arguments);
            }),
            Uz = (a._emscripten_bind_btConvexPolyhedron_testContainment_0 = function () {
                return (Uz = a._emscripten_bind_btConvexPolyhedron_testContainment_0 = a.asm.Cx).apply(null, arguments);
            }),
            Vz = (a._emscripten_bind_btConvexPolyhedron_get_m_vertices_0 = function () {
                return (Vz = a._emscripten_bind_btConvexPolyhedron_get_m_vertices_0 = a.asm.Dx).apply(null, arguments);
            }),
            Wz = (a._emscripten_bind_btConvexPolyhedron_set_m_vertices_1 = function () {
                return (Wz = a._emscripten_bind_btConvexPolyhedron_set_m_vertices_1 = a.asm.Ex).apply(null, arguments);
            }),
            Xz = (a._emscripten_bind_btConvexPolyhedron_get_m_faces_0 = function () {
                return (Xz = a._emscripten_bind_btConvexPolyhedron_get_m_faces_0 = a.asm.Fx).apply(null, arguments);
            }),
            Yz = (a._emscripten_bind_btConvexPolyhedron_set_m_faces_1 = function () {
                return (Yz = a._emscripten_bind_btConvexPolyhedron_set_m_faces_1 = a.asm.Gx).apply(null, arguments);
            }),
            Zz = (a._emscripten_bind_btConvexPolyhedron_get_m_uniqueEdges_0 = function () {
                return (Zz = a._emscripten_bind_btConvexPolyhedron_get_m_uniqueEdges_0 = a.asm.Hx).apply(null, arguments);
            }),
            $z = (a._emscripten_bind_btConvexPolyhedron_set_m_uniqueEdges_1 = function () {
                return ($z = a._emscripten_bind_btConvexPolyhedron_set_m_uniqueEdges_1 = a.asm.Ix).apply(null, arguments);
            }),
            aA = (a._emscripten_bind_btConvexPolyhedron_get_m_localCenter_0 = function () {
                return (aA = a._emscripten_bind_btConvexPolyhedron_get_m_localCenter_0 = a.asm.Jx).apply(null, arguments);
            }),
            bA = (a._emscripten_bind_btConvexPolyhedron_set_m_localCenter_1 = function () {
                return (bA = a._emscripten_bind_btConvexPolyhedron_set_m_localCenter_1 = a.asm.Kx).apply(null, arguments);
            }),
            cA = (a._emscripten_bind_btConvexPolyhedron_get_m_extents_0 = function () {
                return (cA = a._emscripten_bind_btConvexPolyhedron_get_m_extents_0 = a.asm.Lx).apply(null, arguments);
            }),
            dA = (a._emscripten_bind_btConvexPolyhedron_set_m_extents_1 = function () {
                return (dA = a._emscripten_bind_btConvexPolyhedron_set_m_extents_1 = a.asm.Mx).apply(null, arguments);
            }),
            eA = (a._emscripten_bind_btConvexPolyhedron_get_m_radius_0 = function () {
                return (eA = a._emscripten_bind_btConvexPolyhedron_get_m_radius_0 = a.asm.Nx).apply(null, arguments);
            }),
            fA = (a._emscripten_bind_btConvexPolyhedron_set_m_radius_1 = function () {
                return (fA = a._emscripten_bind_btConvexPolyhedron_set_m_radius_1 = a.asm.Ox).apply(null, arguments);
            }),
            gA = (a._emscripten_bind_btConvexPolyhedron_get_mC_0 = function () {
                return (gA = a._emscripten_bind_btConvexPolyhedron_get_mC_0 = a.asm.Px).apply(null, arguments);
            }),
            hA = (a._emscripten_bind_btConvexPolyhedron_set_mC_1 = function () {
                return (hA = a._emscripten_bind_btConvexPolyhedron_set_mC_1 = a.asm.Qx).apply(null, arguments);
            }),
            iA = (a._emscripten_bind_btConvexPolyhedron_get_mE_0 = function () {
                return (iA = a._emscripten_bind_btConvexPolyhedron_get_mE_0 = a.asm.Rx).apply(null, arguments);
            }),
            jA = (a._emscripten_bind_btConvexPolyhedron_set_mE_1 = function () {
                return (jA = a._emscripten_bind_btConvexPolyhedron_set_mE_1 = a.asm.Sx).apply(null, arguments);
            }),
            kA = (a._emscripten_bind_btConvexPolyhedron___destroy___0 = function () {
                return (kA = a._emscripten_bind_btConvexPolyhedron___destroy___0 = a.asm.Tx).apply(null, arguments);
            }),
            lA = (a._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 = function () {
                return (lA = a._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 = a.asm.Ux).apply(null, arguments);
            }),
            mA = (a._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 = function () {
                return (mA = a._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 = a.asm.Vx).apply(null, arguments);
            }),
            nA = (a._emscripten_bind_btConvexTriangleMeshShape_getMeshInterface_0 = function () {
                return (nA = a._emscripten_bind_btConvexTriangleMeshShape_getMeshInterface_0 = a.asm.Wx).apply(null, arguments);
            }),
            oA = (a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportingVertex_1 = function () {
                return (oA = a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportingVertex_1 = a.asm.Xx).apply(null, arguments);
            }),
            pA = (a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (pA = a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportingVertexWithoutMargin_1 = a.asm.Yx).apply(null, arguments);
            }),
            qA = (a._emscripten_bind_btConvexTriangleMeshShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (qA = a._emscripten_bind_btConvexTriangleMeshShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.Zx).apply(null, arguments);
            }),
            rA = (a._emscripten_bind_btConvexTriangleMeshShape_getName_0 = function () {
                return (rA = a._emscripten_bind_btConvexTriangleMeshShape_getName_0 = a.asm._x).apply(null, arguments);
            }),
            sA = (a._emscripten_bind_btConvexTriangleMeshShape_getNumVertices_0 = function () {
                return (sA = a._emscripten_bind_btConvexTriangleMeshShape_getNumVertices_0 = a.asm.$x).apply(null, arguments);
            }),
            tA = (a._emscripten_bind_btConvexTriangleMeshShape_getNumEdges_0 = function () {
                return (tA = a._emscripten_bind_btConvexTriangleMeshShape_getNumEdges_0 = a.asm.ay).apply(null, arguments);
            }),
            uA = (a._emscripten_bind_btConvexTriangleMeshShape_getEdge_3 = function () {
                return (uA = a._emscripten_bind_btConvexTriangleMeshShape_getEdge_3 = a.asm.by).apply(null, arguments);
            }),
            vA = (a._emscripten_bind_btConvexTriangleMeshShape_getVertex_2 = function () {
                return (vA = a._emscripten_bind_btConvexTriangleMeshShape_getVertex_2 = a.asm.cy).apply(null, arguments);
            }),
            wA = (a._emscripten_bind_btConvexTriangleMeshShape_getNumPlanes_0 = function () {
                return (wA = a._emscripten_bind_btConvexTriangleMeshShape_getNumPlanes_0 = a.asm.dy).apply(null, arguments);
            }),
            xA = (a._emscripten_bind_btConvexTriangleMeshShape_getPlane_3 = function () {
                return (xA = a._emscripten_bind_btConvexTriangleMeshShape_getPlane_3 = a.asm.ey).apply(null, arguments);
            }),
            yA = (a._emscripten_bind_btConvexTriangleMeshShape_isInside_2 = function () {
                return (yA = a._emscripten_bind_btConvexTriangleMeshShape_isInside_2 = a.asm.fy).apply(null, arguments);
            }),
            zA = (a._emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 = function () {
                return (zA = a._emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 = a.asm.gy).apply(null, arguments);
            }),
            AA = (a._emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 = function () {
                return (AA = a._emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 = a.asm.hy).apply(null, arguments);
            }),
            BA = (a._emscripten_bind_btConvexTriangleMeshShape_getAngularMotionDisc_0 = function () {
                return (BA = a._emscripten_bind_btConvexTriangleMeshShape_getAngularMotionDisc_0 = a.asm.iy).apply(null, arguments);
            }),
            CA = (a._emscripten_bind_btConvexTriangleMeshShape_getContactBreakingThreshold_1 = function () {
                return (CA = a._emscripten_bind_btConvexTriangleMeshShape_getContactBreakingThreshold_1 = a.asm.jy).apply(null, arguments);
            }),
            DA = (a._emscripten_bind_btConvexTriangleMeshShape_calculateTemporalAabb_6 = function () {
                return (DA = a._emscripten_bind_btConvexTriangleMeshShape_calculateTemporalAabb_6 = a.asm.ky).apply(null, arguments);
            }),
            EA = (a._emscripten_bind_btConvexTriangleMeshShape_isPolyhedral_0 = function () {
                return (EA = a._emscripten_bind_btConvexTriangleMeshShape_isPolyhedral_0 = a.asm.ly).apply(null, arguments);
            }),
            FA = (a._emscripten_bind_btConvexTriangleMeshShape_isConvex2d_0 = function () {
                return (FA = a._emscripten_bind_btConvexTriangleMeshShape_isConvex2d_0 = a.asm.my).apply(null, arguments);
            }),
            GA = (a._emscripten_bind_btConvexTriangleMeshShape_isConvex_0 = function () {
                return (GA = a._emscripten_bind_btConvexTriangleMeshShape_isConvex_0 = a.asm.ny).apply(null, arguments);
            }),
            HA = (a._emscripten_bind_btConvexTriangleMeshShape_isNonMoving_0 = function () {
                return (HA = a._emscripten_bind_btConvexTriangleMeshShape_isNonMoving_0 = a.asm.oy).apply(null, arguments);
            }),
            IA = (a._emscripten_bind_btConvexTriangleMeshShape_isConcave_0 = function () {
                return (IA = a._emscripten_bind_btConvexTriangleMeshShape_isConcave_0 = a.asm.py).apply(null, arguments);
            }),
            JA = (a._emscripten_bind_btConvexTriangleMeshShape_isCompound_0 = function () {
                return (JA = a._emscripten_bind_btConvexTriangleMeshShape_isCompound_0 = a.asm.qy).apply(null, arguments);
            }),
            KA = (a._emscripten_bind_btConvexTriangleMeshShape_isSoftBody_0 = function () {
                return (KA = a._emscripten_bind_btConvexTriangleMeshShape_isSoftBody_0 = a.asm.ry).apply(null, arguments);
            }),
            LA = (a._emscripten_bind_btConvexTriangleMeshShape_isInfinite_0 = function () {
                return (LA = a._emscripten_bind_btConvexTriangleMeshShape_isInfinite_0 = a.asm.sy).apply(null, arguments);
            }),
            MA = (a._emscripten_bind_btConvexTriangleMeshShape_getShapeType_0 = function () {
                return (MA = a._emscripten_bind_btConvexTriangleMeshShape_getShapeType_0 = a.asm.ty).apply(null, arguments);
            }),
            NA = (a._emscripten_bind_btConvexTriangleMeshShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (NA = a._emscripten_bind_btConvexTriangleMeshShape_getAnisotropicRollingFrictionDirection_0 = a.asm.uy).apply(null, arguments);
            }),
            OA = (a._emscripten_bind_btConvexTriangleMeshShape_setUserPointer_1 = function () {
                return (OA = a._emscripten_bind_btConvexTriangleMeshShape_setUserPointer_1 = a.asm.vy).apply(null, arguments);
            }),
            PA = (a._emscripten_bind_btConvexTriangleMeshShape_getUserPointer_0 = function () {
                return (PA = a._emscripten_bind_btConvexTriangleMeshShape_getUserPointer_0 = a.asm.wy).apply(null, arguments);
            }),
            QA = (a._emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1 = function () {
                return (QA = a._emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1 = a.asm.xy).apply(null, arguments);
            }),
            RA = (a._emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0 = function () {
                return (RA = a._emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0 = a.asm.yy).apply(null, arguments);
            }),
            SA = (a._emscripten_bind_btConvexTriangleMeshShape_setUserIndex2_1 = function () {
                return (SA = a._emscripten_bind_btConvexTriangleMeshShape_setUserIndex2_1 = a.asm.zy).apply(null, arguments);
            }),
            TA = (a._emscripten_bind_btConvexTriangleMeshShape_getUserIndex2_0 = function () {
                return (TA = a._emscripten_bind_btConvexTriangleMeshShape_getUserIndex2_0 = a.asm.Ay).apply(null, arguments);
            }),
            UA = (a._emscripten_bind_btConvexTriangleMeshShape_getImplicitShapeDimensions_0 = function () {
                return (UA = a._emscripten_bind_btConvexTriangleMeshShape_getImplicitShapeDimensions_0 = a.asm.By).apply(null, arguments);
            }),
            VA = (a._emscripten_bind_btConvexTriangleMeshShape_setImplicitShapeDimensions_1 = function () {
                return (VA = a._emscripten_bind_btConvexTriangleMeshShape_setImplicitShapeDimensions_1 = a.asm.Cy).apply(null, arguments);
            }),
            WA = (a._emscripten_bind_btConvexTriangleMeshShape_setSafeMargin_1 = function () {
                return (WA = a._emscripten_bind_btConvexTriangleMeshShape_setSafeMargin_1 = a.asm.Dy).apply(null, arguments);
            }),
            XA = (a._emscripten_bind_btConvexTriangleMeshShape_setSafeMargin_2 = function () {
                return (XA = a._emscripten_bind_btConvexTriangleMeshShape_setSafeMargin_2 = a.asm.Ey).apply(null, arguments);
            }),
            YA = (a._emscripten_bind_btConvexTriangleMeshShape_getAabbSlow_3 = function () {
                return (YA = a._emscripten_bind_btConvexTriangleMeshShape_getAabbSlow_3 = a.asm.Fy).apply(null, arguments);
            }),
            ZA = (a._emscripten_bind_btConvexTriangleMeshShape_setMargin_1 = function () {
                return (ZA = a._emscripten_bind_btConvexTriangleMeshShape_setMargin_1 = a.asm.Gy).apply(null, arguments);
            }),
            $A = (a._emscripten_bind_btConvexTriangleMeshShape_getMargin_0 = function () {
                return ($A = a._emscripten_bind_btConvexTriangleMeshShape_getMargin_0 = a.asm.Hy).apply(null, arguments);
            }),
            aB = (a._emscripten_bind_btConvexTriangleMeshShape_getNumPreferredPenetrationDirections_0 = function () {
                return (aB = a._emscripten_bind_btConvexTriangleMeshShape_getNumPreferredPenetrationDirections_0 = a.asm.Iy).apply(null, arguments);
            }),
            bB = (a._emscripten_bind_btConvexTriangleMeshShape_getPreferredPenetrationDirection_2 = function () {
                return (bB = a._emscripten_bind_btConvexTriangleMeshShape_getPreferredPenetrationDirection_2 = a.asm.Jy).apply(null, arguments);
            }),
            cB = (a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (cB = a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Ky).apply(null, arguments);
            }),
            dB = (a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportVertexNonVirtual_1 = function () {
                return (dB = a._emscripten_bind_btConvexTriangleMeshShape_localGetSupportVertexNonVirtual_1 = a.asm.Ly).apply(null, arguments);
            }),
            eB = (a._emscripten_bind_btConvexTriangleMeshShape_getMarginNonVirtual_0 = function () {
                return (eB = a._emscripten_bind_btConvexTriangleMeshShape_getMarginNonVirtual_0 = a.asm.My).apply(null, arguments);
            }),
            fB = (a._emscripten_bind_btConvexTriangleMeshShape_getAabbNonVirtual_3 = function () {
                return (fB = a._emscripten_bind_btConvexTriangleMeshShape_getAabbNonVirtual_3 = a.asm.Ny).apply(null, arguments);
            }),
            gB = (a._emscripten_bind_btConvexTriangleMeshShape_project_6 = function () {
                return (gB = a._emscripten_bind_btConvexTriangleMeshShape_project_6 = a.asm.Oy).apply(null, arguments);
            }),
            hB = (a._emscripten_bind_btConvexTriangleMeshShape_getAabb_3 = function () {
                return (hB = a._emscripten_bind_btConvexTriangleMeshShape_getAabb_3 = a.asm.Py).apply(null, arguments);
            }),
            iB = (a._emscripten_bind_btConvexTriangleMeshShape_recalcLocalAabb_0 = function () {
                return (iB = a._emscripten_bind_btConvexTriangleMeshShape_recalcLocalAabb_0 = a.asm.Qy).apply(null, arguments);
            }),
            jB = (a._emscripten_bind_btConvexTriangleMeshShape_initializePolyhedralFeatures_0 = function () {
                return (jB = a._emscripten_bind_btConvexTriangleMeshShape_initializePolyhedralFeatures_0 = a.asm.Ry).apply(null, arguments);
            }),
            kB = (a._emscripten_bind_btConvexTriangleMeshShape_initializePolyhedralFeatures_1 = function () {
                return (kB = a._emscripten_bind_btConvexTriangleMeshShape_initializePolyhedralFeatures_1 = a.asm.Sy).apply(null, arguments);
            }),
            lB = (a._emscripten_bind_btConvexTriangleMeshShape_setPolyhedralFeatures_1 = function () {
                return (lB = a._emscripten_bind_btConvexTriangleMeshShape_setPolyhedralFeatures_1 = a.asm.Ty).apply(null, arguments);
            }),
            mB = (a._emscripten_bind_btConvexTriangleMeshShape_getConvexPolyhedron_0 = function () {
                return (mB = a._emscripten_bind_btConvexTriangleMeshShape_getConvexPolyhedron_0 = a.asm.Uy).apply(null, arguments);
            }),
            nB = (a._emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 = function () {
                return (nB = a._emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 = a.asm.Vy).apply(null, arguments);
            }),
            oB = (a._emscripten_bind_btConvexTriangleMeshShape___destroy___0 = function () {
                return (oB = a._emscripten_bind_btConvexTriangleMeshShape___destroy___0 = a.asm.Wy).apply(null, arguments);
            }),
            pB = (a._emscripten_bind_btBoxShape_btBoxShape_1 = function () {
                return (pB = a._emscripten_bind_btBoxShape_btBoxShape_1 = a.asm.Xy).apply(null, arguments);
            }),
            qB = (a._emscripten_bind_btBoxShape_getHalfExtentsWithMargin_0 = function () {
                return (qB = a._emscripten_bind_btBoxShape_getHalfExtentsWithMargin_0 = a.asm.Yy).apply(null, arguments);
            }),
            rB = (a._emscripten_bind_btBoxShape_getHalfExtentsWithoutMargin_0 = function () {
                return (rB = a._emscripten_bind_btBoxShape_getHalfExtentsWithoutMargin_0 = a.asm.Zy).apply(null, arguments);
            }),
            sB = (a._emscripten_bind_btBoxShape_localGetSupportingVertex_1 = function () {
                return (sB = a._emscripten_bind_btBoxShape_localGetSupportingVertex_1 = a.asm._y).apply(null, arguments);
            }),
            tB = (a._emscripten_bind_btBoxShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (tB = a._emscripten_bind_btBoxShape_localGetSupportingVertexWithoutMargin_1 = a.asm.$y).apply(null, arguments);
            }),
            uB = (a._emscripten_bind_btBoxShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (uB = a._emscripten_bind_btBoxShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.az).apply(null, arguments);
            }),
            vB = (a._emscripten_bind_btBoxShape_setMargin_1 = function () {
                return (vB = a._emscripten_bind_btBoxShape_setMargin_1 = a.asm.bz).apply(null, arguments);
            }),
            wB = (a._emscripten_bind_btBoxShape_getMargin_0 = function () {
                return (wB = a._emscripten_bind_btBoxShape_getMargin_0 = a.asm.cz).apply(null, arguments);
            }),
            xB = (a._emscripten_bind_btBoxShape_setLocalScaling_1 = function () {
                return (xB = a._emscripten_bind_btBoxShape_setLocalScaling_1 = a.asm.dz).apply(null, arguments);
            }),
            yB = (a._emscripten_bind_btBoxShape_getAabb_3 = function () {
                return (yB = a._emscripten_bind_btBoxShape_getAabb_3 = a.asm.ez).apply(null, arguments);
            }),
            zB = (a._emscripten_bind_btBoxShape_calculateLocalInertia_2 = function () {
                return (zB = a._emscripten_bind_btBoxShape_calculateLocalInertia_2 = a.asm.fz).apply(null, arguments);
            }),
            AB = (a._emscripten_bind_btBoxShape_getPlane_3 = function () {
                return (AB = a._emscripten_bind_btBoxShape_getPlane_3 = a.asm.gz).apply(null, arguments);
            }),
            BB = (a._emscripten_bind_btBoxShape_getNumPlanes_0 = function () {
                return (BB = a._emscripten_bind_btBoxShape_getNumPlanes_0 = a.asm.hz).apply(null, arguments);
            }),
            CB = (a._emscripten_bind_btBoxShape_getNumVertices_0 = function () {
                return (CB = a._emscripten_bind_btBoxShape_getNumVertices_0 = a.asm.iz).apply(null, arguments);
            }),
            DB = (a._emscripten_bind_btBoxShape_getNumEdges_0 = function () {
                return (DB = a._emscripten_bind_btBoxShape_getNumEdges_0 = a.asm.jz).apply(null, arguments);
            }),
            EB = (a._emscripten_bind_btBoxShape_getVertex_2 = function () {
                return (EB = a._emscripten_bind_btBoxShape_getVertex_2 = a.asm.kz).apply(null, arguments);
            }),
            FB = (a._emscripten_bind_btBoxShape_getPlaneEquation_2 = function () {
                return (FB = a._emscripten_bind_btBoxShape_getPlaneEquation_2 = a.asm.lz).apply(null, arguments);
            }),
            GB = (a._emscripten_bind_btBoxShape_getEdge_3 = function () {
                return (GB = a._emscripten_bind_btBoxShape_getEdge_3 = a.asm.mz).apply(null, arguments);
            }),
            HB = (a._emscripten_bind_btBoxShape_isInside_2 = function () {
                return (HB = a._emscripten_bind_btBoxShape_isInside_2 = a.asm.nz).apply(null, arguments);
            }),
            IB = (a._emscripten_bind_btBoxShape_getName_0 = function () {
                return (IB = a._emscripten_bind_btBoxShape_getName_0 = a.asm.oz).apply(null, arguments);
            }),
            JB = (a._emscripten_bind_btBoxShape_getNumPreferredPenetrationDirections_0 = function () {
                return (JB = a._emscripten_bind_btBoxShape_getNumPreferredPenetrationDirections_0 = a.asm.pz).apply(null, arguments);
            }),
            KB = (a._emscripten_bind_btBoxShape_getPreferredPenetrationDirection_2 = function () {
                return (KB = a._emscripten_bind_btBoxShape_getPreferredPenetrationDirection_2 = a.asm.qz).apply(null, arguments);
            }),
            LB = (a._emscripten_bind_btBoxShape_getAngularMotionDisc_0 = function () {
                return (LB = a._emscripten_bind_btBoxShape_getAngularMotionDisc_0 = a.asm.rz).apply(null, arguments);
            }),
            MB = (a._emscripten_bind_btBoxShape_getContactBreakingThreshold_1 = function () {
                return (MB = a._emscripten_bind_btBoxShape_getContactBreakingThreshold_1 = a.asm.sz).apply(null, arguments);
            }),
            NB = (a._emscripten_bind_btBoxShape_calculateTemporalAabb_6 = function () {
                return (NB = a._emscripten_bind_btBoxShape_calculateTemporalAabb_6 = a.asm.tz).apply(null, arguments);
            }),
            OB = (a._emscripten_bind_btBoxShape_isPolyhedral_0 = function () {
                return (OB = a._emscripten_bind_btBoxShape_isPolyhedral_0 = a.asm.uz).apply(null, arguments);
            }),
            PB = (a._emscripten_bind_btBoxShape_isConvex2d_0 = function () {
                return (PB = a._emscripten_bind_btBoxShape_isConvex2d_0 = a.asm.vz).apply(null, arguments);
            }),
            QB = (a._emscripten_bind_btBoxShape_isConvex_0 = function () {
                return (QB = a._emscripten_bind_btBoxShape_isConvex_0 = a.asm.wz).apply(null, arguments);
            }),
            RB = (a._emscripten_bind_btBoxShape_isNonMoving_0 = function () {
                return (RB = a._emscripten_bind_btBoxShape_isNonMoving_0 = a.asm.xz).apply(null, arguments);
            }),
            SB = (a._emscripten_bind_btBoxShape_isConcave_0 = function () {
                return (SB = a._emscripten_bind_btBoxShape_isConcave_0 = a.asm.yz).apply(null, arguments);
            }),
            TB = (a._emscripten_bind_btBoxShape_isCompound_0 = function () {
                return (TB = a._emscripten_bind_btBoxShape_isCompound_0 = a.asm.zz).apply(null, arguments);
            }),
            UB = (a._emscripten_bind_btBoxShape_isSoftBody_0 = function () {
                return (UB = a._emscripten_bind_btBoxShape_isSoftBody_0 = a.asm.Az).apply(null, arguments);
            }),
            VB = (a._emscripten_bind_btBoxShape_isInfinite_0 = function () {
                return (VB = a._emscripten_bind_btBoxShape_isInfinite_0 = a.asm.Bz).apply(null, arguments);
            }),
            WB = (a._emscripten_bind_btBoxShape_getShapeType_0 = function () {
                return (WB = a._emscripten_bind_btBoxShape_getShapeType_0 = a.asm.Cz).apply(null, arguments);
            }),
            XB = (a._emscripten_bind_btBoxShape_getAnisotropicRollingFrictionDirection_0 = function () {
                return (XB = a._emscripten_bind_btBoxShape_getAnisotropicRollingFrictionDirection_0 = a.asm.Dz).apply(null, arguments);
            }),
            YB = (a._emscripten_bind_btBoxShape_setUserPointer_1 = function () {
                return (YB = a._emscripten_bind_btBoxShape_setUserPointer_1 = a.asm.Ez).apply(null, arguments);
            }),
            ZB = (a._emscripten_bind_btBoxShape_getUserPointer_0 = function () {
                return (ZB = a._emscripten_bind_btBoxShape_getUserPointer_0 = a.asm.Fz).apply(null, arguments);
            }),
            $B = (a._emscripten_bind_btBoxShape_setUserIndex_1 = function () {
                return ($B = a._emscripten_bind_btBoxShape_setUserIndex_1 = a.asm.Gz).apply(null, arguments);
            }),
            aC = (a._emscripten_bind_btBoxShape_getUserIndex_0 = function () {
                return (aC = a._emscripten_bind_btBoxShape_getUserIndex_0 = a.asm.Hz).apply(null, arguments);
            }),
            bC = (a._emscripten_bind_btBoxShape_setUserIndex2_1 = function () {
                return (bC = a._emscripten_bind_btBoxShape_setUserIndex2_1 = a.asm.Iz).apply(null, arguments);
            }),
            cC = (a._emscripten_bind_btBoxShape_getUserIndex2_0 = function () {
                return (cC = a._emscripten_bind_btBoxShape_getUserIndex2_0 = a.asm.Jz).apply(null, arguments);
            }),
            dC = (a._emscripten_bind_btBoxShape_getImplicitShapeDimensions_0 = function () {
                return (dC = a._emscripten_bind_btBoxShape_getImplicitShapeDimensions_0 = a.asm.Kz).apply(null, arguments);
            }),
            eC = (a._emscripten_bind_btBoxShape_setImplicitShapeDimensions_1 = function () {
                return (eC = a._emscripten_bind_btBoxShape_setImplicitShapeDimensions_1 = a.asm.Lz).apply(null, arguments);
            }),
            fC = (a._emscripten_bind_btBoxShape_setSafeMargin_1 = function () {
                return (fC = a._emscripten_bind_btBoxShape_setSafeMargin_1 = a.asm.Mz).apply(null, arguments);
            }),
            gC = (a._emscripten_bind_btBoxShape_setSafeMargin_2 = function () {
                return (gC = a._emscripten_bind_btBoxShape_setSafeMargin_2 = a.asm.Nz).apply(null, arguments);
            }),
            hC = (a._emscripten_bind_btBoxShape_getAabbSlow_3 = function () {
                return (hC = a._emscripten_bind_btBoxShape_getAabbSlow_3 = a.asm.Oz).apply(null, arguments);
            }),
            iC = (a._emscripten_bind_btBoxShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (iC = a._emscripten_bind_btBoxShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.Pz).apply(null, arguments);
            }),
            jC = (a._emscripten_bind_btBoxShape_localGetSupportVertexNonVirtual_1 = function () {
                return (jC = a._emscripten_bind_btBoxShape_localGetSupportVertexNonVirtual_1 = a.asm.Qz).apply(null, arguments);
            }),
            kC = (a._emscripten_bind_btBoxShape_getMarginNonVirtual_0 = function () {
                return (kC = a._emscripten_bind_btBoxShape_getMarginNonVirtual_0 = a.asm.Rz).apply(null, arguments);
            }),
            lC = (a._emscripten_bind_btBoxShape_getAabbNonVirtual_3 = function () {
                return (lC = a._emscripten_bind_btBoxShape_getAabbNonVirtual_3 = a.asm.Sz).apply(null, arguments);
            }),
            mC = (a._emscripten_bind_btBoxShape_project_6 = function () {
                return (mC = a._emscripten_bind_btBoxShape_project_6 = a.asm.Tz).apply(null, arguments);
            }),
            nC = (a._emscripten_bind_btBoxShape_initializePolyhedralFeatures_0 = function () {
                return (nC = a._emscripten_bind_btBoxShape_initializePolyhedralFeatures_0 = a.asm.Uz).apply(null, arguments);
            }),
            oC = (a._emscripten_bind_btBoxShape_initializePolyhedralFeatures_1 = function () {
                return (oC = a._emscripten_bind_btBoxShape_initializePolyhedralFeatures_1 = a.asm.Vz).apply(null, arguments);
            }),
            pC = (a._emscripten_bind_btBoxShape_setPolyhedralFeatures_1 = function () {
                return (pC = a._emscripten_bind_btBoxShape_setPolyhedralFeatures_1 = a.asm.Wz).apply(null, arguments);
            }),
            qC = (a._emscripten_bind_btBoxShape_getConvexPolyhedron_0 = function () {
                return (qC = a._emscripten_bind_btBoxShape_getConvexPolyhedron_0 = a.asm.Xz).apply(null, arguments);
            }),
            rC = (a._emscripten_bind_btBoxShape___destroy___0 = function () {
                return (rC = a._emscripten_bind_btBoxShape___destroy___0 = a.asm.Yz).apply(null, arguments);
            }),
            sC = (a._emscripten_bind_btCapsuleShapeX_btCapsuleShapeX_2 = function () {
                return (sC = a._emscripten_bind_btCapsuleShapeX_btCapsuleShapeX_2 = a.asm.Zz).apply(null, arguments);
            }),
            tC = (a._emscripten_bind_btCapsuleShapeX_getName_0 = function () {
                return (tC = a._emscripten_bind_btCapsuleShapeX_getName_0 = a.asm._z).apply(null, arguments);
            }),
            uC = (a._emscripten_bind_btCapsuleShapeX_calculateLocalInertia_2 = function () {
                return (uC = a._emscripten_bind_btCapsuleShapeX_calculateLocalInertia_2 = a.asm.$z).apply(null, arguments);
            }),
            vC = (a._emscripten_bind_btCapsuleShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (vC = a._emscripten_bind_btCapsuleShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.aA).apply(null, arguments);
            }),
            wC = (a._emscripten_bind_btCapsuleShapeX_setMargin_1 = function () {
                return (wC = a._emscripten_bind_btCapsuleShapeX_setMargin_1 = a.asm.bA).apply(null, arguments);
            }),
            xC = (a._emscripten_bind_btCapsuleShapeX_getAabb_3 = function () {
                return (xC = a._emscripten_bind_btCapsuleShapeX_getAabb_3 = a.asm.cA).apply(null, arguments);
            }),
            yC = (a._emscripten_bind_btCapsuleShapeX_getUpAxis_0 = function () {
                return (yC = a._emscripten_bind_btCapsuleShapeX_getUpAxis_0 = a.asm.dA).apply(null, arguments);
            }),
            zC = (a._emscripten_bind_btCapsuleShapeX_getRadius_0 = function () {
                return (zC = a._emscripten_bind_btCapsuleShapeX_getRadius_0 = a.asm.eA).apply(null, arguments);
            }),
            AC = (a._emscripten_bind_btCapsuleShapeX_getHalfHeight_0 = function () {
                return (AC = a._emscripten_bind_btCapsuleShapeX_getHalfHeight_0 = a.asm.fA).apply(null, arguments);
            }),
            BC = (a._emscripten_bind_btCapsuleShapeX_setLocalScaling_1 = function () {
                return (BC = a._emscripten_bind_btCapsuleShapeX_setLocalScaling_1 = a.asm.gA).apply(null, arguments);
            }),
            CC = (a._emscripten_bind_btCapsuleShapeX_getAnisotropicRollingFrictionDirection_0 = function () {
                return (CC = a._emscripten_bind_btCapsuleShapeX_getAnisotropicRollingFrictionDirection_0 = a.asm.hA).apply(null, arguments);
            }),
            DC = (a._emscripten_bind_btCapsuleShapeX_getAngularMotionDisc_0 = function () {
                return (DC = a._emscripten_bind_btCapsuleShapeX_getAngularMotionDisc_0 = a.asm.iA).apply(null, arguments);
            }),
            EC = (a._emscripten_bind_btCapsuleShapeX_getContactBreakingThreshold_1 = function () {
                return (EC = a._emscripten_bind_btCapsuleShapeX_getContactBreakingThreshold_1 = a.asm.jA).apply(null, arguments);
            }),
            FC = (a._emscripten_bind_btCapsuleShapeX_calculateTemporalAabb_6 = function () {
                return (FC = a._emscripten_bind_btCapsuleShapeX_calculateTemporalAabb_6 = a.asm.kA).apply(null, arguments);
            }),
            GC = (a._emscripten_bind_btCapsuleShapeX_isPolyhedral_0 = function () {
                return (GC = a._emscripten_bind_btCapsuleShapeX_isPolyhedral_0 = a.asm.lA).apply(null, arguments);
            }),
            HC = (a._emscripten_bind_btCapsuleShapeX_isConvex2d_0 = function () {
                return (HC = a._emscripten_bind_btCapsuleShapeX_isConvex2d_0 = a.asm.mA).apply(null, arguments);
            }),
            IC = (a._emscripten_bind_btCapsuleShapeX_isConvex_0 = function () {
                return (IC = a._emscripten_bind_btCapsuleShapeX_isConvex_0 = a.asm.nA).apply(null, arguments);
            }),
            JC = (a._emscripten_bind_btCapsuleShapeX_isNonMoving_0 = function () {
                return (JC = a._emscripten_bind_btCapsuleShapeX_isNonMoving_0 = a.asm.oA).apply(null, arguments);
            }),
            KC = (a._emscripten_bind_btCapsuleShapeX_isConcave_0 = function () {
                return (KC = a._emscripten_bind_btCapsuleShapeX_isConcave_0 = a.asm.pA).apply(null, arguments);
            }),
            LC = (a._emscripten_bind_btCapsuleShapeX_isCompound_0 = function () {
                return (LC = a._emscripten_bind_btCapsuleShapeX_isCompound_0 = a.asm.qA).apply(null, arguments);
            }),
            MC = (a._emscripten_bind_btCapsuleShapeX_isSoftBody_0 = function () {
                return (MC = a._emscripten_bind_btCapsuleShapeX_isSoftBody_0 = a.asm.rA).apply(null, arguments);
            }),
            NC = (a._emscripten_bind_btCapsuleShapeX_isInfinite_0 = function () {
                return (NC = a._emscripten_bind_btCapsuleShapeX_isInfinite_0 = a.asm.sA).apply(null, arguments);
            }),
            OC = (a._emscripten_bind_btCapsuleShapeX_getShapeType_0 = function () {
                return (OC = a._emscripten_bind_btCapsuleShapeX_getShapeType_0 = a.asm.tA).apply(null, arguments);
            }),
            PC = (a._emscripten_bind_btCapsuleShapeX_setUserPointer_1 = function () {
                return (PC = a._emscripten_bind_btCapsuleShapeX_setUserPointer_1 = a.asm.uA).apply(null, arguments);
            }),
            QC = (a._emscripten_bind_btCapsuleShapeX_getUserPointer_0 = function () {
                return (QC = a._emscripten_bind_btCapsuleShapeX_getUserPointer_0 = a.asm.vA).apply(null, arguments);
            }),
            RC = (a._emscripten_bind_btCapsuleShapeX_setUserIndex_1 = function () {
                return (RC = a._emscripten_bind_btCapsuleShapeX_setUserIndex_1 = a.asm.wA).apply(null, arguments);
            }),
            SC = (a._emscripten_bind_btCapsuleShapeX_getUserIndex_0 = function () {
                return (SC = a._emscripten_bind_btCapsuleShapeX_getUserIndex_0 = a.asm.xA).apply(null, arguments);
            }),
            TC = (a._emscripten_bind_btCapsuleShapeX_setUserIndex2_1 = function () {
                return (TC = a._emscripten_bind_btCapsuleShapeX_setUserIndex2_1 = a.asm.yA).apply(null, arguments);
            }),
            UC = (a._emscripten_bind_btCapsuleShapeX_getUserIndex2_0 = function () {
                return (UC = a._emscripten_bind_btCapsuleShapeX_getUserIndex2_0 = a.asm.zA).apply(null, arguments);
            }),
            VC = (a._emscripten_bind_btCapsuleShapeX_getImplicitShapeDimensions_0 = function () {
                return (VC = a._emscripten_bind_btCapsuleShapeX_getImplicitShapeDimensions_0 = a.asm.AA).apply(null, arguments);
            }),
            WC = (a._emscripten_bind_btCapsuleShapeX_setImplicitShapeDimensions_1 = function () {
                return (WC = a._emscripten_bind_btCapsuleShapeX_setImplicitShapeDimensions_1 = a.asm.BA).apply(null, arguments);
            }),
            XC = (a._emscripten_bind_btCapsuleShapeX_setSafeMargin_1 = function () {
                return (XC = a._emscripten_bind_btCapsuleShapeX_setSafeMargin_1 = a.asm.CA).apply(null, arguments);
            }),
            YC = (a._emscripten_bind_btCapsuleShapeX_setSafeMargin_2 = function () {
                return (YC = a._emscripten_bind_btCapsuleShapeX_setSafeMargin_2 = a.asm.DA).apply(null, arguments);
            }),
            ZC = (a._emscripten_bind_btCapsuleShapeX_getAabbSlow_3 = function () {
                return (ZC = a._emscripten_bind_btCapsuleShapeX_getAabbSlow_3 = a.asm.EA).apply(null, arguments);
            }),
            $C = (a._emscripten_bind_btCapsuleShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return ($C = a._emscripten_bind_btCapsuleShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.FA).apply(null, arguments);
            }),
            aD = (a._emscripten_bind_btCapsuleShapeX_localGetSupportVertexNonVirtual_1 = function () {
                return (aD = a._emscripten_bind_btCapsuleShapeX_localGetSupportVertexNonVirtual_1 = a.asm.GA).apply(null, arguments);
            }),
            bD = (a._emscripten_bind_btCapsuleShapeX_getMarginNonVirtual_0 = function () {
                return (bD = a._emscripten_bind_btCapsuleShapeX_getMarginNonVirtual_0 = a.asm.HA).apply(null, arguments);
            }),
            cD = (a._emscripten_bind_btCapsuleShapeX_getAabbNonVirtual_3 = function () {
                return (cD = a._emscripten_bind_btCapsuleShapeX_getAabbNonVirtual_3 = a.asm.IA).apply(null, arguments);
            }),
            dD = (a._emscripten_bind_btCapsuleShapeX_project_6 = function () {
                return (dD = a._emscripten_bind_btCapsuleShapeX_project_6 = a.asm.JA).apply(null, arguments);
            }),
            eD = (a._emscripten_bind_btCapsuleShapeX___destroy___0 = function () {
                return (eD = a._emscripten_bind_btCapsuleShapeX___destroy___0 = a.asm.KA).apply(null, arguments);
            }),
            fD = (a._emscripten_bind_btCapsuleShapeZ_btCapsuleShapeZ_2 = function () {
                return (fD = a._emscripten_bind_btCapsuleShapeZ_btCapsuleShapeZ_2 = a.asm.LA).apply(null, arguments);
            }),
            gD = (a._emscripten_bind_btCapsuleShapeZ_getName_0 = function () {
                return (gD = a._emscripten_bind_btCapsuleShapeZ_getName_0 = a.asm.MA).apply(null, arguments);
            }),
            hD = (a._emscripten_bind_btCapsuleShapeZ_calculateLocalInertia_2 = function () {
                return (hD = a._emscripten_bind_btCapsuleShapeZ_calculateLocalInertia_2 = a.asm.NA).apply(null, arguments);
            }),
            iD = (a._emscripten_bind_btCapsuleShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (iD = a._emscripten_bind_btCapsuleShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.OA).apply(null, arguments);
            }),
            jD = (a._emscripten_bind_btCapsuleShapeZ_setMargin_1 = function () {
                return (jD = a._emscripten_bind_btCapsuleShapeZ_setMargin_1 = a.asm.PA).apply(null, arguments);
            }),
            kD = (a._emscripten_bind_btCapsuleShapeZ_getAabb_3 = function () {
                return (kD = a._emscripten_bind_btCapsuleShapeZ_getAabb_3 = a.asm.QA).apply(null, arguments);
            }),
            lD = (a._emscripten_bind_btCapsuleShapeZ_getUpAxis_0 = function () {
                return (lD = a._emscripten_bind_btCapsuleShapeZ_getUpAxis_0 = a.asm.RA).apply(null, arguments);
            }),
            mD = (a._emscripten_bind_btCapsuleShapeZ_getRadius_0 = function () {
                return (mD = a._emscripten_bind_btCapsuleShapeZ_getRadius_0 = a.asm.SA).apply(null, arguments);
            }),
            nD = (a._emscripten_bind_btCapsuleShapeZ_getHalfHeight_0 = function () {
                return (nD = a._emscripten_bind_btCapsuleShapeZ_getHalfHeight_0 = a.asm.TA).apply(null, arguments);
            }),
            oD = (a._emscripten_bind_btCapsuleShapeZ_setLocalScaling_1 = function () {
                return (oD = a._emscripten_bind_btCapsuleShapeZ_setLocalScaling_1 = a.asm.UA).apply(null, arguments);
            }),
            pD = (a._emscripten_bind_btCapsuleShapeZ_getAnisotropicRollingFrictionDirection_0 = function () {
                return (pD = a._emscripten_bind_btCapsuleShapeZ_getAnisotropicRollingFrictionDirection_0 = a.asm.VA).apply(null, arguments);
            }),
            qD = (a._emscripten_bind_btCapsuleShapeZ_getAngularMotionDisc_0 = function () {
                return (qD = a._emscripten_bind_btCapsuleShapeZ_getAngularMotionDisc_0 = a.asm.WA).apply(null, arguments);
            }),
            rD = (a._emscripten_bind_btCapsuleShapeZ_getContactBreakingThreshold_1 = function () {
                return (rD = a._emscripten_bind_btCapsuleShapeZ_getContactBreakingThreshold_1 = a.asm.XA).apply(null, arguments);
            }),
            sD = (a._emscripten_bind_btCapsuleShapeZ_calculateTemporalAabb_6 = function () {
                return (sD = a._emscripten_bind_btCapsuleShapeZ_calculateTemporalAabb_6 = a.asm.YA).apply(null, arguments);
            }),
            tD = (a._emscripten_bind_btCapsuleShapeZ_isPolyhedral_0 = function () {
                return (tD = a._emscripten_bind_btCapsuleShapeZ_isPolyhedral_0 = a.asm.ZA).apply(null, arguments);
            }),
            uD = (a._emscripten_bind_btCapsuleShapeZ_isConvex2d_0 = function () {
                return (uD = a._emscripten_bind_btCapsuleShapeZ_isConvex2d_0 = a.asm._A).apply(null, arguments);
            }),
            vD = (a._emscripten_bind_btCapsuleShapeZ_isConvex_0 = function () {
                return (vD = a._emscripten_bind_btCapsuleShapeZ_isConvex_0 = a.asm.$A).apply(null, arguments);
            }),
            wD = (a._emscripten_bind_btCapsuleShapeZ_isNonMoving_0 = function () {
                return (wD = a._emscripten_bind_btCapsuleShapeZ_isNonMoving_0 = a.asm.aB).apply(null, arguments);
            }),
            xD = (a._emscripten_bind_btCapsuleShapeZ_isConcave_0 = function () {
                return (xD = a._emscripten_bind_btCapsuleShapeZ_isConcave_0 = a.asm.bB).apply(null, arguments);
            }),
            yD = (a._emscripten_bind_btCapsuleShapeZ_isCompound_0 = function () {
                return (yD = a._emscripten_bind_btCapsuleShapeZ_isCompound_0 = a.asm.cB).apply(null, arguments);
            }),
            zD = (a._emscripten_bind_btCapsuleShapeZ_isSoftBody_0 = function () {
                return (zD = a._emscripten_bind_btCapsuleShapeZ_isSoftBody_0 = a.asm.dB).apply(null, arguments);
            }),
            AD = (a._emscripten_bind_btCapsuleShapeZ_isInfinite_0 = function () {
                return (AD = a._emscripten_bind_btCapsuleShapeZ_isInfinite_0 = a.asm.eB).apply(null, arguments);
            }),
            BD = (a._emscripten_bind_btCapsuleShapeZ_getShapeType_0 = function () {
                return (BD = a._emscripten_bind_btCapsuleShapeZ_getShapeType_0 = a.asm.fB).apply(null, arguments);
            }),
            CD = (a._emscripten_bind_btCapsuleShapeZ_setUserPointer_1 = function () {
                return (CD = a._emscripten_bind_btCapsuleShapeZ_setUserPointer_1 = a.asm.gB).apply(null, arguments);
            }),
            DD = (a._emscripten_bind_btCapsuleShapeZ_getUserPointer_0 = function () {
                return (DD = a._emscripten_bind_btCapsuleShapeZ_getUserPointer_0 = a.asm.hB).apply(null, arguments);
            }),
            ED = (a._emscripten_bind_btCapsuleShapeZ_setUserIndex_1 = function () {
                return (ED = a._emscripten_bind_btCapsuleShapeZ_setUserIndex_1 = a.asm.iB).apply(null, arguments);
            }),
            FD = (a._emscripten_bind_btCapsuleShapeZ_getUserIndex_0 = function () {
                return (FD = a._emscripten_bind_btCapsuleShapeZ_getUserIndex_0 = a.asm.jB).apply(null, arguments);
            }),
            GD = (a._emscripten_bind_btCapsuleShapeZ_setUserIndex2_1 = function () {
                return (GD = a._emscripten_bind_btCapsuleShapeZ_setUserIndex2_1 = a.asm.kB).apply(null, arguments);
            }),
            HD = (a._emscripten_bind_btCapsuleShapeZ_getUserIndex2_0 = function () {
                return (HD = a._emscripten_bind_btCapsuleShapeZ_getUserIndex2_0 = a.asm.lB).apply(null, arguments);
            }),
            ID = (a._emscripten_bind_btCapsuleShapeZ_getImplicitShapeDimensions_0 = function () {
                return (ID = a._emscripten_bind_btCapsuleShapeZ_getImplicitShapeDimensions_0 = a.asm.mB).apply(null, arguments);
            }),
            JD = (a._emscripten_bind_btCapsuleShapeZ_setImplicitShapeDimensions_1 = function () {
                return (JD = a._emscripten_bind_btCapsuleShapeZ_setImplicitShapeDimensions_1 = a.asm.nB).apply(null, arguments);
            }),
            KD = (a._emscripten_bind_btCapsuleShapeZ_setSafeMargin_1 = function () {
                return (KD = a._emscripten_bind_btCapsuleShapeZ_setSafeMargin_1 = a.asm.oB).apply(null, arguments);
            }),
            LD = (a._emscripten_bind_btCapsuleShapeZ_setSafeMargin_2 = function () {
                return (LD = a._emscripten_bind_btCapsuleShapeZ_setSafeMargin_2 = a.asm.pB).apply(null, arguments);
            }),
            MD = (a._emscripten_bind_btCapsuleShapeZ_getAabbSlow_3 = function () {
                return (MD = a._emscripten_bind_btCapsuleShapeZ_getAabbSlow_3 = a.asm.qB).apply(null, arguments);
            }),
            ND = (a._emscripten_bind_btCapsuleShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (ND = a._emscripten_bind_btCapsuleShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.rB).apply(null, arguments);
            }),
            OD = (a._emscripten_bind_btCapsuleShapeZ_localGetSupportVertexNonVirtual_1 = function () {
                return (OD = a._emscripten_bind_btCapsuleShapeZ_localGetSupportVertexNonVirtual_1 = a.asm.sB).apply(null, arguments);
            }),
            PD = (a._emscripten_bind_btCapsuleShapeZ_getMarginNonVirtual_0 = function () {
                return (PD = a._emscripten_bind_btCapsuleShapeZ_getMarginNonVirtual_0 = a.asm.tB).apply(null, arguments);
            }),
            QD = (a._emscripten_bind_btCapsuleShapeZ_getAabbNonVirtual_3 = function () {
                return (QD = a._emscripten_bind_btCapsuleShapeZ_getAabbNonVirtual_3 = a.asm.uB).apply(null, arguments);
            }),
            RD = (a._emscripten_bind_btCapsuleShapeZ_project_6 = function () {
                return (RD = a._emscripten_bind_btCapsuleShapeZ_project_6 = a.asm.vB).apply(null, arguments);
            }),
            SD = (a._emscripten_bind_btCapsuleShapeZ___destroy___0 = function () {
                return (SD = a._emscripten_bind_btCapsuleShapeZ___destroy___0 = a.asm.wB).apply(null, arguments);
            }),
            TD = (a._emscripten_bind_btCylinderShapeX_btCylinderShapeX_1 = function () {
                return (TD = a._emscripten_bind_btCylinderShapeX_btCylinderShapeX_1 = a.asm.xB).apply(null, arguments);
            }),
            UD = (a._emscripten_bind_btCylinderShapeX_localGetSupportingVertexWithoutMargin_1 = function () {
                return (UD = a._emscripten_bind_btCylinderShapeX_localGetSupportingVertexWithoutMargin_1 = a.asm.yB).apply(null, arguments);
            }),
            VD = (a._emscripten_bind_btCylinderShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (VD = a._emscripten_bind_btCylinderShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.zB).apply(null, arguments);
            }),
            WD = (a._emscripten_bind_btCylinderShapeX_getName_0 = function () {
                return (WD = a._emscripten_bind_btCylinderShapeX_getName_0 = a.asm.AB).apply(null, arguments);
            }),
            XD = (a._emscripten_bind_btCylinderShapeX_getRadius_0 = function () {
                return (XD = a._emscripten_bind_btCylinderShapeX_getRadius_0 = a.asm.BB).apply(null, arguments);
            }),
            YD = (a._emscripten_bind_btCylinderShapeX_getAngularMotionDisc_0 = function () {
                return (YD = a._emscripten_bind_btCylinderShapeX_getAngularMotionDisc_0 = a.asm.CB).apply(null, arguments);
            }),
            ZD = (a._emscripten_bind_btCylinderShapeX_getContactBreakingThreshold_1 = function () {
                return (ZD = a._emscripten_bind_btCylinderShapeX_getContactBreakingThreshold_1 = a.asm.DB).apply(null, arguments);
            }),
            $D = (a._emscripten_bind_btCylinderShapeX_calculateTemporalAabb_6 = function () {
                return ($D = a._emscripten_bind_btCylinderShapeX_calculateTemporalAabb_6 = a.asm.EB).apply(null, arguments);
            }),
            aE = (a._emscripten_bind_btCylinderShapeX_isPolyhedral_0 = function () {
                return (aE = a._emscripten_bind_btCylinderShapeX_isPolyhedral_0 = a.asm.FB).apply(null, arguments);
            }),
            bE = (a._emscripten_bind_btCylinderShapeX_isConvex2d_0 = function () {
                return (bE = a._emscripten_bind_btCylinderShapeX_isConvex2d_0 = a.asm.GB).apply(null, arguments);
            }),
            cE = (a._emscripten_bind_btCylinderShapeX_isConvex_0 = function () {
                return (cE = a._emscripten_bind_btCylinderShapeX_isConvex_0 = a.asm.HB).apply(null, arguments);
            }),
            dE = (a._emscripten_bind_btCylinderShapeX_isNonMoving_0 = function () {
                return (dE = a._emscripten_bind_btCylinderShapeX_isNonMoving_0 = a.asm.IB).apply(null, arguments);
            }),
            eE = (a._emscripten_bind_btCylinderShapeX_isConcave_0 = function () {
                return (eE = a._emscripten_bind_btCylinderShapeX_isConcave_0 = a.asm.JB).apply(null, arguments);
            }),
            fE = (a._emscripten_bind_btCylinderShapeX_isCompound_0 = function () {
                return (fE = a._emscripten_bind_btCylinderShapeX_isCompound_0 = a.asm.KB).apply(null, arguments);
            }),
            gE = (a._emscripten_bind_btCylinderShapeX_isSoftBody_0 = function () {
                return (gE = a._emscripten_bind_btCylinderShapeX_isSoftBody_0 = a.asm.LB).apply(null, arguments);
            }),
            hE = (a._emscripten_bind_btCylinderShapeX_isInfinite_0 = function () {
                return (hE = a._emscripten_bind_btCylinderShapeX_isInfinite_0 = a.asm.MB).apply(null, arguments);
            }),
            iE = (a._emscripten_bind_btCylinderShapeX_getShapeType_0 = function () {
                return (iE = a._emscripten_bind_btCylinderShapeX_getShapeType_0 = a.asm.NB).apply(null, arguments);
            }),
            jE = (a._emscripten_bind_btCylinderShapeX_setUserPointer_1 = function () {
                return (jE = a._emscripten_bind_btCylinderShapeX_setUserPointer_1 = a.asm.OB).apply(null, arguments);
            }),
            kE = (a._emscripten_bind_btCylinderShapeX_getUserPointer_0 = function () {
                return (kE = a._emscripten_bind_btCylinderShapeX_getUserPointer_0 = a.asm.PB).apply(null, arguments);
            }),
            lE = (a._emscripten_bind_btCylinderShapeX_setUserIndex_1 = function () {
                return (lE = a._emscripten_bind_btCylinderShapeX_setUserIndex_1 = a.asm.QB).apply(null, arguments);
            }),
            mE = (a._emscripten_bind_btCylinderShapeX_getUserIndex_0 = function () {
                return (mE = a._emscripten_bind_btCylinderShapeX_getUserIndex_0 = a.asm.RB).apply(null, arguments);
            }),
            nE = (a._emscripten_bind_btCylinderShapeX_setUserIndex2_1 = function () {
                return (nE = a._emscripten_bind_btCylinderShapeX_setUserIndex2_1 = a.asm.SB).apply(null, arguments);
            }),
            oE = (a._emscripten_bind_btCylinderShapeX_getUserIndex2_0 = function () {
                return (oE = a._emscripten_bind_btCylinderShapeX_getUserIndex2_0 = a.asm.TB).apply(null, arguments);
            }),
            pE = (a._emscripten_bind_btCylinderShapeX_getImplicitShapeDimensions_0 = function () {
                return (pE = a._emscripten_bind_btCylinderShapeX_getImplicitShapeDimensions_0 = a.asm.UB).apply(null, arguments);
            }),
            qE = (a._emscripten_bind_btCylinderShapeX_setImplicitShapeDimensions_1 = function () {
                return (qE = a._emscripten_bind_btCylinderShapeX_setImplicitShapeDimensions_1 = a.asm.VB).apply(null, arguments);
            }),
            rE = (a._emscripten_bind_btCylinderShapeX_setSafeMargin_1 = function () {
                return (rE = a._emscripten_bind_btCylinderShapeX_setSafeMargin_1 = a.asm.WB).apply(null, arguments);
            }),
            sE = (a._emscripten_bind_btCylinderShapeX_setSafeMargin_2 = function () {
                return (sE = a._emscripten_bind_btCylinderShapeX_setSafeMargin_2 = a.asm.XB).apply(null, arguments);
            }),
            tE = (a._emscripten_bind_btCylinderShapeX_getAabbSlow_3 = function () {
                return (tE = a._emscripten_bind_btCylinderShapeX_getAabbSlow_3 = a.asm.YB).apply(null, arguments);
            }),
            uE = (a._emscripten_bind_btCylinderShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (uE = a._emscripten_bind_btCylinderShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.ZB).apply(null, arguments);
            }),
            vE = (a._emscripten_bind_btCylinderShapeX_localGetSupportVertexNonVirtual_1 = function () {
                return (vE = a._emscripten_bind_btCylinderShapeX_localGetSupportVertexNonVirtual_1 = a.asm._B).apply(null, arguments);
            }),
            wE = (a._emscripten_bind_btCylinderShapeX_getMarginNonVirtual_0 = function () {
                return (wE = a._emscripten_bind_btCylinderShapeX_getMarginNonVirtual_0 = a.asm.$B).apply(null, arguments);
            }),
            xE = (a._emscripten_bind_btCylinderShapeX_getAabbNonVirtual_3 = function () {
                return (xE = a._emscripten_bind_btCylinderShapeX_getAabbNonVirtual_3 = a.asm.aC).apply(null, arguments);
            }),
            yE = (a._emscripten_bind_btCylinderShapeX_project_6 = function () {
                return (yE = a._emscripten_bind_btCylinderShapeX_project_6 = a.asm.bC).apply(null, arguments);
            }),
            zE = (a._emscripten_bind_btCylinderShapeX_getHalfExtentsWithMargin_0 = function () {
                return (zE = a._emscripten_bind_btCylinderShapeX_getHalfExtentsWithMargin_0 = a.asm.cC).apply(null, arguments);
            }),
            AE = (a._emscripten_bind_btCylinderShapeX_getHalfExtentsWithoutMargin_0 = function () {
                return (AE = a._emscripten_bind_btCylinderShapeX_getHalfExtentsWithoutMargin_0 = a.asm.dC).apply(null, arguments);
            }),
            BE = (a._emscripten_bind_btCylinderShapeX_getAabb_3 = function () {
                return (BE = a._emscripten_bind_btCylinderShapeX_getAabb_3 = a.asm.eC).apply(null, arguments);
            }),
            CE = (a._emscripten_bind_btCylinderShapeX_calculateLocalInertia_2 = function () {
                return (CE = a._emscripten_bind_btCylinderShapeX_calculateLocalInertia_2 = a.asm.fC).apply(null, arguments);
            }),
            DE = (a._emscripten_bind_btCylinderShapeX_setMargin_1 = function () {
                return (DE = a._emscripten_bind_btCylinderShapeX_setMargin_1 = a.asm.gC).apply(null, arguments);
            }),
            EE = (a._emscripten_bind_btCylinderShapeX_localGetSupportingVertex_1 = function () {
                return (EE = a._emscripten_bind_btCylinderShapeX_localGetSupportingVertex_1 = a.asm.hC).apply(null, arguments);
            }),
            FE = (a._emscripten_bind_btCylinderShapeX_getUpAxis_0 = function () {
                return (FE = a._emscripten_bind_btCylinderShapeX_getUpAxis_0 = a.asm.iC).apply(null, arguments);
            }),
            GE = (a._emscripten_bind_btCylinderShapeX_getAnisotropicRollingFrictionDirection_0 = function () {
                return (GE = a._emscripten_bind_btCylinderShapeX_getAnisotropicRollingFrictionDirection_0 = a.asm.jC).apply(null, arguments);
            }),
            HE = (a._emscripten_bind_btCylinderShapeX_setLocalScaling_1 = function () {
                return (HE = a._emscripten_bind_btCylinderShapeX_setLocalScaling_1 = a.asm.kC).apply(null, arguments);
            }),
            IE = (a._emscripten_bind_btCylinderShapeX___destroy___0 = function () {
                return (IE = a._emscripten_bind_btCylinderShapeX___destroy___0 = a.asm.lC).apply(null, arguments);
            }),
            JE = (a._emscripten_bind_btCylinderShapeZ_btCylinderShapeZ_1 = function () {
                return (JE = a._emscripten_bind_btCylinderShapeZ_btCylinderShapeZ_1 = a.asm.mC).apply(null, arguments);
            }),
            KE = (a._emscripten_bind_btCylinderShapeZ_localGetSupportingVertexWithoutMargin_1 = function () {
                return (KE = a._emscripten_bind_btCylinderShapeZ_localGetSupportingVertexWithoutMargin_1 = a.asm.nC).apply(null, arguments);
            }),
            LE = (a._emscripten_bind_btCylinderShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (LE = a._emscripten_bind_btCylinderShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.oC).apply(null, arguments);
            }),
            ME = (a._emscripten_bind_btCylinderShapeZ_getName_0 = function () {
                return (ME = a._emscripten_bind_btCylinderShapeZ_getName_0 = a.asm.pC).apply(null, arguments);
            }),
            NE = (a._emscripten_bind_btCylinderShapeZ_getRadius_0 = function () {
                return (NE = a._emscripten_bind_btCylinderShapeZ_getRadius_0 = a.asm.qC).apply(null, arguments);
            }),
            OE = (a._emscripten_bind_btCylinderShapeZ_getAngularMotionDisc_0 = function () {
                return (OE = a._emscripten_bind_btCylinderShapeZ_getAngularMotionDisc_0 = a.asm.rC).apply(null, arguments);
            }),
            PE = (a._emscripten_bind_btCylinderShapeZ_getContactBreakingThreshold_1 = function () {
                return (PE = a._emscripten_bind_btCylinderShapeZ_getContactBreakingThreshold_1 = a.asm.sC).apply(null, arguments);
            }),
            QE = (a._emscripten_bind_btCylinderShapeZ_calculateTemporalAabb_6 = function () {
                return (QE = a._emscripten_bind_btCylinderShapeZ_calculateTemporalAabb_6 = a.asm.tC).apply(null, arguments);
            }),
            RE = (a._emscripten_bind_btCylinderShapeZ_isPolyhedral_0 = function () {
                return (RE = a._emscripten_bind_btCylinderShapeZ_isPolyhedral_0 = a.asm.uC).apply(null, arguments);
            }),
            SE = (a._emscripten_bind_btCylinderShapeZ_isConvex2d_0 = function () {
                return (SE = a._emscripten_bind_btCylinderShapeZ_isConvex2d_0 = a.asm.vC).apply(null, arguments);
            }),
            TE = (a._emscripten_bind_btCylinderShapeZ_isConvex_0 = function () {
                return (TE = a._emscripten_bind_btCylinderShapeZ_isConvex_0 = a.asm.wC).apply(null, arguments);
            }),
            UE = (a._emscripten_bind_btCylinderShapeZ_isNonMoving_0 = function () {
                return (UE = a._emscripten_bind_btCylinderShapeZ_isNonMoving_0 = a.asm.xC).apply(null, arguments);
            }),
            VE = (a._emscripten_bind_btCylinderShapeZ_isConcave_0 = function () {
                return (VE = a._emscripten_bind_btCylinderShapeZ_isConcave_0 = a.asm.yC).apply(null, arguments);
            }),
            WE = (a._emscripten_bind_btCylinderShapeZ_isCompound_0 = function () {
                return (WE = a._emscripten_bind_btCylinderShapeZ_isCompound_0 = a.asm.zC).apply(null, arguments);
            }),
            XE = (a._emscripten_bind_btCylinderShapeZ_isSoftBody_0 = function () {
                return (XE = a._emscripten_bind_btCylinderShapeZ_isSoftBody_0 = a.asm.AC).apply(null, arguments);
            }),
            YE = (a._emscripten_bind_btCylinderShapeZ_isInfinite_0 = function () {
                return (YE = a._emscripten_bind_btCylinderShapeZ_isInfinite_0 = a.asm.BC).apply(null, arguments);
            }),
            ZE = (a._emscripten_bind_btCylinderShapeZ_getShapeType_0 = function () {
                return (ZE = a._emscripten_bind_btCylinderShapeZ_getShapeType_0 = a.asm.CC).apply(null, arguments);
            }),
            $E = (a._emscripten_bind_btCylinderShapeZ_setUserPointer_1 = function () {
                return ($E = a._emscripten_bind_btCylinderShapeZ_setUserPointer_1 = a.asm.DC).apply(null, arguments);
            }),
            aF = (a._emscripten_bind_btCylinderShapeZ_getUserPointer_0 = function () {
                return (aF = a._emscripten_bind_btCylinderShapeZ_getUserPointer_0 = a.asm.EC).apply(null, arguments);
            }),
            bF = (a._emscripten_bind_btCylinderShapeZ_setUserIndex_1 = function () {
                return (bF = a._emscripten_bind_btCylinderShapeZ_setUserIndex_1 = a.asm.FC).apply(null, arguments);
            }),
            cF = (a._emscripten_bind_btCylinderShapeZ_getUserIndex_0 = function () {
                return (cF = a._emscripten_bind_btCylinderShapeZ_getUserIndex_0 = a.asm.GC).apply(null, arguments);
            }),
            dF = (a._emscripten_bind_btCylinderShapeZ_setUserIndex2_1 = function () {
                return (dF = a._emscripten_bind_btCylinderShapeZ_setUserIndex2_1 = a.asm.HC).apply(null, arguments);
            }),
            eF = (a._emscripten_bind_btCylinderShapeZ_getUserIndex2_0 = function () {
                return (eF = a._emscripten_bind_btCylinderShapeZ_getUserIndex2_0 = a.asm.IC).apply(null, arguments);
            }),
            fF = (a._emscripten_bind_btCylinderShapeZ_getImplicitShapeDimensions_0 = function () {
                return (fF = a._emscripten_bind_btCylinderShapeZ_getImplicitShapeDimensions_0 = a.asm.JC).apply(null, arguments);
            }),
            gF = (a._emscripten_bind_btCylinderShapeZ_setImplicitShapeDimensions_1 = function () {
                return (gF = a._emscripten_bind_btCylinderShapeZ_setImplicitShapeDimensions_1 = a.asm.KC).apply(null, arguments);
            }),
            hF = (a._emscripten_bind_btCylinderShapeZ_setSafeMargin_1 = function () {
                return (hF = a._emscripten_bind_btCylinderShapeZ_setSafeMargin_1 = a.asm.LC).apply(null, arguments);
            }),
            iF = (a._emscripten_bind_btCylinderShapeZ_setSafeMargin_2 = function () {
                return (iF = a._emscripten_bind_btCylinderShapeZ_setSafeMargin_2 = a.asm.MC).apply(null, arguments);
            }),
            jF = (a._emscripten_bind_btCylinderShapeZ_getAabbSlow_3 = function () {
                return (jF = a._emscripten_bind_btCylinderShapeZ_getAabbSlow_3 = a.asm.NC).apply(null, arguments);
            }),
            kF = (a._emscripten_bind_btCylinderShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (kF = a._emscripten_bind_btCylinderShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.OC).apply(null, arguments);
            }),
            lF = (a._emscripten_bind_btCylinderShapeZ_localGetSupportVertexNonVirtual_1 = function () {
                return (lF = a._emscripten_bind_btCylinderShapeZ_localGetSupportVertexNonVirtual_1 = a.asm.PC).apply(null, arguments);
            }),
            mF = (a._emscripten_bind_btCylinderShapeZ_getMarginNonVirtual_0 = function () {
                return (mF = a._emscripten_bind_btCylinderShapeZ_getMarginNonVirtual_0 = a.asm.QC).apply(null, arguments);
            }),
            nF = (a._emscripten_bind_btCylinderShapeZ_getAabbNonVirtual_3 = function () {
                return (nF = a._emscripten_bind_btCylinderShapeZ_getAabbNonVirtual_3 = a.asm.RC).apply(null, arguments);
            }),
            oF = (a._emscripten_bind_btCylinderShapeZ_project_6 = function () {
                return (oF = a._emscripten_bind_btCylinderShapeZ_project_6 = a.asm.SC).apply(null, arguments);
            }),
            pF = (a._emscripten_bind_btCylinderShapeZ_getHalfExtentsWithMargin_0 = function () {
                return (pF = a._emscripten_bind_btCylinderShapeZ_getHalfExtentsWithMargin_0 = a.asm.TC).apply(null, arguments);
            }),
            qF = (a._emscripten_bind_btCylinderShapeZ_getHalfExtentsWithoutMargin_0 = function () {
                return (qF = a._emscripten_bind_btCylinderShapeZ_getHalfExtentsWithoutMargin_0 = a.asm.UC).apply(null, arguments);
            }),
            rF = (a._emscripten_bind_btCylinderShapeZ_getAabb_3 = function () {
                return (rF = a._emscripten_bind_btCylinderShapeZ_getAabb_3 = a.asm.VC).apply(null, arguments);
            }),
            sF = (a._emscripten_bind_btCylinderShapeZ_calculateLocalInertia_2 = function () {
                return (sF = a._emscripten_bind_btCylinderShapeZ_calculateLocalInertia_2 = a.asm.WC).apply(null, arguments);
            }),
            tF = (a._emscripten_bind_btCylinderShapeZ_setMargin_1 = function () {
                return (tF = a._emscripten_bind_btCylinderShapeZ_setMargin_1 = a.asm.XC).apply(null, arguments);
            }),
            uF = (a._emscripten_bind_btCylinderShapeZ_localGetSupportingVertex_1 = function () {
                return (uF = a._emscripten_bind_btCylinderShapeZ_localGetSupportingVertex_1 = a.asm.YC).apply(null, arguments);
            }),
            vF = (a._emscripten_bind_btCylinderShapeZ_getUpAxis_0 = function () {
                return (vF = a._emscripten_bind_btCylinderShapeZ_getUpAxis_0 = a.asm.ZC).apply(null, arguments);
            }),
            wF = (a._emscripten_bind_btCylinderShapeZ_getAnisotropicRollingFrictionDirection_0 = function () {
                return (wF = a._emscripten_bind_btCylinderShapeZ_getAnisotropicRollingFrictionDirection_0 = a.asm._C).apply(null, arguments);
            }),
            xF = (a._emscripten_bind_btCylinderShapeZ_setLocalScaling_1 = function () {
                return (xF = a._emscripten_bind_btCylinderShapeZ_setLocalScaling_1 = a.asm.$C).apply(null, arguments);
            }),
            yF = (a._emscripten_bind_btCylinderShapeZ___destroy___0 = function () {
                return (yF = a._emscripten_bind_btCylinderShapeZ___destroy___0 = a.asm.aD).apply(null, arguments);
            }),
            zF = (a._emscripten_bind_btSphereShape_btSphereShape_1 = function () {
                return (zF = a._emscripten_bind_btSphereShape_btSphereShape_1 = a.asm.bD).apply(null, arguments);
            }),
            AF = (a._emscripten_bind_btSphereShape_localGetSupportingVertex_1 = function () {
                return (AF = a._emscripten_bind_btSphereShape_localGetSupportingVertex_1 = a.asm.cD).apply(null, arguments);
            }),
            BF = (a._emscripten_bind_btSphereShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (BF = a._emscripten_bind_btSphereShape_localGetSupportingVertexWithoutMargin_1 = a.asm.dD).apply(null, arguments);
            }),
            CF = (a._emscripten_bind_btSphereShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (CF = a._emscripten_bind_btSphereShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.eD).apply(null, arguments);
            }),
            DF = (a._emscripten_bind_btSphereShape_calculateLocalInertia_2 = function () {
                return (DF = a._emscripten_bind_btSphereShape_calculateLocalInertia_2 = a.asm.fD).apply(null, arguments);
            }),
            EF = (a._emscripten_bind_btSphereShape_getAabb_3 = function () {
                return (EF = a._emscripten_bind_btSphereShape_getAabb_3 = a.asm.gD).apply(null, arguments);
            }),
            FF = (a._emscripten_bind_btSphereShape_getRadius_0 = function () {
                return (FF = a._emscripten_bind_btSphereShape_getRadius_0 = a.asm.hD).apply(null, arguments);
            }),
            GF = (a._emscripten_bind_btSphereShape_setUnscaledRadius_1 = function () {
                return (GF = a._emscripten_bind_btSphereShape_setUnscaledRadius_1 = a.asm.iD).apply(null, arguments);
            }),
            HF = (a._emscripten_bind_btSphereShape_getName_0 = function () {
                return (HF = a._emscripten_bind_btSphereShape_getName_0 = a.asm.jD).apply(null, arguments);
            }),
            IF = (a._emscripten_bind_btSphereShape_setMargin_1 = function () {
                return (IF = a._emscripten_bind_btSphereShape_setMargin_1 = a.asm.kD).apply(null, arguments);
            }),
            JF = (a._emscripten_bind_btSphereShape_getMargin_0 = function () {
                return (JF = a._emscripten_bind_btSphereShape_getMargin_0 = a.asm.lD).apply(null, arguments);
            }),
            KF = (a._emscripten_bind_btSphereShape_getAngularMotionDisc_0 = function () {
                return (KF = a._emscripten_bind_btSphereShape_getAngularMotionDisc_0 = a.asm.mD).apply(null, arguments);
            }),
            LF = (a._emscripten_bind_btSphereShape_getContactBreakingThreshold_1 = function () {
                return (LF = a._emscripten_bind_btSphereShape_getContactBreakingThreshold_1 = a.asm.nD).apply(null, arguments);
            }),
            MF = (a._emscripten_bind_btSphereShape_calculateTemporalAabb_6 = function () {
                return (MF = a._emscripten_bind_btSphereShape_calculateTemporalAabb_6 = a.asm.oD).apply(null, arguments);
            }),
            NF = (a._emscripten_bind_btSphereShape_isPolyhedral_0 = function () {
                return (NF = a._emscripten_bind_btSphereShape_isPolyhedral_0 = a.asm.pD).apply(null, arguments);
            }),
            OF = (a._emscripten_bind_btSphereShape_isConvex2d_0 = function () {
                return (OF = a._emscripten_bind_btSphereShape_isConvex2d_0 = a.asm.qD).apply(null, arguments);
            }),
            PF = (a._emscripten_bind_btSphereShape_isConvex_0 = function () {
                return (PF = a._emscripten_bind_btSphereShape_isConvex_0 = a.asm.rD).apply(null, arguments);
            }),
            QF = (a._emscripten_bind_btSphereShape_isNonMoving_0 = function () {
                return (QF = a._emscripten_bind_btSphereShape_isNonMoving_0 = a.asm.sD).apply(null, arguments);
            }),
            RF = (a._emscripten_bind_btSphereShape_isConcave_0 = function () {
                return (RF = a._emscripten_bind_btSphereShape_isConcave_0 = a.asm.tD).apply(null, arguments);
            }),
            SF = (a._emscripten_bind_btSphereShape_isCompound_0 = function () {
                return (SF = a._emscripten_bind_btSphereShape_isCompound_0 = a.asm.uD).apply(null, arguments);
            }),
            TF = (a._emscripten_bind_btSphereShape_isSoftBody_0 = function () {
                return (TF = a._emscripten_bind_btSphereShape_isSoftBody_0 = a.asm.vD).apply(null, arguments);
            }),
            UF = (a._emscripten_bind_btSphereShape_isInfinite_0 = function () {
                return (UF = a._emscripten_bind_btSphereShape_isInfinite_0 = a.asm.wD).apply(null, arguments);
            }),
            VF = (a._emscripten_bind_btSphereShape_getShapeType_0 = function () {
                return (VF = a._emscripten_bind_btSphereShape_getShapeType_0 = a.asm.xD).apply(null, arguments);
            }),
            WF = (a._emscripten_bind_btSphereShape_setUserPointer_1 = function () {
                return (WF = a._emscripten_bind_btSphereShape_setUserPointer_1 = a.asm.yD).apply(null, arguments);
            }),
            XF = (a._emscripten_bind_btSphereShape_getUserPointer_0 = function () {
                return (XF = a._emscripten_bind_btSphereShape_getUserPointer_0 = a.asm.zD).apply(null, arguments);
            }),
            YF = (a._emscripten_bind_btSphereShape_setUserIndex_1 = function () {
                return (YF = a._emscripten_bind_btSphereShape_setUserIndex_1 = a.asm.AD).apply(null, arguments);
            }),
            ZF = (a._emscripten_bind_btSphereShape_getUserIndex_0 = function () {
                return (ZF = a._emscripten_bind_btSphereShape_getUserIndex_0 = a.asm.BD).apply(null, arguments);
            }),
            $F = (a._emscripten_bind_btSphereShape_setUserIndex2_1 = function () {
                return ($F = a._emscripten_bind_btSphereShape_setUserIndex2_1 = a.asm.CD).apply(null, arguments);
            }),
            aG = (a._emscripten_bind_btSphereShape_getUserIndex2_0 = function () {
                return (aG = a._emscripten_bind_btSphereShape_getUserIndex2_0 = a.asm.DD).apply(null, arguments);
            }),
            bG = (a._emscripten_bind_btSphereShape_getImplicitShapeDimensions_0 = function () {
                return (bG = a._emscripten_bind_btSphereShape_getImplicitShapeDimensions_0 = a.asm.ED).apply(null, arguments);
            }),
            cG = (a._emscripten_bind_btSphereShape_setImplicitShapeDimensions_1 = function () {
                return (cG = a._emscripten_bind_btSphereShape_setImplicitShapeDimensions_1 = a.asm.FD).apply(null, arguments);
            }),
            dG = (a._emscripten_bind_btSphereShape_setSafeMargin_1 = function () {
                return (dG = a._emscripten_bind_btSphereShape_setSafeMargin_1 = a.asm.GD).apply(null, arguments);
            }),
            eG = (a._emscripten_bind_btSphereShape_setSafeMargin_2 = function () {
                return (eG = a._emscripten_bind_btSphereShape_setSafeMargin_2 = a.asm.HD).apply(null, arguments);
            }),
            fG = (a._emscripten_bind_btSphereShape_getAabbSlow_3 = function () {
                return (fG = a._emscripten_bind_btSphereShape_getAabbSlow_3 = a.asm.ID).apply(null, arguments);
            }),
            gG = (a._emscripten_bind_btSphereShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (gG = a._emscripten_bind_btSphereShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.JD).apply(null, arguments);
            }),
            hG = (a._emscripten_bind_btSphereShape_localGetSupportVertexNonVirtual_1 = function () {
                return (hG = a._emscripten_bind_btSphereShape_localGetSupportVertexNonVirtual_1 = a.asm.KD).apply(null, arguments);
            }),
            iG = (a._emscripten_bind_btSphereShape_getMarginNonVirtual_0 = function () {
                return (iG = a._emscripten_bind_btSphereShape_getMarginNonVirtual_0 = a.asm.LD).apply(null, arguments);
            }),
            jG = (a._emscripten_bind_btSphereShape_getAabbNonVirtual_3 = function () {
                return (jG = a._emscripten_bind_btSphereShape_getAabbNonVirtual_3 = a.asm.MD).apply(null, arguments);
            }),
            kG = (a._emscripten_bind_btSphereShape_project_6 = function () {
                return (kG = a._emscripten_bind_btSphereShape_project_6 = a.asm.ND).apply(null, arguments);
            }),
            lG = (a._emscripten_bind_btSphereShape___destroy___0 = function () {
                return (lG = a._emscripten_bind_btSphereShape___destroy___0 = a.asm.OD).apply(null, arguments);
            }),
            mG = (a._emscripten_bind_btMultiSphereShape_btMultiSphereShape_3 = function () {
                return (mG = a._emscripten_bind_btMultiSphereShape_btMultiSphereShape_3 = a.asm.PD).apply(null, arguments);
            }),
            nG = (a._emscripten_bind_btMultiSphereShape_calculateLocalInertia_2 = function () {
                return (nG = a._emscripten_bind_btMultiSphereShape_calculateLocalInertia_2 = a.asm.QD).apply(null, arguments);
            }),
            oG = (a._emscripten_bind_btMultiSphereShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (oG = a._emscripten_bind_btMultiSphereShape_localGetSupportingVertexWithoutMargin_1 = a.asm.RD).apply(null, arguments);
            }),
            pG = (a._emscripten_bind_btMultiSphereShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (pG = a._emscripten_bind_btMultiSphereShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.SD).apply(null, arguments);
            }),
            qG = (a._emscripten_bind_btMultiSphereShape_getSphereCount_0 = function () {
                return (qG = a._emscripten_bind_btMultiSphereShape_getSphereCount_0 = a.asm.TD).apply(null, arguments);
            }),
            rG = (a._emscripten_bind_btMultiSphereShape_getSpherePosition_1 = function () {
                return (rG = a._emscripten_bind_btMultiSphereShape_getSpherePosition_1 = a.asm.UD).apply(null, arguments);
            }),
            sG = (a._emscripten_bind_btMultiSphereShape_getSphereRadius_1 = function () {
                return (sG = a._emscripten_bind_btMultiSphereShape_getSphereRadius_1 = a.asm.VD).apply(null, arguments);
            }),
            tG = (a._emscripten_bind_btMultiSphereShape_getName_0 = function () {
                return (tG = a._emscripten_bind_btMultiSphereShape_getName_0 = a.asm.WD).apply(null, arguments);
            }),
            uG = (a._emscripten_bind_btMultiSphereShape_getAngularMotionDisc_0 = function () {
                return (uG = a._emscripten_bind_btMultiSphereShape_getAngularMotionDisc_0 = a.asm.XD).apply(null, arguments);
            }),
            vG = (a._emscripten_bind_btMultiSphereShape_getContactBreakingThreshold_1 = function () {
                return (vG = a._emscripten_bind_btMultiSphereShape_getContactBreakingThreshold_1 = a.asm.YD).apply(null, arguments);
            }),
            wG = (a._emscripten_bind_btMultiSphereShape_calculateTemporalAabb_6 = function () {
                return (wG = a._emscripten_bind_btMultiSphereShape_calculateTemporalAabb_6 = a.asm.ZD).apply(null, arguments);
            }),
            xG = (a._emscripten_bind_btMultiSphereShape_isPolyhedral_0 = function () {
                return (xG = a._emscripten_bind_btMultiSphereShape_isPolyhedral_0 = a.asm._D).apply(null, arguments);
            }),
            yG = (a._emscripten_bind_btMultiSphereShape_isConvex2d_0 = function () {
                return (yG = a._emscripten_bind_btMultiSphereShape_isConvex2d_0 = a.asm.$D).apply(null, arguments);
            }),
            zG = (a._emscripten_bind_btMultiSphereShape_isConvex_0 = function () {
                return (zG = a._emscripten_bind_btMultiSphereShape_isConvex_0 = a.asm.aE).apply(null, arguments);
            }),
            AG = (a._emscripten_bind_btMultiSphereShape_isNonMoving_0 = function () {
                return (AG = a._emscripten_bind_btMultiSphereShape_isNonMoving_0 = a.asm.bE).apply(null, arguments);
            }),
            BG = (a._emscripten_bind_btMultiSphereShape_isConcave_0 = function () {
                return (BG = a._emscripten_bind_btMultiSphereShape_isConcave_0 = a.asm.cE).apply(null, arguments);
            }),
            CG = (a._emscripten_bind_btMultiSphereShape_isCompound_0 = function () {
                return (CG = a._emscripten_bind_btMultiSphereShape_isCompound_0 = a.asm.dE).apply(null, arguments);
            }),
            DG = (a._emscripten_bind_btMultiSphereShape_isSoftBody_0 = function () {
                return (DG = a._emscripten_bind_btMultiSphereShape_isSoftBody_0 = a.asm.eE).apply(null, arguments);
            }),
            EG = (a._emscripten_bind_btMultiSphereShape_isInfinite_0 = function () {
                return (EG = a._emscripten_bind_btMultiSphereShape_isInfinite_0 = a.asm.fE).apply(null, arguments);
            }),
            FG = (a._emscripten_bind_btMultiSphereShape_getShapeType_0 = function () {
                return (FG = a._emscripten_bind_btMultiSphereShape_getShapeType_0 = a.asm.gE).apply(null, arguments);
            }),
            GG = (a._emscripten_bind_btMultiSphereShape_setUserPointer_1 = function () {
                return (GG = a._emscripten_bind_btMultiSphereShape_setUserPointer_1 = a.asm.hE).apply(null, arguments);
            }),
            HG = (a._emscripten_bind_btMultiSphereShape_getUserPointer_0 = function () {
                return (HG = a._emscripten_bind_btMultiSphereShape_getUserPointer_0 = a.asm.iE).apply(null, arguments);
            }),
            IG = (a._emscripten_bind_btMultiSphereShape_setUserIndex_1 = function () {
                return (IG = a._emscripten_bind_btMultiSphereShape_setUserIndex_1 = a.asm.jE).apply(null, arguments);
            }),
            JG = (a._emscripten_bind_btMultiSphereShape_getUserIndex_0 = function () {
                return (JG = a._emscripten_bind_btMultiSphereShape_getUserIndex_0 = a.asm.kE).apply(null, arguments);
            }),
            KG = (a._emscripten_bind_btMultiSphereShape_setUserIndex2_1 = function () {
                return (KG = a._emscripten_bind_btMultiSphereShape_setUserIndex2_1 = a.asm.lE).apply(null, arguments);
            }),
            LG = (a._emscripten_bind_btMultiSphereShape_getUserIndex2_0 = function () {
                return (LG = a._emscripten_bind_btMultiSphereShape_getUserIndex2_0 = a.asm.mE).apply(null, arguments);
            }),
            MG = (a._emscripten_bind_btMultiSphereShape_setLocalScaling_1 = function () {
                return (MG = a._emscripten_bind_btMultiSphereShape_setLocalScaling_1 = a.asm.nE).apply(null, arguments);
            }),
            NG = (a._emscripten_bind_btMultiSphereShape_getAabb_3 = function () {
                return (NG = a._emscripten_bind_btMultiSphereShape_getAabb_3 = a.asm.oE).apply(null, arguments);
            }),
            OG = (a._emscripten_bind_btMultiSphereShape_recalcLocalAabb_0 = function () {
                return (OG = a._emscripten_bind_btMultiSphereShape_recalcLocalAabb_0 = a.asm.pE).apply(null, arguments);
            }),
            PG = (a._emscripten_bind_btMultiSphereShape_getImplicitShapeDimensions_0 = function () {
                return (PG = a._emscripten_bind_btMultiSphereShape_getImplicitShapeDimensions_0 = a.asm.qE).apply(null, arguments);
            }),
            QG = (a._emscripten_bind_btMultiSphereShape_setImplicitShapeDimensions_1 = function () {
                return (QG = a._emscripten_bind_btMultiSphereShape_setImplicitShapeDimensions_1 = a.asm.rE).apply(null, arguments);
            }),
            RG = (a._emscripten_bind_btMultiSphereShape_setSafeMargin_1 = function () {
                return (RG = a._emscripten_bind_btMultiSphereShape_setSafeMargin_1 = a.asm.sE).apply(null, arguments);
            }),
            SG = (a._emscripten_bind_btMultiSphereShape_setSafeMargin_2 = function () {
                return (SG = a._emscripten_bind_btMultiSphereShape_setSafeMargin_2 = a.asm.tE).apply(null, arguments);
            }),
            TG = (a._emscripten_bind_btMultiSphereShape_getAabbSlow_3 = function () {
                return (TG = a._emscripten_bind_btMultiSphereShape_getAabbSlow_3 = a.asm.uE).apply(null, arguments);
            }),
            UG = (a._emscripten_bind_btMultiSphereShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (UG = a._emscripten_bind_btMultiSphereShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.vE).apply(null, arguments);
            }),
            VG = (a._emscripten_bind_btMultiSphereShape_localGetSupportVertexNonVirtual_1 = function () {
                return (VG = a._emscripten_bind_btMultiSphereShape_localGetSupportVertexNonVirtual_1 = a.asm.wE).apply(null, arguments);
            }),
            WG = (a._emscripten_bind_btMultiSphereShape_getMarginNonVirtual_0 = function () {
                return (WG = a._emscripten_bind_btMultiSphereShape_getMarginNonVirtual_0 = a.asm.xE).apply(null, arguments);
            }),
            XG = (a._emscripten_bind_btMultiSphereShape_getAabbNonVirtual_3 = function () {
                return (XG = a._emscripten_bind_btMultiSphereShape_getAabbNonVirtual_3 = a.asm.yE).apply(null, arguments);
            }),
            YG = (a._emscripten_bind_btMultiSphereShape_project_6 = function () {
                return (YG = a._emscripten_bind_btMultiSphereShape_project_6 = a.asm.zE).apply(null, arguments);
            }),
            ZG = (a._emscripten_bind_btMultiSphereShape___destroy___0 = function () {
                return (ZG = a._emscripten_bind_btMultiSphereShape___destroy___0 = a.asm.AE).apply(null, arguments);
            }),
            $G = (a._emscripten_bind_btConeShapeX_btConeShapeX_2 = function () {
                return ($G = a._emscripten_bind_btConeShapeX_btConeShapeX_2 = a.asm.BE).apply(null, arguments);
            }),
            aH = (a._emscripten_bind_btConeShapeX_getAnisotropicRollingFrictionDirection_0 = function () {
                return (aH = a._emscripten_bind_btConeShapeX_getAnisotropicRollingFrictionDirection_0 = a.asm.CE).apply(null, arguments);
            }),
            bH = (a._emscripten_bind_btConeShapeX_getName_0 = function () {
                return (bH = a._emscripten_bind_btConeShapeX_getName_0 = a.asm.DE).apply(null, arguments);
            }),
            cH = (a._emscripten_bind_btConeShapeX_getAngularMotionDisc_0 = function () {
                return (cH = a._emscripten_bind_btConeShapeX_getAngularMotionDisc_0 = a.asm.EE).apply(null, arguments);
            }),
            dH = (a._emscripten_bind_btConeShapeX_getContactBreakingThreshold_1 = function () {
                return (dH = a._emscripten_bind_btConeShapeX_getContactBreakingThreshold_1 = a.asm.FE).apply(null, arguments);
            }),
            eH = (a._emscripten_bind_btConeShapeX_calculateTemporalAabb_6 = function () {
                return (eH = a._emscripten_bind_btConeShapeX_calculateTemporalAabb_6 = a.asm.GE).apply(null, arguments);
            }),
            fH = (a._emscripten_bind_btConeShapeX_isPolyhedral_0 = function () {
                return (fH = a._emscripten_bind_btConeShapeX_isPolyhedral_0 = a.asm.HE).apply(null, arguments);
            }),
            gH = (a._emscripten_bind_btConeShapeX_isConvex2d_0 = function () {
                return (gH = a._emscripten_bind_btConeShapeX_isConvex2d_0 = a.asm.IE).apply(null, arguments);
            }),
            hH = (a._emscripten_bind_btConeShapeX_isConvex_0 = function () {
                return (hH = a._emscripten_bind_btConeShapeX_isConvex_0 = a.asm.JE).apply(null, arguments);
            }),
            iH = (a._emscripten_bind_btConeShapeX_isNonMoving_0 = function () {
                return (iH = a._emscripten_bind_btConeShapeX_isNonMoving_0 = a.asm.KE).apply(null, arguments);
            }),
            jH = (a._emscripten_bind_btConeShapeX_isConcave_0 = function () {
                return (jH = a._emscripten_bind_btConeShapeX_isConcave_0 = a.asm.LE).apply(null, arguments);
            }),
            kH = (a._emscripten_bind_btConeShapeX_isCompound_0 = function () {
                return (kH = a._emscripten_bind_btConeShapeX_isCompound_0 = a.asm.ME).apply(null, arguments);
            }),
            lH = (a._emscripten_bind_btConeShapeX_isSoftBody_0 = function () {
                return (lH = a._emscripten_bind_btConeShapeX_isSoftBody_0 = a.asm.NE).apply(null, arguments);
            }),
            mH = (a._emscripten_bind_btConeShapeX_isInfinite_0 = function () {
                return (mH = a._emscripten_bind_btConeShapeX_isInfinite_0 = a.asm.OE).apply(null, arguments);
            }),
            nH = (a._emscripten_bind_btConeShapeX_getShapeType_0 = function () {
                return (nH = a._emscripten_bind_btConeShapeX_getShapeType_0 = a.asm.PE).apply(null, arguments);
            }),
            oH = (a._emscripten_bind_btConeShapeX_setUserPointer_1 = function () {
                return (oH = a._emscripten_bind_btConeShapeX_setUserPointer_1 = a.asm.QE).apply(null, arguments);
            }),
            pH = (a._emscripten_bind_btConeShapeX_getUserPointer_0 = function () {
                return (pH = a._emscripten_bind_btConeShapeX_getUserPointer_0 = a.asm.RE).apply(null, arguments);
            }),
            qH = (a._emscripten_bind_btConeShapeX_setUserIndex_1 = function () {
                return (qH = a._emscripten_bind_btConeShapeX_setUserIndex_1 = a.asm.SE).apply(null, arguments);
            }),
            rH = (a._emscripten_bind_btConeShapeX_getUserIndex_0 = function () {
                return (rH = a._emscripten_bind_btConeShapeX_getUserIndex_0 = a.asm.TE).apply(null, arguments);
            }),
            sH = (a._emscripten_bind_btConeShapeX_setUserIndex2_1 = function () {
                return (sH = a._emscripten_bind_btConeShapeX_setUserIndex2_1 = a.asm.UE).apply(null, arguments);
            }),
            tH = (a._emscripten_bind_btConeShapeX_getUserIndex2_0 = function () {
                return (tH = a._emscripten_bind_btConeShapeX_getUserIndex2_0 = a.asm.VE).apply(null, arguments);
            }),
            uH = (a._emscripten_bind_btConeShapeX_localGetSupportingVertex_1 = function () {
                return (uH = a._emscripten_bind_btConeShapeX_localGetSupportingVertex_1 = a.asm.WE).apply(null, arguments);
            }),
            vH = (a._emscripten_bind_btConeShapeX_localGetSupportingVertexWithoutMargin_1 = function () {
                return (vH = a._emscripten_bind_btConeShapeX_localGetSupportingVertexWithoutMargin_1 = a.asm.XE).apply(null, arguments);
            }),
            wH = (a._emscripten_bind_btConeShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (wH = a._emscripten_bind_btConeShapeX_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.YE).apply(null, arguments);
            }),
            xH = (a._emscripten_bind_btConeShapeX_getRadius_0 = function () {
                return (xH = a._emscripten_bind_btConeShapeX_getRadius_0 = a.asm.ZE).apply(null, arguments);
            }),
            yH = (a._emscripten_bind_btConeShapeX_getHeight_0 = function () {
                return (yH = a._emscripten_bind_btConeShapeX_getHeight_0 = a.asm._E).apply(null, arguments);
            }),
            zH = (a._emscripten_bind_btConeShapeX_setRadius_1 = function () {
                return (zH = a._emscripten_bind_btConeShapeX_setRadius_1 = a.asm.$E).apply(null, arguments);
            }),
            AH = (a._emscripten_bind_btConeShapeX_setHeight_1 = function () {
                return (AH = a._emscripten_bind_btConeShapeX_setHeight_1 = a.asm.aF).apply(null, arguments);
            }),
            BH = (a._emscripten_bind_btConeShapeX_calculateLocalInertia_2 = function () {
                return (BH = a._emscripten_bind_btConeShapeX_calculateLocalInertia_2 = a.asm.bF).apply(null, arguments);
            }),
            CH = (a._emscripten_bind_btConeShapeX_setConeUpIndex_1 = function () {
                return (CH = a._emscripten_bind_btConeShapeX_setConeUpIndex_1 = a.asm.cF).apply(null, arguments);
            }),
            DH = (a._emscripten_bind_btConeShapeX_getConeUpIndex_0 = function () {
                return (DH = a._emscripten_bind_btConeShapeX_getConeUpIndex_0 = a.asm.dF).apply(null, arguments);
            }),
            EH = (a._emscripten_bind_btConeShapeX_setLocalScaling_1 = function () {
                return (EH = a._emscripten_bind_btConeShapeX_setLocalScaling_1 = a.asm.eF).apply(null, arguments);
            }),
            FH = (a._emscripten_bind_btConeShapeX_getImplicitShapeDimensions_0 = function () {
                return (FH = a._emscripten_bind_btConeShapeX_getImplicitShapeDimensions_0 = a.asm.fF).apply(null, arguments);
            }),
            GH = (a._emscripten_bind_btConeShapeX_setImplicitShapeDimensions_1 = function () {
                return (GH = a._emscripten_bind_btConeShapeX_setImplicitShapeDimensions_1 = a.asm.gF).apply(null, arguments);
            }),
            HH = (a._emscripten_bind_btConeShapeX_setSafeMargin_1 = function () {
                return (HH = a._emscripten_bind_btConeShapeX_setSafeMargin_1 = a.asm.hF).apply(null, arguments);
            }),
            IH = (a._emscripten_bind_btConeShapeX_setSafeMargin_2 = function () {
                return (IH = a._emscripten_bind_btConeShapeX_setSafeMargin_2 = a.asm.iF).apply(null, arguments);
            }),
            JH = (a._emscripten_bind_btConeShapeX_getAabbSlow_3 = function () {
                return (JH = a._emscripten_bind_btConeShapeX_getAabbSlow_3 = a.asm.jF).apply(null, arguments);
            }),
            KH = (a._emscripten_bind_btConeShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (KH = a._emscripten_bind_btConeShapeX_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.kF).apply(null, arguments);
            }),
            LH = (a._emscripten_bind_btConeShapeX_localGetSupportVertexNonVirtual_1 = function () {
                return (LH = a._emscripten_bind_btConeShapeX_localGetSupportVertexNonVirtual_1 = a.asm.lF).apply(null, arguments);
            }),
            MH = (a._emscripten_bind_btConeShapeX_getMarginNonVirtual_0 = function () {
                return (MH = a._emscripten_bind_btConeShapeX_getMarginNonVirtual_0 = a.asm.mF).apply(null, arguments);
            }),
            NH = (a._emscripten_bind_btConeShapeX_getAabbNonVirtual_3 = function () {
                return (NH = a._emscripten_bind_btConeShapeX_getAabbNonVirtual_3 = a.asm.nF).apply(null, arguments);
            }),
            OH = (a._emscripten_bind_btConeShapeX_project_6 = function () {
                return (OH = a._emscripten_bind_btConeShapeX_project_6 = a.asm.oF).apply(null, arguments);
            }),
            PH = (a._emscripten_bind_btConeShapeX___destroy___0 = function () {
                return (PH = a._emscripten_bind_btConeShapeX___destroy___0 = a.asm.pF).apply(null, arguments);
            }),
            QH = (a._emscripten_bind_btConeShapeZ_btConeShapeZ_2 = function () {
                return (QH = a._emscripten_bind_btConeShapeZ_btConeShapeZ_2 = a.asm.qF).apply(null, arguments);
            }),
            RH = (a._emscripten_bind_btConeShapeZ_getAnisotropicRollingFrictionDirection_0 = function () {
                return (RH = a._emscripten_bind_btConeShapeZ_getAnisotropicRollingFrictionDirection_0 = a.asm.rF).apply(null, arguments);
            }),
            SH = (a._emscripten_bind_btConeShapeZ_getName_0 = function () {
                return (SH = a._emscripten_bind_btConeShapeZ_getName_0 = a.asm.sF).apply(null, arguments);
            }),
            TH = (a._emscripten_bind_btConeShapeZ_getAngularMotionDisc_0 = function () {
                return (TH = a._emscripten_bind_btConeShapeZ_getAngularMotionDisc_0 = a.asm.tF).apply(null, arguments);
            }),
            UH = (a._emscripten_bind_btConeShapeZ_getContactBreakingThreshold_1 = function () {
                return (UH = a._emscripten_bind_btConeShapeZ_getContactBreakingThreshold_1 = a.asm.uF).apply(null, arguments);
            }),
            VH = (a._emscripten_bind_btConeShapeZ_calculateTemporalAabb_6 = function () {
                return (VH = a._emscripten_bind_btConeShapeZ_calculateTemporalAabb_6 = a.asm.vF).apply(null, arguments);
            }),
            WH = (a._emscripten_bind_btConeShapeZ_isPolyhedral_0 = function () {
                return (WH = a._emscripten_bind_btConeShapeZ_isPolyhedral_0 = a.asm.wF).apply(null, arguments);
            }),
            XH = (a._emscripten_bind_btConeShapeZ_isConvex2d_0 = function () {
                return (XH = a._emscripten_bind_btConeShapeZ_isConvex2d_0 = a.asm.xF).apply(null, arguments);
            }),
            YH = (a._emscripten_bind_btConeShapeZ_isConvex_0 = function () {
                return (YH = a._emscripten_bind_btConeShapeZ_isConvex_0 = a.asm.yF).apply(null, arguments);
            }),
            ZH = (a._emscripten_bind_btConeShapeZ_isNonMoving_0 = function () {
                return (ZH = a._emscripten_bind_btConeShapeZ_isNonMoving_0 = a.asm.zF).apply(null, arguments);
            }),
            $H = (a._emscripten_bind_btConeShapeZ_isConcave_0 = function () {
                return ($H = a._emscripten_bind_btConeShapeZ_isConcave_0 = a.asm.AF).apply(null, arguments);
            }),
            aI = (a._emscripten_bind_btConeShapeZ_isCompound_0 = function () {
                return (aI = a._emscripten_bind_btConeShapeZ_isCompound_0 = a.asm.BF).apply(null, arguments);
            }),
            bI = (a._emscripten_bind_btConeShapeZ_isSoftBody_0 = function () {
                return (bI = a._emscripten_bind_btConeShapeZ_isSoftBody_0 = a.asm.CF).apply(null, arguments);
            }),
            cI = (a._emscripten_bind_btConeShapeZ_isInfinite_0 = function () {
                return (cI = a._emscripten_bind_btConeShapeZ_isInfinite_0 = a.asm.DF).apply(null, arguments);
            }),
            dI = (a._emscripten_bind_btConeShapeZ_getShapeType_0 = function () {
                return (dI = a._emscripten_bind_btConeShapeZ_getShapeType_0 = a.asm.EF).apply(null, arguments);
            }),
            eI = (a._emscripten_bind_btConeShapeZ_setUserPointer_1 = function () {
                return (eI = a._emscripten_bind_btConeShapeZ_setUserPointer_1 = a.asm.FF).apply(null, arguments);
            }),
            fI = (a._emscripten_bind_btConeShapeZ_getUserPointer_0 = function () {
                return (fI = a._emscripten_bind_btConeShapeZ_getUserPointer_0 = a.asm.GF).apply(null, arguments);
            }),
            gI = (a._emscripten_bind_btConeShapeZ_setUserIndex_1 = function () {
                return (gI = a._emscripten_bind_btConeShapeZ_setUserIndex_1 = a.asm.HF).apply(null, arguments);
            }),
            hI = (a._emscripten_bind_btConeShapeZ_getUserIndex_0 = function () {
                return (hI = a._emscripten_bind_btConeShapeZ_getUserIndex_0 = a.asm.IF).apply(null, arguments);
            }),
            iI = (a._emscripten_bind_btConeShapeZ_setUserIndex2_1 = function () {
                return (iI = a._emscripten_bind_btConeShapeZ_setUserIndex2_1 = a.asm.JF).apply(null, arguments);
            }),
            jI = (a._emscripten_bind_btConeShapeZ_getUserIndex2_0 = function () {
                return (jI = a._emscripten_bind_btConeShapeZ_getUserIndex2_0 = a.asm.KF).apply(null, arguments);
            }),
            kI = (a._emscripten_bind_btConeShapeZ_localGetSupportingVertex_1 = function () {
                return (kI = a._emscripten_bind_btConeShapeZ_localGetSupportingVertex_1 = a.asm.LF).apply(null, arguments);
            }),
            lI = (a._emscripten_bind_btConeShapeZ_localGetSupportingVertexWithoutMargin_1 = function () {
                return (lI = a._emscripten_bind_btConeShapeZ_localGetSupportingVertexWithoutMargin_1 = a.asm.MF).apply(null, arguments);
            }),
            mI = (a._emscripten_bind_btConeShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (mI = a._emscripten_bind_btConeShapeZ_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.NF).apply(null, arguments);
            }),
            nI = (a._emscripten_bind_btConeShapeZ_getRadius_0 = function () {
                return (nI = a._emscripten_bind_btConeShapeZ_getRadius_0 = a.asm.OF).apply(null, arguments);
            }),
            oI = (a._emscripten_bind_btConeShapeZ_getHeight_0 = function () {
                return (oI = a._emscripten_bind_btConeShapeZ_getHeight_0 = a.asm.PF).apply(null, arguments);
            }),
            pI = (a._emscripten_bind_btConeShapeZ_setRadius_1 = function () {
                return (pI = a._emscripten_bind_btConeShapeZ_setRadius_1 = a.asm.QF).apply(null, arguments);
            }),
            qI = (a._emscripten_bind_btConeShapeZ_setHeight_1 = function () {
                return (qI = a._emscripten_bind_btConeShapeZ_setHeight_1 = a.asm.RF).apply(null, arguments);
            }),
            rI = (a._emscripten_bind_btConeShapeZ_calculateLocalInertia_2 = function () {
                return (rI = a._emscripten_bind_btConeShapeZ_calculateLocalInertia_2 = a.asm.SF).apply(null, arguments);
            }),
            sI = (a._emscripten_bind_btConeShapeZ_setConeUpIndex_1 = function () {
                return (sI = a._emscripten_bind_btConeShapeZ_setConeUpIndex_1 = a.asm.TF).apply(null, arguments);
            }),
            tI = (a._emscripten_bind_btConeShapeZ_getConeUpIndex_0 = function () {
                return (tI = a._emscripten_bind_btConeShapeZ_getConeUpIndex_0 = a.asm.UF).apply(null, arguments);
            }),
            uI = (a._emscripten_bind_btConeShapeZ_setLocalScaling_1 = function () {
                return (uI = a._emscripten_bind_btConeShapeZ_setLocalScaling_1 = a.asm.VF).apply(null, arguments);
            }),
            vI = (a._emscripten_bind_btConeShapeZ_getImplicitShapeDimensions_0 = function () {
                return (vI = a._emscripten_bind_btConeShapeZ_getImplicitShapeDimensions_0 = a.asm.WF).apply(null, arguments);
            }),
            wI = (a._emscripten_bind_btConeShapeZ_setImplicitShapeDimensions_1 = function () {
                return (wI = a._emscripten_bind_btConeShapeZ_setImplicitShapeDimensions_1 = a.asm.XF).apply(null, arguments);
            }),
            xI = (a._emscripten_bind_btConeShapeZ_setSafeMargin_1 = function () {
                return (xI = a._emscripten_bind_btConeShapeZ_setSafeMargin_1 = a.asm.YF).apply(null, arguments);
            }),
            yI = (a._emscripten_bind_btConeShapeZ_setSafeMargin_2 = function () {
                return (yI = a._emscripten_bind_btConeShapeZ_setSafeMargin_2 = a.asm.ZF).apply(null, arguments);
            }),
            zI = (a._emscripten_bind_btConeShapeZ_getAabbSlow_3 = function () {
                return (zI = a._emscripten_bind_btConeShapeZ_getAabbSlow_3 = a.asm._F).apply(null, arguments);
            }),
            AI = (a._emscripten_bind_btConeShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (AI = a._emscripten_bind_btConeShapeZ_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm.$F).apply(null, arguments);
            }),
            BI = (a._emscripten_bind_btConeShapeZ_localGetSupportVertexNonVirtual_1 = function () {
                return (BI = a._emscripten_bind_btConeShapeZ_localGetSupportVertexNonVirtual_1 = a.asm.aG).apply(null, arguments);
            }),
            CI = (a._emscripten_bind_btConeShapeZ_getMarginNonVirtual_0 = function () {
                return (CI = a._emscripten_bind_btConeShapeZ_getMarginNonVirtual_0 = a.asm.bG).apply(null, arguments);
            }),
            DI = (a._emscripten_bind_btConeShapeZ_getAabbNonVirtual_3 = function () {
                return (DI = a._emscripten_bind_btConeShapeZ_getAabbNonVirtual_3 = a.asm.cG).apply(null, arguments);
            }),
            EI = (a._emscripten_bind_btConeShapeZ_project_6 = function () {
                return (EI = a._emscripten_bind_btConeShapeZ_project_6 = a.asm.dG).apply(null, arguments);
            }),
            FI = (a._emscripten_bind_btConeShapeZ___destroy___0 = function () {
                return (FI = a._emscripten_bind_btConeShapeZ___destroy___0 = a.asm.eG).apply(null, arguments);
            }),
            GI = (a._emscripten_bind_btConvexHullShape_btConvexHullShape_0 = function () {
                return (GI = a._emscripten_bind_btConvexHullShape_btConvexHullShape_0 = a.asm.fG).apply(null, arguments);
            }),
            HI = (a._emscripten_bind_btConvexHullShape_btConvexHullShape_1 = function () {
                return (HI = a._emscripten_bind_btConvexHullShape_btConvexHullShape_1 = a.asm.gG).apply(null, arguments);
            }),
            II = (a._emscripten_bind_btConvexHullShape_btConvexHullShape_2 = function () {
                return (II = a._emscripten_bind_btConvexHullShape_btConvexHullShape_2 = a.asm.hG).apply(null, arguments);
            }),
            JI = (a._emscripten_bind_btConvexHullShape_btConvexHullShape_3 = function () {
                return (JI = a._emscripten_bind_btConvexHullShape_btConvexHullShape_3 = a.asm.iG).apply(null, arguments);
            }),
            KI = (a._emscripten_bind_btConvexHullShape_addPoint_1 = function () {
                return (KI = a._emscripten_bind_btConvexHullShape_addPoint_1 = a.asm.jG).apply(null, arguments);
            }),
            LI = (a._emscripten_bind_btConvexHullShape_addPoint_2 = function () {
                return (LI = a._emscripten_bind_btConvexHullShape_addPoint_2 = a.asm.kG).apply(null, arguments);
            }),
            MI = (a._emscripten_bind_btConvexHullShape_getUnscaledPoints_0 = function () {
                return (MI = a._emscripten_bind_btConvexHullShape_getUnscaledPoints_0 = a.asm.lG).apply(null, arguments);
            }),
            NI = (a._emscripten_bind_btConvexHullShape_getPoints_0 = function () {
                return (NI = a._emscripten_bind_btConvexHullShape_getPoints_0 = a.asm.mG).apply(null, arguments);
            }),
            OI = (a._emscripten_bind_btConvexHullShape_optimizeConvexHull_0 = function () {
                return (OI = a._emscripten_bind_btConvexHullShape_optimizeConvexHull_0 = a.asm.nG).apply(null, arguments);
            }),
            PI = (a._emscripten_bind_btConvexHullShape_getScaledPoint_1 = function () {
                return (PI = a._emscripten_bind_btConvexHullShape_getScaledPoint_1 = a.asm.oG).apply(null, arguments);
            }),
            QI = (a._emscripten_bind_btConvexHullShape_getNumPoints_0 = function () {
                return (QI = a._emscripten_bind_btConvexHullShape_getNumPoints_0 = a.asm.pG).apply(null, arguments);
            }),
            RI = (a._emscripten_bind_btConvexHullShape_localGetSupportingVertex_1 = function () {
                return (RI = a._emscripten_bind_btConvexHullShape_localGetSupportingVertex_1 = a.asm.qG).apply(null, arguments);
            }),
            SI = (a._emscripten_bind_btConvexHullShape_localGetSupportingVertexWithoutMargin_1 = function () {
                return (SI = a._emscripten_bind_btConvexHullShape_localGetSupportingVertexWithoutMargin_1 = a.asm.rG).apply(null, arguments);
            }),
            TI = (a._emscripten_bind_btConvexHullShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = function () {
                return (TI = a._emscripten_bind_btConvexHullShape_batchedUnitVectorGetSupportingVertexWithoutMargin_3 = a.asm.sG).apply(null, arguments);
            }),
            UI = (a._emscripten_bind_btConvexHullShape_project_6 = function () {
                return (UI = a._emscripten_bind_btConvexHullShape_project_6 = a.asm.tG).apply(null, arguments);
            }),
            VI = (a._emscripten_bind_btConvexHullShape_getName_0 = function () {
                return (VI = a._emscripten_bind_btConvexHullShape_getName_0 = a.asm.uG).apply(null, arguments);
            }),
            WI = (a._emscripten_bind_btConvexHullShape_getNumVertices_0 = function () {
                return (WI = a._emscripten_bind_btConvexHullShape_getNumVertices_0 = a.asm.vG).apply(null, arguments);
            }),
            XI = (a._emscripten_bind_btConvexHullShape_getNumEdges_0 = function () {
                return (XI = a._emscripten_bind_btConvexHullShape_getNumEdges_0 = a.asm.wG).apply(null, arguments);
            }),
            YI = (a._emscripten_bind_btConvexHullShape_getEdge_3 = function () {
                return (YI = a._emscripten_bind_btConvexHullShape_getEdge_3 = a.asm.xG).apply(null, arguments);
            }),
            ZI = (a._emscripten_bind_btConvexHullShape_getVertex_2 = function () {
                return (ZI = a._emscripten_bind_btConvexHullShape_getVertex_2 = a.asm.yG).apply(null, arguments);
            }),
            $I = (a._emscripten_bind_btConvexHullShape_getNumPlanes_0 = function () {
                return ($I = a._emscripten_bind_btConvexHullShape_getNumPlanes_0 = a.asm.zG).apply(null, arguments);
            }),
            aJ = (a._emscripten_bind_btConvexHullShape_getPlane_3 = function () {
                return (aJ = a._emscripten_bind_btConvexHullShape_getPlane_3 = a.asm.AG).apply(null, arguments);
            }),
            bJ = (a._emscripten_bind_btConvexHullShape_isInside_2 = function () {
                return (bJ = a._emscripten_bind_btConvexHullShape_isInside_2 = a.asm.BG).apply(null, arguments);
            }),
            cJ = (a._emscripten_bind_btConvexHullShape_setLocalScaling_1 = function () {
                return (cJ = a._emscripten_bind_btConvexHullShape_setLocalScaling_1 = a.asm.CG).apply(null, arguments);
            }),
            dJ = (a._emscripten_bind_btConvexHullShape_getAngularMotionDisc_0 = function () {
                return (dJ = a._emscripten_bind_btConvexHullShape_getAngularMotionDisc_0 = a.asm.DG).apply(null, arguments);
            }),
            eJ = (a._emscripten_bind_btConvexHullShape_getContactBreakingThreshold_1 = function () {
                return (eJ = a._emscripten_bind_btConvexHullShape_getContactBreakingThreshold_1 = a.asm.EG).apply(null, arguments);
            }),
            fJ = (a._emscripten_bind_btConvexHullShape_calculateTemporalAabb_6 = function () {
                return (fJ = a._emscripten_bind_btConvexHullShape_calculateTemporalAabb_6 = a.asm.FG).apply(null, arguments);
            }),
            gJ = (a._emscripten_bind_btConvexHullShape_isPolyhedral_0 = function () {
                return (gJ = a._emscripten_bind_btConvexHullShape_isPolyhedral_0 = a.asm.GG).apply(null, arguments);
            }),
            hJ = (a._emscripten_bind_btConvexHullShape_isConvex2d_0 = function () {
                return (hJ = a._emscripten_bind_btConvexHullShape_isConvex2d_0 = a.asm.HG).apply(null, arguments);
            }),
            iJ = (a._emscripten_bind_btConvexHullShape_isConvex_0 = function () {
                return (iJ = a._emscripten_bind_btConvexHullShape_isConvex_0 = a.asm.IG).apply(null, arguments);
            }),
            jJ = (a._emscripten_bind_btConvexHullShape_isNonMoving_0 = function () {
                return (jJ = a._emscripten_bind_btConvexHullShape_isNonMoving_0 = a.asm.JG).apply(null, arguments);
            }),
            kJ = (a._emscripten_bind_btConvexHullShape_isConcave_0 = function () {
                return (kJ = a._emscripten_bind_btConvexHullShape_isConcave_0 = a.asm.KG).apply(null, arguments);
            }),
            lJ = (a._emscripten_bind_btConvexHullShape_isCompound_0 = function () {
                return (lJ = a._emscripten_bind_btConvexHullShape_isCompound_0 = a.asm.LG).apply(null, arguments);
            }),
            mJ = (a._emscripten_bind_btConvexHullShape_isSoftBody_0 = function () {
                return (mJ = a._emscripten_bind_btConvexHullShape_isSoftBody_0 = a.asm.MG).apply(null, arguments);
            }),
            nJ = (a._emscripten_bind_btConvexHullShape_isInfinite_0 = function () {
                return (nJ = a._emscripten_bind_btConvexHullShape_isInfinite_0 = a.asm.NG).apply(null, arguments);
            }),
            oJ = (a._emscripten_bind_btConvexHullShape_getShapeType_0 = function () {
                return (oJ = a._emscripten_bind_btConvexHullShape_getShapeType_0 = a.asm.OG).apply(null, arguments);
            }),
            pJ = (a._emscripten_bind_btConvexHullShape_setUserPointer_1 = function () {
                return (pJ = a._emscripten_bind_btConvexHullShape_setUserPointer_1 = a.asm.PG).apply(null, arguments);
            }),
            qJ = (a._emscripten_bind_btConvexHullShape_getUserPointer_0 = function () {
                return (qJ = a._emscripten_bind_btConvexHullShape_getUserPointer_0 = a.asm.QG).apply(null, arguments);
            }),
            rJ = (a._emscripten_bind_btConvexHullShape_setUserIndex_1 = function () {
                return (rJ = a._emscripten_bind_btConvexHullShape_setUserIndex_1 = a.asm.RG).apply(null, arguments);
            }),
            sJ = (a._emscripten_bind_btConvexHullShape_getUserIndex_0 = function () {
                return (sJ = a._emscripten_bind_btConvexHullShape_getUserIndex_0 = a.asm.SG).apply(null, arguments);
            }),
            tJ = (a._emscripten_bind_btConvexHullShape_setUserIndex2_1 = function () {
                return (tJ = a._emscripten_bind_btConvexHullShape_setUserIndex2_1 = a.asm.TG).apply(null, arguments);
            }),
            uJ = (a._emscripten_bind_btConvexHullShape_getUserIndex2_0 = function () {
                return (uJ = a._emscripten_bind_btConvexHullShape_getUserIndex2_0 = a.asm.UG).apply(null, arguments);
            }),
            vJ = (a._emscripten_bind_btConvexHullShape_getImplicitShapeDimensions_0 = function () {
                return (vJ = a._emscripten_bind_btConvexHullShape_getImplicitShapeDimensions_0 = a.asm.VG).apply(null, arguments);
            }),
            wJ = (a._emscripten_bind_btConvexHullShape_setImplicitShapeDimensions_1 = function () {
                return (wJ = a._emscripten_bind_btConvexHullShape_setImplicitShapeDimensions_1 = a.asm.WG).apply(null, arguments);
            }),
            xJ = (a._emscripten_bind_btConvexHullShape_setSafeMargin_1 = function () {
                return (xJ = a._emscripten_bind_btConvexHullShape_setSafeMargin_1 = a.asm.XG).apply(null, arguments);
            }),
            yJ = (a._emscripten_bind_btConvexHullShape_setSafeMargin_2 = function () {
                return (yJ = a._emscripten_bind_btConvexHullShape_setSafeMargin_2 = a.asm.YG).apply(null, arguments);
            }),
            zJ = (a._emscripten_bind_btConvexHullShape_getAabbSlow_3 = function () {
                return (zJ = a._emscripten_bind_btConvexHullShape_getAabbSlow_3 = a.asm.ZG).apply(null, arguments);
            }),
            AJ = (a._emscripten_bind_btConvexHullShape_localGetSupportVertexWithoutMarginNonVirtual_1 = function () {
                return (AJ = a._emscripten_bind_btConvexHullShape_localGetSupportVertexWithoutMarginNonVirtual_1 = a.asm._G).apply(null, arguments);
            }),
            BJ = (a._emscripten_bind_btConvexHullShape_localGetSupportVertexNonVirtual_1 = function () {
                return (BJ = a._emscripten_bind_btConvexHullShape_localGetSupportVertexNonVirtual_1 = a.asm.$G).apply(null, arguments);
            }),
            CJ = (a._emscripten_bind_btConvexHullShape_getMarginNonVirtual_0 = function () {
                return (CJ = a._emscripten_bind_btConvexHullShape_getMarginNonVirtual_0 = a.asm.aH).apply(null, arguments);
            }),
            DJ = (a._emscripten_bind_btConvexHullShape_getAabbNonVirtual_3 = function () {
                return (DJ = a._emscripten_bind_btConvexHullShape_getAabbNonVirtual_3 = a.asm.bH).apply(null, arguments);
            }),
            EJ = (a._emscripten_bind_btConvexHullShape_getAabb_3 = function () {
                return (EJ = a._emscripten_bind_btConvexHullShape_getAabb_3 = a.asm.cH).apply(null, arguments);
            }),
            FJ = (a._emscripten_bind_btConvexHullShape_recalcLocalAabb_0 = function () {
                return (FJ = a._emscripten_bind_btConvexHullShape_recalcLocalAabb_0 = a.asm.dH).apply(null, arguments);
            }),
            GJ = (a._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_0 = function () {
                return (GJ = a._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_0 = a.asm.eH).apply(null, arguments);
            }),
            HJ = (a._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_1 = function () {
                return (HJ = a._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_1 = a.asm.fH).apply(null, arguments);
            }),
            IJ = (a._emscripten_bind_btConvexHullShape_setPolyhedralFeatures_1 = function () {
                return (IJ = a._emscripten_bind_btConvexHullShape_setPolyhedralFeatures_1 = a.asm.gH).apply(null, arguments);
            }),
            JJ = (a._emscripten_bind_btConvexHullShape_getConvexPolyhedron_0 = function () {
                return (JJ = a._emscripten_bind_btConvexHullShape_getConvexPolyhedron_0 = a.asm.hH).apply(null, arguments);
            }),
            KJ = (a._emscripten_bind_btConvexHullShape___destroy___0 = function () {
                return (KJ = a._emscripten_bind_btConvexHullShape___destroy___0 = a.asm.iH).apply(null, arguments);
            }),
            LJ = (a._emscripten_bind_btShapeHull_btShapeHull_1 = function () {
                return (LJ = a._emscripten_bind_btShapeHull_btShapeHull_1 = a.asm.jH).apply(null, arguments);
            }),
            MJ = (a._emscripten_bind_btShapeHull_buildHull_1 = function () {
                return (MJ = a._emscripten_bind_btShapeHull_buildHull_1 = a.asm.kH).apply(null, arguments);
            }),
            NJ = (a._emscripten_bind_btShapeHull_buildHull_2 = function () {
                return (NJ = a._emscripten_bind_btShapeHull_buildHull_2 = a.asm.lH).apply(null, arguments);
            }),
            OJ = (a._emscripten_bind_btShapeHull_numTriangles_0 = function () {
                return (OJ = a._emscripten_bind_btShapeHull_numTriangles_0 = a.asm.mH).apply(null, arguments);
            }),
            PJ = (a._emscripten_bind_btShapeHull_numVertices_0 = function () {
                return (PJ = a._emscripten_bind_btShapeHull_numVertices_0 = a.asm.nH).apply(null, arguments);
            }),
            QJ = (a._emscripten_bind_btShapeHull_numIndices_0 = function () {
                return (QJ = a._emscripten_bind_btShapeHull_numIndices_0 = a.asm.oH).apply(null, arguments);
            }),
            RJ = (a._emscripten_bind_btShapeHull_getVertexPointer_0 = function () {
                return (RJ = a._emscripten_bind_btShapeHull_getVertexPointer_0 = a.asm.pH).apply(null, arguments);
            }),
            SJ = (a._emscripten_bind_btShapeHull___destroy___0 = function () {
                return (SJ = a._emscripten_bind_btShapeHull___destroy___0 = a.asm.qH).apply(null, arguments);
            }),
            TJ = (a._emscripten_bind_btCompoundShapeChild_get_m_transform_0 = function () {
                return (TJ = a._emscripten_bind_btCompoundShapeChild_get_m_transform_0 = a.asm.rH).apply(null, arguments);
            }),
            UJ = (a._emscripten_bind_btCompoundShapeChild_set_m_transform_1 = function () {
                return (UJ = a._emscripten_bind_btCompoundShapeChild_set_m_transform_1 = a.asm.sH).apply(null, arguments);
            }),
            VJ = (a._emscripten_bind_btCompoundShapeChild_get_m_childShape_0 = function () {
                return (VJ = a._emscripten_bind_btCompoundShapeChild_get_m_childShape_0 = a.asm.tH).apply(null, arguments);
            }),
            WJ = (a._emscripten_bind_btCompoundShapeChild_set_m_childShape_1 = function () {
                return (WJ = a._emscripten_bind_btCompoundShapeChild_set_m_childShape_1 = a.asm.uH).apply(null, arguments);
            }),
            XJ = (a._emscripten_bind_btCompoundShapeChild_get_m_childShapeType_0 = function () {
                return (XJ = a._emscripten_bind_btCompoundShapeChild_get_m_childShapeType_0 = a.asm.vH).apply(null, arguments);
            }),
            YJ = (a._emscripten_bind_btCompoundShapeChild_set_m_childShapeType_1 = function () {
                return (YJ = a._emscripten_bind_btCompoundShapeChild_set_m_childShapeType_1 = a.asm.wH).apply(null, arguments);
            }),
            ZJ = (a._emscripten_bind_btCompoundShapeChild_get_m_childMargin_0 = function () {
                return (ZJ = a._emscripten_bind_btCompoundShapeChild_get_m_childMargin_0 = a.asm.xH).apply(null, arguments);
            }),
            $J = (a._emscripten_bind_btCompoundShapeChild_set_m_childMargin_1 = function () {
                return ($J = a._emscripten_bind_btCompoundShapeChild_set_m_childMargin_1 = a.asm.yH).apply(null, arguments);
            }),
            aK = (a._emscripten_bind_btCompoundShapeChild_get_m_node_0 = function () {
                return (aK = a._emscripten_bind_btCompoundShapeChild_get_m_node_0 = a.asm.zH).apply(null, arguments);
            }),
            bK = (a._emscripten_bind_btCompoundShapeChild_set_m_node_1 = function () {
                return (bK = a._emscripten_bind_btCompoundShapeChild_set_m_node_1 = a.asm.AH).apply(null, arguments);
            }),
            cK = (a._emscripten_bind_btCompoundShapeChild___destroy___0 = function () {
                return (cK = a._emscripten_bind_btCompoundShapeChild___destroy___0 = a.asm.BH).apply(null, arguments);
            }),
            dK = (a._emscripten_bind_btCompoundShape_btCompoundShape_0 = function () {
                return (dK = a._emscripten_bind_btCompoundShape_btCompoundShape_0 = a.asm.CH).apply(null, arguments);
            }),
            eK = (a._emscripten_bind_btCompoundShape_btCompoundShape_1 = function () {
                return (eK = a._emscripten_bind_btCompoundShape_btCompoundShape_1 = a.asm.DH).apply(null, arguments);
            }),
            fK = (a._emscripten_bind_btCompoundShape_btCompoundShape_2 = function () {
                return (fK = a._emscripten_bind_btCompoundShape_btCompoundShape_2 = a.asm.EH).apply(null, arguments);
            }),
            gK = (a._emscripten_bind_btCompoundShape_addChildShape_2 = function () {
                return (gK = a._emscripten_bind_btCompoundShape_addChildShape_2 = a.asm.FH).apply(null, arguments);
            }),
            hK = (a._emscripten_bind_btCompoundShape_removeChildShape_1 = function () {
                return (hK = a._emscripten_bind_btCompoundShape_removeChildShape_1 = a.asm.GH).apply(null, arguments);
            }),
            iK = (a._emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 = function () {
                return (iK = a._emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 = a.asm.HH).apply(null, arguments);
            }),
            jK = (a._emscripten_bind_btCompoundShape_getNumChildShapes_0 = function () {
                return (jK = a._emscripten_bind_btCompoundShape_getNumChildShapes_0 = a.asm.IH).apply(null, arguments);
            }),
            kK = (a._emscripten_bind_btCompoundShape_getChildShape_1 = function () {
                return (kK = a._emscripten_bind_btCompoundShape_getChildShape_1 = a.asm.JH).apply(null, arguments);
            }),
            lK = (a._emscripten_bind_btCompoundShape_getChildTransform_1 = function () {
                return (lK = a._emscripten_bind_btCompoundShape_getChildTransform_1 = a.asm.KH).apply(null, arguments);
            }),
            mK = (a._emscripten_bind_btCompoundShape_updateChildTransform_2 = function () {
                return (mK = a._emscripten_bind_btCompoundShape_updateChildTransform_2 = a.asm.LH).apply(null, arguments);
            }),
            nK = (a._emscripten_bind_btCompoundShape_updateChildTransform_3 = function () {
                return (nK = a._emscripten_bind_btCompoundShape_updateChildTransform_3 = a.asm.MH).apply(null, arguments);
            }),
            oK = (a._emscripten_bind_btCompoundShape_getChildList_0 = function () {
                return (oK = a._emscripten_bind_btCompoundShape_getChildList_0 = a.asm.NH).apply(null, arguments);
            }),
            pK = (a._emscripten_bind_btCompoundShape_getAabb_3 = function () {
                return (pK = a._emscripten_bind_btCompoundShape_getAabb_3 = a.asm.OH).apply(null, arguments);
            }),
            qK = (a._emscripten_bind_btCompoundShape_recalculateLocalAabb_0 = function () {
                return (qK = a._emscripten_bind_btCompoundShape_recalculateLocalAabb_0 = a.asm.PH).apply(null, arguments);
            }),
            rK = (a._emscripten_bind_btCompoundShape_setLocalScaling_1 = function () {
                return (rK = a._emscripten_bind_btCompoundShape_setLocalScaling_1 = a.asm.QH).apply(null, arguments);
            }),
            sK = (a._emscripten_bind_btCompoundShape_getLocalScaling_0 = function () {
                return (sK = a._emscripten_bind_btCompoundShape_getLocalScaling_0 = a.asm.RH).apply(null, arguments);
            }),
            tK = (a._emscripten_bind_btCompoundShape_calculateLocalInertia_2 = function () {
                return (tK = a._emscripten_bind_btCompoundShape_calculateLocalInertia_2 = a.asm.SH).apply(null, arguments);
            }),
            uK = (a._emscripten_bind_btCompoundShape_setMargin_1 = function () {
                return (uK = a._emscripten_bind_btCompoundShape_setMargin_1 = a.asm.TH).apply(null, arguments);
            }),
            vK = (a._emscripten_bind_btCompoundShape_getMargin_0 = function () {
                return (vK = a._emscripten_bind_btCompoundShape_getMargin_0 = a.asm.UH).apply(null, arguments);
            }),
            wK = (a._emscripten_bind_btCompoundShape_getName_0 = function () {
                return (wK = a._emscripten_bind_btCompoundShape_getName_0 = a.asm.VH).apply(null, arguments);
            }),
            xK = (a._emscripten_bind_btCompoundShape_getDynamicAabbTree_0 = function () {
                return (xK = a._emscripten_bind_btCompoundShape_getDynamicAabbTree_0 = a.asm.WH).apply(null, arguments);
            }),
            yK = (a._emscripten_bind_btCompoundShape_createAabbTreeFromChildren_0 = function () {
                return (yK = a._emscripten_bind_btCompoundShape_createAabbTreeFromChildren_0 = a.asm.XH).apply(null, arguments);
            }),
            zK = (a._emscripten_bind_btCompoundShape_calculatePrincipalAxisTransform_3 = function () {
                return (zK = a._emscripten_bind_btCompoundShape_calculatePrincipalAxisTransform_3 = a.asm.YH).apply(null, arguments);
            }),
            AK = (a._emscripten_bind_btCompoundShape_getUpdateRevision_0 = function () {
                return (AK = a._emscripten_bind_btCompoundShape_getUpdateRevision_0 = a.asm.ZH).apply(null, arguments);
            }),
            BK = (a._emscripten_bind_btCompoundShape_getAngularMotionDisc_0 = function () {
                return (BK = a._emscripten_bind_btCompoundShape_getAngularMotionDisc_0 = a.asm._H).apply(null, arguments);
            }),
            CK = (a._emscripten_bind_btCompoundShape_getContactBreakingThreshold_1 = function () {
                return (CK = a._emscripten_bind_btCompoundShape_getContactBreakingThreshold_1 = a.asm.$H).apply(null, arguments);
            }),
            DK = (a._emscripten_bind_btCompoundShape_calculateTemporalAabb_6 = function () {
                return (DK = a._emscripten_bind_btCompoundShape_calculateTemporalAabb_6 = a.asm.aI).apply(null, arguments);
            }),
            EK = (a._emscripten_bind_btCompoundShape_isPolyhedral_0 = function () {
                return (EK = a._emscripten_bind_btCompoundShape_isPolyhedral_0 = a.asm.bI).apply(null, arguments);
            }),
            FK = (a._emscripten_bind_btCompoundShape_isConvex2d_0 = function () {
                return (FK = a._emscripten_bind_btCompoundShape_isConvex2d_0 = a.asm.cI).apply(null, arguments);
            }),
            GK = (a._emscripten_bind_btCompoundShape_isConvex_0 = function () {
                return (GK = a._emscripten_bind_btCompoundShape_isConvex_0 = a.asm.dI).apply(null, arguments);
            }),
            HK = (a._emscripten_bind_btCompoundShape_isNonMoving_0 = function () {
                return (HK = a._emscripten_bind_btCompoundShape_isNonMoving_0 = a.asm.eI).apply(null, arguments);
            }),
            IK = (a._emscripten_bind_btCompoundShape_isConcave_0 = function () {
                return (IK = a._emscripten_bind_btCompoundShape_isConcave_0 = a.asm.fI).apply(null, arguments);
            }),
            JK = (a._emscripten_bind_btCompoundShape_isCompound_0 = function () {
                return (JK = a._emscripten_bind_btCompoundShape_isCompound_0 = a.asm.gI).apply(null, arguments);
            }),
            KK = (a._emscripten_bind_btCompoundShape_isSoftBody_0 = function () {
                return (KK = a._emscripten_bind_btCompoundShape_isSoftBody_0 = a.asm.hI).apply(null, arguments);
            }),
            LK = (a._emscripten_bind_btCompoundShape_isInfinite_0 = function () {
                return (LK = a._emscripten_bind_btCompoundShape_isInfinite_0 = a.asm.iI).apply(null, arguments);
            }),
            MK = (a._emscripten_bind_btCompoundShape_getShapeType_0 = function () {
                return (MK = a._emscripten_bind_btCompoundShape_getShapeType_0 = a.asm.jI).apply(null, arguments);
            }),
            NK = (a._emscripten_bind_btCompoundShape_setUserPointer_1 = function () {
                return (NK = a._emscripten_bind_btCompoundShape_setUserPointer_1 = a.asm.kI).apply(null, arguments);
            }),
            OK = (a._emscripten_bind_btCompoundShape_getUserPointer_0 = function () {
                return (OK = a._emscripten_bind_btCompoundShape_getUserPointer_0 = a.asm.lI).apply(null, arguments);
            }),
            PK = (a._emscripten_bind_btCompoundShape_setUserIndex_1 = function () {
                return (PK = a._emscripten_bind_btCompoundShape_setUserIndex_1 = a.asm.mI).apply(null, arguments);
            }),
            QK = (a._emscripten_bind_btCompoundShape_getUserIndex_0 = function () {
                return (QK = a._emscripten_bind_btCompoundShape_getUserIndex_0 = a.asm.nI).apply(null, arguments);
            }),
            RK = (a._emscripten_bind_btCompoundShape_setUserIndex2_1 = function () {
                return (RK = a._emscripten_bind_btCompoundShape_setUserIndex2_1 = a.asm.oI).apply(null, arguments);
            }),
            SK = (a._emscripten_bind_btCompoundShape_getUserIndex2_0 = function () {
                return (SK = a._emscripten_bind_btCompoundShape_getUserIndex2_0 = a.asm.pI).apply(null, arguments);
            }),
            TK = (a._emscripten_bind_btCompoundShape___destroy___0 = function () {
                return (TK = a._emscripten_bind_btCompoundShape___destroy___0 = a.asm.qI).apply(null, arguments);
            }),
            UK = (a._emscripten_bind_btInternalTriangleIndexCallback_internalProcessTriangleIndex_3 = function () {
                return (UK = a._emscripten_bind_btInternalTriangleIndexCallback_internalProcessTriangleIndex_3 = a.asm.rI).apply(null, arguments);
            }),
            VK = (a._emscripten_bind_btInternalTriangleIndexCallback___destroy___0 = function () {
                return (VK = a._emscripten_bind_btInternalTriangleIndexCallback___destroy___0 = a.asm.sI).apply(null, arguments);
            }),
            WK = (a._emscripten_bind_btIndexedMesh_get_m_numTriangles_0 = function () {
                return (WK = a._emscripten_bind_btIndexedMesh_get_m_numTriangles_0 = a.asm.tI).apply(null, arguments);
            }),
            XK = (a._emscripten_bind_btIndexedMesh_set_m_numTriangles_1 = function () {
                return (XK = a._emscripten_bind_btIndexedMesh_set_m_numTriangles_1 = a.asm.uI).apply(null, arguments);
            }),
            YK = (a._emscripten_bind_btIndexedMesh_get_m_triangleIndexStride_0 = function () {
                return (YK = a._emscripten_bind_btIndexedMesh_get_m_triangleIndexStride_0 = a.asm.vI).apply(null, arguments);
            }),
            ZK = (a._emscripten_bind_btIndexedMesh_set_m_triangleIndexStride_1 = function () {
                return (ZK = a._emscripten_bind_btIndexedMesh_set_m_triangleIndexStride_1 = a.asm.wI).apply(null, arguments);
            }),
            $K = (a._emscripten_bind_btIndexedMesh_get_m_numVertices_0 = function () {
                return ($K = a._emscripten_bind_btIndexedMesh_get_m_numVertices_0 = a.asm.xI).apply(null, arguments);
            }),
            aL = (a._emscripten_bind_btIndexedMesh_set_m_numVertices_1 = function () {
                return (aL = a._emscripten_bind_btIndexedMesh_set_m_numVertices_1 = a.asm.yI).apply(null, arguments);
            }),
            bL = (a._emscripten_bind_btIndexedMesh_get_m_vertexStride_0 = function () {
                return (bL = a._emscripten_bind_btIndexedMesh_get_m_vertexStride_0 = a.asm.zI).apply(null, arguments);
            }),
            cL = (a._emscripten_bind_btIndexedMesh_set_m_vertexStride_1 = function () {
                return (cL = a._emscripten_bind_btIndexedMesh_set_m_vertexStride_1 = a.asm.AI).apply(null, arguments);
            }),
            dL = (a._emscripten_bind_btIndexedMesh_get_m_indexType_0 = function () {
                return (dL = a._emscripten_bind_btIndexedMesh_get_m_indexType_0 = a.asm.BI).apply(null, arguments);
            }),
            eL = (a._emscripten_bind_btIndexedMesh_set_m_indexType_1 = function () {
                return (eL = a._emscripten_bind_btIndexedMesh_set_m_indexType_1 = a.asm.CI).apply(null, arguments);
            }),
            fL = (a._emscripten_bind_btIndexedMesh_get_m_vertexType_0 = function () {
                return (fL = a._emscripten_bind_btIndexedMesh_get_m_vertexType_0 = a.asm.DI).apply(null, arguments);
            }),
            gL = (a._emscripten_bind_btIndexedMesh_set_m_vertexType_1 = function () {
                return (gL = a._emscripten_bind_btIndexedMesh_set_m_vertexType_1 = a.asm.EI).apply(null, arguments);
            }),
            hL = (a._emscripten_bind_btIndexedMesh___destroy___0 = function () {
                return (hL = a._emscripten_bind_btIndexedMesh___destroy___0 = a.asm.FI).apply(null, arguments);
            }),
            iL = (a._emscripten_bind_btIndexedMeshArray_size_0 = function () {
                return (iL = a._emscripten_bind_btIndexedMeshArray_size_0 = a.asm.GI).apply(null, arguments);
            }),
            jL = (a._emscripten_bind_btIndexedMeshArray_at_1 = function () {
                return (jL = a._emscripten_bind_btIndexedMeshArray_at_1 = a.asm.HI).apply(null, arguments);
            }),
            kL = (a._emscripten_bind_btIndexedMeshArray___destroy___0 = function () {
                return (kL = a._emscripten_bind_btIndexedMeshArray___destroy___0 = a.asm.II).apply(null, arguments);
            }),
            lL = (a._emscripten_bind_btTriangleMesh_btTriangleMesh_0 = function () {
                return (lL = a._emscripten_bind_btTriangleMesh_btTriangleMesh_0 = a.asm.JI).apply(null, arguments);
            }),
            mL = (a._emscripten_bind_btTriangleMesh_btTriangleMesh_1 = function () {
                return (mL = a._emscripten_bind_btTriangleMesh_btTriangleMesh_1 = a.asm.KI).apply(null, arguments);
            }),
            nL = (a._emscripten_bind_btTriangleMesh_btTriangleMesh_2 = function () {
                return (nL = a._emscripten_bind_btTriangleMesh_btTriangleMesh_2 = a.asm.LI).apply(null, arguments);
            }),
            oL = (a._emscripten_bind_btTriangleMesh_getUse32bitIndices_0 = function () {
                return (oL = a._emscripten_bind_btTriangleMesh_getUse32bitIndices_0 = a.asm.MI).apply(null, arguments);
            }),
            pL = (a._emscripten_bind_btTriangleMesh_getUse4componentVertices_0 = function () {
                return (pL = a._emscripten_bind_btTriangleMesh_getUse4componentVertices_0 = a.asm.NI).apply(null, arguments);
            }),
            qL = (a._emscripten_bind_btTriangleMesh_addTriangle_3 = function () {
                return (qL = a._emscripten_bind_btTriangleMesh_addTriangle_3 = a.asm.OI).apply(null, arguments);
            }),
            rL = (a._emscripten_bind_btTriangleMesh_addTriangle_4 = function () {
                return (rL = a._emscripten_bind_btTriangleMesh_addTriangle_4 = a.asm.PI).apply(null, arguments);
            }),
            sL = (a._emscripten_bind_btTriangleMesh_addTriangleIndices_3 = function () {
                return (sL = a._emscripten_bind_btTriangleMesh_addTriangleIndices_3 = a.asm.QI).apply(null, arguments);
            }),
            tL = (a._emscripten_bind_btTriangleMesh_preallocateVertices_1 = function () {
                return (tL = a._emscripten_bind_btTriangleMesh_preallocateVertices_1 = a.asm.RI).apply(null, arguments);
            }),
            uL = (a._emscripten_bind_btTriangleMesh_preallocateIndices_1 = function () {
                return (uL = a._emscripten_bind_btTriangleMesh_preallocateIndices_1 = a.asm.SI).apply(null, arguments);
            }),
            vL = (a._emscripten_bind_btTriangleMesh_findOrAddVertex_2 = function () {
                return (vL = a._emscripten_bind_btTriangleMesh_findOrAddVertex_2 = a.asm.TI).apply(null, arguments);
            }),
            wL = (a._emscripten_bind_btTriangleMesh_addIndex_1 = function () {
                return (wL = a._emscripten_bind_btTriangleMesh_addIndex_1 = a.asm.UI).apply(null, arguments);
            }),
            xL = (a._emscripten_bind_btTriangleMesh_InternalProcessAllTriangles_3 = function () {
                return (xL = a._emscripten_bind_btTriangleMesh_InternalProcessAllTriangles_3 = a.asm.VI).apply(null, arguments);
            }),
            yL = (a._emscripten_bind_btTriangleMesh_setScaling_1 = function () {
                return (yL = a._emscripten_bind_btTriangleMesh_setScaling_1 = a.asm.WI).apply(null, arguments);
            }),
            zL = (a._emscripten_bind_btTriangleMesh_addIndexedMesh_1 = function () {
                return (zL = a._emscripten_bind_btTriangleMesh_addIndexedMesh_1 = a.asm.XI).apply(null, arguments);
            }),
            AL = (a._emscripten_bind_btTriangleMesh_addIndexedMesh_2 = function () {
                return (AL = a._emscripten_bind_btTriangleMesh_addIndexedMesh_2 = a.asm.YI).apply(null, arguments);
            }),
            BL = (a._emscripten_bind_btTriangleMesh_unLockVertexBase_1 = function () {
                return (BL = a._emscripten_bind_btTriangleMesh_unLockVertexBase_1 = a.asm.ZI).apply(null, arguments);
            }),
            CL = (a._emscripten_bind_btTriangleMesh_unLockReadOnlyVertexBase_1 = function () {
                return (CL = a._emscripten_bind_btTriangleMesh_unLockReadOnlyVertexBase_1 = a.asm._I).apply(null, arguments);
            }),
            DL = (a._emscripten_bind_btTriangleMesh_getNumSubParts_0 = function () {
                return (DL = a._emscripten_bind_btTriangleMesh_getNumSubParts_0 = a.asm.$I).apply(null, arguments);
            }),
            EL = (a._emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 = function () {
                return (EL = a._emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 = a.asm.aJ).apply(null, arguments);
            }),
            FL = (a._emscripten_bind_btTriangleMesh_hasPremadeAabb_0 = function () {
                return (FL = a._emscripten_bind_btTriangleMesh_hasPremadeAabb_0 = a.asm.bJ).apply(null, arguments);
            }),
            GL = (a._emscripten_bind_btTriangleMesh_setPremadeAabb_2 = function () {
                return (GL = a._emscripten_bind_btTriangleMesh_setPremadeAabb_2 = a.asm.cJ).apply(null, arguments);
            }),
            HL = (a._emscripten_bind_btTriangleMesh_getPremadeAabb_2 = function () {
                return (HL = a._emscripten_bind_btTriangleMesh_getPremadeAabb_2 = a.asm.dJ).apply(null, arguments);
            }),
            IL = (a._emscripten_bind_btTriangleMesh_get_m_weldingThreshold_0 = function () {
                return (IL = a._emscripten_bind_btTriangleMesh_get_m_weldingThreshold_0 = a.asm.eJ).apply(null, arguments);
            }),
            JL = (a._emscripten_bind_btTriangleMesh_set_m_weldingThreshold_1 = function () {
                return (JL = a._emscripten_bind_btTriangleMesh_set_m_weldingThreshold_1 = a.asm.fJ).apply(null, arguments);
            }),
            KL = (a._emscripten_bind_btTriangleMesh___destroy___0 = function () {
                return (KL = a._emscripten_bind_btTriangleMesh___destroy___0 = a.asm.gJ).apply(null, arguments);
            }),
            LL = (a._emscripten_bind_btEmptyShape_btEmptyShape_0 = function () {
                return (LL = a._emscripten_bind_btEmptyShape_btEmptyShape_0 = a.asm.hJ).apply(null, arguments);
            }),
            ML = (a._emscripten_bind_btEmptyShape_getAabb_3 = function () {
                return (ML = a._emscripten_bind_btEmptyShape_getAabb_3 = a.asm.iJ).apply(null, arguments);
            }),
            NL = (a._emscripten_bind_btEmptyShape_setLocalScaling_1 = function () {
                return (NL = a._emscripten_bind_btEmptyShape_setLocalScaling_1 = a.asm.jJ).apply(null, arguments);
            }),
            OL = (a._emscripten_bind_btEmptyShape_getLocalScaling_0 = function () {
                return (OL = a._emscripten_bind_btEmptyShape_getLocalScaling_0 = a.asm.kJ).apply(null, arguments);
            }),
            PL = (a._emscripten_bind_btEmptyShape_getAngularMotionDisc_0 = function () {
                return (PL = a._emscripten_bind_btEmptyShape_getAngularMotionDisc_0 = a.asm.lJ).apply(null, arguments);
            }),
            QL = (a._emscripten_bind_btEmptyShape_getContactBreakingThreshold_1 = function () {
                return (QL = a._emscripten_bind_btEmptyShape_getContactBreakingThreshold_1 = a.asm.mJ).apply(null, arguments);
            }),
            RL = (a._emscripten_bind_btEmptyShape_calculateTemporalAabb_6 = function () {
                return (RL = a._emscripten_bind_btEmptyShape_calculateTemporalAabb_6 = a.asm.nJ).apply(null, arguments);
            }),
            SL = (a._emscripten_bind_btEmptyShape_isPolyhedral_0 = function () {
                return (SL = a._emscripten_bind_btEmptyShape_isPolyhedral_0 = a.asm.oJ).apply(null, arguments);
            }),
            TL = (a._emscripten_bind_btEmptyShape_isConvex2d_0 = function () {
                return (TL = a._emscripten_bind_btEmptyShape_isConvex2d_0 = a.asm.pJ).apply(null, arguments);
            }),
            UL = (a._emscripten_bind_btEmptyShape_isConvex_0 = function () {
                return (UL = a._emscripten_bind_btEmptyShape_isConvex_0 = a.asm.qJ).apply(null, arguments);
            }),
            VL = (a._emscripten_bind_btEmptyShape_isNonMoving_0 = function () {
                return (VL = a._emscripten_bind_btEmptyShape_isNonMoving_0 = a.asm.rJ).apply(null, arguments);
            }),
            WL = (a._emscripten_bind_btEmptyShape_isConcave_0 = function () {
                return (WL = a._emscripten_bind_btEmptyShape_isConcave_0 = a.asm.sJ).apply(null, arguments);
            }),
            XL = (a._emscripten_bind_btEmptyShape_isCompound_0 = function () {
                return (XL = a._emscripten_bind_btEmptyShape_isCompound_0 = a.asm.tJ).apply(null, arguments);
            }),
            YL = (a._emscripten_bind_btEmptyShape_isSoftBody_0 = function () {
                return (YL = a._emscripten_bind_btEmptyShape_isSoftBody_0 = a.asm.uJ).apply(null, arguments);
            }),
            ZL = (a._emscripten_bind_btEmptyShape_isInfinite_0 = function () {
                return (ZL = a._emscripten_bind_btEmptyShape_isInfinite_0 = a.asm.vJ).apply(null, arguments);
            }),
            $L = (a._emscripten_bind_btEmptyShape_getShapeType_0 = function () {
                return ($L = a._emscripten_bind_btEmptyShape_getShapeType_0 = a.asm.wJ).apply(null, arguments);
            }),
            aM = (a._emscripten_bind_btEmptyShape_setUserPointer_1 = function () {
                return (aM = a._emscripten_bind_btEmptyShape_setUserPointer_1 = a.asm.xJ).apply(null, arguments);
            }),
            bM = (a._emscripten_bind_btEmptyShape_getUserPointer_0 = function () {
                return (bM = a._emscripten_bind_btEmptyShape_getUserPointer_0 = a.asm.yJ).apply(null, arguments);
            }),
            cM = (a._emscripten_bind_btEmptyShape_setUserIndex_1 = function () {
                return (cM = a._emscripten_bind_btEmptyShape_setUserIndex_1 = a.asm.zJ).apply(null, arguments);
            }),
            dM = (a._emscripten_bind_btEmptyShape_getUserIndex_0 = function () {
                return (dM = a._emscripten_bind_btEmptyShape_getUserIndex_0 = a.asm.AJ).apply(null, arguments);
            }),
            eM = (a._emscripten_bind_btEmptyShape_setUserIndex2_1 = function () {
                return (eM = a._emscripten_bind_btEmptyShape_setUserIndex2_1 = a.asm.BJ).apply(null, arguments);
            }),
            fM = (a._emscripten_bind_btEmptyShape_getUserIndex2_0 = function () {
                return (fM = a._emscripten_bind_btEmptyShape_getUserIndex2_0 = a.asm.CJ).apply(null, arguments);
            }),
            gM = (a._emscripten_bind_btEmptyShape_getMargin_0 = function () {
                return (gM = a._emscripten_bind_btEmptyShape_getMargin_0 = a.asm.DJ).apply(null, arguments);
            }),
            hM = (a._emscripten_bind_btEmptyShape_setMargin_1 = function () {
                return (hM = a._emscripten_bind_btEmptyShape_setMargin_1 = a.asm.EJ).apply(null, arguments);
            }),
            iM = (a._emscripten_bind_btEmptyShape___destroy___0 = function () {
                return (iM = a._emscripten_bind_btEmptyShape___destroy___0 = a.asm.FJ).apply(null, arguments);
            }),
            jM = (a._emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 = function () {
                return (jM = a._emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 = a.asm.GJ).apply(null, arguments);
            }),
            kM = (a._emscripten_bind_btStaticPlaneShape_getPlaneNormal_0 = function () {
                return (kM = a._emscripten_bind_btStaticPlaneShape_getPlaneNormal_0 = a.asm.HJ).apply(null, arguments);
            }),
            lM = (a._emscripten_bind_btStaticPlaneShape_getPlaneConstant_0 = function () {
                return (lM = a._emscripten_bind_btStaticPlaneShape_getPlaneConstant_0 = a.asm.IJ).apply(null, arguments);
            }),
            mM = (a._emscripten_bind_btStaticPlaneShape_getAngularMotionDisc_0 = function () {
                return (mM = a._emscripten_bind_btStaticPlaneShape_getAngularMotionDisc_0 = a.asm.JJ).apply(null, arguments);
            }),
            nM = (a._emscripten_bind_btStaticPlaneShape_getContactBreakingThreshold_1 = function () {
                return (nM = a._emscripten_bind_btStaticPlaneShape_getContactBreakingThreshold_1 = a.asm.KJ).apply(null, arguments);
            }),
            oM = (a._emscripten_bind_btStaticPlaneShape_calculateTemporalAabb_6 = function () {
                return (oM = a._emscripten_bind_btStaticPlaneShape_calculateTemporalAabb_6 = a.asm.LJ).apply(null, arguments);
            }),
            pM = (a._emscripten_bind_btStaticPlaneShape_isPolyhedral_0 = function () {
                return (pM = a._emscripten_bind_btStaticPlaneShape_isPolyhedral_0 = a.asm.MJ).apply(null, arguments);
            }),
            qM = (a._emscripten_bind_btStaticPlaneShape_isConvex2d_0 = function () {
                return (qM = a._emscripten_bind_btStaticPlaneShape_isConvex2d_0 = a.asm.NJ).apply(null, arguments);
            }),
            rM = (a._emscripten_bind_btStaticPlaneShape_isConvex_0 = function () {
                return (rM = a._emscripten_bind_btStaticPlaneShape_isConvex_0 = a.asm.OJ).apply(null, arguments);
            }),
            sM = (a._emscripten_bind_btStaticPlaneShape_isNonMoving_0 = function () {
                return (sM = a._emscripten_bind_btStaticPlaneShape_isNonMoving_0 = a.asm.PJ).apply(null, arguments);
            }),
            tM = (a._emscripten_bind_btStaticPlaneShape_isConcave_0 = function () {
                return (tM = a._emscripten_bind_btStaticPlaneShape_isConcave_0 = a.asm.QJ).apply(null, arguments);
            }),
            uM = (a._emscripten_bind_btStaticPlaneShape_isCompound_0 = function () {
                return (uM = a._emscripten_bind_btStaticPlaneShape_isCompound_0 = a.asm.RJ).apply(null, arguments);
            }),
            vM = (a._emscripten_bind_btStaticPlaneShape_isSoftBody_0 = function () {
                return (vM = a._emscripten_bind_btStaticPlaneShape_isSoftBody_0 = a.asm.SJ).apply(null, arguments);
            }),
            wM = (a._emscripten_bind_btStaticPlaneShape_isInfinite_0 = function () {
                return (wM = a._emscripten_bind_btStaticPlaneShape_isInfinite_0 = a.asm.TJ).apply(null, arguments);
            }),
            xM = (a._emscripten_bind_btStaticPlaneShape_getShapeType_0 = function () {
                return (xM = a._emscripten_bind_btStaticPlaneShape_getShapeType_0 = a.asm.UJ).apply(null, arguments);
            }),
            yM = (a._emscripten_bind_btStaticPlaneShape_setUserPointer_1 = function () {
                return (yM = a._emscripten_bind_btStaticPlaneShape_setUserPointer_1 = a.asm.VJ).apply(null, arguments);
            }),
            zM = (a._emscripten_bind_btStaticPlaneShape_getUserPointer_0 = function () {
                return (zM = a._emscripten_bind_btStaticPlaneShape_getUserPointer_0 = a.asm.WJ).apply(null, arguments);
            }),
            AM = (a._emscripten_bind_btStaticPlaneShape_setUserIndex_1 = function () {
                return (AM = a._emscripten_bind_btStaticPlaneShape_setUserIndex_1 = a.asm.XJ).apply(null, arguments);
            }),
            BM = (a._emscripten_bind_btStaticPlaneShape_getUserIndex_0 = function () {
                return (BM = a._emscripten_bind_btStaticPlaneShape_getUserIndex_0 = a.asm.YJ).apply(null, arguments);
            }),
            CM = (a._emscripten_bind_btStaticPlaneShape_setUserIndex2_1 = function () {
                return (CM = a._emscripten_bind_btStaticPlaneShape_setUserIndex2_1 = a.asm.ZJ).apply(null, arguments);
            }),
            DM = (a._emscripten_bind_btStaticPlaneShape_getUserIndex2_0 = function () {
                return (DM = a._emscripten_bind_btStaticPlaneShape_getUserIndex2_0 = a.asm._J).apply(null, arguments);
            }),
            EM = (a._emscripten_bind_btStaticPlaneShape_getMargin_0 = function () {
                return (EM = a._emscripten_bind_btStaticPlaneShape_getMargin_0 = a.asm.$J).apply(null, arguments);
            }),
            FM = (a._emscripten_bind_btStaticPlaneShape_setMargin_1 = function () {
                return (FM = a._emscripten_bind_btStaticPlaneShape_setMargin_1 = a.asm.aK).apply(null, arguments);
            }),
            GM = (a._emscripten_bind_btStaticPlaneShape___destroy___0 = function () {
                return (GM = a._emscripten_bind_btStaticPlaneShape___destroy___0 = a.asm.bK).apply(null, arguments);
            }),
            HM = (a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 = function () {
                return (HM = a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 = a.asm.cK).apply(null, arguments);
            }),
            IM = (a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 = function () {
                return (IM = a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 = a.asm.dK).apply(null, arguments);
            }),
            JM = (a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_4 = function () {
                return (JM = a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_4 = a.asm.eK).apply(null, arguments);
            }),
            KM = (a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_5 = function () {
                return (KM = a._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_5 = a.asm.fK).apply(null, arguments);
            }),
            LM = (a._emscripten_bind_btBvhTriangleMeshShape_getAngularMotionDisc_0 = function () {
                return (LM = a._emscripten_bind_btBvhTriangleMeshShape_getAngularMotionDisc_0 = a.asm.gK).apply(null, arguments);
            }),
            MM = (a._emscripten_bind_btBvhTriangleMeshShape_getContactBreakingThreshold_1 = function () {
                return (MM = a._emscripten_bind_btBvhTriangleMeshShape_getContactBreakingThreshold_1 = a.asm.hK).apply(null, arguments);
            }),
            NM = (a._emscripten_bind_btBvhTriangleMeshShape_calculateTemporalAabb_6 = function () {
                return (NM = a._emscripten_bind_btBvhTriangleMeshShape_calculateTemporalAabb_6 = a.asm.iK).apply(null, arguments);
            }),
            OM = (a._emscripten_bind_btBvhTriangleMeshShape_isPolyhedral_0 = function () {
                return (OM = a._emscripten_bind_btBvhTriangleMeshShape_isPolyhedral_0 = a.asm.jK).apply(null, arguments);
            }),
            PM = (a._emscripten_bind_btBvhTriangleMeshShape_isConvex2d_0 = function () {
                return (PM = a._emscripten_bind_btBvhTriangleMeshShape_isConvex2d_0 = a.asm.kK).apply(null, arguments);
            }),
            QM = (a._emscripten_bind_btBvhTriangleMeshShape_isConvex_0 = function () {
                return (QM = a._emscripten_bind_btBvhTriangleMeshShape_isConvex_0 = a.asm.lK).apply(null, arguments);
            }),
            RM = (a._emscripten_bind_btBvhTriangleMeshShape_isNonMoving_0 = function () {
                return (RM = a._emscripten_bind_btBvhTriangleMeshShape_isNonMoving_0 = a.asm.mK).apply(null, arguments);
            }),
            SM = (a._emscripten_bind_btBvhTriangleMeshShape_isConcave_0 = function () {
                return (SM = a._emscripten_bind_btBvhTriangleMeshShape_isConcave_0 = a.asm.nK).apply(null, arguments);
            }),
            TM = (a._emscripten_bind_btBvhTriangleMeshShape_isCompound_0 = function () {
                return (TM = a._emscripten_bind_btBvhTriangleMeshShape_isCompound_0 = a.asm.oK).apply(null, arguments);
            }),
            UM = (a._emscripten_bind_btBvhTriangleMeshShape_isSoftBody_0 = function () {
                return (UM = a._emscripten_bind_btBvhTriangleMeshShape_isSoftBody_0 = a.asm.pK).apply(null, arguments);
            }),
            VM = (a._emscripten_bind_btBvhTriangleMeshShape_isInfinite_0 = function () {
                return (VM = a._emscripten_bind_btBvhTriangleMeshShape_isInfinite_0 = a.asm.qK).apply(null, arguments);
            }),
            WM = (a._emscripten_bind_btBvhTriangleMeshShape_getShapeType_0 = function () {
                return (WM = a._emscripten_bind_btBvhTriangleMeshShape_getShapeType_0 = a.asm.rK).apply(null, arguments);
            }),
            XM = (a._emscripten_bind_btBvhTriangleMeshShape_setUserPointer_1 = function () {
                return (XM = a._emscripten_bind_btBvhTriangleMeshShape_setUserPointer_1 = a.asm.sK).apply(null, arguments);
            }),
            YM = (a._emscripten_bind_btBvhTriangleMeshShape_getUserPointer_0 = function () {
                return (YM = a._emscripten_bind_btBvhTriangleMeshShape_getUserPointer_0 = a.asm.tK).apply(null, arguments);
            }),
            ZM = (a._emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1 = function () {
                return (ZM = a._emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1 = a.asm.uK).apply(null, arguments);
            }),
            $M = (a._emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0 = function () {
                return ($M = a._emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0 = a.asm.vK).apply(null, arguments);
            }),
            aN = (a._emscripten_bind_btBvhTriangleMeshShape_setUserIndex2_1 = function () {
                return (aN = a._emscripten_bind_btBvhTriangleMeshShape_setUserIndex2_1 = a.asm.wK).apply(null, arguments);
            }),
            bN = (a._emscripten_bind_btBvhTriangleMeshShape_getUserIndex2_0 = function () {
                return (bN = a._emscripten_bind_btBvhTriangleMeshShape_getUserIndex2_0 = a.asm.xK).apply(null, arguments);
            }),
            cN = (a._emscripten_bind_btBvhTriangleMeshShape_getMargin_0 = function () {
                return (cN = a._emscripten_bind_btBvhTriangleMeshShape_getMargin_0 = a.asm.yK).apply(null, arguments);
            }),
            dN = (a._emscripten_bind_btBvhTriangleMeshShape_setMargin_1 = function () {
                return (dN = a._emscripten_bind_btBvhTriangleMeshShape_setMargin_1 = a.asm.zK).apply(null, arguments);
            }),
            eN = (a._emscripten_bind_btBvhTriangleMeshShape___destroy___0 = function () {
                return (eN = a._emscripten_bind_btBvhTriangleMeshShape___destroy___0 = a.asm.AK).apply(null, arguments);
            }),
            fN = (a._emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 = function () {
                return (fN = a._emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 = a.asm.BK).apply(null, arguments);
            }),
            gN = (a._emscripten_bind_btHeightfieldTerrainShape_getAngularMotionDisc_0 = function () {
                return (gN = a._emscripten_bind_btHeightfieldTerrainShape_getAngularMotionDisc_0 = a.asm.CK).apply(null, arguments);
            }),
            hN = (a._emscripten_bind_btHeightfieldTerrainShape_getContactBreakingThreshold_1 = function () {
                return (hN = a._emscripten_bind_btHeightfieldTerrainShape_getContactBreakingThreshold_1 = a.asm.DK).apply(null, arguments);
            }),
            iN = (a._emscripten_bind_btHeightfieldTerrainShape_calculateTemporalAabb_6 = function () {
                return (iN = a._emscripten_bind_btHeightfieldTerrainShape_calculateTemporalAabb_6 = a.asm.EK).apply(null, arguments);
            }),
            jN = (a._emscripten_bind_btHeightfieldTerrainShape_isPolyhedral_0 = function () {
                return (jN = a._emscripten_bind_btHeightfieldTerrainShape_isPolyhedral_0 = a.asm.FK).apply(null, arguments);
            }),
            kN = (a._emscripten_bind_btHeightfieldTerrainShape_isConvex2d_0 = function () {
                return (kN = a._emscripten_bind_btHeightfieldTerrainShape_isConvex2d_0 = a.asm.GK).apply(null, arguments);
            }),
            lN = (a._emscripten_bind_btHeightfieldTerrainShape_isConvex_0 = function () {
                return (lN = a._emscripten_bind_btHeightfieldTerrainShape_isConvex_0 = a.asm.HK).apply(null, arguments);
            }),
            mN = (a._emscripten_bind_btHeightfieldTerrainShape_isNonMoving_0 = function () {
                return (mN = a._emscripten_bind_btHeightfieldTerrainShape_isNonMoving_0 = a.asm.IK).apply(null, arguments);
            }),
            nN = (a._emscripten_bind_btHeightfieldTerrainShape_isConcave_0 = function () {
                return (nN = a._emscripten_bind_btHeightfieldTerrainShape_isConcave_0 = a.asm.JK).apply(null, arguments);
            }),
            oN = (a._emscripten_bind_btHeightfieldTerrainShape_isCompound_0 = function () {
                return (oN = a._emscripten_bind_btHeightfieldTerrainShape_isCompound_0 = a.asm.KK).apply(null, arguments);
            }),
            pN = (a._emscripten_bind_btHeightfieldTerrainShape_isSoftBody_0 = function () {
                return (pN = a._emscripten_bind_btHeightfieldTerrainShape_isSoftBody_0 = a.asm.LK).apply(null, arguments);
            }),
            qN = (a._emscripten_bind_btHeightfieldTerrainShape_isInfinite_0 = function () {
                return (qN = a._emscripten_bind_btHeightfieldTerrainShape_isInfinite_0 = a.asm.MK).apply(null, arguments);
            }),
            rN = (a._emscripten_bind_btHeightfieldTerrainShape_getShapeType_0 = function () {
                return (rN = a._emscripten_bind_btHeightfieldTerrainShape_getShapeType_0 = a.asm.NK).apply(null, arguments);
            }),
            sN = (a._emscripten_bind_btHeightfieldTerrainShape_setUserPointer_1 = function () {
                return (sN = a._emscripten_bind_btHeightfieldTerrainShape_setUserPointer_1 = a.asm.OK).apply(null, arguments);
            }),
            tN = (a._emscripten_bind_btHeightfieldTerrainShape_getUserPointer_0 = function () {
                return (tN = a._emscripten_bind_btHeightfieldTerrainShape_getUserPointer_0 = a.asm.PK).apply(null, arguments);
            }),
            uN = (a._emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1 = function () {
                return (uN = a._emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1 = a.asm.QK).apply(null, arguments);
            }),
            vN = (a._emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0 = function () {
                return (vN = a._emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0 = a.asm.RK).apply(null, arguments);
            }),
            wN = (a._emscripten_bind_btHeightfieldTerrainShape_setUserIndex2_1 = function () {
                return (wN = a._emscripten_bind_btHeightfieldTerrainShape_setUserIndex2_1 = a.asm.SK).apply(null, arguments);
            }),
            xN = (a._emscripten_bind_btHeightfieldTerrainShape_getUserIndex2_0 = function () {
                return (xN = a._emscripten_bind_btHeightfieldTerrainShape_getUserIndex2_0 = a.asm.TK).apply(null, arguments);
            }),
            yN = (a._emscripten_bind_btHeightfieldTerrainShape_getMargin_0 = function () {
                return (yN = a._emscripten_bind_btHeightfieldTerrainShape_getMargin_0 = a.asm.UK).apply(null, arguments);
            }),
            zN = (a._emscripten_bind_btHeightfieldTerrainShape_setMargin_1 = function () {
                return (zN = a._emscripten_bind_btHeightfieldTerrainShape_setMargin_1 = a.asm.VK).apply(null, arguments);
            }),
            AN = (a._emscripten_bind_btHeightfieldTerrainShape___destroy___0 = function () {
                return (AN = a._emscripten_bind_btHeightfieldTerrainShape___destroy___0 = a.asm.WK).apply(null, arguments);
            }),
            BN = (a._emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 = function () {
                return (BN = a._emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 = a.asm.XK).apply(null, arguments);
            }),
            CN = (a._emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 = function () {
                return (CN = a._emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 = a.asm.YK).apply(null, arguments);
            }),
            DN = (a._emscripten_bind_btPersistentManifold_btPersistentManifold_0 = function () {
                return (DN = a._emscripten_bind_btPersistentManifold_btPersistentManifold_0 = a.asm.ZK).apply(null, arguments);
            }),
            EN = (a._emscripten_bind_btPersistentManifold_getBody0_0 = function () {
                return (EN = a._emscripten_bind_btPersistentManifold_getBody0_0 = a.asm._K).apply(null, arguments);
            }),
            FN = (a._emscripten_bind_btPersistentManifold_getBody1_0 = function () {
                return (FN = a._emscripten_bind_btPersistentManifold_getBody1_0 = a.asm.$K).apply(null, arguments);
            }),
            GN = (a._emscripten_bind_btPersistentManifold_getNumContacts_0 = function () {
                return (GN = a._emscripten_bind_btPersistentManifold_getNumContacts_0 = a.asm.aL).apply(null, arguments);
            }),
            HN = (a._emscripten_bind_btPersistentManifold_getContactPoint_1 = function () {
                return (HN = a._emscripten_bind_btPersistentManifold_getContactPoint_1 = a.asm.bL).apply(null, arguments);
            }),
            IN = (a._emscripten_bind_btPersistentManifold___destroy___0 = function () {
                return (IN = a._emscripten_bind_btPersistentManifold___destroy___0 = a.asm.cL).apply(null, arguments);
            }),
            JN = (a._emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 = function () {
                return (JN = a._emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 = a.asm.dL).apply(null, arguments);
            }),
            KN = (a._emscripten_bind_btCollisionDispatcher_getNumManifolds_0 = function () {
                return (KN = a._emscripten_bind_btCollisionDispatcher_getNumManifolds_0 = a.asm.eL).apply(null, arguments);
            }),
            LN = (a._emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 = function () {
                return (LN = a._emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 = a.asm.fL).apply(null, arguments);
            }),
            MN = (a._emscripten_bind_btCollisionDispatcher___destroy___0 = function () {
                return (MN = a._emscripten_bind_btCollisionDispatcher___destroy___0 = a.asm.gL).apply(null, arguments);
            }),
            NN = (a._emscripten_bind_btOverlappingPairCallback___destroy___0 = function () {
                return (NN = a._emscripten_bind_btOverlappingPairCallback___destroy___0 = a.asm.hL).apply(null, arguments);
            }),
            ON = (a._emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 = function () {
                return (ON = a._emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 = a.asm.iL).apply(null, arguments);
            }),
            PN = (a._emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 = function () {
                return (PN = a._emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 = a.asm.jL).apply(null, arguments);
            }),
            QN = (a._emscripten_bind_btOverlappingPairCache___destroy___0 = function () {
                return (QN = a._emscripten_bind_btOverlappingPairCache___destroy___0 = a.asm.kL).apply(null, arguments);
            }),
            RN = (a._emscripten_bind_btAxisSweep3_btAxisSweep3_2 = function () {
                return (RN = a._emscripten_bind_btAxisSweep3_btAxisSweep3_2 = a.asm.lL).apply(null, arguments);
            }),
            SN = (a._emscripten_bind_btAxisSweep3_btAxisSweep3_3 = function () {
                return (SN = a._emscripten_bind_btAxisSweep3_btAxisSweep3_3 = a.asm.mL).apply(null, arguments);
            }),
            TN = (a._emscripten_bind_btAxisSweep3_btAxisSweep3_4 = function () {
                return (TN = a._emscripten_bind_btAxisSweep3_btAxisSweep3_4 = a.asm.nL).apply(null, arguments);
            }),
            UN = (a._emscripten_bind_btAxisSweep3_btAxisSweep3_5 = function () {
                return (UN = a._emscripten_bind_btAxisSweep3_btAxisSweep3_5 = a.asm.oL).apply(null, arguments);
            }),
            VN = (a._emscripten_bind_btAxisSweep3___destroy___0 = function () {
                return (VN = a._emscripten_bind_btAxisSweep3___destroy___0 = a.asm.pL).apply(null, arguments);
            }),
            WN = (a._emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 = function () {
                return (WN = a._emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 = a.asm.qL).apply(null, arguments);
            }),
            XN = (a._emscripten_bind_btBroadphaseInterface___destroy___0 = function () {
                return (XN = a._emscripten_bind_btBroadphaseInterface___destroy___0 = a.asm.rL).apply(null, arguments);
            }),
            YN = (a._emscripten_bind_btCollisionConfiguration___destroy___0 = function () {
                return (YN = a._emscripten_bind_btCollisionConfiguration___destroy___0 = a.asm.sL).apply(null, arguments);
            }),
            ZN = (a._emscripten_bind_btDbvt___destroy___0 = function () {
                return (ZN = a._emscripten_bind_btDbvt___destroy___0 = a.asm.tL).apply(null, arguments);
            }),
            $N = (a._emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 = function () {
                return ($N = a._emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 = a.asm.uL).apply(null, arguments);
            }),
            aO = (a._emscripten_bind_btDbvtBroadphase___destroy___0 = function () {
                return (aO = a._emscripten_bind_btDbvtBroadphase___destroy___0 = a.asm.vL).apply(null, arguments);
            }),
            bO = (a._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 = function () {
                return (bO = a._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 = a.asm.wL).apply(null, arguments);
            }),
            cO = (a._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 = function () {
                return (cO = a._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 = a.asm.xL).apply(null, arguments);
            }),
            dO = (a._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 = function () {
                return (dO = a._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 = a.asm.yL).apply(null, arguments);
            }),
            eO = (a._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 = function () {
                return (eO = a._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 = a.asm.zL).apply(null, arguments);
            }),
            fO = (a._emscripten_bind_btBroadphaseProxy___destroy___0 = function () {
                return (fO = a._emscripten_bind_btBroadphaseProxy___destroy___0 = a.asm.AL).apply(null, arguments);
            }),
            gO = (a._emscripten_bind_btDbvtVolume___destroy___0 = function () {
                return (gO = a._emscripten_bind_btDbvtVolume___destroy___0 = a.asm.BL).apply(null, arguments);
            }),
            hO = (a._emscripten_bind_btDbvtNode_isleaf_0 = function () {
                return (hO = a._emscripten_bind_btDbvtNode_isleaf_0 = a.asm.CL).apply(null, arguments);
            }),
            iO = (a._emscripten_bind_btDbvtNode_isinternal_0 = function () {
                return (iO = a._emscripten_bind_btDbvtNode_isinternal_0 = a.asm.DL).apply(null, arguments);
            }),
            jO = (a._emscripten_bind_btDbvtNode_get_volume_0 = function () {
                return (jO = a._emscripten_bind_btDbvtNode_get_volume_0 = a.asm.EL).apply(null, arguments);
            }),
            kO = (a._emscripten_bind_btDbvtNode_set_volume_1 = function () {
                return (kO = a._emscripten_bind_btDbvtNode_set_volume_1 = a.asm.FL).apply(null, arguments);
            }),
            lO = (a._emscripten_bind_btDbvtNode_get_parent_0 = function () {
                return (lO = a._emscripten_bind_btDbvtNode_get_parent_0 = a.asm.GL).apply(null, arguments);
            }),
            mO = (a._emscripten_bind_btDbvtNode_set_parent_1 = function () {
                return (mO = a._emscripten_bind_btDbvtNode_set_parent_1 = a.asm.HL).apply(null, arguments);
            }),
            nO = (a._emscripten_bind_btDbvtNode___destroy___0 = function () {
                return (nO = a._emscripten_bind_btDbvtNode___destroy___0 = a.asm.IL).apply(null, arguments);
            }),
            oO = (a._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 = function () {
                return (oO = a._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 = a.asm.JL).apply(null, arguments);
            }),
            pO = (a._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 = function () {
                return (pO = a._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 = a.asm.KL).apply(null, arguments);
            }),
            qO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 = function () {
                return (qO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 = a.asm.LL).apply(null, arguments);
            }),
            rO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 = function () {
                return (rO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 = a.asm.ML).apply(null, arguments);
            }),
            sO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 = function () {
                return (sO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 = a.asm.NL).apply(null, arguments);
            }),
            tO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 = function () {
                return (tO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 = a.asm.OL).apply(null, arguments);
            }),
            uO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 = function () {
                return (uO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 = a.asm.PL).apply(null, arguments);
            }),
            vO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 = function () {
                return (vO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 = a.asm.QL).apply(null, arguments);
            }),
            wO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 = function () {
                return (wO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 = a.asm.RL).apply(null, arguments);
            }),
            xO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 = function () {
                return (xO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 = a.asm.SL).apply(null, arguments);
            }),
            yO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 = function () {
                return (yO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 = a.asm.TL).apply(null, arguments);
            }),
            zO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 = function () {
                return (zO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 = a.asm.UL).apply(null, arguments);
            }),
            AO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 = function () {
                return (AO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 = a.asm.VL).apply(null, arguments);
            }),
            BO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 = function () {
                return (BO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 = a.asm.WL).apply(null, arguments);
            }),
            CO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 = function () {
                return (CO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 = a.asm.XL).apply(null, arguments);
            }),
            DO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 = function () {
                return (DO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 = a.asm.YL).apply(null, arguments);
            }),
            EO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 = function () {
                return (EO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 = a.asm.ZL).apply(null, arguments);
            }),
            FO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 = function () {
                return (FO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 = a.asm._L).apply(null, arguments);
            }),
            GO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 = function () {
                return (GO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 = a.asm.$L).apply(null, arguments);
            }),
            HO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 = function () {
                return (HO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 = a.asm.aM).apply(null, arguments);
            }),
            IO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 = function () {
                return (IO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 = a.asm.bM).apply(null, arguments);
            }),
            JO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 = function () {
                return (JO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 = a.asm.cM).apply(null, arguments);
            }),
            KO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 = function () {
                return (KO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 = a.asm.dM).apply(null, arguments);
            }),
            LO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 = function () {
                return (LO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 = a.asm.eM).apply(null, arguments);
            }),
            MO = (a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 = function () {
                return (MO = a._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 = a.asm.fM).apply(null, arguments);
            }),
            NO = (a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 = function () {
                return (NO = a._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 = a.asm.gM).apply(null, arguments);
            }),
            OO = (a._emscripten_bind_btRigidBodyConstructionInfo___destroy___0 = function () {
                return (OO = a._emscripten_bind_btRigidBodyConstructionInfo___destroy___0 = a.asm.hM).apply(null, arguments);
            }),
            PO = (a._emscripten_bind_btRigidBody_btRigidBody_1 = function () {
                return (PO = a._emscripten_bind_btRigidBody_btRigidBody_1 = a.asm.iM).apply(null, arguments);
            }),
            QO = (a._emscripten_bind_btRigidBody_proceedToTransform_1 = function () {
                return (QO = a._emscripten_bind_btRigidBody_proceedToTransform_1 = a.asm.jM).apply(null, arguments);
            }),
            RO = (a._emscripten_bind_btRigidBody_upcast_1 = function () {
                return (RO = a._emscripten_bind_btRigidBody_upcast_1 = a.asm.kM).apply(null, arguments);
            }),
            SO = (a._emscripten_bind_btRigidBody_predictIntegratedTransform_2 = function () {
                return (SO = a._emscripten_bind_btRigidBody_predictIntegratedTransform_2 = a.asm.lM).apply(null, arguments);
            }),
            TO = (a._emscripten_bind_btRigidBody_saveKinematicState_1 = function () {
                return (TO = a._emscripten_bind_btRigidBody_saveKinematicState_1 = a.asm.mM).apply(null, arguments);
            }),
            UO = (a._emscripten_bind_btRigidBody_applyGravity_0 = function () {
                return (UO = a._emscripten_bind_btRigidBody_applyGravity_0 = a.asm.nM).apply(null, arguments);
            }),
            VO = (a._emscripten_bind_btRigidBody_clearGravity_0 = function () {
                return (VO = a._emscripten_bind_btRigidBody_clearGravity_0 = a.asm.oM).apply(null, arguments);
            }),
            WO = (a._emscripten_bind_btRigidBody_setGravity_1 = function () {
                return (WO = a._emscripten_bind_btRigidBody_setGravity_1 = a.asm.pM).apply(null, arguments);
            }),
            XO = (a._emscripten_bind_btRigidBody_getGravity_0 = function () {
                return (XO = a._emscripten_bind_btRigidBody_getGravity_0 = a.asm.qM).apply(null, arguments);
            }),
            YO = (a._emscripten_bind_btRigidBody_setDamping_2 = function () {
                return (YO = a._emscripten_bind_btRigidBody_setDamping_2 = a.asm.rM).apply(null, arguments);
            }),
            ZO = (a._emscripten_bind_btRigidBody_getLinearDamping_0 = function () {
                return (ZO = a._emscripten_bind_btRigidBody_getLinearDamping_0 = a.asm.sM).apply(null, arguments);
            }),
            $O = (a._emscripten_bind_btRigidBody_getAngularDamping_0 = function () {
                return ($O = a._emscripten_bind_btRigidBody_getAngularDamping_0 = a.asm.tM).apply(null, arguments);
            }),
            aP = (a._emscripten_bind_btRigidBody_getLinearSleepingThreshold_0 = function () {
                return (aP = a._emscripten_bind_btRigidBody_getLinearSleepingThreshold_0 = a.asm.uM).apply(null, arguments);
            }),
            bP = (a._emscripten_bind_btRigidBody_getAngularSleepingThreshold_0 = function () {
                return (bP = a._emscripten_bind_btRigidBody_getAngularSleepingThreshold_0 = a.asm.vM).apply(null, arguments);
            }),
            cP = (a._emscripten_bind_btRigidBody_applyDamping_1 = function () {
                return (cP = a._emscripten_bind_btRigidBody_applyDamping_1 = a.asm.wM).apply(null, arguments);
            }),
            dP = (a._emscripten_bind_btRigidBody_getCollisionShape_0 = function () {
                return (dP = a._emscripten_bind_btRigidBody_getCollisionShape_0 = a.asm.xM).apply(null, arguments);
            }),
            eP = (a._emscripten_bind_btRigidBody_setMassProps_2 = function () {
                return (eP = a._emscripten_bind_btRigidBody_setMassProps_2 = a.asm.yM).apply(null, arguments);
            }),
            fP = (a._emscripten_bind_btRigidBody_getLinearFactor_0 = function () {
                return (fP = a._emscripten_bind_btRigidBody_getLinearFactor_0 = a.asm.zM).apply(null, arguments);
            }),
            gP = (a._emscripten_bind_btRigidBody_setLinearFactor_1 = function () {
                return (gP = a._emscripten_bind_btRigidBody_setLinearFactor_1 = a.asm.AM).apply(null, arguments);
            }),
            hP = (a._emscripten_bind_btRigidBody_getInvMass_0 = function () {
                return (hP = a._emscripten_bind_btRigidBody_getInvMass_0 = a.asm.BM).apply(null, arguments);
            }),
            iP = (a._emscripten_bind_btRigidBody_getMass_0 = function () {
                return (iP = a._emscripten_bind_btRigidBody_getMass_0 = a.asm.CM).apply(null, arguments);
            }),
            jP = (a._emscripten_bind_btRigidBody_getInvInertiaTensorWorld_0 = function () {
                return (jP = a._emscripten_bind_btRigidBody_getInvInertiaTensorWorld_0 = a.asm.DM).apply(null, arguments);
            }),
            kP = (a._emscripten_bind_btRigidBody_integrateVelocities_1 = function () {
                return (kP = a._emscripten_bind_btRigidBody_integrateVelocities_1 = a.asm.EM).apply(null, arguments);
            }),
            lP = (a._emscripten_bind_btRigidBody_setCenterOfMassTransform_1 = function () {
                return (lP = a._emscripten_bind_btRigidBody_setCenterOfMassTransform_1 = a.asm.FM).apply(null, arguments);
            }),
            mP = (a._emscripten_bind_btRigidBody_applyCentralForce_1 = function () {
                return (mP = a._emscripten_bind_btRigidBody_applyCentralForce_1 = a.asm.GM).apply(null, arguments);
            }),
            nP = (a._emscripten_bind_btRigidBody_getTotalForce_0 = function () {
                return (nP = a._emscripten_bind_btRigidBody_getTotalForce_0 = a.asm.HM).apply(null, arguments);
            }),
            oP = (a._emscripten_bind_btRigidBody_getTotalTorque_0 = function () {
                return (oP = a._emscripten_bind_btRigidBody_getTotalTorque_0 = a.asm.IM).apply(null, arguments);
            }),
            pP = (a._emscripten_bind_btRigidBody_getInvInertiaDiagLocal_0 = function () {
                return (pP = a._emscripten_bind_btRigidBody_getInvInertiaDiagLocal_0 = a.asm.JM).apply(null, arguments);
            }),
            qP = (a._emscripten_bind_btRigidBody_setInvInertiaDiagLocal_1 = function () {
                return (qP = a._emscripten_bind_btRigidBody_setInvInertiaDiagLocal_1 = a.asm.KM).apply(null, arguments);
            }),
            rP = (a._emscripten_bind_btRigidBody_setSleepingThresholds_2 = function () {
                return (rP = a._emscripten_bind_btRigidBody_setSleepingThresholds_2 = a.asm.LM).apply(null, arguments);
            }),
            sP = (a._emscripten_bind_btRigidBody_applyTorque_1 = function () {
                return (sP = a._emscripten_bind_btRigidBody_applyTorque_1 = a.asm.MM).apply(null, arguments);
            }),
            tP = (a._emscripten_bind_btRigidBody_applyForce_2 = function () {
                return (tP = a._emscripten_bind_btRigidBody_applyForce_2 = a.asm.NM).apply(null, arguments);
            }),
            uP = (a._emscripten_bind_btRigidBody_applyCentralImpulse_1 = function () {
                return (uP = a._emscripten_bind_btRigidBody_applyCentralImpulse_1 = a.asm.OM).apply(null, arguments);
            }),
            vP = (a._emscripten_bind_btRigidBody_applyTorqueImpulse_1 = function () {
                return (vP = a._emscripten_bind_btRigidBody_applyTorqueImpulse_1 = a.asm.PM).apply(null, arguments);
            }),
            wP = (a._emscripten_bind_btRigidBody_applyImpulse_2 = function () {
                return (wP = a._emscripten_bind_btRigidBody_applyImpulse_2 = a.asm.QM).apply(null, arguments);
            }),
            xP = (a._emscripten_bind_btRigidBody_applyPushImpulse_2 = function () {
                return (xP = a._emscripten_bind_btRigidBody_applyPushImpulse_2 = a.asm.RM).apply(null, arguments);
            }),
            yP = (a._emscripten_bind_btRigidBody_getPushVelocity_0 = function () {
                return (yP = a._emscripten_bind_btRigidBody_getPushVelocity_0 = a.asm.SM).apply(null, arguments);
            }),
            zP = (a._emscripten_bind_btRigidBody_getTurnVelocity_0 = function () {
                return (zP = a._emscripten_bind_btRigidBody_getTurnVelocity_0 = a.asm.TM).apply(null, arguments);
            }),
            AP = (a._emscripten_bind_btRigidBody_setPushVelocity_1 = function () {
                return (AP = a._emscripten_bind_btRigidBody_setPushVelocity_1 = a.asm.UM).apply(null, arguments);
            }),
            BP = (a._emscripten_bind_btRigidBody_setTurnVelocity_1 = function () {
                return (BP = a._emscripten_bind_btRigidBody_setTurnVelocity_1 = a.asm.VM).apply(null, arguments);
            }),
            CP = (a._emscripten_bind_btRigidBody_applyCentralPushImpulse_1 = function () {
                return (CP = a._emscripten_bind_btRigidBody_applyCentralPushImpulse_1 = a.asm.WM).apply(null, arguments);
            }),
            DP = (a._emscripten_bind_btRigidBody_applyTorqueTurnImpulse_1 = function () {
                return (DP = a._emscripten_bind_btRigidBody_applyTorqueTurnImpulse_1 = a.asm.XM).apply(null, arguments);
            }),
            EP = (a._emscripten_bind_btRigidBody_clearForces_0 = function () {
                return (EP = a._emscripten_bind_btRigidBody_clearForces_0 = a.asm.YM).apply(null, arguments);
            }),
            FP = (a._emscripten_bind_btRigidBody_updateInertiaTensor_0 = function () {
                return (FP = a._emscripten_bind_btRigidBody_updateInertiaTensor_0 = a.asm.ZM).apply(null, arguments);
            }),
            GP = (a._emscripten_bind_btRigidBody_getCenterOfMassPosition_0 = function () {
                return (GP = a._emscripten_bind_btRigidBody_getCenterOfMassPosition_0 = a.asm._M).apply(null, arguments);
            }),
            HP = (a._emscripten_bind_btRigidBody_getOrientation_0 = function () {
                return (HP = a._emscripten_bind_btRigidBody_getOrientation_0 = a.asm.$M).apply(null, arguments);
            }),
            IP = (a._emscripten_bind_btRigidBody_getCenterOfMassTransform_0 = function () {
                return (IP = a._emscripten_bind_btRigidBody_getCenterOfMassTransform_0 = a.asm.aN).apply(null, arguments);
            }),
            JP = (a._emscripten_bind_btRigidBody_getLinearVelocity_0 = function () {
                return (JP = a._emscripten_bind_btRigidBody_getLinearVelocity_0 = a.asm.bN).apply(null, arguments);
            }),
            KP = (a._emscripten_bind_btRigidBody_getAngularVelocity_0 = function () {
                return (KP = a._emscripten_bind_btRigidBody_getAngularVelocity_0 = a.asm.cN).apply(null, arguments);
            }),
            LP = (a._emscripten_bind_btRigidBody_setLinearVelocity_1 = function () {
                return (LP = a._emscripten_bind_btRigidBody_setLinearVelocity_1 = a.asm.dN).apply(null, arguments);
            }),
            MP = (a._emscripten_bind_btRigidBody_setAngularVelocity_1 = function () {
                return (MP = a._emscripten_bind_btRigidBody_setAngularVelocity_1 = a.asm.eN).apply(null, arguments);
            }),
            NP = (a._emscripten_bind_btRigidBody_getVelocityInLocalPoint_1 = function () {
                return (NP = a._emscripten_bind_btRigidBody_getVelocityInLocalPoint_1 = a.asm.fN).apply(null, arguments);
            }),
            OP = (a._emscripten_bind_btRigidBody_getPushVelocityInLocalPoint_1 = function () {
                return (OP = a._emscripten_bind_btRigidBody_getPushVelocityInLocalPoint_1 = a.asm.gN).apply(null, arguments);
            }),
            PP = (a._emscripten_bind_btRigidBody_translate_1 = function () {
                return (PP = a._emscripten_bind_btRigidBody_translate_1 = a.asm.hN).apply(null, arguments);
            }),
            QP = (a._emscripten_bind_btRigidBody_getAabb_2 = function () {
                return (QP = a._emscripten_bind_btRigidBody_getAabb_2 = a.asm.iN).apply(null, arguments);
            }),
            RP = (a._emscripten_bind_btRigidBody_computeImpulseDenominator_2 = function () {
                return (RP = a._emscripten_bind_btRigidBody_computeImpulseDenominator_2 = a.asm.jN).apply(null, arguments);
            }),
            SP = (a._emscripten_bind_btRigidBody_computeAngularImpulseDenominator_1 = function () {
                return (SP = a._emscripten_bind_btRigidBody_computeAngularImpulseDenominator_1 = a.asm.kN).apply(null, arguments);
            }),
            TP = (a._emscripten_bind_btRigidBody_updateDeactivation_1 = function () {
                return (TP = a._emscripten_bind_btRigidBody_updateDeactivation_1 = a.asm.lN).apply(null, arguments);
            }),
            UP = (a._emscripten_bind_btRigidBody_wantsSleeping_0 = function () {
                return (UP = a._emscripten_bind_btRigidBody_wantsSleeping_0 = a.asm.mN).apply(null, arguments);
            }),
            VP = (a._emscripten_bind_btRigidBody_getBroadphaseProxy_0 = function () {
                return (VP = a._emscripten_bind_btRigidBody_getBroadphaseProxy_0 = a.asm.nN).apply(null, arguments);
            }),
            WP = (a._emscripten_bind_btRigidBody_setNewBroadphaseProxy_1 = function () {
                return (WP = a._emscripten_bind_btRigidBody_setNewBroadphaseProxy_1 = a.asm.oN).apply(null, arguments);
            }),
            XP = (a._emscripten_bind_btRigidBody_getMotionState_0 = function () {
                return (XP = a._emscripten_bind_btRigidBody_getMotionState_0 = a.asm.pN).apply(null, arguments);
            }),
            YP = (a._emscripten_bind_btRigidBody_setMotionState_1 = function () {
                return (YP = a._emscripten_bind_btRigidBody_setMotionState_1 = a.asm.qN).apply(null, arguments);
            }),
            ZP = (a._emscripten_bind_btRigidBody_setAngularFactor_1 = function () {
                return (ZP = a._emscripten_bind_btRigidBody_setAngularFactor_1 = a.asm.rN).apply(null, arguments);
            }),
            $P = (a._emscripten_bind_btRigidBody_getAngularFactor_0 = function () {
                return ($P = a._emscripten_bind_btRigidBody_getAngularFactor_0 = a.asm.sN).apply(null, arguments);
            }),
            aQ = (a._emscripten_bind_btRigidBody_isInWorld_0 = function () {
                return (aQ = a._emscripten_bind_btRigidBody_isInWorld_0 = a.asm.tN).apply(null, arguments);
            }),
            bQ = (a._emscripten_bind_btRigidBody_addConstraintRef_1 = function () {
                return (bQ = a._emscripten_bind_btRigidBody_addConstraintRef_1 = a.asm.uN).apply(null, arguments);
            }),
            cQ = (a._emscripten_bind_btRigidBody_removeConstraintRef_1 = function () {
                return (cQ = a._emscripten_bind_btRigidBody_removeConstraintRef_1 = a.asm.vN).apply(null, arguments);
            }),
            dQ = (a._emscripten_bind_btRigidBody_getConstraintRef_1 = function () {
                return (dQ = a._emscripten_bind_btRigidBody_getConstraintRef_1 = a.asm.wN).apply(null, arguments);
            }),
            eQ = (a._emscripten_bind_btRigidBody_getNumConstraintRefs_0 = function () {
                return (eQ = a._emscripten_bind_btRigidBody_getNumConstraintRefs_0 = a.asm.xN).apply(null, arguments);
            }),
            fQ = (a._emscripten_bind_btRigidBody_setFlags_1 = function () {
                return (fQ = a._emscripten_bind_btRigidBody_setFlags_1 = a.asm.yN).apply(null, arguments);
            }),
            gQ = (a._emscripten_bind_btRigidBody_getFlags_0 = function () {
                return (gQ = a._emscripten_bind_btRigidBody_getFlags_0 = a.asm.zN).apply(null, arguments);
            }),
            hQ = (a._emscripten_bind_btRigidBody_computeGyroscopicImpulseImplicit_World_1 = function () {
                return (hQ = a._emscripten_bind_btRigidBody_computeGyroscopicImpulseImplicit_World_1 = a.asm.AN).apply(null, arguments);
            }),
            iQ = (a._emscripten_bind_btRigidBody_computeGyroscopicImpulseImplicit_Body_1 = function () {
                return (iQ = a._emscripten_bind_btRigidBody_computeGyroscopicImpulseImplicit_Body_1 = a.asm.BN).apply(null, arguments);
            }),
            jQ = (a._emscripten_bind_btRigidBody_computeGyroscopicForceExplicit_1 = function () {
                return (jQ = a._emscripten_bind_btRigidBody_computeGyroscopicForceExplicit_1 = a.asm.CN).apply(null, arguments);
            }),
            kQ = (a._emscripten_bind_btRigidBody_getLocalInertia_0 = function () {
                return (kQ = a._emscripten_bind_btRigidBody_getLocalInertia_0 = a.asm.DN).apply(null, arguments);
            }),
            lQ = (a._emscripten_bind_btRigidBody_mergesSimulationIslands_0 = function () {
                return (lQ = a._emscripten_bind_btRigidBody_mergesSimulationIslands_0 = a.asm.EN).apply(null, arguments);
            }),
            mQ = (a._emscripten_bind_btRigidBody_getAnisotropicFriction_0 = function () {
                return (mQ = a._emscripten_bind_btRigidBody_getAnisotropicFriction_0 = a.asm.FN).apply(null, arguments);
            }),
            nQ = (a._emscripten_bind_btRigidBody_setAnisotropicFriction_1 = function () {
                return (nQ = a._emscripten_bind_btRigidBody_setAnisotropicFriction_1 = a.asm.GN).apply(null, arguments);
            }),
            oQ = (a._emscripten_bind_btRigidBody_setAnisotropicFriction_2 = function () {
                return (oQ = a._emscripten_bind_btRigidBody_setAnisotropicFriction_2 = a.asm.HN).apply(null, arguments);
            }),
            pQ = (a._emscripten_bind_btRigidBody_hasAnisotropicFriction_0 = function () {
                return (pQ = a._emscripten_bind_btRigidBody_hasAnisotropicFriction_0 = a.asm.IN).apply(null, arguments);
            }),
            qQ = (a._emscripten_bind_btRigidBody_hasAnisotropicFriction_1 = function () {
                return (qQ = a._emscripten_bind_btRigidBody_hasAnisotropicFriction_1 = a.asm.JN).apply(null, arguments);
            }),
            rQ = (a._emscripten_bind_btRigidBody_setContactProcessingThreshold_1 = function () {
                return (rQ = a._emscripten_bind_btRigidBody_setContactProcessingThreshold_1 = a.asm.KN).apply(null, arguments);
            }),
            sQ = (a._emscripten_bind_btRigidBody_getContactProcessingThreshold_0 = function () {
                return (sQ = a._emscripten_bind_btRigidBody_getContactProcessingThreshold_0 = a.asm.LN).apply(null, arguments);
            }),
            tQ = (a._emscripten_bind_btRigidBody_isStaticObject_0 = function () {
                return (tQ = a._emscripten_bind_btRigidBody_isStaticObject_0 = a.asm.MN).apply(null, arguments);
            }),
            uQ = (a._emscripten_bind_btRigidBody_isKinematicObject_0 = function () {
                return (uQ = a._emscripten_bind_btRigidBody_isKinematicObject_0 = a.asm.NN).apply(null, arguments);
            }),
            vQ = (a._emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 = function () {
                return (vQ = a._emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 = a.asm.ON).apply(null, arguments);
            }),
            wQ = (a._emscripten_bind_btRigidBody_hasContactResponse_0 = function () {
                return (wQ = a._emscripten_bind_btRigidBody_hasContactResponse_0 = a.asm.PN).apply(null, arguments);
            }),
            xQ = (a._emscripten_bind_btRigidBody_setCollisionShape_1 = function () {
                return (xQ = a._emscripten_bind_btRigidBody_setCollisionShape_1 = a.asm.QN).apply(null, arguments);
            }),
            yQ = (a._emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2 = function () {
                return (yQ = a._emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2 = a.asm.RN).apply(null, arguments);
            }),
            zQ = (a._emscripten_bind_btRigidBody_getNumObjectsWithoutCollision_0 = function () {
                return (zQ = a._emscripten_bind_btRigidBody_getNumObjectsWithoutCollision_0 = a.asm.SN).apply(null, arguments);
            }),
            AQ = (a._emscripten_bind_btRigidBody_getObjectWithoutCollision_1 = function () {
                return (AQ = a._emscripten_bind_btRigidBody_getObjectWithoutCollision_1 = a.asm.TN).apply(null, arguments);
            }),
            BQ = (a._emscripten_bind_btRigidBody_checkCollideWithOverride_1 = function () {
                return (BQ = a._emscripten_bind_btRigidBody_checkCollideWithOverride_1 = a.asm.UN).apply(null, arguments);
            }),
            CQ = (a._emscripten_bind_btRigidBody_getActivationState_0 = function () {
                return (CQ = a._emscripten_bind_btRigidBody_getActivationState_0 = a.asm.VN).apply(null, arguments);
            }),
            DQ = (a._emscripten_bind_btRigidBody_setActivationState_1 = function () {
                return (DQ = a._emscripten_bind_btRigidBody_setActivationState_1 = a.asm.WN).apply(null, arguments);
            }),
            EQ = (a._emscripten_bind_btRigidBody_setDeactivationTime_1 = function () {
                return (EQ = a._emscripten_bind_btRigidBody_setDeactivationTime_1 = a.asm.XN).apply(null, arguments);
            }),
            FQ = (a._emscripten_bind_btRigidBody_getDeactivationTime_0 = function () {
                return (FQ = a._emscripten_bind_btRigidBody_getDeactivationTime_0 = a.asm.YN).apply(null, arguments);
            }),
            GQ = (a._emscripten_bind_btRigidBody_forceActivationState_1 = function () {
                return (GQ = a._emscripten_bind_btRigidBody_forceActivationState_1 = a.asm.ZN).apply(null, arguments);
            }),
            HQ = (a._emscripten_bind_btRigidBody_activate_0 = function () {
                return (HQ = a._emscripten_bind_btRigidBody_activate_0 = a.asm._N).apply(null, arguments);
            }),
            IQ = (a._emscripten_bind_btRigidBody_activate_1 = function () {
                return (IQ = a._emscripten_bind_btRigidBody_activate_1 = a.asm.$N).apply(null, arguments);
            }),
            JQ = (a._emscripten_bind_btRigidBody_isActive_0 = function () {
                return (JQ = a._emscripten_bind_btRigidBody_isActive_0 = a.asm.aO).apply(null, arguments);
            }),
            KQ = (a._emscripten_bind_btRigidBody_setRestitution_1 = function () {
                return (KQ = a._emscripten_bind_btRigidBody_setRestitution_1 = a.asm.bO).apply(null, arguments);
            }),
            LQ = (a._emscripten_bind_btRigidBody_getRestitution_0 = function () {
                return (LQ = a._emscripten_bind_btRigidBody_getRestitution_0 = a.asm.cO).apply(null, arguments);
            }),
            MQ = (a._emscripten_bind_btRigidBody_setFriction_1 = function () {
                return (MQ = a._emscripten_bind_btRigidBody_setFriction_1 = a.asm.dO).apply(null, arguments);
            }),
            NQ = (a._emscripten_bind_btRigidBody_getFriction_0 = function () {
                return (NQ = a._emscripten_bind_btRigidBody_getFriction_0 = a.asm.eO).apply(null, arguments);
            }),
            OQ = (a._emscripten_bind_btRigidBody_setRollingFriction_1 = function () {
                return (OQ = a._emscripten_bind_btRigidBody_setRollingFriction_1 = a.asm.fO).apply(null, arguments);
            }),
            PQ = (a._emscripten_bind_btRigidBody_getRollingFriction_0 = function () {
                return (PQ = a._emscripten_bind_btRigidBody_getRollingFriction_0 = a.asm.gO).apply(null, arguments);
            }),
            QQ = (a._emscripten_bind_btRigidBody_setSpinningFriction_1 = function () {
                return (QQ = a._emscripten_bind_btRigidBody_setSpinningFriction_1 = a.asm.hO).apply(null, arguments);
            }),
            RQ = (a._emscripten_bind_btRigidBody_getSpinningFriction_0 = function () {
                return (RQ = a._emscripten_bind_btRigidBody_getSpinningFriction_0 = a.asm.iO).apply(null, arguments);
            }),
            SQ = (a._emscripten_bind_btRigidBody_setContactStiffnessAndDamping_2 = function () {
                return (SQ = a._emscripten_bind_btRigidBody_setContactStiffnessAndDamping_2 = a.asm.jO).apply(null, arguments);
            }),
            TQ = (a._emscripten_bind_btRigidBody_getContactStiffness_0 = function () {
                return (TQ = a._emscripten_bind_btRigidBody_getContactStiffness_0 = a.asm.kO).apply(null, arguments);
            }),
            UQ = (a._emscripten_bind_btRigidBody_getContactDamping_0 = function () {
                return (UQ = a._emscripten_bind_btRigidBody_getContactDamping_0 = a.asm.lO).apply(null, arguments);
            }),
            VQ = (a._emscripten_bind_btRigidBody_getWorldTransform_0 = function () {
                return (VQ = a._emscripten_bind_btRigidBody_getWorldTransform_0 = a.asm.mO).apply(null, arguments);
            }),
            WQ = (a._emscripten_bind_btRigidBody_setWorldTransform_1 = function () {
                return (WQ = a._emscripten_bind_btRigidBody_setWorldTransform_1 = a.asm.nO).apply(null, arguments);
            }),
            XQ = (a._emscripten_bind_btRigidBody_getBroadphaseHandle_0 = function () {
                return (XQ = a._emscripten_bind_btRigidBody_getBroadphaseHandle_0 = a.asm.oO).apply(null, arguments);
            }),
            YQ = (a._emscripten_bind_btRigidBody_setBroadphaseHandle_1 = function () {
                return (YQ = a._emscripten_bind_btRigidBody_setBroadphaseHandle_1 = a.asm.pO).apply(null, arguments);
            }),
            ZQ = (a._emscripten_bind_btRigidBody_getInterpolationWorldTransform_0 = function () {
                return (ZQ = a._emscripten_bind_btRigidBody_getInterpolationWorldTransform_0 = a.asm.qO).apply(null, arguments);
            }),
            $Q = (a._emscripten_bind_btRigidBody_setInterpolationWorldTransform_1 = function () {
                return ($Q = a._emscripten_bind_btRigidBody_setInterpolationWorldTransform_1 = a.asm.rO).apply(null, arguments);
            }),
            aR = (a._emscripten_bind_btRigidBody_setInterpolationLinearVelocity_1 = function () {
                return (aR = a._emscripten_bind_btRigidBody_setInterpolationLinearVelocity_1 = a.asm.sO).apply(null, arguments);
            }),
            bR = (a._emscripten_bind_btRigidBody_setInterpolationAngularVelocity_1 = function () {
                return (bR = a._emscripten_bind_btRigidBody_setInterpolationAngularVelocity_1 = a.asm.tO).apply(null, arguments);
            }),
            cR = (a._emscripten_bind_btRigidBody_getInterpolationLinearVelocity_0 = function () {
                return (cR = a._emscripten_bind_btRigidBody_getInterpolationLinearVelocity_0 = a.asm.uO).apply(null, arguments);
            }),
            dR = (a._emscripten_bind_btRigidBody_getInterpolationAngularVelocity_0 = function () {
                return (dR = a._emscripten_bind_btRigidBody_getInterpolationAngularVelocity_0 = a.asm.vO).apply(null, arguments);
            }),
            eR = (a._emscripten_bind_btRigidBody_getIslandTag_0 = function () {
                return (eR = a._emscripten_bind_btRigidBody_getIslandTag_0 = a.asm.wO).apply(null, arguments);
            }),
            fR = (a._emscripten_bind_btRigidBody_setIslandTag_1 = function () {
                return (fR = a._emscripten_bind_btRigidBody_setIslandTag_1 = a.asm.xO).apply(null, arguments);
            }),
            gR = (a._emscripten_bind_btRigidBody_getCompanionId_0 = function () {
                return (gR = a._emscripten_bind_btRigidBody_getCompanionId_0 = a.asm.yO).apply(null, arguments);
            }),
            hR = (a._emscripten_bind_btRigidBody_setCompanionId_1 = function () {
                return (hR = a._emscripten_bind_btRigidBody_setCompanionId_1 = a.asm.zO).apply(null, arguments);
            }),
            iR = (a._emscripten_bind_btRigidBody_getWorldArrayIndex_0 = function () {
                return (iR = a._emscripten_bind_btRigidBody_getWorldArrayIndex_0 = a.asm.AO).apply(null, arguments);
            }),
            jR = (a._emscripten_bind_btRigidBody_getHitFraction_0 = function () {
                return (jR = a._emscripten_bind_btRigidBody_getHitFraction_0 = a.asm.BO).apply(null, arguments);
            }),
            kR = (a._emscripten_bind_btRigidBody_setHitFraction_1 = function () {
                return (kR = a._emscripten_bind_btRigidBody_setHitFraction_1 = a.asm.CO).apply(null, arguments);
            }),
            lR = (a._emscripten_bind_btRigidBody_getCollisionFlags_0 = function () {
                return (lR = a._emscripten_bind_btRigidBody_getCollisionFlags_0 = a.asm.DO).apply(null, arguments);
            }),
            mR = (a._emscripten_bind_btRigidBody_setCollisionFlags_1 = function () {
                return (mR = a._emscripten_bind_btRigidBody_setCollisionFlags_1 = a.asm.EO).apply(null, arguments);
            }),
            nR = (a._emscripten_bind_btRigidBody_getCcdSweptSphereRadius_0 = function () {
                return (nR = a._emscripten_bind_btRigidBody_getCcdSweptSphereRadius_0 = a.asm.FO).apply(null, arguments);
            }),
            oR = (a._emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 = function () {
                return (oR = a._emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 = a.asm.GO).apply(null, arguments);
            }),
            pR = (a._emscripten_bind_btRigidBody_getCcdMotionThreshold_0 = function () {
                return (pR = a._emscripten_bind_btRigidBody_getCcdMotionThreshold_0 = a.asm.HO).apply(null, arguments);
            }),
            qR = (a._emscripten_bind_btRigidBody_setCcdMotionThreshold_1 = function () {
                return (qR = a._emscripten_bind_btRigidBody_setCcdMotionThreshold_1 = a.asm.IO).apply(null, arguments);
            }),
            rR = (a._emscripten_bind_btRigidBody_getUserPointer_0 = function () {
                return (rR = a._emscripten_bind_btRigidBody_getUserPointer_0 = a.asm.JO).apply(null, arguments);
            }),
            sR = (a._emscripten_bind_btRigidBody_getUserIndex_0 = function () {
                return (sR = a._emscripten_bind_btRigidBody_getUserIndex_0 = a.asm.KO).apply(null, arguments);
            }),
            tR = (a._emscripten_bind_btRigidBody_getUserIndex2_0 = function () {
                return (tR = a._emscripten_bind_btRigidBody_getUserIndex2_0 = a.asm.LO).apply(null, arguments);
            }),
            uR = (a._emscripten_bind_btRigidBody_getUserIndex3_0 = function () {
                return (uR = a._emscripten_bind_btRigidBody_getUserIndex3_0 = a.asm.MO).apply(null, arguments);
            }),
            vR = (a._emscripten_bind_btRigidBody_setUserPointer_1 = function () {
                return (vR = a._emscripten_bind_btRigidBody_setUserPointer_1 = a.asm.NO).apply(null, arguments);
            }),
            wR = (a._emscripten_bind_btRigidBody_setUserIndex_1 = function () {
                return (wR = a._emscripten_bind_btRigidBody_setUserIndex_1 = a.asm.OO).apply(null, arguments);
            }),
            xR = (a._emscripten_bind_btRigidBody_setUserIndex2_1 = function () {
                return (xR = a._emscripten_bind_btRigidBody_setUserIndex2_1 = a.asm.PO).apply(null, arguments);
            }),
            yR = (a._emscripten_bind_btRigidBody_setUserIndex3_1 = function () {
                return (yR = a._emscripten_bind_btRigidBody_setUserIndex3_1 = a.asm.QO).apply(null, arguments);
            }),
            zR = (a._emscripten_bind_btRigidBody_getUpdateRevisionInternal_0 = function () {
                return (zR = a._emscripten_bind_btRigidBody_getUpdateRevisionInternal_0 = a.asm.RO).apply(null, arguments);
            }),
            AR = (a._emscripten_bind_btRigidBody_checkCollideWith_1 = function () {
                return (AR = a._emscripten_bind_btRigidBody_checkCollideWith_1 = a.asm.SO).apply(null, arguments);
            }),
            BR = (a._emscripten_bind_btRigidBody___destroy___0 = function () {
                return (BR = a._emscripten_bind_btRigidBody___destroy___0 = a.asm.TO).apply(null, arguments);
            }),
            CR = (a._emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 = function () {
                return (CR = a._emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 = a.asm.UO).apply(null, arguments);
            }),
            DR = (a._emscripten_bind_btSequentialImpulseConstraintSolver_reset_0 = function () {
                return (DR = a._emscripten_bind_btSequentialImpulseConstraintSolver_reset_0 = a.asm.VO).apply(null, arguments);
            }),
            ER = (a._emscripten_bind_btSequentialImpulseConstraintSolver_setRandSeed_1 = function () {
                return (ER = a._emscripten_bind_btSequentialImpulseConstraintSolver_setRandSeed_1 = a.asm.WO).apply(null, arguments);
            }),
            FR = (a._emscripten_bind_btSequentialImpulseConstraintSolver_getRandSeed_0 = function () {
                return (FR = a._emscripten_bind_btSequentialImpulseConstraintSolver_getRandSeed_0 = a.asm.XO).apply(null, arguments);
            }),
            GR = (a._emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 = function () {
                return (GR = a._emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 = a.asm.YO).apply(null, arguments);
            }),
            HR = (a._emscripten_bind_btJointFeedback_get_m_appliedForceBodyA_0 = function () {
                return (HR = a._emscripten_bind_btJointFeedback_get_m_appliedForceBodyA_0 = a.asm.ZO).apply(null, arguments);
            }),
            IR = (a._emscripten_bind_btJointFeedback_set_m_appliedForceBodyA_1 = function () {
                return (IR = a._emscripten_bind_btJointFeedback_set_m_appliedForceBodyA_1 = a.asm._O).apply(null, arguments);
            }),
            JR = (a._emscripten_bind_btJointFeedback_get_m_appliedTorqueBodyA_0 = function () {
                return (JR = a._emscripten_bind_btJointFeedback_get_m_appliedTorqueBodyA_0 = a.asm.$O).apply(null, arguments);
            }),
            KR = (a._emscripten_bind_btJointFeedback_set_m_appliedTorqueBodyA_1 = function () {
                return (KR = a._emscripten_bind_btJointFeedback_set_m_appliedTorqueBodyA_1 = a.asm.aP).apply(null, arguments);
            }),
            LR = (a._emscripten_bind_btJointFeedback_get_m_appliedForceBodyB_0 = function () {
                return (LR = a._emscripten_bind_btJointFeedback_get_m_appliedForceBodyB_0 = a.asm.bP).apply(null, arguments);
            }),
            MR = (a._emscripten_bind_btJointFeedback_set_m_appliedForceBodyB_1 = function () {
                return (MR = a._emscripten_bind_btJointFeedback_set_m_appliedForceBodyB_1 = a.asm.cP).apply(null, arguments);
            }),
            NR = (a._emscripten_bind_btJointFeedback_get_m_appliedTorqueBodyB_0 = function () {
                return (NR = a._emscripten_bind_btJointFeedback_get_m_appliedTorqueBodyB_0 = a.asm.dP).apply(null, arguments);
            }),
            OR = (a._emscripten_bind_btJointFeedback_set_m_appliedTorqueBodyB_1 = function () {
                return (OR = a._emscripten_bind_btJointFeedback_set_m_appliedTorqueBodyB_1 = a.asm.eP).apply(null, arguments);
            }),
            PR = (a._emscripten_bind_btJointFeedback___destroy___0 = function () {
                return (PR = a._emscripten_bind_btJointFeedback___destroy___0 = a.asm.fP).apply(null, arguments);
            }),
            QR = (a._emscripten_bind_btConstraintSetting_btConstraintSetting_0 = function () {
                return (QR = a._emscripten_bind_btConstraintSetting_btConstraintSetting_0 = a.asm.gP).apply(null, arguments);
            }),
            RR = (a._emscripten_bind_btConstraintSetting_get_m_tau_0 = function () {
                return (RR = a._emscripten_bind_btConstraintSetting_get_m_tau_0 = a.asm.hP).apply(null, arguments);
            }),
            SR = (a._emscripten_bind_btConstraintSetting_set_m_tau_1 = function () {
                return (SR = a._emscripten_bind_btConstraintSetting_set_m_tau_1 = a.asm.iP).apply(null, arguments);
            }),
            TR = (a._emscripten_bind_btConstraintSetting_get_m_damping_0 = function () {
                return (TR = a._emscripten_bind_btConstraintSetting_get_m_damping_0 = a.asm.jP).apply(null, arguments);
            }),
            UR = (a._emscripten_bind_btConstraintSetting_set_m_damping_1 = function () {
                return (UR = a._emscripten_bind_btConstraintSetting_set_m_damping_1 = a.asm.kP).apply(null, arguments);
            }),
            VR = (a._emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 = function () {
                return (VR = a._emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 = a.asm.lP).apply(null, arguments);
            }),
            WR = (a._emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 = function () {
                return (WR = a._emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 = a.asm.mP).apply(null, arguments);
            }),
            YR = (a._emscripten_bind_btConstraintSetting___destroy___0 = function () {
                return (YR = a._emscripten_bind_btConstraintSetting___destroy___0 = a.asm.nP).apply(null, arguments);
            }),
            ZR = (a._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 = function () {
                return (ZR = a._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 = a.asm.oP).apply(null, arguments);
            }),
            $R = (a._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 = function () {
                return ($R = a._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 = a.asm.pP).apply(null, arguments);
            }),
            aS = (a._emscripten_bind_btPoint2PointConstraint_buildJacobian_0 = function () {
                return (aS = a._emscripten_bind_btPoint2PointConstraint_buildJacobian_0 = a.asm.qP).apply(null, arguments);
            }),
            bS = (a._emscripten_bind_btPoint2PointConstraint_updateRHS_1 = function () {
                return (bS = a._emscripten_bind_btPoint2PointConstraint_updateRHS_1 = a.asm.rP).apply(null, arguments);
            }),
            cS = (a._emscripten_bind_btPoint2PointConstraint_setPivotA_1 = function () {
                return (cS = a._emscripten_bind_btPoint2PointConstraint_setPivotA_1 = a.asm.sP).apply(null, arguments);
            }),
            dS = (a._emscripten_bind_btPoint2PointConstraint_setPivotB_1 = function () {
                return (dS = a._emscripten_bind_btPoint2PointConstraint_setPivotB_1 = a.asm.tP).apply(null, arguments);
            }),
            eS = (a._emscripten_bind_btPoint2PointConstraint_getPivotInA_0 = function () {
                return (eS = a._emscripten_bind_btPoint2PointConstraint_getPivotInA_0 = a.asm.uP).apply(null, arguments);
            }),
            fS = (a._emscripten_bind_btPoint2PointConstraint_getPivotInB_0 = function () {
                return (fS = a._emscripten_bind_btPoint2PointConstraint_getPivotInB_0 = a.asm.vP).apply(null, arguments);
            }),
            gS = (a._emscripten_bind_btPoint2PointConstraint_setParam_2 = function () {
                return (gS = a._emscripten_bind_btPoint2PointConstraint_setParam_2 = a.asm.wP).apply(null, arguments);
            }),
            hS = (a._emscripten_bind_btPoint2PointConstraint_setParam_3 = function () {
                return (hS = a._emscripten_bind_btPoint2PointConstraint_setParam_3 = a.asm.xP).apply(null, arguments);
            }),
            iS = (a._emscripten_bind_btPoint2PointConstraint_getParam_1 = function () {
                return (iS = a._emscripten_bind_btPoint2PointConstraint_getParam_1 = a.asm.yP).apply(null, arguments);
            }),
            jS = (a._emscripten_bind_btPoint2PointConstraint_getParam_2 = function () {
                return (jS = a._emscripten_bind_btPoint2PointConstraint_getParam_2 = a.asm.zP).apply(null, arguments);
            }),
            kS = (a._emscripten_bind_btPoint2PointConstraint_getFlags_0 = function () {
                return (kS = a._emscripten_bind_btPoint2PointConstraint_getFlags_0 = a.asm.AP).apply(null, arguments);
            }),
            lS = (a._emscripten_bind_btPoint2PointConstraint_getFixedBody_0 = function () {
                return (lS = a._emscripten_bind_btPoint2PointConstraint_getFixedBody_0 = a.asm.BP).apply(null, arguments);
            }),
            mS = (a._emscripten_bind_btPoint2PointConstraint_getOverrideNumSolverIterations_0 = function () {
                return (mS = a._emscripten_bind_btPoint2PointConstraint_getOverrideNumSolverIterations_0 = a.asm.CP).apply(null, arguments);
            }),
            nS = (a._emscripten_bind_btPoint2PointConstraint_setOverrideNumSolverIterations_1 = function () {
                return (nS = a._emscripten_bind_btPoint2PointConstraint_setOverrideNumSolverIterations_1 = a.asm.DP).apply(null, arguments);
            }),
            oS = (a._emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 = function () {
                return (oS = a._emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 = a.asm.EP).apply(null, arguments);
            }),
            pS = (a._emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 = function () {
                return (pS = a._emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 = a.asm.FP).apply(null, arguments);
            }),
            qS = (a._emscripten_bind_btPoint2PointConstraint_isEnabled_0 = function () {
                return (qS = a._emscripten_bind_btPoint2PointConstraint_isEnabled_0 = a.asm.GP).apply(null, arguments);
            }),
            rS = (a._emscripten_bind_btPoint2PointConstraint_setEnabled_1 = function () {
                return (rS = a._emscripten_bind_btPoint2PointConstraint_setEnabled_1 = a.asm.HP).apply(null, arguments);
            }),
            sS = (a._emscripten_bind_btPoint2PointConstraint_getRigidBodyA_0 = function () {
                return (sS = a._emscripten_bind_btPoint2PointConstraint_getRigidBodyA_0 = a.asm.IP).apply(null, arguments);
            }),
            tS = (a._emscripten_bind_btPoint2PointConstraint_getRigidBodyB_0 = function () {
                return (tS = a._emscripten_bind_btPoint2PointConstraint_getRigidBodyB_0 = a.asm.JP).apply(null, arguments);
            }),
            uS = (a._emscripten_bind_btPoint2PointConstraint_getUserConstraintType_0 = function () {
                return (uS = a._emscripten_bind_btPoint2PointConstraint_getUserConstraintType_0 = a.asm.KP).apply(null, arguments);
            }),
            vS = (a._emscripten_bind_btPoint2PointConstraint_setUserConstraintType_1 = function () {
                return (vS = a._emscripten_bind_btPoint2PointConstraint_setUserConstraintType_1 = a.asm.LP).apply(null, arguments);
            }),
            wS = (a._emscripten_bind_btPoint2PointConstraint_setUserConstraintId_1 = function () {
                return (wS = a._emscripten_bind_btPoint2PointConstraint_setUserConstraintId_1 = a.asm.MP).apply(null, arguments);
            }),
            xS = (a._emscripten_bind_btPoint2PointConstraint_getUserConstraintId_0 = function () {
                return (xS = a._emscripten_bind_btPoint2PointConstraint_getUserConstraintId_0 = a.asm.NP).apply(null, arguments);
            }),
            yS = (a._emscripten_bind_btPoint2PointConstraint_setUserConstraintPtr_1 = function () {
                return (yS = a._emscripten_bind_btPoint2PointConstraint_setUserConstraintPtr_1 = a.asm.OP).apply(null, arguments);
            }),
            zS = (a._emscripten_bind_btPoint2PointConstraint_getUserConstraintPtr_0 = function () {
                return (zS = a._emscripten_bind_btPoint2PointConstraint_getUserConstraintPtr_0 = a.asm.PP).apply(null, arguments);
            }),
            AS = (a._emscripten_bind_btPoint2PointConstraint_setJointFeedback_1 = function () {
                return (AS = a._emscripten_bind_btPoint2PointConstraint_setJointFeedback_1 = a.asm.QP).apply(null, arguments);
            }),
            BS = (a._emscripten_bind_btPoint2PointConstraint_getJointFeedback_0 = function () {
                return (BS = a._emscripten_bind_btPoint2PointConstraint_getJointFeedback_0 = a.asm.RP).apply(null, arguments);
            }),
            CS = (a._emscripten_bind_btPoint2PointConstraint_getUid_0 = function () {
                return (CS = a._emscripten_bind_btPoint2PointConstraint_getUid_0 = a.asm.SP).apply(null, arguments);
            }),
            DS = (a._emscripten_bind_btPoint2PointConstraint_needsFeedback_0 = function () {
                return (DS = a._emscripten_bind_btPoint2PointConstraint_needsFeedback_0 = a.asm.TP).apply(null, arguments);
            }),
            ES = (a._emscripten_bind_btPoint2PointConstraint_enableFeedback_1 = function () {
                return (ES = a._emscripten_bind_btPoint2PointConstraint_enableFeedback_1 = a.asm.UP).apply(null, arguments);
            }),
            FS = (a._emscripten_bind_btPoint2PointConstraint_getAppliedImpulse_0 = function () {
                return (FS = a._emscripten_bind_btPoint2PointConstraint_getAppliedImpulse_0 = a.asm.VP).apply(null, arguments);
            }),
            GS = (a._emscripten_bind_btPoint2PointConstraint_getConstraintType_0 = function () {
                return (GS = a._emscripten_bind_btPoint2PointConstraint_getConstraintType_0 = a.asm.WP).apply(null, arguments);
            }),
            HS = (a._emscripten_bind_btPoint2PointConstraint_getObjectType_0 = function () {
                return (HS = a._emscripten_bind_btPoint2PointConstraint_getObjectType_0 = a.asm.XP).apply(null, arguments);
            }),
            IS = (a._emscripten_bind_btPoint2PointConstraint_get_m_setting_0 = function () {
                return (IS = a._emscripten_bind_btPoint2PointConstraint_get_m_setting_0 = a.asm.YP).apply(null, arguments);
            }),
            JS = (a._emscripten_bind_btPoint2PointConstraint_set_m_setting_1 = function () {
                return (JS = a._emscripten_bind_btPoint2PointConstraint_set_m_setting_1 = a.asm.ZP).apply(null, arguments);
            }),
            KS = (a._emscripten_bind_btPoint2PointConstraint_get_m_objectType_0 = function () {
                return (KS = a._emscripten_bind_btPoint2PointConstraint_get_m_objectType_0 = a.asm._P).apply(null, arguments);
            }),
            LS = (a._emscripten_bind_btPoint2PointConstraint_set_m_objectType_1 = function () {
                return (LS = a._emscripten_bind_btPoint2PointConstraint_set_m_objectType_1 = a.asm.$P).apply(null, arguments);
            }),
            MS = (a._emscripten_bind_btPoint2PointConstraint___destroy___0 = function () {
                return (MS = a._emscripten_bind_btPoint2PointConstraint___destroy___0 = a.asm.aQ).apply(null, arguments);
            }),
            NS = (a._emscripten_bind_btAngularLimit_btAngularLimit_0 = function () {
                return (NS = a._emscripten_bind_btAngularLimit_btAngularLimit_0 = a.asm.bQ).apply(null, arguments);
            }),
            OS = (a._emscripten_bind_btAngularLimit_set_2 = function () {
                return (OS = a._emscripten_bind_btAngularLimit_set_2 = a.asm.cQ).apply(null, arguments);
            }),
            PS = (a._emscripten_bind_btAngularLimit_set_3 = function () {
                return (PS = a._emscripten_bind_btAngularLimit_set_3 = a.asm.dQ).apply(null, arguments);
            }),
            QS = (a._emscripten_bind_btAngularLimit_set_4 = function () {
                return (QS = a._emscripten_bind_btAngularLimit_set_4 = a.asm.eQ).apply(null, arguments);
            }),
            RS = (a._emscripten_bind_btAngularLimit_set_5 = function () {
                return (RS = a._emscripten_bind_btAngularLimit_set_5 = a.asm.fQ).apply(null, arguments);
            }),
            SS = (a._emscripten_bind_btAngularLimit_getSoftness_0 = function () {
                return (SS = a._emscripten_bind_btAngularLimit_getSoftness_0 = a.asm.gQ).apply(null, arguments);
            }),
            TS = (a._emscripten_bind_btAngularLimit_getBiasFactor_0 = function () {
                return (TS = a._emscripten_bind_btAngularLimit_getBiasFactor_0 = a.asm.hQ).apply(null, arguments);
            }),
            US = (a._emscripten_bind_btAngularLimit_getRelaxationFactor_0 = function () {
                return (US = a._emscripten_bind_btAngularLimit_getRelaxationFactor_0 = a.asm.iQ).apply(null, arguments);
            }),
            VS = (a._emscripten_bind_btAngularLimit_getCorrection_0 = function () {
                return (VS = a._emscripten_bind_btAngularLimit_getCorrection_0 = a.asm.jQ).apply(null, arguments);
            }),
            WS = (a._emscripten_bind_btAngularLimit_getSign_0 = function () {
                return (WS = a._emscripten_bind_btAngularLimit_getSign_0 = a.asm.kQ).apply(null, arguments);
            }),
            XS = (a._emscripten_bind_btAngularLimit_getHalfRange_0 = function () {
                return (XS = a._emscripten_bind_btAngularLimit_getHalfRange_0 = a.asm.lQ).apply(null, arguments);
            }),
            YS = (a._emscripten_bind_btAngularLimit_isLimit_0 = function () {
                return (YS = a._emscripten_bind_btAngularLimit_isLimit_0 = a.asm.mQ).apply(null, arguments);
            }),
            ZS = (a._emscripten_bind_btAngularLimit_fit_1 = function () {
                return (ZS = a._emscripten_bind_btAngularLimit_fit_1 = a.asm.nQ).apply(null, arguments);
            }),
            $S = (a._emscripten_bind_btAngularLimit_getError_0 = function () {
                return ($S = a._emscripten_bind_btAngularLimit_getError_0 = a.asm.oQ).apply(null, arguments);
            }),
            aT = (a._emscripten_bind_btAngularLimit_getLow_0 = function () {
                return (aT = a._emscripten_bind_btAngularLimit_getLow_0 = a.asm.pQ).apply(null, arguments);
            }),
            bT = (a._emscripten_bind_btAngularLimit_getHigh_0 = function () {
                return (bT = a._emscripten_bind_btAngularLimit_getHigh_0 = a.asm.qQ).apply(null, arguments);
            }),
            cT = (a._emscripten_bind_btAngularLimit___destroy___0 = function () {
                return (cT = a._emscripten_bind_btAngularLimit___destroy___0 = a.asm.rQ).apply(null, arguments);
            }),
            dT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_2 = function () {
                return (dT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_2 = a.asm.sQ).apply(null, arguments);
            }),
            eT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_3 = function () {
                return (eT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_3 = a.asm.tQ).apply(null, arguments);
            }),
            fT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_4 = function () {
                return (fT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_4 = a.asm.uQ).apply(null, arguments);
            }),
            gT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_5 = function () {
                return (gT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_5 = a.asm.vQ).apply(null, arguments);
            }),
            hT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_6 = function () {
                return (hT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_6 = a.asm.wQ).apply(null, arguments);
            }),
            iT = (a._emscripten_bind_btHingeConstraint_btHingeConstraint_7 = function () {
                return (iT = a._emscripten_bind_btHingeConstraint_btHingeConstraint_7 = a.asm.xQ).apply(null, arguments);
            }),
            jT = (a._emscripten_bind_btHingeConstraint_buildJacobian_0 = function () {
                return (jT = a._emscripten_bind_btHingeConstraint_buildJacobian_0 = a.asm.yQ).apply(null, arguments);
            }),
            kT = (a._emscripten_bind_btHingeConstraint_updateRHS_1 = function () {
                return (kT = a._emscripten_bind_btHingeConstraint_updateRHS_1 = a.asm.zQ).apply(null, arguments);
            }),
            lT = (a._emscripten_bind_btHingeConstraint_getRigidBodyA_0 = function () {
                return (lT = a._emscripten_bind_btHingeConstraint_getRigidBodyA_0 = a.asm.AQ).apply(null, arguments);
            }),
            mT = (a._emscripten_bind_btHingeConstraint_getRigidBodyB_0 = function () {
                return (mT = a._emscripten_bind_btHingeConstraint_getRigidBodyB_0 = a.asm.BQ).apply(null, arguments);
            }),
            nT = (a._emscripten_bind_btHingeConstraint_getFrameOffsetA_0 = function () {
                return (nT = a._emscripten_bind_btHingeConstraint_getFrameOffsetA_0 = a.asm.CQ).apply(null, arguments);
            }),
            oT = (a._emscripten_bind_btHingeConstraint_getFrameOffsetB_0 = function () {
                return (oT = a._emscripten_bind_btHingeConstraint_getFrameOffsetB_0 = a.asm.DQ).apply(null, arguments);
            }),
            pT = (a._emscripten_bind_btHingeConstraint_setFrames_2 = function () {
                return (pT = a._emscripten_bind_btHingeConstraint_setFrames_2 = a.asm.EQ).apply(null, arguments);
            }),
            qT = (a._emscripten_bind_btHingeConstraint_setAngularOnly_1 = function () {
                return (qT = a._emscripten_bind_btHingeConstraint_setAngularOnly_1 = a.asm.FQ).apply(null, arguments);
            }),
            rT = (a._emscripten_bind_btHingeConstraint_enableAngularMotor_3 = function () {
                return (rT = a._emscripten_bind_btHingeConstraint_enableAngularMotor_3 = a.asm.GQ).apply(null, arguments);
            }),
            sT = (a._emscripten_bind_btHingeConstraint_enableMotor_1 = function () {
                return (sT = a._emscripten_bind_btHingeConstraint_enableMotor_1 = a.asm.HQ).apply(null, arguments);
            }),
            tT = (a._emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 = function () {
                return (tT = a._emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 = a.asm.IQ).apply(null, arguments);
            }),
            uT = (a._emscripten_bind_btHingeConstraint_setMotorTargetVelocity_1 = function () {
                return (uT = a._emscripten_bind_btHingeConstraint_setMotorTargetVelocity_1 = a.asm.JQ).apply(null, arguments);
            }),
            vT = (a._emscripten_bind_btHingeConstraint_setMotorTarget_2 = function () {
                return (vT = a._emscripten_bind_btHingeConstraint_setMotorTarget_2 = a.asm.KQ).apply(null, arguments);
            }),
            wT = (a._emscripten_bind_btHingeConstraint_setLimit_4 = function () {
                return (wT = a._emscripten_bind_btHingeConstraint_setLimit_4 = a.asm.LQ).apply(null, arguments);
            }),
            xT = (a._emscripten_bind_btHingeConstraint_setLimit_5 = function () {
                return (xT = a._emscripten_bind_btHingeConstraint_setLimit_5 = a.asm.MQ).apply(null, arguments);
            }),
            yT = (a._emscripten_bind_btHingeConstraint_getLimitSoftness_0 = function () {
                return (yT = a._emscripten_bind_btHingeConstraint_getLimitSoftness_0 = a.asm.NQ).apply(null, arguments);
            }),
            zT = (a._emscripten_bind_btHingeConstraint_getLimitBiasFactor_0 = function () {
                return (zT = a._emscripten_bind_btHingeConstraint_getLimitBiasFactor_0 = a.asm.OQ).apply(null, arguments);
            }),
            AT = (a._emscripten_bind_btHingeConstraint_getLimitRelaxationFactor_0 = function () {
                return (AT = a._emscripten_bind_btHingeConstraint_getLimitRelaxationFactor_0 = a.asm.PQ).apply(null, arguments);
            }),
            BT = (a._emscripten_bind_btHingeConstraint_setAxis_1 = function () {
                return (BT = a._emscripten_bind_btHingeConstraint_setAxis_1 = a.asm.QQ).apply(null, arguments);
            }),
            CT = (a._emscripten_bind_btHingeConstraint_hasLimit_0 = function () {
                return (CT = a._emscripten_bind_btHingeConstraint_hasLimit_0 = a.asm.RQ).apply(null, arguments);
            }),
            DT = (a._emscripten_bind_btHingeConstraint_getLowerLimit_0 = function () {
                return (DT = a._emscripten_bind_btHingeConstraint_getLowerLimit_0 = a.asm.SQ).apply(null, arguments);
            }),
            ET = (a._emscripten_bind_btHingeConstraint_getUpperLimit_0 = function () {
                return (ET = a._emscripten_bind_btHingeConstraint_getUpperLimit_0 = a.asm.TQ).apply(null, arguments);
            }),
            FT = (a._emscripten_bind_btHingeConstraint_getHingeAngle_0 = function () {
                return (FT = a._emscripten_bind_btHingeConstraint_getHingeAngle_0 = a.asm.UQ).apply(null, arguments);
            }),
            GT = (a._emscripten_bind_btHingeConstraint_getHingeAngle_2 = function () {
                return (GT = a._emscripten_bind_btHingeConstraint_getHingeAngle_2 = a.asm.VQ).apply(null, arguments);
            }),
            HT = (a._emscripten_bind_btHingeConstraint_testLimit_2 = function () {
                return (HT = a._emscripten_bind_btHingeConstraint_testLimit_2 = a.asm.WQ).apply(null, arguments);
            }),
            IT = (a._emscripten_bind_btHingeConstraint_getAFrame_0 = function () {
                return (IT = a._emscripten_bind_btHingeConstraint_getAFrame_0 = a.asm.XQ).apply(null, arguments);
            }),
            JT = (a._emscripten_bind_btHingeConstraint_getBFrame_0 = function () {
                return (JT = a._emscripten_bind_btHingeConstraint_getBFrame_0 = a.asm.YQ).apply(null, arguments);
            }),
            KT = (a._emscripten_bind_btHingeConstraint_getSolveLimit_0 = function () {
                return (KT = a._emscripten_bind_btHingeConstraint_getSolveLimit_0 = a.asm.ZQ).apply(null, arguments);
            }),
            LT = (a._emscripten_bind_btHingeConstraint_getLimitSign_0 = function () {
                return (LT = a._emscripten_bind_btHingeConstraint_getLimitSign_0 = a.asm._Q).apply(null, arguments);
            }),
            MT = (a._emscripten_bind_btHingeConstraint_getAngularOnly_0 = function () {
                return (MT = a._emscripten_bind_btHingeConstraint_getAngularOnly_0 = a.asm.$Q).apply(null, arguments);
            }),
            NT = (a._emscripten_bind_btHingeConstraint_getEnableAngularMotor_0 = function () {
                return (NT = a._emscripten_bind_btHingeConstraint_getEnableAngularMotor_0 = a.asm.aR).apply(null, arguments);
            }),
            OT = (a._emscripten_bind_btHingeConstraint_getMotorTargetVelocity_0 = function () {
                return (OT = a._emscripten_bind_btHingeConstraint_getMotorTargetVelocity_0 = a.asm.bR).apply(null, arguments);
            }),
            PT = (a._emscripten_bind_btHingeConstraint_getMaxMotorImpulse_0 = function () {
                return (PT = a._emscripten_bind_btHingeConstraint_getMaxMotorImpulse_0 = a.asm.cR).apply(null, arguments);
            }),
            QT = (a._emscripten_bind_btHingeConstraint_getUseFrameOffset_0 = function () {
                return (QT = a._emscripten_bind_btHingeConstraint_getUseFrameOffset_0 = a.asm.dR).apply(null, arguments);
            }),
            RT = (a._emscripten_bind_btHingeConstraint_setUseFrameOffset_1 = function () {
                return (RT = a._emscripten_bind_btHingeConstraint_setUseFrameOffset_1 = a.asm.eR).apply(null, arguments);
            }),
            ST = (a._emscripten_bind_btHingeConstraint_getUseReferenceFrameA_0 = function () {
                return (ST = a._emscripten_bind_btHingeConstraint_getUseReferenceFrameA_0 = a.asm.fR).apply(null, arguments);
            }),
            TT = (a._emscripten_bind_btHingeConstraint_setUseReferenceFrameA_1 = function () {
                return (TT = a._emscripten_bind_btHingeConstraint_setUseReferenceFrameA_1 = a.asm.gR).apply(null, arguments);
            }),
            UT = (a._emscripten_bind_btHingeConstraint_setParam_2 = function () {
                return (UT = a._emscripten_bind_btHingeConstraint_setParam_2 = a.asm.hR).apply(null, arguments);
            }),
            VT = (a._emscripten_bind_btHingeConstraint_setParam_3 = function () {
                return (VT = a._emscripten_bind_btHingeConstraint_setParam_3 = a.asm.iR).apply(null, arguments);
            }),
            WT = (a._emscripten_bind_btHingeConstraint_getParam_1 = function () {
                return (WT = a._emscripten_bind_btHingeConstraint_getParam_1 = a.asm.jR).apply(null, arguments);
            }),
            XT = (a._emscripten_bind_btHingeConstraint_getParam_2 = function () {
                return (XT = a._emscripten_bind_btHingeConstraint_getParam_2 = a.asm.kR).apply(null, arguments);
            }),
            YT = (a._emscripten_bind_btHingeConstraint_getFlags_0 = function () {
                return (YT = a._emscripten_bind_btHingeConstraint_getFlags_0 = a.asm.lR).apply(null, arguments);
            }),
            ZT = (a._emscripten_bind_btHingeConstraint_getFixedBody_0 = function () {
                return (ZT = a._emscripten_bind_btHingeConstraint_getFixedBody_0 = a.asm.mR).apply(null, arguments);
            }),
            $T = (a._emscripten_bind_btHingeConstraint_getOverrideNumSolverIterations_0 = function () {
                return ($T = a._emscripten_bind_btHingeConstraint_getOverrideNumSolverIterations_0 = a.asm.nR).apply(null, arguments);
            }),
            aU = (a._emscripten_bind_btHingeConstraint_setOverrideNumSolverIterations_1 = function () {
                return (aU = a._emscripten_bind_btHingeConstraint_setOverrideNumSolverIterations_1 = a.asm.oR).apply(null, arguments);
            }),
            bU = (a._emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 = function () {
                return (bU = a._emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 = a.asm.pR).apply(null, arguments);
            }),
            cU = (a._emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 = function () {
                return (cU = a._emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 = a.asm.qR).apply(null, arguments);
            }),
            dU = (a._emscripten_bind_btHingeConstraint_isEnabled_0 = function () {
                return (dU = a._emscripten_bind_btHingeConstraint_isEnabled_0 = a.asm.rR).apply(null, arguments);
            }),
            eU = (a._emscripten_bind_btHingeConstraint_setEnabled_1 = function () {
                return (eU = a._emscripten_bind_btHingeConstraint_setEnabled_1 = a.asm.sR).apply(null, arguments);
            }),
            fU = (a._emscripten_bind_btHingeConstraint_getUserConstraintType_0 = function () {
                return (fU = a._emscripten_bind_btHingeConstraint_getUserConstraintType_0 = a.asm.tR).apply(null, arguments);
            }),
            gU = (a._emscripten_bind_btHingeConstraint_setUserConstraintType_1 = function () {
                return (gU = a._emscripten_bind_btHingeConstraint_setUserConstraintType_1 = a.asm.uR).apply(null, arguments);
            }),
            hU = (a._emscripten_bind_btHingeConstraint_setUserConstraintId_1 = function () {
                return (hU = a._emscripten_bind_btHingeConstraint_setUserConstraintId_1 = a.asm.vR).apply(null, arguments);
            }),
            iU = (a._emscripten_bind_btHingeConstraint_getUserConstraintId_0 = function () {
                return (iU = a._emscripten_bind_btHingeConstraint_getUserConstraintId_0 = a.asm.wR).apply(null, arguments);
            }),
            jU = (a._emscripten_bind_btHingeConstraint_setUserConstraintPtr_1 = function () {
                return (jU = a._emscripten_bind_btHingeConstraint_setUserConstraintPtr_1 = a.asm.xR).apply(null, arguments);
            }),
            kU = (a._emscripten_bind_btHingeConstraint_getUserConstraintPtr_0 = function () {
                return (kU = a._emscripten_bind_btHingeConstraint_getUserConstraintPtr_0 = a.asm.yR).apply(null, arguments);
            }),
            lU = (a._emscripten_bind_btHingeConstraint_setJointFeedback_1 = function () {
                return (lU = a._emscripten_bind_btHingeConstraint_setJointFeedback_1 = a.asm.zR).apply(null, arguments);
            }),
            mU = (a._emscripten_bind_btHingeConstraint_getJointFeedback_0 = function () {
                return (mU = a._emscripten_bind_btHingeConstraint_getJointFeedback_0 = a.asm.AR).apply(null, arguments);
            }),
            nU = (a._emscripten_bind_btHingeConstraint_getUid_0 = function () {
                return (nU = a._emscripten_bind_btHingeConstraint_getUid_0 = a.asm.BR).apply(null, arguments);
            }),
            oU = (a._emscripten_bind_btHingeConstraint_needsFeedback_0 = function () {
                return (oU = a._emscripten_bind_btHingeConstraint_needsFeedback_0 = a.asm.CR).apply(null, arguments);
            }),
            pU = (a._emscripten_bind_btHingeConstraint_enableFeedback_1 = function () {
                return (pU = a._emscripten_bind_btHingeConstraint_enableFeedback_1 = a.asm.DR).apply(null, arguments);
            }),
            qU = (a._emscripten_bind_btHingeConstraint_getAppliedImpulse_0 = function () {
                return (qU = a._emscripten_bind_btHingeConstraint_getAppliedImpulse_0 = a.asm.ER).apply(null, arguments);
            }),
            rU = (a._emscripten_bind_btHingeConstraint_getConstraintType_0 = function () {
                return (rU = a._emscripten_bind_btHingeConstraint_getConstraintType_0 = a.asm.FR).apply(null, arguments);
            }),
            sU = (a._emscripten_bind_btHingeConstraint_getObjectType_0 = function () {
                return (sU = a._emscripten_bind_btHingeConstraint_getObjectType_0 = a.asm.GR).apply(null, arguments);
            }),
            tU = (a._emscripten_bind_btHingeConstraint_get_m_objectType_0 = function () {
                return (tU = a._emscripten_bind_btHingeConstraint_get_m_objectType_0 = a.asm.HR).apply(null, arguments);
            }),
            uU = (a._emscripten_bind_btHingeConstraint_set_m_objectType_1 = function () {
                return (uU = a._emscripten_bind_btHingeConstraint_set_m_objectType_1 = a.asm.IR).apply(null, arguments);
            }),
            vU = (a._emscripten_bind_btHingeConstraint___destroy___0 = function () {
                return (vU = a._emscripten_bind_btHingeConstraint___destroy___0 = a.asm.JR).apply(null, arguments);
            }),
            wU = (a._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 = function () {
                return (wU = a._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 = a.asm.KR).apply(null, arguments);
            }),
            xU = (a._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 = function () {
                return (xU = a._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 = a.asm.LR).apply(null, arguments);
            }),
            yU = (a._emscripten_bind_btConeTwistConstraint_buildJacobian_0 = function () {
                return (yU = a._emscripten_bind_btConeTwistConstraint_buildJacobian_0 = a.asm.MR).apply(null, arguments);
            }),
            zU = (a._emscripten_bind_btConeTwistConstraint_updateRHS_1 = function () {
                return (zU = a._emscripten_bind_btConeTwistConstraint_updateRHS_1 = a.asm.NR).apply(null, arguments);
            }),
            AU = (a._emscripten_bind_btConeTwistConstraint_getRigidBodyA_0 = function () {
                return (AU = a._emscripten_bind_btConeTwistConstraint_getRigidBodyA_0 = a.asm.OR).apply(null, arguments);
            }),
            BU = (a._emscripten_bind_btConeTwistConstraint_getRigidBodyB_0 = function () {
                return (BU = a._emscripten_bind_btConeTwistConstraint_getRigidBodyB_0 = a.asm.PR).apply(null, arguments);
            }),
            CU = (a._emscripten_bind_btConeTwistConstraint_setAngularOnly_1 = function () {
                return (CU = a._emscripten_bind_btConeTwistConstraint_setAngularOnly_1 = a.asm.QR).apply(null, arguments);
            }),
            DU = (a._emscripten_bind_btConeTwistConstraint_getAngularOnly_0 = function () {
                return (DU = a._emscripten_bind_btConeTwistConstraint_getAngularOnly_0 = a.asm.RR).apply(null, arguments);
            }),
            EU = (a._emscripten_bind_btConeTwistConstraint_setLimit_2 = function () {
                return (EU = a._emscripten_bind_btConeTwistConstraint_setLimit_2 = a.asm.SR).apply(null, arguments);
            }),
            FU = (a._emscripten_bind_btConeTwistConstraint_setLimit_3 = function () {
                return (FU = a._emscripten_bind_btConeTwistConstraint_setLimit_3 = a.asm.TR).apply(null, arguments);
            }),
            GU = (a._emscripten_bind_btConeTwistConstraint_setLimit_4 = function () {
                return (GU = a._emscripten_bind_btConeTwistConstraint_setLimit_4 = a.asm.UR).apply(null, arguments);
            }),
            HU = (a._emscripten_bind_btConeTwistConstraint_setLimit_5 = function () {
                return (HU = a._emscripten_bind_btConeTwistConstraint_setLimit_5 = a.asm.VR).apply(null, arguments);
            }),
            IU = (a._emscripten_bind_btConeTwistConstraint_setLimit_6 = function () {
                return (IU = a._emscripten_bind_btConeTwistConstraint_setLimit_6 = a.asm.WR).apply(null, arguments);
            }),
            JU = (a._emscripten_bind_btConeTwistConstraint_getLimit_1 = function () {
                return (JU = a._emscripten_bind_btConeTwistConstraint_getLimit_1 = a.asm.XR).apply(null, arguments);
            }),
            KU = (a._emscripten_bind_btConeTwistConstraint_getAFrame_0 = function () {
                return (KU = a._emscripten_bind_btConeTwistConstraint_getAFrame_0 = a.asm.YR).apply(null, arguments);
            }),
            LU = (a._emscripten_bind_btConeTwistConstraint_getBFrame_0 = function () {
                return (LU = a._emscripten_bind_btConeTwistConstraint_getBFrame_0 = a.asm.ZR).apply(null, arguments);
            }),
            MU = (a._emscripten_bind_btConeTwistConstraint_getSolveTwistLimit_0 = function () {
                return (MU = a._emscripten_bind_btConeTwistConstraint_getSolveTwistLimit_0 = a.asm._R).apply(null, arguments);
            }),
            NU = (a._emscripten_bind_btConeTwistConstraint_getSolveSwingLimit_0 = function () {
                return (NU = a._emscripten_bind_btConeTwistConstraint_getSolveSwingLimit_0 = a.asm.$R).apply(null, arguments);
            }),
            OU = (a._emscripten_bind_btConeTwistConstraint_getTwistLimitSign_0 = function () {
                return (OU = a._emscripten_bind_btConeTwistConstraint_getTwistLimitSign_0 = a.asm.aS).apply(null, arguments);
            }),
            PU = (a._emscripten_bind_btConeTwistConstraint_calcAngleInfo_0 = function () {
                return (PU = a._emscripten_bind_btConeTwistConstraint_calcAngleInfo_0 = a.asm.bS).apply(null, arguments);
            }),
            QU = (a._emscripten_bind_btConeTwistConstraint_calcAngleInfo2_4 = function () {
                return (QU = a._emscripten_bind_btConeTwistConstraint_calcAngleInfo2_4 = a.asm.cS).apply(null, arguments);
            }),
            RU = (a._emscripten_bind_btConeTwistConstraint_getSwingSpan1_0 = function () {
                return (RU = a._emscripten_bind_btConeTwistConstraint_getSwingSpan1_0 = a.asm.dS).apply(null, arguments);
            }),
            SU = (a._emscripten_bind_btConeTwistConstraint_getSwingSpan2_0 = function () {
                return (SU = a._emscripten_bind_btConeTwistConstraint_getSwingSpan2_0 = a.asm.eS).apply(null, arguments);
            }),
            TU = (a._emscripten_bind_btConeTwistConstraint_getTwistSpan_0 = function () {
                return (TU = a._emscripten_bind_btConeTwistConstraint_getTwistSpan_0 = a.asm.fS).apply(null, arguments);
            }),
            UU = (a._emscripten_bind_btConeTwistConstraint_getLimitSoftness_0 = function () {
                return (UU = a._emscripten_bind_btConeTwistConstraint_getLimitSoftness_0 = a.asm.gS).apply(null, arguments);
            }),
            VU = (a._emscripten_bind_btConeTwistConstraint_getBiasFactor_0 = function () {
                return (VU = a._emscripten_bind_btConeTwistConstraint_getBiasFactor_0 = a.asm.hS).apply(null, arguments);
            }),
            WU = (a._emscripten_bind_btConeTwistConstraint_getRelaxationFactor_0 = function () {
                return (WU = a._emscripten_bind_btConeTwistConstraint_getRelaxationFactor_0 = a.asm.iS).apply(null, arguments);
            }),
            XU = (a._emscripten_bind_btConeTwistConstraint_getTwistAngle_0 = function () {
                return (XU = a._emscripten_bind_btConeTwistConstraint_getTwistAngle_0 = a.asm.jS).apply(null, arguments);
            }),
            YU = (a._emscripten_bind_btConeTwistConstraint_isPastSwingLimit_0 = function () {
                return (YU = a._emscripten_bind_btConeTwistConstraint_isPastSwingLimit_0 = a.asm.kS).apply(null, arguments);
            }),
            ZU = (a._emscripten_bind_btConeTwistConstraint_getDamping_0 = function () {
                return (ZU = a._emscripten_bind_btConeTwistConstraint_getDamping_0 = a.asm.lS).apply(null, arguments);
            }),
            $U = (a._emscripten_bind_btConeTwistConstraint_setDamping_1 = function () {
                return ($U = a._emscripten_bind_btConeTwistConstraint_setDamping_1 = a.asm.mS).apply(null, arguments);
            }),
            aV = (a._emscripten_bind_btConeTwistConstraint_enableMotor_1 = function () {
                return (aV = a._emscripten_bind_btConeTwistConstraint_enableMotor_1 = a.asm.nS).apply(null, arguments);
            }),
            bV = (a._emscripten_bind_btConeTwistConstraint_isMotorEnabled_0 = function () {
                return (bV = a._emscripten_bind_btConeTwistConstraint_isMotorEnabled_0 = a.asm.oS).apply(null, arguments);
            }),
            cV = (a._emscripten_bind_btConeTwistConstraint_getMaxMotorImpulse_0 = function () {
                return (cV = a._emscripten_bind_btConeTwistConstraint_getMaxMotorImpulse_0 = a.asm.pS).apply(null, arguments);
            }),
            dV = (a._emscripten_bind_btConeTwistConstraint_isMaxMotorImpulseNormalized_0 = function () {
                return (dV = a._emscripten_bind_btConeTwistConstraint_isMaxMotorImpulseNormalized_0 = a.asm.qS).apply(null, arguments);
            }),
            eV = (a._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 = function () {
                return (eV = a._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 = a.asm.rS).apply(null, arguments);
            }),
            fV = (a._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 = function () {
                return (fV = a._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 = a.asm.sS).apply(null, arguments);
            }),
            gV = (a._emscripten_bind_btConeTwistConstraint_getFixThresh_0 = function () {
                return (gV = a._emscripten_bind_btConeTwistConstraint_getFixThresh_0 = a.asm.tS).apply(null, arguments);
            }),
            hV = (a._emscripten_bind_btConeTwistConstraint_setFixThresh_1 = function () {
                return (hV = a._emscripten_bind_btConeTwistConstraint_setFixThresh_1 = a.asm.uS).apply(null, arguments);
            }),
            iV = (a._emscripten_bind_btConeTwistConstraint_setMotorTarget_1 = function () {
                return (iV = a._emscripten_bind_btConeTwistConstraint_setMotorTarget_1 = a.asm.vS).apply(null, arguments);
            }),
            jV = (a._emscripten_bind_btConeTwistConstraint_getMotorTarget_0 = function () {
                return (jV = a._emscripten_bind_btConeTwistConstraint_getMotorTarget_0 = a.asm.wS).apply(null, arguments);
            }),
            kV = (a._emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 = function () {
                return (kV = a._emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 = a.asm.xS).apply(null, arguments);
            }),
            lV = (a._emscripten_bind_btConeTwistConstraint_GetPointForAngle_2 = function () {
                return (lV = a._emscripten_bind_btConeTwistConstraint_GetPointForAngle_2 = a.asm.yS).apply(null, arguments);
            }),
            mV = (a._emscripten_bind_btConeTwistConstraint_setParam_2 = function () {
                return (mV = a._emscripten_bind_btConeTwistConstraint_setParam_2 = a.asm.zS).apply(null, arguments);
            }),
            nV = (a._emscripten_bind_btConeTwistConstraint_setParam_3 = function () {
                return (nV = a._emscripten_bind_btConeTwistConstraint_setParam_3 = a.asm.AS).apply(null, arguments);
            }),
            oV = (a._emscripten_bind_btConeTwistConstraint_getFrameOffsetA_0 = function () {
                return (oV = a._emscripten_bind_btConeTwistConstraint_getFrameOffsetA_0 = a.asm.BS).apply(null, arguments);
            }),
            pV = (a._emscripten_bind_btConeTwistConstraint_getFrameOffsetB_0 = function () {
                return (pV = a._emscripten_bind_btConeTwistConstraint_getFrameOffsetB_0 = a.asm.CS).apply(null, arguments);
            }),
            qV = (a._emscripten_bind_btConeTwistConstraint_getParam_1 = function () {
                return (qV = a._emscripten_bind_btConeTwistConstraint_getParam_1 = a.asm.DS).apply(null, arguments);
            }),
            rV = (a._emscripten_bind_btConeTwistConstraint_getParam_2 = function () {
                return (rV = a._emscripten_bind_btConeTwistConstraint_getParam_2 = a.asm.ES).apply(null, arguments);
            }),
            sV = (a._emscripten_bind_btConeTwistConstraint_getFlags_0 = function () {
                return (sV = a._emscripten_bind_btConeTwistConstraint_getFlags_0 = a.asm.FS).apply(null, arguments);
            }),
            tV = (a._emscripten_bind_btConeTwistConstraint_getFixedBody_0 = function () {
                return (tV = a._emscripten_bind_btConeTwistConstraint_getFixedBody_0 = a.asm.GS).apply(null, arguments);
            }),
            uV = (a._emscripten_bind_btConeTwistConstraint_getOverrideNumSolverIterations_0 = function () {
                return (uV = a._emscripten_bind_btConeTwistConstraint_getOverrideNumSolverIterations_0 = a.asm.HS).apply(null, arguments);
            }),
            vV = (a._emscripten_bind_btConeTwistConstraint_setOverrideNumSolverIterations_1 = function () {
                return (vV = a._emscripten_bind_btConeTwistConstraint_setOverrideNumSolverIterations_1 = a.asm.IS).apply(null, arguments);
            }),
            wV = (a._emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 = function () {
                return (wV = a._emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 = a.asm.JS).apply(null, arguments);
            }),
            xV = (a._emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 = function () {
                return (xV = a._emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 = a.asm.KS).apply(null, arguments);
            }),
            yV = (a._emscripten_bind_btConeTwistConstraint_isEnabled_0 = function () {
                return (yV = a._emscripten_bind_btConeTwistConstraint_isEnabled_0 = a.asm.LS).apply(null, arguments);
            }),
            zV = (a._emscripten_bind_btConeTwistConstraint_setEnabled_1 = function () {
                return (zV = a._emscripten_bind_btConeTwistConstraint_setEnabled_1 = a.asm.MS).apply(null, arguments);
            }),
            AV = (a._emscripten_bind_btConeTwistConstraint_getUserConstraintType_0 = function () {
                return (AV = a._emscripten_bind_btConeTwistConstraint_getUserConstraintType_0 = a.asm.NS).apply(null, arguments);
            }),
            BV = (a._emscripten_bind_btConeTwistConstraint_setUserConstraintType_1 = function () {
                return (BV = a._emscripten_bind_btConeTwistConstraint_setUserConstraintType_1 = a.asm.OS).apply(null, arguments);
            }),
            CV = (a._emscripten_bind_btConeTwistConstraint_setUserConstraintId_1 = function () {
                return (CV = a._emscripten_bind_btConeTwistConstraint_setUserConstraintId_1 = a.asm.PS).apply(null, arguments);
            }),
            DV = (a._emscripten_bind_btConeTwistConstraint_getUserConstraintId_0 = function () {
                return (DV = a._emscripten_bind_btConeTwistConstraint_getUserConstraintId_0 = a.asm.QS).apply(null, arguments);
            }),
            EV = (a._emscripten_bind_btConeTwistConstraint_setUserConstraintPtr_1 = function () {
                return (EV = a._emscripten_bind_btConeTwistConstraint_setUserConstraintPtr_1 = a.asm.RS).apply(null, arguments);
            }),
            FV = (a._emscripten_bind_btConeTwistConstraint_getUserConstraintPtr_0 = function () {
                return (FV = a._emscripten_bind_btConeTwistConstraint_getUserConstraintPtr_0 = a.asm.SS).apply(null, arguments);
            }),
            GV = (a._emscripten_bind_btConeTwistConstraint_setJointFeedback_1 = function () {
                return (GV = a._emscripten_bind_btConeTwistConstraint_setJointFeedback_1 = a.asm.TS).apply(null, arguments);
            }),
            HV = (a._emscripten_bind_btConeTwistConstraint_getJointFeedback_0 = function () {
                return (HV = a._emscripten_bind_btConeTwistConstraint_getJointFeedback_0 = a.asm.US).apply(null, arguments);
            }),
            IV = (a._emscripten_bind_btConeTwistConstraint_getUid_0 = function () {
                return (IV = a._emscripten_bind_btConeTwistConstraint_getUid_0 = a.asm.VS).apply(null, arguments);
            }),
            JV = (a._emscripten_bind_btConeTwistConstraint_needsFeedback_0 = function () {
                return (JV = a._emscripten_bind_btConeTwistConstraint_needsFeedback_0 = a.asm.WS).apply(null, arguments);
            }),
            KV = (a._emscripten_bind_btConeTwistConstraint_enableFeedback_1 = function () {
                return (KV = a._emscripten_bind_btConeTwistConstraint_enableFeedback_1 = a.asm.XS).apply(null, arguments);
            }),
            LV = (a._emscripten_bind_btConeTwistConstraint_getAppliedImpulse_0 = function () {
                return (LV = a._emscripten_bind_btConeTwistConstraint_getAppliedImpulse_0 = a.asm.YS).apply(null, arguments);
            }),
            MV = (a._emscripten_bind_btConeTwistConstraint_getConstraintType_0 = function () {
                return (MV = a._emscripten_bind_btConeTwistConstraint_getConstraintType_0 = a.asm.ZS).apply(null, arguments);
            }),
            NV = (a._emscripten_bind_btConeTwistConstraint_getObjectType_0 = function () {
                return (NV = a._emscripten_bind_btConeTwistConstraint_getObjectType_0 = a.asm._S).apply(null, arguments);
            }),
            OV = (a._emscripten_bind_btConeTwistConstraint_get_m_objectType_0 = function () {
                return (OV = a._emscripten_bind_btConeTwistConstraint_get_m_objectType_0 = a.asm.$S).apply(null, arguments);
            }),
            PV = (a._emscripten_bind_btConeTwistConstraint_set_m_objectType_1 = function () {
                return (PV = a._emscripten_bind_btConeTwistConstraint_set_m_objectType_1 = a.asm.aT).apply(null, arguments);
            }),
            QV = (a._emscripten_bind_btConeTwistConstraint___destroy___0 = function () {
                return (QV = a._emscripten_bind_btConeTwistConstraint___destroy___0 = a.asm.bT).apply(null, arguments);
            }),
            RV = (a._emscripten_bind_btRotationalLimitMotor_btRotationalLimitMotor_0 = function () {
                return (RV = a._emscripten_bind_btRotationalLimitMotor_btRotationalLimitMotor_0 = a.asm.cT).apply(null, arguments);
            }),
            SV = (a._emscripten_bind_btRotationalLimitMotor_isLimited_0 = function () {
                return (SV = a._emscripten_bind_btRotationalLimitMotor_isLimited_0 = a.asm.dT).apply(null, arguments);
            }),
            TV = (a._emscripten_bind_btRotationalLimitMotor_needApplyTorques_0 = function () {
                return (TV = a._emscripten_bind_btRotationalLimitMotor_needApplyTorques_0 = a.asm.eT).apply(null, arguments);
            }),
            UV = (a._emscripten_bind_btRotationalLimitMotor_testLimitValue_1 = function () {
                return (UV = a._emscripten_bind_btRotationalLimitMotor_testLimitValue_1 = a.asm.fT).apply(null, arguments);
            }),
            VV = (a._emscripten_bind_btRotationalLimitMotor_solveAngularLimits_5 = function () {
                return (VV = a._emscripten_bind_btRotationalLimitMotor_solveAngularLimits_5 = a.asm.gT).apply(null, arguments);
            }),
            WV = (a._emscripten_bind_btRotationalLimitMotor_get_m_loLimit_0 = function () {
                return (WV = a._emscripten_bind_btRotationalLimitMotor_get_m_loLimit_0 = a.asm.hT).apply(null, arguments);
            }),
            XV = (a._emscripten_bind_btRotationalLimitMotor_set_m_loLimit_1 = function () {
                return (XV = a._emscripten_bind_btRotationalLimitMotor_set_m_loLimit_1 = a.asm.iT).apply(null, arguments);
            }),
            YV = (a._emscripten_bind_btRotationalLimitMotor_get_m_hiLimit_0 = function () {
                return (YV = a._emscripten_bind_btRotationalLimitMotor_get_m_hiLimit_0 = a.asm.jT).apply(null, arguments);
            }),
            ZV = (a._emscripten_bind_btRotationalLimitMotor_set_m_hiLimit_1 = function () {
                return (ZV = a._emscripten_bind_btRotationalLimitMotor_set_m_hiLimit_1 = a.asm.kT).apply(null, arguments);
            }),
            $V = (a._emscripten_bind_btRotationalLimitMotor_get_m_targetVelocity_0 = function () {
                return ($V = a._emscripten_bind_btRotationalLimitMotor_get_m_targetVelocity_0 = a.asm.lT).apply(null, arguments);
            }),
            aW = (a._emscripten_bind_btRotationalLimitMotor_set_m_targetVelocity_1 = function () {
                return (aW = a._emscripten_bind_btRotationalLimitMotor_set_m_targetVelocity_1 = a.asm.mT).apply(null, arguments);
            }),
            bW = (a._emscripten_bind_btRotationalLimitMotor_get_m_maxMotorForce_0 = function () {
                return (bW = a._emscripten_bind_btRotationalLimitMotor_get_m_maxMotorForce_0 = a.asm.nT).apply(null, arguments);
            }),
            cW = (a._emscripten_bind_btRotationalLimitMotor_set_m_maxMotorForce_1 = function () {
                return (cW = a._emscripten_bind_btRotationalLimitMotor_set_m_maxMotorForce_1 = a.asm.oT).apply(null, arguments);
            }),
            dW = (a._emscripten_bind_btRotationalLimitMotor_get_m_maxLimitForce_0 = function () {
                return (dW = a._emscripten_bind_btRotationalLimitMotor_get_m_maxLimitForce_0 = a.asm.pT).apply(null, arguments);
            }),
            eW = (a._emscripten_bind_btRotationalLimitMotor_set_m_maxLimitForce_1 = function () {
                return (eW = a._emscripten_bind_btRotationalLimitMotor_set_m_maxLimitForce_1 = a.asm.qT).apply(null, arguments);
            }),
            fW = (a._emscripten_bind_btRotationalLimitMotor_get_m_damping_0 = function () {
                return (fW = a._emscripten_bind_btRotationalLimitMotor_get_m_damping_0 = a.asm.rT).apply(null, arguments);
            }),
            gW = (a._emscripten_bind_btRotationalLimitMotor_set_m_damping_1 = function () {
                return (gW = a._emscripten_bind_btRotationalLimitMotor_set_m_damping_1 = a.asm.sT).apply(null, arguments);
            }),
            hW = (a._emscripten_bind_btRotationalLimitMotor_get_m_limitSoftness_0 = function () {
                return (hW = a._emscripten_bind_btRotationalLimitMotor_get_m_limitSoftness_0 = a.asm.tT).apply(null, arguments);
            }),
            iW = (a._emscripten_bind_btRotationalLimitMotor_set_m_limitSoftness_1 = function () {
                return (iW = a._emscripten_bind_btRotationalLimitMotor_set_m_limitSoftness_1 = a.asm.uT).apply(null, arguments);
            }),
            jW = (a._emscripten_bind_btRotationalLimitMotor_get_m_normalCFM_0 = function () {
                return (jW = a._emscripten_bind_btRotationalLimitMotor_get_m_normalCFM_0 = a.asm.vT).apply(null, arguments);
            }),
            kW = (a._emscripten_bind_btRotationalLimitMotor_set_m_normalCFM_1 = function () {
                return (kW = a._emscripten_bind_btRotationalLimitMotor_set_m_normalCFM_1 = a.asm.wT).apply(null, arguments);
            }),
            lW = (a._emscripten_bind_btRotationalLimitMotor_get_m_stopERP_0 = function () {
                return (lW = a._emscripten_bind_btRotationalLimitMotor_get_m_stopERP_0 = a.asm.xT).apply(null, arguments);
            }),
            mW = (a._emscripten_bind_btRotationalLimitMotor_set_m_stopERP_1 = function () {
                return (mW = a._emscripten_bind_btRotationalLimitMotor_set_m_stopERP_1 = a.asm.yT).apply(null, arguments);
            }),
            nW = (a._emscripten_bind_btRotationalLimitMotor_get_m_stopCFM_0 = function () {
                return (nW = a._emscripten_bind_btRotationalLimitMotor_get_m_stopCFM_0 = a.asm.zT).apply(null, arguments);
            }),
            oW = (a._emscripten_bind_btRotationalLimitMotor_set_m_stopCFM_1 = function () {
                return (oW = a._emscripten_bind_btRotationalLimitMotor_set_m_stopCFM_1 = a.asm.AT).apply(null, arguments);
            }),
            pW = (a._emscripten_bind_btRotationalLimitMotor_get_m_bounce_0 = function () {
                return (pW = a._emscripten_bind_btRotationalLimitMotor_get_m_bounce_0 = a.asm.BT).apply(null, arguments);
            }),
            qW = (a._emscripten_bind_btRotationalLimitMotor_set_m_bounce_1 = function () {
                return (qW = a._emscripten_bind_btRotationalLimitMotor_set_m_bounce_1 = a.asm.CT).apply(null, arguments);
            }),
            rW = (a._emscripten_bind_btRotationalLimitMotor_get_m_enableMotor_0 = function () {
                return (rW = a._emscripten_bind_btRotationalLimitMotor_get_m_enableMotor_0 = a.asm.DT).apply(null, arguments);
            }),
            sW = (a._emscripten_bind_btRotationalLimitMotor_set_m_enableMotor_1 = function () {
                return (sW = a._emscripten_bind_btRotationalLimitMotor_set_m_enableMotor_1 = a.asm.ET).apply(null, arguments);
            }),
            tW = (a._emscripten_bind_btRotationalLimitMotor_get_m_currentLimitError_0 = function () {
                return (tW = a._emscripten_bind_btRotationalLimitMotor_get_m_currentLimitError_0 = a.asm.FT).apply(null, arguments);
            }),
            uW = (a._emscripten_bind_btRotationalLimitMotor_set_m_currentLimitError_1 = function () {
                return (uW = a._emscripten_bind_btRotationalLimitMotor_set_m_currentLimitError_1 = a.asm.GT).apply(null, arguments);
            }),
            vW = (a._emscripten_bind_btRotationalLimitMotor_get_m_currentPosition_0 = function () {
                return (vW = a._emscripten_bind_btRotationalLimitMotor_get_m_currentPosition_0 = a.asm.HT).apply(null, arguments);
            }),
            wW = (a._emscripten_bind_btRotationalLimitMotor_set_m_currentPosition_1 = function () {
                return (wW = a._emscripten_bind_btRotationalLimitMotor_set_m_currentPosition_1 = a.asm.IT).apply(null, arguments);
            }),
            xW = (a._emscripten_bind_btRotationalLimitMotor_get_m_currentLimit_0 = function () {
                return (xW = a._emscripten_bind_btRotationalLimitMotor_get_m_currentLimit_0 = a.asm.JT).apply(null, arguments);
            }),
            yW = (a._emscripten_bind_btRotationalLimitMotor_set_m_currentLimit_1 = function () {
                return (yW = a._emscripten_bind_btRotationalLimitMotor_set_m_currentLimit_1 = a.asm.KT).apply(null, arguments);
            }),
            zW = (a._emscripten_bind_btRotationalLimitMotor_get_m_accumulatedImpulse_0 = function () {
                return (zW = a._emscripten_bind_btRotationalLimitMotor_get_m_accumulatedImpulse_0 = a.asm.LT).apply(null, arguments);
            }),
            AW = (a._emscripten_bind_btRotationalLimitMotor_set_m_accumulatedImpulse_1 = function () {
                return (AW = a._emscripten_bind_btRotationalLimitMotor_set_m_accumulatedImpulse_1 = a.asm.MT).apply(null, arguments);
            }),
            BW = (a._emscripten_bind_btRotationalLimitMotor___destroy___0 = function () {
                return (BW = a._emscripten_bind_btRotationalLimitMotor___destroy___0 = a.asm.NT).apply(null, arguments);
            }),
            CW = (a._emscripten_bind_btTranslationalLimitMotor_btTranslationalLimitMotor_0 = function () {
                return (CW = a._emscripten_bind_btTranslationalLimitMotor_btTranslationalLimitMotor_0 = a.asm.OT).apply(null, arguments);
            }),
            DW = (a._emscripten_bind_btTranslationalLimitMotor_isLimited_1 = function () {
                return (DW = a._emscripten_bind_btTranslationalLimitMotor_isLimited_1 = a.asm.PT).apply(null, arguments);
            }),
            EW = (a._emscripten_bind_btTranslationalLimitMotor_needApplyForce_1 = function () {
                return (EW = a._emscripten_bind_btTranslationalLimitMotor_needApplyForce_1 = a.asm.QT).apply(null, arguments);
            }),
            FW = (a._emscripten_bind_btTranslationalLimitMotor_testLimitValue_2 = function () {
                return (FW = a._emscripten_bind_btTranslationalLimitMotor_testLimitValue_2 = a.asm.RT).apply(null, arguments);
            }),
            GW = (a._emscripten_bind_btTranslationalLimitMotor_solveLinearAxis_9 = function () {
                return (GW = a._emscripten_bind_btTranslationalLimitMotor_solveLinearAxis_9 = a.asm.ST).apply(null, arguments);
            }),
            HW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_lowerLimit_0 = function () {
                return (HW = a._emscripten_bind_btTranslationalLimitMotor_get_m_lowerLimit_0 = a.asm.TT).apply(null, arguments);
            }),
            IW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_lowerLimit_1 = function () {
                return (IW = a._emscripten_bind_btTranslationalLimitMotor_set_m_lowerLimit_1 = a.asm.UT).apply(null, arguments);
            }),
            JW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_upperLimit_0 = function () {
                return (JW = a._emscripten_bind_btTranslationalLimitMotor_get_m_upperLimit_0 = a.asm.VT).apply(null, arguments);
            }),
            KW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_upperLimit_1 = function () {
                return (KW = a._emscripten_bind_btTranslationalLimitMotor_set_m_upperLimit_1 = a.asm.WT).apply(null, arguments);
            }),
            LW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_accumulatedImpulse_0 = function () {
                return (LW = a._emscripten_bind_btTranslationalLimitMotor_get_m_accumulatedImpulse_0 = a.asm.XT).apply(null, arguments);
            }),
            MW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_accumulatedImpulse_1 = function () {
                return (MW = a._emscripten_bind_btTranslationalLimitMotor_set_m_accumulatedImpulse_1 = a.asm.YT).apply(null, arguments);
            }),
            NW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_limitSoftness_0 = function () {
                return (NW = a._emscripten_bind_btTranslationalLimitMotor_get_m_limitSoftness_0 = a.asm.ZT).apply(null, arguments);
            }),
            OW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_limitSoftness_1 = function () {
                return (OW = a._emscripten_bind_btTranslationalLimitMotor_set_m_limitSoftness_1 = a.asm._T).apply(null, arguments);
            }),
            PW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_damping_0 = function () {
                return (PW = a._emscripten_bind_btTranslationalLimitMotor_get_m_damping_0 = a.asm.$T).apply(null, arguments);
            }),
            QW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_damping_1 = function () {
                return (QW = a._emscripten_bind_btTranslationalLimitMotor_set_m_damping_1 = a.asm.aU).apply(null, arguments);
            }),
            RW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_restitution_0 = function () {
                return (RW = a._emscripten_bind_btTranslationalLimitMotor_get_m_restitution_0 = a.asm.bU).apply(null, arguments);
            }),
            SW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_restitution_1 = function () {
                return (SW = a._emscripten_bind_btTranslationalLimitMotor_set_m_restitution_1 = a.asm.cU).apply(null, arguments);
            }),
            TW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_normalCFM_0 = function () {
                return (TW = a._emscripten_bind_btTranslationalLimitMotor_get_m_normalCFM_0 = a.asm.dU).apply(null, arguments);
            }),
            UW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_normalCFM_1 = function () {
                return (UW = a._emscripten_bind_btTranslationalLimitMotor_set_m_normalCFM_1 = a.asm.eU).apply(null, arguments);
            }),
            VW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_stopERP_0 = function () {
                return (VW = a._emscripten_bind_btTranslationalLimitMotor_get_m_stopERP_0 = a.asm.fU).apply(null, arguments);
            }),
            WW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_stopERP_1 = function () {
                return (WW = a._emscripten_bind_btTranslationalLimitMotor_set_m_stopERP_1 = a.asm.gU).apply(null, arguments);
            }),
            XW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_stopCFM_0 = function () {
                return (XW = a._emscripten_bind_btTranslationalLimitMotor_get_m_stopCFM_0 = a.asm.hU).apply(null, arguments);
            }),
            YW = (a._emscripten_bind_btTranslationalLimitMotor_set_m_stopCFM_1 = function () {
                return (YW = a._emscripten_bind_btTranslationalLimitMotor_set_m_stopCFM_1 = a.asm.iU).apply(null, arguments);
            }),
            ZW = (a._emscripten_bind_btTranslationalLimitMotor_get_m_enableMotor_1 = function () {
                return (ZW = a._emscripten_bind_btTranslationalLimitMotor_get_m_enableMotor_1 = a.asm.jU).apply(null, arguments);
            }),
            $W = (a._emscripten_bind_btTranslationalLimitMotor_set_m_enableMotor_2 = function () {
                return ($W = a._emscripten_bind_btTranslationalLimitMotor_set_m_enableMotor_2 = a.asm.kU).apply(null, arguments);
            }),
            aX = (a._emscripten_bind_btTranslationalLimitMotor_get_m_targetVelocity_0 = function () {
                return (aX = a._emscripten_bind_btTranslationalLimitMotor_get_m_targetVelocity_0 = a.asm.lU).apply(null, arguments);
            }),
            bX = (a._emscripten_bind_btTranslationalLimitMotor_set_m_targetVelocity_1 = function () {
                return (bX = a._emscripten_bind_btTranslationalLimitMotor_set_m_targetVelocity_1 = a.asm.mU).apply(null, arguments);
            }),
            cX = (a._emscripten_bind_btTranslationalLimitMotor_get_m_maxMotorForce_0 = function () {
                return (cX = a._emscripten_bind_btTranslationalLimitMotor_get_m_maxMotorForce_0 = a.asm.nU).apply(null, arguments);
            }),
            dX = (a._emscripten_bind_btTranslationalLimitMotor_set_m_maxMotorForce_1 = function () {
                return (dX = a._emscripten_bind_btTranslationalLimitMotor_set_m_maxMotorForce_1 = a.asm.oU).apply(null, arguments);
            }),
            eX = (a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLimitError_0 = function () {
                return (eX = a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLimitError_0 = a.asm.pU).apply(null, arguments);
            }),
            fX = (a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLimitError_1 = function () {
                return (fX = a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLimitError_1 = a.asm.qU).apply(null, arguments);
            }),
            gX = (a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLinearDiff_0 = function () {
                return (gX = a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLinearDiff_0 = a.asm.rU).apply(null, arguments);
            }),
            hX = (a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLinearDiff_1 = function () {
                return (hX = a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLinearDiff_1 = a.asm.sU).apply(null, arguments);
            }),
            iX = (a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLimit_1 = function () {
                return (iX = a._emscripten_bind_btTranslationalLimitMotor_get_m_currentLimit_1 = a.asm.tU).apply(null, arguments);
            }),
            jX = (a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLimit_2 = function () {
                return (jX = a._emscripten_bind_btTranslationalLimitMotor_set_m_currentLimit_2 = a.asm.uU).apply(null, arguments);
            }),
            kX = (a._emscripten_bind_btTranslationalLimitMotor___destroy___0 = function () {
                return (kX = a._emscripten_bind_btTranslationalLimitMotor___destroy___0 = a.asm.vU).apply(null, arguments);
            }),
            lX = (a._emscripten_bind_btSliderConstraint_btSliderConstraint_3 = function () {
                return (lX = a._emscripten_bind_btSliderConstraint_btSliderConstraint_3 = a.asm.wU).apply(null, arguments);
            }),
            mX = (a._emscripten_bind_btSliderConstraint_btSliderConstraint_5 = function () {
                return (mX = a._emscripten_bind_btSliderConstraint_btSliderConstraint_5 = a.asm.xU).apply(null, arguments);
            }),
            nX = (a._emscripten_bind_btSliderConstraint_getRigidBodyA_0 = function () {
                return (nX = a._emscripten_bind_btSliderConstraint_getRigidBodyA_0 = a.asm.yU).apply(null, arguments);
            }),
            oX = (a._emscripten_bind_btSliderConstraint_getRigidBodyB_0 = function () {
                return (oX = a._emscripten_bind_btSliderConstraint_getRigidBodyB_0 = a.asm.zU).apply(null, arguments);
            }),
            pX = (a._emscripten_bind_btSliderConstraint_getCalculatedTransformA_0 = function () {
                return (pX = a._emscripten_bind_btSliderConstraint_getCalculatedTransformA_0 = a.asm.AU).apply(null, arguments);
            }),
            qX = (a._emscripten_bind_btSliderConstraint_getCalculatedTransformB_0 = function () {
                return (qX = a._emscripten_bind_btSliderConstraint_getCalculatedTransformB_0 = a.asm.BU).apply(null, arguments);
            }),
            rX = (a._emscripten_bind_btSliderConstraint_getFrameOffsetA_0 = function () {
                return (rX = a._emscripten_bind_btSliderConstraint_getFrameOffsetA_0 = a.asm.CU).apply(null, arguments);
            }),
            sX = (a._emscripten_bind_btSliderConstraint_getFrameOffsetB_0 = function () {
                return (sX = a._emscripten_bind_btSliderConstraint_getFrameOffsetB_0 = a.asm.DU).apply(null, arguments);
            }),
            tX = (a._emscripten_bind_btSliderConstraint_getLowerLinLimit_0 = function () {
                return (tX = a._emscripten_bind_btSliderConstraint_getLowerLinLimit_0 = a.asm.EU).apply(null, arguments);
            }),
            uX = (a._emscripten_bind_btSliderConstraint_setLowerLinLimit_1 = function () {
                return (uX = a._emscripten_bind_btSliderConstraint_setLowerLinLimit_1 = a.asm.FU).apply(null, arguments);
            }),
            vX = (a._emscripten_bind_btSliderConstraint_getUpperLinLimit_0 = function () {
                return (vX = a._emscripten_bind_btSliderConstraint_getUpperLinLimit_0 = a.asm.GU).apply(null, arguments);
            }),
            wX = (a._emscripten_bind_btSliderConstraint_setUpperLinLimit_1 = function () {
                return (wX = a._emscripten_bind_btSliderConstraint_setUpperLinLimit_1 = a.asm.HU).apply(null, arguments);
            }),
            xX = (a._emscripten_bind_btSliderConstraint_getLowerAngLimit_0 = function () {
                return (xX = a._emscripten_bind_btSliderConstraint_getLowerAngLimit_0 = a.asm.IU).apply(null, arguments);
            }),
            yX = (a._emscripten_bind_btSliderConstraint_setLowerAngLimit_1 = function () {
                return (yX = a._emscripten_bind_btSliderConstraint_setLowerAngLimit_1 = a.asm.JU).apply(null, arguments);
            }),
            zX = (a._emscripten_bind_btSliderConstraint_getUpperAngLimit_0 = function () {
                return (zX = a._emscripten_bind_btSliderConstraint_getUpperAngLimit_0 = a.asm.KU).apply(null, arguments);
            }),
            AX = (a._emscripten_bind_btSliderConstraint_setUpperAngLimit_1 = function () {
                return (AX = a._emscripten_bind_btSliderConstraint_setUpperAngLimit_1 = a.asm.LU).apply(null, arguments);
            }),
            BX = (a._emscripten_bind_btSliderConstraint_getUseLinearReferenceFrameA_0 = function () {
                return (BX = a._emscripten_bind_btSliderConstraint_getUseLinearReferenceFrameA_0 = a.asm.MU).apply(null, arguments);
            }),
            CX = (a._emscripten_bind_btSliderConstraint_getSoftnessDirLin_0 = function () {
                return (CX = a._emscripten_bind_btSliderConstraint_getSoftnessDirLin_0 = a.asm.NU).apply(null, arguments);
            }),
            DX = (a._emscripten_bind_btSliderConstraint_getRestitutionDirLin_0 = function () {
                return (DX = a._emscripten_bind_btSliderConstraint_getRestitutionDirLin_0 = a.asm.OU).apply(null, arguments);
            }),
            EX = (a._emscripten_bind_btSliderConstraint_getDampingDirLin_0 = function () {
                return (EX = a._emscripten_bind_btSliderConstraint_getDampingDirLin_0 = a.asm.PU).apply(null, arguments);
            }),
            FX = (a._emscripten_bind_btSliderConstraint_getSoftnessDirAng_0 = function () {
                return (FX = a._emscripten_bind_btSliderConstraint_getSoftnessDirAng_0 = a.asm.QU).apply(null, arguments);
            }),
            GX = (a._emscripten_bind_btSliderConstraint_getRestitutionDirAng_0 = function () {
                return (GX = a._emscripten_bind_btSliderConstraint_getRestitutionDirAng_0 = a.asm.RU).apply(null, arguments);
            }),
            HX = (a._emscripten_bind_btSliderConstraint_getDampingDirAng_0 = function () {
                return (HX = a._emscripten_bind_btSliderConstraint_getDampingDirAng_0 = a.asm.SU).apply(null, arguments);
            }),
            IX = (a._emscripten_bind_btSliderConstraint_getSoftnessLimLin_0 = function () {
                return (IX = a._emscripten_bind_btSliderConstraint_getSoftnessLimLin_0 = a.asm.TU).apply(null, arguments);
            }),
            JX = (a._emscripten_bind_btSliderConstraint_getRestitutionLimLin_0 = function () {
                return (JX = a._emscripten_bind_btSliderConstraint_getRestitutionLimLin_0 = a.asm.UU).apply(null, arguments);
            }),
            KX = (a._emscripten_bind_btSliderConstraint_getDampingLimLin_0 = function () {
                return (KX = a._emscripten_bind_btSliderConstraint_getDampingLimLin_0 = a.asm.VU).apply(null, arguments);
            }),
            LX = (a._emscripten_bind_btSliderConstraint_getSoftnessLimAng_0 = function () {
                return (LX = a._emscripten_bind_btSliderConstraint_getSoftnessLimAng_0 = a.asm.WU).apply(null, arguments);
            }),
            MX = (a._emscripten_bind_btSliderConstraint_getRestitutionLimAng_0 = function () {
                return (MX = a._emscripten_bind_btSliderConstraint_getRestitutionLimAng_0 = a.asm.XU).apply(null, arguments);
            }),
            NX = (a._emscripten_bind_btSliderConstraint_getDampingLimAng_0 = function () {
                return (NX = a._emscripten_bind_btSliderConstraint_getDampingLimAng_0 = a.asm.YU).apply(null, arguments);
            }),
            OX = (a._emscripten_bind_btSliderConstraint_getSoftnessOrthoLin_0 = function () {
                return (OX = a._emscripten_bind_btSliderConstraint_getSoftnessOrthoLin_0 = a.asm.ZU).apply(null, arguments);
            }),
            PX = (a._emscripten_bind_btSliderConstraint_getRestitutionOrthoLin_0 = function () {
                return (PX = a._emscripten_bind_btSliderConstraint_getRestitutionOrthoLin_0 = a.asm._U).apply(null, arguments);
            }),
            QX = (a._emscripten_bind_btSliderConstraint_getDampingOrthoLin_0 = function () {
                return (QX = a._emscripten_bind_btSliderConstraint_getDampingOrthoLin_0 = a.asm.$U).apply(null, arguments);
            }),
            RX = (a._emscripten_bind_btSliderConstraint_getSoftnessOrthoAng_0 = function () {
                return (RX = a._emscripten_bind_btSliderConstraint_getSoftnessOrthoAng_0 = a.asm.aV).apply(null, arguments);
            }),
            SX = (a._emscripten_bind_btSliderConstraint_getRestitutionOrthoAng_0 = function () {
                return (SX = a._emscripten_bind_btSliderConstraint_getRestitutionOrthoAng_0 = a.asm.bV).apply(null, arguments);
            }),
            TX = (a._emscripten_bind_btSliderConstraint_getDampingOrthoAng_0 = function () {
                return (TX = a._emscripten_bind_btSliderConstraint_getDampingOrthoAng_0 = a.asm.cV).apply(null, arguments);
            }),
            UX = (a._emscripten_bind_btSliderConstraint_setSoftnessDirLin_1 = function () {
                return (UX = a._emscripten_bind_btSliderConstraint_setSoftnessDirLin_1 = a.asm.dV).apply(null, arguments);
            }),
            VX = (a._emscripten_bind_btSliderConstraint_setRestitutionDirLin_1 = function () {
                return (VX = a._emscripten_bind_btSliderConstraint_setRestitutionDirLin_1 = a.asm.eV).apply(null, arguments);
            }),
            WX = (a._emscripten_bind_btSliderConstraint_setDampingDirLin_1 = function () {
                return (WX = a._emscripten_bind_btSliderConstraint_setDampingDirLin_1 = a.asm.fV).apply(null, arguments);
            }),
            XX = (a._emscripten_bind_btSliderConstraint_setSoftnessDirAng_1 = function () {
                return (XX = a._emscripten_bind_btSliderConstraint_setSoftnessDirAng_1 = a.asm.gV).apply(null, arguments);
            }),
            YX = (a._emscripten_bind_btSliderConstraint_setRestitutionDirAng_1 = function () {
                return (YX = a._emscripten_bind_btSliderConstraint_setRestitutionDirAng_1 = a.asm.hV).apply(null, arguments);
            }),
            ZX = (a._emscripten_bind_btSliderConstraint_setDampingDirAng_1 = function () {
                return (ZX = a._emscripten_bind_btSliderConstraint_setDampingDirAng_1 = a.asm.iV).apply(null, arguments);
            }),
            $X = (a._emscripten_bind_btSliderConstraint_setSoftnessLimLin_1 = function () {
                return ($X = a._emscripten_bind_btSliderConstraint_setSoftnessLimLin_1 = a.asm.jV).apply(null, arguments);
            }),
            aY = (a._emscripten_bind_btSliderConstraint_setRestitutionLimLin_1 = function () {
                return (aY = a._emscripten_bind_btSliderConstraint_setRestitutionLimLin_1 = a.asm.kV).apply(null, arguments);
            }),
            bY = (a._emscripten_bind_btSliderConstraint_setDampingLimLin_1 = function () {
                return (bY = a._emscripten_bind_btSliderConstraint_setDampingLimLin_1 = a.asm.lV).apply(null, arguments);
            }),
            cY = (a._emscripten_bind_btSliderConstraint_setSoftnessLimAng_1 = function () {
                return (cY = a._emscripten_bind_btSliderConstraint_setSoftnessLimAng_1 = a.asm.mV).apply(null, arguments);
            }),
            dY = (a._emscripten_bind_btSliderConstraint_setRestitutionLimAng_1 = function () {
                return (dY = a._emscripten_bind_btSliderConstraint_setRestitutionLimAng_1 = a.asm.nV).apply(null, arguments);
            }),
            eY = (a._emscripten_bind_btSliderConstraint_setDampingLimAng_1 = function () {
                return (eY = a._emscripten_bind_btSliderConstraint_setDampingLimAng_1 = a.asm.oV).apply(null, arguments);
            }),
            fY = (a._emscripten_bind_btSliderConstraint_setSoftnessOrthoLin_1 = function () {
                return (fY = a._emscripten_bind_btSliderConstraint_setSoftnessOrthoLin_1 = a.asm.pV).apply(null, arguments);
            }),
            gY = (a._emscripten_bind_btSliderConstraint_setRestitutionOrthoLin_1 = function () {
                return (gY = a._emscripten_bind_btSliderConstraint_setRestitutionOrthoLin_1 = a.asm.qV).apply(null, arguments);
            }),
            hY = (a._emscripten_bind_btSliderConstraint_setDampingOrthoLin_1 = function () {
                return (hY = a._emscripten_bind_btSliderConstraint_setDampingOrthoLin_1 = a.asm.rV).apply(null, arguments);
            }),
            iY = (a._emscripten_bind_btSliderConstraint_setSoftnessOrthoAng_1 = function () {
                return (iY = a._emscripten_bind_btSliderConstraint_setSoftnessOrthoAng_1 = a.asm.sV).apply(null, arguments);
            }),
            jY = (a._emscripten_bind_btSliderConstraint_setRestitutionOrthoAng_1 = function () {
                return (jY = a._emscripten_bind_btSliderConstraint_setRestitutionOrthoAng_1 = a.asm.tV).apply(null, arguments);
            }),
            kY = (a._emscripten_bind_btSliderConstraint_setDampingOrthoAng_1 = function () {
                return (kY = a._emscripten_bind_btSliderConstraint_setDampingOrthoAng_1 = a.asm.uV).apply(null, arguments);
            }),
            lY = (a._emscripten_bind_btSliderConstraint_setPoweredLinMotor_1 = function () {
                return (lY = a._emscripten_bind_btSliderConstraint_setPoweredLinMotor_1 = a.asm.vV).apply(null, arguments);
            }),
            mY = (a._emscripten_bind_btSliderConstraint_getPoweredLinMotor_0 = function () {
                return (mY = a._emscripten_bind_btSliderConstraint_getPoweredLinMotor_0 = a.asm.wV).apply(null, arguments);
            }),
            nY = (a._emscripten_bind_btSliderConstraint_setTargetLinMotorVelocity_1 = function () {
                return (nY = a._emscripten_bind_btSliderConstraint_setTargetLinMotorVelocity_1 = a.asm.xV).apply(null, arguments);
            }),
            oY = (a._emscripten_bind_btSliderConstraint_getTargetLinMotorVelocity_0 = function () {
                return (oY = a._emscripten_bind_btSliderConstraint_getTargetLinMotorVelocity_0 = a.asm.yV).apply(null, arguments);
            }),
            pY = (a._emscripten_bind_btSliderConstraint_setMaxLinMotorForce_1 = function () {
                return (pY = a._emscripten_bind_btSliderConstraint_setMaxLinMotorForce_1 = a.asm.zV).apply(null, arguments);
            }),
            qY = (a._emscripten_bind_btSliderConstraint_getMaxLinMotorForce_0 = function () {
                return (qY = a._emscripten_bind_btSliderConstraint_getMaxLinMotorForce_0 = a.asm.AV).apply(null, arguments);
            }),
            rY = (a._emscripten_bind_btSliderConstraint_setPoweredAngMotor_1 = function () {
                return (rY = a._emscripten_bind_btSliderConstraint_setPoweredAngMotor_1 = a.asm.BV).apply(null, arguments);
            }),
            sY = (a._emscripten_bind_btSliderConstraint_getPoweredAngMotor_0 = function () {
                return (sY = a._emscripten_bind_btSliderConstraint_getPoweredAngMotor_0 = a.asm.CV).apply(null, arguments);
            }),
            tY = (a._emscripten_bind_btSliderConstraint_setTargetAngMotorVelocity_1 = function () {
                return (tY = a._emscripten_bind_btSliderConstraint_setTargetAngMotorVelocity_1 = a.asm.DV).apply(null, arguments);
            }),
            uY = (a._emscripten_bind_btSliderConstraint_getTargetAngMotorVelocity_0 = function () {
                return (uY = a._emscripten_bind_btSliderConstraint_getTargetAngMotorVelocity_0 = a.asm.EV).apply(null, arguments);
            }),
            vY = (a._emscripten_bind_btSliderConstraint_setMaxAngMotorForce_1 = function () {
                return (vY = a._emscripten_bind_btSliderConstraint_setMaxAngMotorForce_1 = a.asm.FV).apply(null, arguments);
            }),
            wY = (a._emscripten_bind_btSliderConstraint_getMaxAngMotorForce_0 = function () {
                return (wY = a._emscripten_bind_btSliderConstraint_getMaxAngMotorForce_0 = a.asm.GV).apply(null, arguments);
            }),
            xY = (a._emscripten_bind_btSliderConstraint_getLinearPos_0 = function () {
                return (xY = a._emscripten_bind_btSliderConstraint_getLinearPos_0 = a.asm.HV).apply(null, arguments);
            }),
            yY = (a._emscripten_bind_btSliderConstraint_getAngularPos_0 = function () {
                return (yY = a._emscripten_bind_btSliderConstraint_getAngularPos_0 = a.asm.IV).apply(null, arguments);
            }),
            zY = (a._emscripten_bind_btSliderConstraint_getUseFrameOffset_0 = function () {
                return (zY = a._emscripten_bind_btSliderConstraint_getUseFrameOffset_0 = a.asm.JV).apply(null, arguments);
            }),
            AY = (a._emscripten_bind_btSliderConstraint_setUseFrameOffset_1 = function () {
                return (AY = a._emscripten_bind_btSliderConstraint_setUseFrameOffset_1 = a.asm.KV).apply(null, arguments);
            }),
            BY = (a._emscripten_bind_btSliderConstraint_setFrames_2 = function () {
                return (BY = a._emscripten_bind_btSliderConstraint_setFrames_2 = a.asm.LV).apply(null, arguments);
            }),
            CY = (a._emscripten_bind_btSliderConstraint_setParam_2 = function () {
                return (CY = a._emscripten_bind_btSliderConstraint_setParam_2 = a.asm.MV).apply(null, arguments);
            }),
            DY = (a._emscripten_bind_btSliderConstraint_setParam_3 = function () {
                return (DY = a._emscripten_bind_btSliderConstraint_setParam_3 = a.asm.NV).apply(null, arguments);
            }),
            EY = (a._emscripten_bind_btSliderConstraint_getParam_1 = function () {
                return (EY = a._emscripten_bind_btSliderConstraint_getParam_1 = a.asm.OV).apply(null, arguments);
            }),
            FY = (a._emscripten_bind_btSliderConstraint_getParam_2 = function () {
                return (FY = a._emscripten_bind_btSliderConstraint_getParam_2 = a.asm.PV).apply(null, arguments);
            }),
            GY = (a._emscripten_bind_btSliderConstraint_getFlags_0 = function () {
                return (GY = a._emscripten_bind_btSliderConstraint_getFlags_0 = a.asm.QV).apply(null, arguments);
            }),
            HY = (a._emscripten_bind_btSliderConstraint_getFixedBody_0 = function () {
                return (HY = a._emscripten_bind_btSliderConstraint_getFixedBody_0 = a.asm.RV).apply(null, arguments);
            }),
            IY = (a._emscripten_bind_btSliderConstraint_getOverrideNumSolverIterations_0 = function () {
                return (IY = a._emscripten_bind_btSliderConstraint_getOverrideNumSolverIterations_0 = a.asm.SV).apply(null, arguments);
            }),
            JY = (a._emscripten_bind_btSliderConstraint_setOverrideNumSolverIterations_1 = function () {
                return (JY = a._emscripten_bind_btSliderConstraint_setOverrideNumSolverIterations_1 = a.asm.TV).apply(null, arguments);
            }),
            KY = (a._emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 = function () {
                return (KY = a._emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 = a.asm.UV).apply(null, arguments);
            }),
            LY = (a._emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 = function () {
                return (LY = a._emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 = a.asm.VV).apply(null, arguments);
            }),
            MY = (a._emscripten_bind_btSliderConstraint_isEnabled_0 = function () {
                return (MY = a._emscripten_bind_btSliderConstraint_isEnabled_0 = a.asm.WV).apply(null, arguments);
            }),
            NY = (a._emscripten_bind_btSliderConstraint_setEnabled_1 = function () {
                return (NY = a._emscripten_bind_btSliderConstraint_setEnabled_1 = a.asm.XV).apply(null, arguments);
            }),
            OY = (a._emscripten_bind_btSliderConstraint_getUserConstraintType_0 = function () {
                return (OY = a._emscripten_bind_btSliderConstraint_getUserConstraintType_0 = a.asm.YV).apply(null, arguments);
            }),
            PY = (a._emscripten_bind_btSliderConstraint_setUserConstraintType_1 = function () {
                return (PY = a._emscripten_bind_btSliderConstraint_setUserConstraintType_1 = a.asm.ZV).apply(null, arguments);
            }),
            QY = (a._emscripten_bind_btSliderConstraint_setUserConstraintId_1 = function () {
                return (QY = a._emscripten_bind_btSliderConstraint_setUserConstraintId_1 = a.asm._V).apply(null, arguments);
            }),
            RY = (a._emscripten_bind_btSliderConstraint_getUserConstraintId_0 = function () {
                return (RY = a._emscripten_bind_btSliderConstraint_getUserConstraintId_0 = a.asm.$V).apply(null, arguments);
            }),
            SY = (a._emscripten_bind_btSliderConstraint_setUserConstraintPtr_1 = function () {
                return (SY = a._emscripten_bind_btSliderConstraint_setUserConstraintPtr_1 = a.asm.aW).apply(null, arguments);
            }),
            TY = (a._emscripten_bind_btSliderConstraint_getUserConstraintPtr_0 = function () {
                return (TY = a._emscripten_bind_btSliderConstraint_getUserConstraintPtr_0 = a.asm.bW).apply(null, arguments);
            }),
            UY = (a._emscripten_bind_btSliderConstraint_setJointFeedback_1 = function () {
                return (UY = a._emscripten_bind_btSliderConstraint_setJointFeedback_1 = a.asm.cW).apply(null, arguments);
            }),
            VY = (a._emscripten_bind_btSliderConstraint_getJointFeedback_0 = function () {
                return (VY = a._emscripten_bind_btSliderConstraint_getJointFeedback_0 = a.asm.dW).apply(null, arguments);
            }),
            WY = (a._emscripten_bind_btSliderConstraint_getUid_0 = function () {
                return (WY = a._emscripten_bind_btSliderConstraint_getUid_0 = a.asm.eW).apply(null, arguments);
            }),
            XY = (a._emscripten_bind_btSliderConstraint_needsFeedback_0 = function () {
                return (XY = a._emscripten_bind_btSliderConstraint_needsFeedback_0 = a.asm.fW).apply(null, arguments);
            }),
            YY = (a._emscripten_bind_btSliderConstraint_enableFeedback_1 = function () {
                return (YY = a._emscripten_bind_btSliderConstraint_enableFeedback_1 = a.asm.gW).apply(null, arguments);
            }),
            ZY = (a._emscripten_bind_btSliderConstraint_getAppliedImpulse_0 = function () {
                return (ZY = a._emscripten_bind_btSliderConstraint_getAppliedImpulse_0 = a.asm.hW).apply(null, arguments);
            }),
            $Y = (a._emscripten_bind_btSliderConstraint_getConstraintType_0 = function () {
                return ($Y = a._emscripten_bind_btSliderConstraint_getConstraintType_0 = a.asm.iW).apply(null, arguments);
            }),
            aZ = (a._emscripten_bind_btSliderConstraint_getObjectType_0 = function () {
                return (aZ = a._emscripten_bind_btSliderConstraint_getObjectType_0 = a.asm.jW).apply(null, arguments);
            }),
            bZ = (a._emscripten_bind_btSliderConstraint_get_m_objectType_0 = function () {
                return (bZ = a._emscripten_bind_btSliderConstraint_get_m_objectType_0 = a.asm.kW).apply(null, arguments);
            }),
            cZ = (a._emscripten_bind_btSliderConstraint_set_m_objectType_1 = function () {
                return (cZ = a._emscripten_bind_btSliderConstraint_set_m_objectType_1 = a.asm.lW).apply(null, arguments);
            }),
            dZ = (a._emscripten_bind_btSliderConstraint___destroy___0 = function () {
                return (dZ = a._emscripten_bind_btSliderConstraint___destroy___0 = a.asm.mW).apply(null, arguments);
            }),
            eZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 = function () {
                return (eZ = a._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 = a.asm.nW).apply(null, arguments);
            }),
            fZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 = function () {
                return (fZ = a._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 = a.asm.oW).apply(null, arguments);
            }),
            gZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 = function () {
                return (gZ = a._emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 = a.asm.pW).apply(null, arguments);
            }),
            hZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 = function () {
                return (hZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 = a.asm.qW).apply(null, arguments);
            }),
            iZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 = function () {
                return (iZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 = a.asm.rW).apply(null, arguments);
            }),
            jZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 = function () {
                return (jZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 = a.asm.sW).apply(null, arguments);
            }),
            kZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 = function () {
                return (kZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 = a.asm.tW).apply(null, arguments);
            }),
            lZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 = function () {
                return (lZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 = a.asm.uW).apply(null, arguments);
            }),
            mZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_isSpringEnabled_1 = function () {
                return (mZ = a._emscripten_bind_btGeneric6DofSpringConstraint_isSpringEnabled_1 = a.asm.vW).apply(null, arguments);
            }),
            nZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getStiffness_1 = function () {
                return (nZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getStiffness_1 = a.asm.wW).apply(null, arguments);
            }),
            oZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getDamping_1 = function () {
                return (oZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getDamping_1 = a.asm.xW).apply(null, arguments);
            }),
            pZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getEquilibriumPoint_1 = function () {
                return (pZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getEquilibriumPoint_1 = a.asm.yW).apply(null, arguments);
            }),
            qZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setAxis_2 = function () {
                return (qZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setAxis_2 = a.asm.zW).apply(null, arguments);
            }),
            rZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_calculateTransforms_0 = function () {
                return (rZ = a._emscripten_bind_btGeneric6DofSpringConstraint_calculateTransforms_0 = a.asm.AW).apply(null, arguments);
            }),
            sZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_calculateTransforms_2 = function () {
                return (sZ = a._emscripten_bind_btGeneric6DofSpringConstraint_calculateTransforms_2 = a.asm.BW).apply(null, arguments);
            }),
            tZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getCalculatedTransformA_0 = function () {
                return (tZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getCalculatedTransformA_0 = a.asm.CW).apply(null, arguments);
            }),
            uZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getCalculatedTransformB_0 = function () {
                return (uZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getCalculatedTransformB_0 = a.asm.DW).apply(null, arguments);
            }),
            vZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 = function () {
                return (vZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 = a.asm.EW).apply(null, arguments);
            }),
            wZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetB_0 = function () {
                return (wZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetB_0 = a.asm.FW).apply(null, arguments);
            }),
            xZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_buildJacobian_0 = function () {
                return (xZ = a._emscripten_bind_btGeneric6DofSpringConstraint_buildJacobian_0 = a.asm.GW).apply(null, arguments);
            }),
            yZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_updateRHS_1 = function () {
                return (yZ = a._emscripten_bind_btGeneric6DofSpringConstraint_updateRHS_1 = a.asm.HW).apply(null, arguments);
            }),
            zZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getAxis_1 = function () {
                return (zZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getAxis_1 = a.asm.IW).apply(null, arguments);
            }),
            AZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getAngle_1 = function () {
                return (AZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getAngle_1 = a.asm.JW).apply(null, arguments);
            }),
            BZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getRelativePivotPosition_1 = function () {
                return (BZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getRelativePivotPosition_1 = a.asm.KW).apply(null, arguments);
            }),
            CZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setFrames_2 = function () {
                return (CZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setFrames_2 = a.asm.LW).apply(null, arguments);
            }),
            DZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 = function () {
                return (DZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 = a.asm.MW).apply(null, arguments);
            }),
            EZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getLinearLowerLimit_1 = function () {
                return (EZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getLinearLowerLimit_1 = a.asm.NW).apply(null, arguments);
            }),
            FZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 = function () {
                return (FZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 = a.asm.OW).apply(null, arguments);
            }),
            GZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getLinearUpperLimit_1 = function () {
                return (GZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getLinearUpperLimit_1 = a.asm.PW).apply(null, arguments);
            }),
            HZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 = function () {
                return (HZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 = a.asm.QW).apply(null, arguments);
            }),
            IZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getAngularLowerLimit_1 = function () {
                return (IZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getAngularLowerLimit_1 = a.asm.RW).apply(null, arguments);
            }),
            JZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 = function () {
                return (JZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 = a.asm.SW).apply(null, arguments);
            }),
            KZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getAngularUpperLimit_1 = function () {
                return (KZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getAngularUpperLimit_1 = a.asm.TW).apply(null, arguments);
            }),
            LZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getRotationalLimitMotor_1 = function () {
                return (LZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getRotationalLimitMotor_1 = a.asm.UW).apply(null, arguments);
            }),
            MZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getTranslationalLimitMotor_0 = function () {
                return (MZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getTranslationalLimitMotor_0 = a.asm.VW).apply(null, arguments);
            }),
            NZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setLimit_3 = function () {
                return (NZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setLimit_3 = a.asm.WW).apply(null, arguments);
            }),
            OZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_isLimited_1 = function () {
                return (OZ = a._emscripten_bind_btGeneric6DofSpringConstraint_isLimited_1 = a.asm.XW).apply(null, arguments);
            }),
            PZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_calcAnchorPos_0 = function () {
                return (PZ = a._emscripten_bind_btGeneric6DofSpringConstraint_calcAnchorPos_0 = a.asm.YW).apply(null, arguments);
            }),
            QZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUseFrameOffset_0 = function () {
                return (QZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUseFrameOffset_0 = a.asm.ZW).apply(null, arguments);
            }),
            RZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setUseFrameOffset_1 = function () {
                return (RZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setUseFrameOffset_1 = a.asm._W).apply(null, arguments);
            }),
            SZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUseLinearReferenceFrameA_0 = function () {
                return (SZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUseLinearReferenceFrameA_0 = a.asm.$W).apply(null, arguments);
            }),
            TZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setUseLinearReferenceFrameA_1 = function () {
                return (TZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setUseLinearReferenceFrameA_1 = a.asm.aX).apply(null, arguments);
            }),
            UZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setParam_2 = function () {
                return (UZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setParam_2 = a.asm.bX).apply(null, arguments);
            }),
            VZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 = function () {
                return (VZ = a._emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 = a.asm.cX).apply(null, arguments);
            }),
            WZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getParam_1 = function () {
                return (WZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getParam_1 = a.asm.dX).apply(null, arguments);
            }),
            XZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 = function () {
                return (XZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 = a.asm.eX).apply(null, arguments);
            }),
            YZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getFlags_0 = function () {
                return (YZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getFlags_0 = a.asm.fX).apply(null, arguments);
            }),
            ZZ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getFixedBody_0 = function () {
                return (ZZ = a._emscripten_bind_btGeneric6DofSpringConstraint_getFixedBody_0 = a.asm.gX).apply(null, arguments);
            }),
            $Z = (a._emscripten_bind_btGeneric6DofSpringConstraint_getOverrideNumSolverIterations_0 = function () {
                return ($Z = a._emscripten_bind_btGeneric6DofSpringConstraint_getOverrideNumSolverIterations_0 = a.asm.hX).apply(null, arguments);
            }),
            a_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setOverrideNumSolverIterations_1 = function () {
                return (a_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setOverrideNumSolverIterations_1 = a.asm.iX).apply(null, arguments);
            }),
            b_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 = function () {
                return (b_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 = a.asm.jX).apply(null, arguments);
            }),
            c_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 = function () {
                return (c_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 = a.asm.kX).apply(null, arguments);
            }),
            d_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_isEnabled_0 = function () {
                return (d_ = a._emscripten_bind_btGeneric6DofSpringConstraint_isEnabled_0 = a.asm.lX).apply(null, arguments);
            }),
            e_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setEnabled_1 = function () {
                return (e_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setEnabled_1 = a.asm.mX).apply(null, arguments);
            }),
            f_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintType_0 = function () {
                return (f_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintType_0 = a.asm.nX).apply(null, arguments);
            }),
            g_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintType_1 = function () {
                return (g_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintType_1 = a.asm.oX).apply(null, arguments);
            }),
            h_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintId_1 = function () {
                return (h_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintId_1 = a.asm.pX).apply(null, arguments);
            }),
            i_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintId_0 = function () {
                return (i_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintId_0 = a.asm.qX).apply(null, arguments);
            }),
            j_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintPtr_1 = function () {
                return (j_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setUserConstraintPtr_1 = a.asm.rX).apply(null, arguments);
            }),
            k_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintPtr_0 = function () {
                return (k_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUserConstraintPtr_0 = a.asm.sX).apply(null, arguments);
            }),
            l_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_setJointFeedback_1 = function () {
                return (l_ = a._emscripten_bind_btGeneric6DofSpringConstraint_setJointFeedback_1 = a.asm.tX).apply(null, arguments);
            }),
            m_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getJointFeedback_0 = function () {
                return (m_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getJointFeedback_0 = a.asm.uX).apply(null, arguments);
            }),
            n_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getUid_0 = function () {
                return (n_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getUid_0 = a.asm.vX).apply(null, arguments);
            }),
            o_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_needsFeedback_0 = function () {
                return (o_ = a._emscripten_bind_btGeneric6DofSpringConstraint_needsFeedback_0 = a.asm.wX).apply(null, arguments);
            }),
            p_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 = function () {
                return (p_ = a._emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 = a.asm.xX).apply(null, arguments);
            }),
            q_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getAppliedImpulse_0 = function () {
                return (q_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getAppliedImpulse_0 = a.asm.yX).apply(null, arguments);
            }),
            r_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getConstraintType_0 = function () {
                return (r_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getConstraintType_0 = a.asm.zX).apply(null, arguments);
            }),
            s_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_getObjectType_0 = function () {
                return (s_ = a._emscripten_bind_btGeneric6DofSpringConstraint_getObjectType_0 = a.asm.AX).apply(null, arguments);
            }),
            t_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_get_m_objectType_0 = function () {
                return (t_ = a._emscripten_bind_btGeneric6DofSpringConstraint_get_m_objectType_0 = a.asm.BX).apply(null, arguments);
            }),
            u_ = (a._emscripten_bind_btGeneric6DofSpringConstraint_set_m_objectType_1 = function () {
                return (u_ = a._emscripten_bind_btGeneric6DofSpringConstraint_set_m_objectType_1 = a.asm.CX).apply(null, arguments);
            }),
            v_ = (a._emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 = function () {
                return (v_ = a._emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 = a.asm.DX).apply(null, arguments);
            }),
            w_ = (a._emscripten_bind_btGearConstraint_btGearConstraint_4 = function () {
                return (w_ = a._emscripten_bind_btGearConstraint_btGearConstraint_4 = a.asm.EX).apply(null, arguments);
            }),
            x_ = (a._emscripten_bind_btGearConstraint_btGearConstraint_5 = function () {
                return (x_ = a._emscripten_bind_btGearConstraint_btGearConstraint_5 = a.asm.FX).apply(null, arguments);
            }),
            y_ = (a._emscripten_bind_btGearConstraint_setAxisA_1 = function () {
                return (y_ = a._emscripten_bind_btGearConstraint_setAxisA_1 = a.asm.GX).apply(null, arguments);
            }),
            z_ = (a._emscripten_bind_btGearConstraint_setAxisB_1 = function () {
                return (z_ = a._emscripten_bind_btGearConstraint_setAxisB_1 = a.asm.HX).apply(null, arguments);
            }),
            A_ = (a._emscripten_bind_btGearConstraint_setRatio_1 = function () {
                return (A_ = a._emscripten_bind_btGearConstraint_setRatio_1 = a.asm.IX).apply(null, arguments);
            }),
            B_ = (a._emscripten_bind_btGearConstraint_getAxisA_0 = function () {
                return (B_ = a._emscripten_bind_btGearConstraint_getAxisA_0 = a.asm.JX).apply(null, arguments);
            }),
            C_ = (a._emscripten_bind_btGearConstraint_getAxisB_0 = function () {
                return (C_ = a._emscripten_bind_btGearConstraint_getAxisB_0 = a.asm.KX).apply(null, arguments);
            }),
            D_ = (a._emscripten_bind_btGearConstraint_getRatio_0 = function () {
                return (D_ = a._emscripten_bind_btGearConstraint_getRatio_0 = a.asm.LX).apply(null, arguments);
            }),
            E_ = (a._emscripten_bind_btGearConstraint_setParam_2 = function () {
                return (E_ = a._emscripten_bind_btGearConstraint_setParam_2 = a.asm.MX).apply(null, arguments);
            }),
            F_ = (a._emscripten_bind_btGearConstraint_setParam_3 = function () {
                return (F_ = a._emscripten_bind_btGearConstraint_setParam_3 = a.asm.NX).apply(null, arguments);
            }),
            G_ = (a._emscripten_bind_btGearConstraint_getParam_1 = function () {
                return (G_ = a._emscripten_bind_btGearConstraint_getParam_1 = a.asm.OX).apply(null, arguments);
            }),
            H_ = (a._emscripten_bind_btGearConstraint_getParam_2 = function () {
                return (H_ = a._emscripten_bind_btGearConstraint_getParam_2 = a.asm.PX).apply(null, arguments);
            }),
            I_ = (a._emscripten_bind_btGearConstraint_getFixedBody_0 = function () {
                return (I_ = a._emscripten_bind_btGearConstraint_getFixedBody_0 = a.asm.QX).apply(null, arguments);
            }),
            J_ = (a._emscripten_bind_btGearConstraint_getOverrideNumSolverIterations_0 = function () {
                return (J_ = a._emscripten_bind_btGearConstraint_getOverrideNumSolverIterations_0 = a.asm.RX).apply(null, arguments);
            }),
            K_ = (a._emscripten_bind_btGearConstraint_setOverrideNumSolverIterations_1 = function () {
                return (K_ = a._emscripten_bind_btGearConstraint_setOverrideNumSolverIterations_1 = a.asm.SX).apply(null, arguments);
            }),
            L_ = (a._emscripten_bind_btGearConstraint_getBreakingImpulseThreshold_0 = function () {
                return (L_ = a._emscripten_bind_btGearConstraint_getBreakingImpulseThreshold_0 = a.asm.TX).apply(null, arguments);
            }),
            M_ = (a._emscripten_bind_btGearConstraint_setBreakingImpulseThreshold_1 = function () {
                return (M_ = a._emscripten_bind_btGearConstraint_setBreakingImpulseThreshold_1 = a.asm.UX).apply(null, arguments);
            }),
            N_ = (a._emscripten_bind_btGearConstraint_isEnabled_0 = function () {
                return (N_ = a._emscripten_bind_btGearConstraint_isEnabled_0 = a.asm.VX).apply(null, arguments);
            }),
            O_ = (a._emscripten_bind_btGearConstraint_setEnabled_1 = function () {
                return (O_ = a._emscripten_bind_btGearConstraint_setEnabled_1 = a.asm.WX).apply(null, arguments);
            }),
            P_ = (a._emscripten_bind_btGearConstraint_getUserConstraintType_0 = function () {
                return (P_ = a._emscripten_bind_btGearConstraint_getUserConstraintType_0 = a.asm.XX).apply(null, arguments);
            }),
            Q_ = (a._emscripten_bind_btGearConstraint_setUserConstraintType_1 = function () {
                return (Q_ = a._emscripten_bind_btGearConstraint_setUserConstraintType_1 = a.asm.YX).apply(null, arguments);
            }),
            R_ = (a._emscripten_bind_btGearConstraint_setUserConstraintId_1 = function () {
                return (R_ = a._emscripten_bind_btGearConstraint_setUserConstraintId_1 = a.asm.ZX).apply(null, arguments);
            }),
            S_ = (a._emscripten_bind_btGearConstraint_getUserConstraintId_0 = function () {
                return (S_ = a._emscripten_bind_btGearConstraint_getUserConstraintId_0 = a.asm._X).apply(null, arguments);
            }),
            T_ = (a._emscripten_bind_btGearConstraint_setUserConstraintPtr_1 = function () {
                return (T_ = a._emscripten_bind_btGearConstraint_setUserConstraintPtr_1 = a.asm.$X).apply(null, arguments);
            }),
            U_ = (a._emscripten_bind_btGearConstraint_getUserConstraintPtr_0 = function () {
                return (U_ = a._emscripten_bind_btGearConstraint_getUserConstraintPtr_0 = a.asm.aY).apply(null, arguments);
            }),
            V_ = (a._emscripten_bind_btGearConstraint_setJointFeedback_1 = function () {
                return (V_ = a._emscripten_bind_btGearConstraint_setJointFeedback_1 = a.asm.bY).apply(null, arguments);
            }),
            W_ = (a._emscripten_bind_btGearConstraint_getJointFeedback_0 = function () {
                return (W_ = a._emscripten_bind_btGearConstraint_getJointFeedback_0 = a.asm.cY).apply(null, arguments);
            }),
            X_ = (a._emscripten_bind_btGearConstraint_getUid_0 = function () {
                return (X_ = a._emscripten_bind_btGearConstraint_getUid_0 = a.asm.dY).apply(null, arguments);
            }),
            Y_ = (a._emscripten_bind_btGearConstraint_needsFeedback_0 = function () {
                return (Y_ = a._emscripten_bind_btGearConstraint_needsFeedback_0 = a.asm.eY).apply(null, arguments);
            }),
            Z_ = (a._emscripten_bind_btGearConstraint_enableFeedback_1 = function () {
                return (Z_ = a._emscripten_bind_btGearConstraint_enableFeedback_1 = a.asm.fY).apply(null, arguments);
            }),
            $_ = (a._emscripten_bind_btGearConstraint_getAppliedImpulse_0 = function () {
                return ($_ = a._emscripten_bind_btGearConstraint_getAppliedImpulse_0 = a.asm.gY).apply(null, arguments);
            }),
            a0 = (a._emscripten_bind_btGearConstraint_getConstraintType_0 = function () {
                return (a0 = a._emscripten_bind_btGearConstraint_getConstraintType_0 = a.asm.hY).apply(null, arguments);
            }),
            b0 = (a._emscripten_bind_btGearConstraint_getObjectType_0 = function () {
                return (b0 = a._emscripten_bind_btGearConstraint_getObjectType_0 = a.asm.iY).apply(null, arguments);
            }),
            c0 = (a._emscripten_bind_btGearConstraint_get_m_objectType_0 = function () {
                return (c0 = a._emscripten_bind_btGearConstraint_get_m_objectType_0 = a.asm.jY).apply(null, arguments);
            }),
            d0 = (a._emscripten_bind_btGearConstraint_set_m_objectType_1 = function () {
                return (d0 = a._emscripten_bind_btGearConstraint_set_m_objectType_1 = a.asm.kY).apply(null, arguments);
            }),
            e0 = (a._emscripten_bind_btGearConstraint___destroy___0 = function () {
                return (e0 = a._emscripten_bind_btGearConstraint___destroy___0 = a.asm.lY).apply(null, arguments);
            }),
            f0 = (a._emscripten_bind_btFixedConstraint_btFixedConstraint_4 = function () {
                return (f0 = a._emscripten_bind_btFixedConstraint_btFixedConstraint_4 = a.asm.mY).apply(null, arguments);
            }),
            g0 = (a._emscripten_bind_btFixedConstraint_buildJacobian_0 = function () {
                return (g0 = a._emscripten_bind_btFixedConstraint_buildJacobian_0 = a.asm.nY).apply(null, arguments);
            }),
            h0 = (a._emscripten_bind_btFixedConstraint_getRotationalLimitMotor_1 = function () {
                return (h0 = a._emscripten_bind_btFixedConstraint_getRotationalLimitMotor_1 = a.asm.oY).apply(null, arguments);
            }),
            i0 = (a._emscripten_bind_btFixedConstraint_getTranslationalLimitMotor_0 = function () {
                return (i0 = a._emscripten_bind_btFixedConstraint_getTranslationalLimitMotor_0 = a.asm.pY).apply(null, arguments);
            }),
            j0 = (a._emscripten_bind_btFixedConstraint_calculateTransforms_0 = function () {
                return (j0 = a._emscripten_bind_btFixedConstraint_calculateTransforms_0 = a.asm.qY).apply(null, arguments);
            }),
            k0 = (a._emscripten_bind_btFixedConstraint_calculateTransforms_2 = function () {
                return (k0 = a._emscripten_bind_btFixedConstraint_calculateTransforms_2 = a.asm.rY).apply(null, arguments);
            }),
            l0 = (a._emscripten_bind_btFixedConstraint_getCalculatedTransformA_0 = function () {
                return (l0 = a._emscripten_bind_btFixedConstraint_getCalculatedTransformA_0 = a.asm.sY).apply(null, arguments);
            }),
            m0 = (a._emscripten_bind_btFixedConstraint_getCalculatedTransformB_0 = function () {
                return (m0 = a._emscripten_bind_btFixedConstraint_getCalculatedTransformB_0 = a.asm.tY).apply(null, arguments);
            }),
            n0 = (a._emscripten_bind_btFixedConstraint_getFrameOffsetA_0 = function () {
                return (n0 = a._emscripten_bind_btFixedConstraint_getFrameOffsetA_0 = a.asm.uY).apply(null, arguments);
            }),
            o0 = (a._emscripten_bind_btFixedConstraint_getFrameOffsetB_0 = function () {
                return (o0 = a._emscripten_bind_btFixedConstraint_getFrameOffsetB_0 = a.asm.vY).apply(null, arguments);
            }),
            p0 = (a._emscripten_bind_btFixedConstraint_getAxis_1 = function () {
                return (p0 = a._emscripten_bind_btFixedConstraint_getAxis_1 = a.asm.wY).apply(null, arguments);
            }),
            q0 = (a._emscripten_bind_btFixedConstraint_getAngle_1 = function () {
                return (q0 = a._emscripten_bind_btFixedConstraint_getAngle_1 = a.asm.xY).apply(null, arguments);
            }),
            r0 = (a._emscripten_bind_btFixedConstraint_getRelativePivotPosition_1 = function () {
                return (r0 = a._emscripten_bind_btFixedConstraint_getRelativePivotPosition_1 = a.asm.yY).apply(null, arguments);
            }),
            s0 = (a._emscripten_bind_btFixedConstraint_setFrames_2 = function () {
                return (s0 = a._emscripten_bind_btFixedConstraint_setFrames_2 = a.asm.zY).apply(null, arguments);
            }),
            t0 = (a._emscripten_bind_btFixedConstraint_setLinearLowerLimit_1 = function () {
                return (t0 = a._emscripten_bind_btFixedConstraint_setLinearLowerLimit_1 = a.asm.AY).apply(null, arguments);
            }),
            u0 = (a._emscripten_bind_btFixedConstraint_getLinearLowerLimit_1 = function () {
                return (u0 = a._emscripten_bind_btFixedConstraint_getLinearLowerLimit_1 = a.asm.BY).apply(null, arguments);
            }),
            v0 = (a._emscripten_bind_btFixedConstraint_setLinearUpperLimit_1 = function () {
                return (v0 = a._emscripten_bind_btFixedConstraint_setLinearUpperLimit_1 = a.asm.CY).apply(null, arguments);
            }),
            w0 = (a._emscripten_bind_btFixedConstraint_getLinearUpperLimit_1 = function () {
                return (w0 = a._emscripten_bind_btFixedConstraint_getLinearUpperLimit_1 = a.asm.DY).apply(null, arguments);
            }),
            x0 = (a._emscripten_bind_btFixedConstraint_setAngularLowerLimit_1 = function () {
                return (x0 = a._emscripten_bind_btFixedConstraint_setAngularLowerLimit_1 = a.asm.EY).apply(null, arguments);
            }),
            y0 = (a._emscripten_bind_btFixedConstraint_setAngularLowerLimitReversed_1 = function () {
                return (y0 = a._emscripten_bind_btFixedConstraint_setAngularLowerLimitReversed_1 = a.asm.FY).apply(null, arguments);
            }),
            z0 = (a._emscripten_bind_btFixedConstraint_getAngularLowerLimit_1 = function () {
                return (z0 = a._emscripten_bind_btFixedConstraint_getAngularLowerLimit_1 = a.asm.GY).apply(null, arguments);
            }),
            A0 = (a._emscripten_bind_btFixedConstraint_getAngularLowerLimitReversed_1 = function () {
                return (A0 = a._emscripten_bind_btFixedConstraint_getAngularLowerLimitReversed_1 = a.asm.HY).apply(null, arguments);
            }),
            B0 = (a._emscripten_bind_btFixedConstraint_setAngularUpperLimit_1 = function () {
                return (B0 = a._emscripten_bind_btFixedConstraint_setAngularUpperLimit_1 = a.asm.IY).apply(null, arguments);
            }),
            C0 = (a._emscripten_bind_btFixedConstraint_setAngularUpperLimitReversed_1 = function () {
                return (C0 = a._emscripten_bind_btFixedConstraint_setAngularUpperLimitReversed_1 = a.asm.JY).apply(null, arguments);
            }),
            D0 = (a._emscripten_bind_btFixedConstraint_getAngularUpperLimit_1 = function () {
                return (D0 = a._emscripten_bind_btFixedConstraint_getAngularUpperLimit_1 = a.asm.KY).apply(null, arguments);
            }),
            E0 = (a._emscripten_bind_btFixedConstraint_getAngularUpperLimitReversed_1 = function () {
                return (E0 = a._emscripten_bind_btFixedConstraint_getAngularUpperLimitReversed_1 = a.asm.LY).apply(null, arguments);
            }),
            F0 = (a._emscripten_bind_btFixedConstraint_setLimit_3 = function () {
                return (F0 = a._emscripten_bind_btFixedConstraint_setLimit_3 = a.asm.MY).apply(null, arguments);
            }),
            G0 = (a._emscripten_bind_btFixedConstraint_setLimitReversed_3 = function () {
                return (G0 = a._emscripten_bind_btFixedConstraint_setLimitReversed_3 = a.asm.NY).apply(null, arguments);
            }),
            H0 = (a._emscripten_bind_btFixedConstraint_isLimited_1 = function () {
                return (H0 = a._emscripten_bind_btFixedConstraint_isLimited_1 = a.asm.OY).apply(null, arguments);
            }),
            I0 = (a._emscripten_bind_btFixedConstraint_setRotationOrder_1 = function () {
                return (I0 = a._emscripten_bind_btFixedConstraint_setRotationOrder_1 = a.asm.PY).apply(null, arguments);
            }),
            J0 = (a._emscripten_bind_btFixedConstraint_getRotationOrder_0 = function () {
                return (J0 = a._emscripten_bind_btFixedConstraint_getRotationOrder_0 = a.asm.QY).apply(null, arguments);
            }),
            K0 = (a._emscripten_bind_btFixedConstraint_setAxis_2 = function () {
                return (K0 = a._emscripten_bind_btFixedConstraint_setAxis_2 = a.asm.RY).apply(null, arguments);
            }),
            L0 = (a._emscripten_bind_btFixedConstraint_setBounce_2 = function () {
                return (L0 = a._emscripten_bind_btFixedConstraint_setBounce_2 = a.asm.SY).apply(null, arguments);
            }),
            M0 = (a._emscripten_bind_btFixedConstraint_enableMotor_2 = function () {
                return (M0 = a._emscripten_bind_btFixedConstraint_enableMotor_2 = a.asm.TY).apply(null, arguments);
            }),
            N0 = (a._emscripten_bind_btFixedConstraint_setServo_2 = function () {
                return (N0 = a._emscripten_bind_btFixedConstraint_setServo_2 = a.asm.UY).apply(null, arguments);
            }),
            O0 = (a._emscripten_bind_btFixedConstraint_setTargetVelocity_2 = function () {
                return (O0 = a._emscripten_bind_btFixedConstraint_setTargetVelocity_2 = a.asm.VY).apply(null, arguments);
            }),
            P0 = (a._emscripten_bind_btFixedConstraint_setServoTarget_2 = function () {
                return (P0 = a._emscripten_bind_btFixedConstraint_setServoTarget_2 = a.asm.WY).apply(null, arguments);
            }),
            Q0 = (a._emscripten_bind_btFixedConstraint_setMaxMotorForce_2 = function () {
                return (Q0 = a._emscripten_bind_btFixedConstraint_setMaxMotorForce_2 = a.asm.XY).apply(null, arguments);
            }),
            R0 = (a._emscripten_bind_btFixedConstraint_enableSpring_2 = function () {
                return (R0 = a._emscripten_bind_btFixedConstraint_enableSpring_2 = a.asm.YY).apply(null, arguments);
            }),
            S0 = (a._emscripten_bind_btFixedConstraint_setStiffness_2 = function () {
                return (S0 = a._emscripten_bind_btFixedConstraint_setStiffness_2 = a.asm.ZY).apply(null, arguments);
            }),
            T0 = (a._emscripten_bind_btFixedConstraint_setDamping_2 = function () {
                return (T0 = a._emscripten_bind_btFixedConstraint_setDamping_2 = a.asm._Y).apply(null, arguments);
            }),
            U0 = (a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_0 = function () {
                return (U0 = a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_0 = a.asm.$Y).apply(null, arguments);
            }),
            V0 = (a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_1 = function () {
                return (V0 = a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_1 = a.asm.aZ).apply(null, arguments);
            }),
            W0 = (a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_2 = function () {
                return (W0 = a._emscripten_bind_btFixedConstraint_setEquilibriumPoint_2 = a.asm.bZ).apply(null, arguments);
            }),
            X0 = (a._emscripten_bind_btFixedConstraint_setParam_2 = function () {
                return (X0 = a._emscripten_bind_btFixedConstraint_setParam_2 = a.asm.cZ).apply(null, arguments);
            }),
            Y0 = (a._emscripten_bind_btFixedConstraint_setParam_3 = function () {
                return (Y0 = a._emscripten_bind_btFixedConstraint_setParam_3 = a.asm.dZ).apply(null, arguments);
            }),
            Z0 = (a._emscripten_bind_btFixedConstraint_getParam_1 = function () {
                return (Z0 = a._emscripten_bind_btFixedConstraint_getParam_1 = a.asm.eZ).apply(null, arguments);
            }),
            $0 = (a._emscripten_bind_btFixedConstraint_getParam_2 = function () {
                return ($0 = a._emscripten_bind_btFixedConstraint_getParam_2 = a.asm.fZ).apply(null, arguments);
            }),
            a1 = (a._emscripten_bind_btFixedConstraint_btGetMatrixElem_2 = function () {
                return (a1 = a._emscripten_bind_btFixedConstraint_btGetMatrixElem_2 = a.asm.gZ).apply(null, arguments);
            }),
            b1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerXYZ_2 = function () {
                return (b1 = a._emscripten_bind_btFixedConstraint_matrixToEulerXYZ_2 = a.asm.hZ).apply(null, arguments);
            }),
            c1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerXZY_2 = function () {
                return (c1 = a._emscripten_bind_btFixedConstraint_matrixToEulerXZY_2 = a.asm.iZ).apply(null, arguments);
            }),
            d1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerYXZ_2 = function () {
                return (d1 = a._emscripten_bind_btFixedConstraint_matrixToEulerYXZ_2 = a.asm.jZ).apply(null, arguments);
            }),
            e1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerYZX_2 = function () {
                return (e1 = a._emscripten_bind_btFixedConstraint_matrixToEulerYZX_2 = a.asm.kZ).apply(null, arguments);
            }),
            f1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerZXY_2 = function () {
                return (f1 = a._emscripten_bind_btFixedConstraint_matrixToEulerZXY_2 = a.asm.lZ).apply(null, arguments);
            }),
            g1 = (a._emscripten_bind_btFixedConstraint_matrixToEulerZYX_2 = function () {
                return (g1 = a._emscripten_bind_btFixedConstraint_matrixToEulerZYX_2 = a.asm.mZ).apply(null, arguments);
            }),
            h1 = (a._emscripten_bind_btFixedConstraint_getFixedBody_0 = function () {
                return (h1 = a._emscripten_bind_btFixedConstraint_getFixedBody_0 = a.asm.nZ).apply(null, arguments);
            }),
            i1 = (a._emscripten_bind_btFixedConstraint_getOverrideNumSolverIterations_0 = function () {
                return (i1 = a._emscripten_bind_btFixedConstraint_getOverrideNumSolverIterations_0 = a.asm.oZ).apply(null, arguments);
            }),
            j1 = (a._emscripten_bind_btFixedConstraint_setOverrideNumSolverIterations_1 = function () {
                return (j1 = a._emscripten_bind_btFixedConstraint_setOverrideNumSolverIterations_1 = a.asm.pZ).apply(null, arguments);
            }),
            k1 = (a._emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 = function () {
                return (k1 = a._emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 = a.asm.qZ).apply(null, arguments);
            }),
            l1 = (a._emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 = function () {
                return (l1 = a._emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 = a.asm.rZ).apply(null, arguments);
            }),
            m1 = (a._emscripten_bind_btFixedConstraint_isEnabled_0 = function () {
                return (m1 = a._emscripten_bind_btFixedConstraint_isEnabled_0 = a.asm.sZ).apply(null, arguments);
            }),
            n1 = (a._emscripten_bind_btFixedConstraint_setEnabled_1 = function () {
                return (n1 = a._emscripten_bind_btFixedConstraint_setEnabled_1 = a.asm.tZ).apply(null, arguments);
            }),
            o1 = (a._emscripten_bind_btFixedConstraint_getUserConstraintType_0 = function () {
                return (o1 = a._emscripten_bind_btFixedConstraint_getUserConstraintType_0 = a.asm.uZ).apply(null, arguments);
            }),
            p1 = (a._emscripten_bind_btFixedConstraint_setUserConstraintType_1 = function () {
                return (p1 = a._emscripten_bind_btFixedConstraint_setUserConstraintType_1 = a.asm.vZ).apply(null, arguments);
            }),
            q1 = (a._emscripten_bind_btFixedConstraint_setUserConstraintId_1 = function () {
                return (q1 = a._emscripten_bind_btFixedConstraint_setUserConstraintId_1 = a.asm.wZ).apply(null, arguments);
            }),
            r1 = (a._emscripten_bind_btFixedConstraint_getUserConstraintId_0 = function () {
                return (r1 = a._emscripten_bind_btFixedConstraint_getUserConstraintId_0 = a.asm.xZ).apply(null, arguments);
            }),
            s1 = (a._emscripten_bind_btFixedConstraint_setUserConstraintPtr_1 = function () {
                return (s1 = a._emscripten_bind_btFixedConstraint_setUserConstraintPtr_1 = a.asm.yZ).apply(null, arguments);
            }),
            t1 = (a._emscripten_bind_btFixedConstraint_getUserConstraintPtr_0 = function () {
                return (t1 = a._emscripten_bind_btFixedConstraint_getUserConstraintPtr_0 = a.asm.zZ).apply(null, arguments);
            }),
            u1 = (a._emscripten_bind_btFixedConstraint_setJointFeedback_1 = function () {
                return (u1 = a._emscripten_bind_btFixedConstraint_setJointFeedback_1 = a.asm.AZ).apply(null, arguments);
            }),
            v1 = (a._emscripten_bind_btFixedConstraint_getJointFeedback_0 = function () {
                return (v1 = a._emscripten_bind_btFixedConstraint_getJointFeedback_0 = a.asm.BZ).apply(null, arguments);
            }),
            w1 = (a._emscripten_bind_btFixedConstraint_getUid_0 = function () {
                return (w1 = a._emscripten_bind_btFixedConstraint_getUid_0 = a.asm.CZ).apply(null, arguments);
            }),
            x1 = (a._emscripten_bind_btFixedConstraint_needsFeedback_0 = function () {
                return (x1 = a._emscripten_bind_btFixedConstraint_needsFeedback_0 = a.asm.DZ).apply(null, arguments);
            }),
            y1 = (a._emscripten_bind_btFixedConstraint_enableFeedback_1 = function () {
                return (y1 = a._emscripten_bind_btFixedConstraint_enableFeedback_1 = a.asm.EZ).apply(null, arguments);
            }),
            z1 = (a._emscripten_bind_btFixedConstraint_getAppliedImpulse_0 = function () {
                return (z1 = a._emscripten_bind_btFixedConstraint_getAppliedImpulse_0 = a.asm.FZ).apply(null, arguments);
            }),
            A1 = (a._emscripten_bind_btFixedConstraint_getConstraintType_0 = function () {
                return (A1 = a._emscripten_bind_btFixedConstraint_getConstraintType_0 = a.asm.GZ).apply(null, arguments);
            }),
            B1 = (a._emscripten_bind_btFixedConstraint_getObjectType_0 = function () {
                return (B1 = a._emscripten_bind_btFixedConstraint_getObjectType_0 = a.asm.HZ).apply(null, arguments);
            }),
            C1 = (a._emscripten_bind_btFixedConstraint_get_m_objectType_0 = function () {
                return (C1 = a._emscripten_bind_btFixedConstraint_get_m_objectType_0 = a.asm.IZ).apply(null, arguments);
            }),
            D1 = (a._emscripten_bind_btFixedConstraint_set_m_objectType_1 = function () {
                return (D1 = a._emscripten_bind_btFixedConstraint_set_m_objectType_1 = a.asm.JZ).apply(null, arguments);
            }),
            E1 = (a._emscripten_bind_btFixedConstraint___destroy___0 = function () {
                return (E1 = a._emscripten_bind_btFixedConstraint___destroy___0 = a.asm.KZ).apply(null, arguments);
            }),
            F1 = (a._emscripten_bind_btRotationalLimitMotor2_btRotationalLimitMotor2_0 = function () {
                return (F1 = a._emscripten_bind_btRotationalLimitMotor2_btRotationalLimitMotor2_0 = a.asm.LZ).apply(null, arguments);
            }),
            G1 = (a._emscripten_bind_btRotationalLimitMotor2_isLimited_0 = function () {
                return (G1 = a._emscripten_bind_btRotationalLimitMotor2_isLimited_0 = a.asm.MZ).apply(null, arguments);
            }),
            H1 = (a._emscripten_bind_btRotationalLimitMotor2_testLimitValue_1 = function () {
                return (H1 = a._emscripten_bind_btRotationalLimitMotor2_testLimitValue_1 = a.asm.NZ).apply(null, arguments);
            }),
            I1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_loLimit_0 = function () {
                return (I1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_loLimit_0 = a.asm.OZ).apply(null, arguments);
            }),
            J1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_loLimit_1 = function () {
                return (J1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_loLimit_1 = a.asm.PZ).apply(null, arguments);
            }),
            K1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_hiLimit_0 = function () {
                return (K1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_hiLimit_0 = a.asm.QZ).apply(null, arguments);
            }),
            L1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_hiLimit_1 = function () {
                return (L1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_hiLimit_1 = a.asm.RZ).apply(null, arguments);
            }),
            M1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_bounce_0 = function () {
                return (M1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_bounce_0 = a.asm.SZ).apply(null, arguments);
            }),
            N1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_bounce_1 = function () {
                return (N1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_bounce_1 = a.asm.TZ).apply(null, arguments);
            }),
            O1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_stopERP_0 = function () {
                return (O1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_stopERP_0 = a.asm.UZ).apply(null, arguments);
            }),
            P1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_stopERP_1 = function () {
                return (P1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_stopERP_1 = a.asm.VZ).apply(null, arguments);
            }),
            Q1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_stopCFM_0 = function () {
                return (Q1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_stopCFM_0 = a.asm.WZ).apply(null, arguments);
            }),
            R1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_stopCFM_1 = function () {
                return (R1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_stopCFM_1 = a.asm.XZ).apply(null, arguments);
            }),
            S1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_motorERP_0 = function () {
                return (S1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_motorERP_0 = a.asm.YZ).apply(null, arguments);
            }),
            T1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_motorERP_1 = function () {
                return (T1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_motorERP_1 = a.asm.ZZ).apply(null, arguments);
            }),
            U1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_motorCFM_0 = function () {
                return (U1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_motorCFM_0 = a.asm._Z).apply(null, arguments);
            }),
            V1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_motorCFM_1 = function () {
                return (V1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_motorCFM_1 = a.asm.$Z).apply(null, arguments);
            }),
            W1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_enableMotor_0 = function () {
                return (W1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_enableMotor_0 = a.asm.a_).apply(null, arguments);
            }),
            X1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_enableMotor_1 = function () {
                return (X1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_enableMotor_1 = a.asm.b_).apply(null, arguments);
            }),
            Y1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_targetVelocity_0 = function () {
                return (Y1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_targetVelocity_0 = a.asm.c_).apply(null, arguments);
            }),
            Z1 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_targetVelocity_1 = function () {
                return (Z1 = a._emscripten_bind_btRotationalLimitMotor2_set_m_targetVelocity_1 = a.asm.d_).apply(null, arguments);
            }),
            $1 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_maxMotorForce_0 = function () {
                return ($1 = a._emscripten_bind_btRotationalLimitMotor2_get_m_maxMotorForce_0 = a.asm.e_).apply(null, arguments);
            }),
            a2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_maxMotorForce_1 = function () {
                return (a2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_maxMotorForce_1 = a.asm.f_).apply(null, arguments);
            }),
            b2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_servoMotor_0 = function () {
                return (b2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_servoMotor_0 = a.asm.g_).apply(null, arguments);
            }),
            c2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_servoMotor_1 = function () {
                return (c2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_servoMotor_1 = a.asm.h_).apply(null, arguments);
            }),
            d2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_servoTarget_0 = function () {
                return (d2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_servoTarget_0 = a.asm.i_).apply(null, arguments);
            }),
            e2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_servoTarget_1 = function () {
                return (e2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_servoTarget_1 = a.asm.j_).apply(null, arguments);
            }),
            f2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_enableSpring_0 = function () {
                return (f2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_enableSpring_0 = a.asm.k_).apply(null, arguments);
            }),
            g2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_enableSpring_1 = function () {
                return (g2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_enableSpring_1 = a.asm.l_).apply(null, arguments);
            }),
            h2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_springStiffness_0 = function () {
                return (h2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_springStiffness_0 = a.asm.m_).apply(null, arguments);
            }),
            i2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_springStiffness_1 = function () {
                return (i2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_springStiffness_1 = a.asm.n_).apply(null, arguments);
            }),
            j2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_springStiffnessLimited_0 = function () {
                return (j2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_springStiffnessLimited_0 = a.asm.o_).apply(null, arguments);
            }),
            k2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_springStiffnessLimited_1 = function () {
                return (k2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_springStiffnessLimited_1 = a.asm.p_).apply(null, arguments);
            }),
            l2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_springDamping_0 = function () {
                return (l2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_springDamping_0 = a.asm.q_).apply(null, arguments);
            }),
            m2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_springDamping_1 = function () {
                return (m2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_springDamping_1 = a.asm.r_).apply(null, arguments);
            }),
            n2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_springDampingLimited_0 = function () {
                return (n2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_springDampingLimited_0 = a.asm.s_).apply(null, arguments);
            }),
            o2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_springDampingLimited_1 = function () {
                return (o2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_springDampingLimited_1 = a.asm.t_).apply(null, arguments);
            }),
            p2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_equilibriumPoint_0 = function () {
                return (p2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_equilibriumPoint_0 = a.asm.u_).apply(null, arguments);
            }),
            q2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_equilibriumPoint_1 = function () {
                return (q2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_equilibriumPoint_1 = a.asm.v_).apply(null, arguments);
            }),
            r2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimitError_0 = function () {
                return (r2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimitError_0 = a.asm.w_).apply(null, arguments);
            }),
            s2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimitError_1 = function () {
                return (s2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimitError_1 = a.asm.x_).apply(null, arguments);
            }),
            t2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimitErrorHi_0 = function () {
                return (t2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimitErrorHi_0 = a.asm.y_).apply(null, arguments);
            }),
            u2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimitErrorHi_1 = function () {
                return (u2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimitErrorHi_1 = a.asm.z_).apply(null, arguments);
            }),
            v2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_currentPosition_0 = function () {
                return (v2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_currentPosition_0 = a.asm.A_).apply(null, arguments);
            }),
            w2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_currentPosition_1 = function () {
                return (w2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_currentPosition_1 = a.asm.B_).apply(null, arguments);
            }),
            x2 = (a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimit_0 = function () {
                return (x2 = a._emscripten_bind_btRotationalLimitMotor2_get_m_currentLimit_0 = a.asm.C_).apply(null, arguments);
            }),
            y2 = (a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimit_1 = function () {
                return (y2 = a._emscripten_bind_btRotationalLimitMotor2_set_m_currentLimit_1 = a.asm.D_).apply(null, arguments);
            }),
            z2 = (a._emscripten_bind_btRotationalLimitMotor2___destroy___0 = function () {
                return (z2 = a._emscripten_bind_btRotationalLimitMotor2___destroy___0 = a.asm.E_).apply(null, arguments);
            }),
            A2 = (a._emscripten_bind_btTranslationalLimitMotor2_btTranslationalLimitMotor2_0 = function () {
                return (A2 = a._emscripten_bind_btTranslationalLimitMotor2_btTranslationalLimitMotor2_0 = a.asm.F_).apply(null, arguments);
            }),
            B2 = (a._emscripten_bind_btTranslationalLimitMotor2_isLimited_1 = function () {
                return (B2 = a._emscripten_bind_btTranslationalLimitMotor2_isLimited_1 = a.asm.G_).apply(null, arguments);
            }),
            C2 = (a._emscripten_bind_btTranslationalLimitMotor2_testLimitValue_2 = function () {
                return (C2 = a._emscripten_bind_btTranslationalLimitMotor2_testLimitValue_2 = a.asm.H_).apply(null, arguments);
            }),
            D2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_lowerLimit_0 = function () {
                return (D2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_lowerLimit_0 = a.asm.I_).apply(null, arguments);
            }),
            E2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_lowerLimit_1 = function () {
                return (E2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_lowerLimit_1 = a.asm.J_).apply(null, arguments);
            }),
            F2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_upperLimit_0 = function () {
                return (F2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_upperLimit_0 = a.asm.K_).apply(null, arguments);
            }),
            G2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_upperLimit_1 = function () {
                return (G2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_upperLimit_1 = a.asm.L_).apply(null, arguments);
            }),
            H2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_bounce_0 = function () {
                return (H2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_bounce_0 = a.asm.M_).apply(null, arguments);
            }),
            I2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_bounce_1 = function () {
                return (I2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_bounce_1 = a.asm.N_).apply(null, arguments);
            }),
            J2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_stopERP_0 = function () {
                return (J2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_stopERP_0 = a.asm.O_).apply(null, arguments);
            }),
            K2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_stopERP_1 = function () {
                return (K2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_stopERP_1 = a.asm.P_).apply(null, arguments);
            }),
            L2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_stopCFM_0 = function () {
                return (L2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_stopCFM_0 = a.asm.Q_).apply(null, arguments);
            }),
            M2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_stopCFM_1 = function () {
                return (M2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_stopCFM_1 = a.asm.R_).apply(null, arguments);
            }),
            N2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_motorERP_0 = function () {
                return (N2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_motorERP_0 = a.asm.S_).apply(null, arguments);
            }),
            O2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_motorERP_1 = function () {
                return (O2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_motorERP_1 = a.asm.T_).apply(null, arguments);
            }),
            P2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_motorCFM_0 = function () {
                return (P2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_motorCFM_0 = a.asm.U_).apply(null, arguments);
            }),
            Q2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_motorCFM_1 = function () {
                return (Q2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_motorCFM_1 = a.asm.V_).apply(null, arguments);
            }),
            R2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_enableMotor_1 = function () {
                return (R2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_enableMotor_1 = a.asm.W_).apply(null, arguments);
            }),
            S2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_enableMotor_2 = function () {
                return (S2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_enableMotor_2 = a.asm.X_).apply(null, arguments);
            }),
            T2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_servoMotor_1 = function () {
                return (T2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_servoMotor_1 = a.asm.Y_).apply(null, arguments);
            }),
            U2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_servoMotor_2 = function () {
                return (U2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_servoMotor_2 = a.asm.Z_).apply(null, arguments);
            }),
            V2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_enableSpring_1 = function () {
                return (V2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_enableSpring_1 = a.asm.__).apply(null, arguments);
            }),
            W2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_enableSpring_2 = function () {
                return (W2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_enableSpring_2 = a.asm.$_).apply(null, arguments);
            }),
            X2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_servoTarget_0 = function () {
                return (X2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_servoTarget_0 = a.asm.a$).apply(null, arguments);
            }),
            Y2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_servoTarget_1 = function () {
                return (Y2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_servoTarget_1 = a.asm.b$).apply(null, arguments);
            }),
            Z2 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_springStiffness_0 = function () {
                return (Z2 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_springStiffness_0 = a.asm.c$).apply(null, arguments);
            }),
            $2 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_springStiffness_1 = function () {
                return ($2 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_springStiffness_1 = a.asm.d$).apply(null, arguments);
            }),
            a3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_springStiffnessLimited_1 = function () {
                return (a3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_springStiffnessLimited_1 = a.asm.e$).apply(null, arguments);
            }),
            b3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_springStiffnessLimited_2 = function () {
                return (b3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_springStiffnessLimited_2 = a.asm.f$).apply(null, arguments);
            }),
            c3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_springDamping_0 = function () {
                return (c3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_springDamping_0 = a.asm.g$).apply(null, arguments);
            }),
            d3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_springDamping_1 = function () {
                return (d3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_springDamping_1 = a.asm.h$).apply(null, arguments);
            }),
            e3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_springDampingLimited_1 = function () {
                return (e3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_springDampingLimited_1 = a.asm.i$).apply(null, arguments);
            }),
            f3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_springDampingLimited_2 = function () {
                return (f3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_springDampingLimited_2 = a.asm.j$).apply(null, arguments);
            }),
            g3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_equilibriumPoint_0 = function () {
                return (g3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_equilibriumPoint_0 = a.asm.k$).apply(null, arguments);
            }),
            h3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_equilibriumPoint_1 = function () {
                return (h3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_equilibriumPoint_1 = a.asm.l$).apply(null, arguments);
            }),
            i3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_targetVelocity_0 = function () {
                return (i3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_targetVelocity_0 = a.asm.m$).apply(null, arguments);
            }),
            j3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_targetVelocity_1 = function () {
                return (j3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_targetVelocity_1 = a.asm.n$).apply(null, arguments);
            }),
            k3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_maxMotorForce_0 = function () {
                return (k3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_maxMotorForce_0 = a.asm.o$).apply(null, arguments);
            }),
            l3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_maxMotorForce_1 = function () {
                return (l3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_maxMotorForce_1 = a.asm.p$).apply(null, arguments);
            }),
            m3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimitError_0 = function () {
                return (m3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimitError_0 = a.asm.q$).apply(null, arguments);
            }),
            n3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimitError_1 = function () {
                return (n3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimitError_1 = a.asm.r$).apply(null, arguments);
            }),
            o3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimitErrorHi_0 = function () {
                return (o3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimitErrorHi_0 = a.asm.s$).apply(null, arguments);
            }),
            p3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimitErrorHi_1 = function () {
                return (p3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimitErrorHi_1 = a.asm.t$).apply(null, arguments);
            }),
            q3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLinearDiff_0 = function () {
                return (q3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLinearDiff_0 = a.asm.u$).apply(null, arguments);
            }),
            r3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLinearDiff_1 = function () {
                return (r3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLinearDiff_1 = a.asm.v$).apply(null, arguments);
            }),
            s3 = (a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimit_1 = function () {
                return (s3 = a._emscripten_bind_btTranslationalLimitMotor2_get_m_currentLimit_1 = a.asm.w$).apply(null, arguments);
            }),
            t3 = (a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimit_2 = function () {
                return (t3 = a._emscripten_bind_btTranslationalLimitMotor2_set_m_currentLimit_2 = a.asm.x$).apply(null, arguments);
            }),
            u3 = (a._emscripten_bind_btTranslationalLimitMotor2___destroy___0 = function () {
                return (u3 = a._emscripten_bind_btTranslationalLimitMotor2___destroy___0 = a.asm.y$).apply(null, arguments);
            }),
            v3 = (a._emscripten_bind_btHinge2Constraint_btHinge2Constraint_5 = function () {
                return (v3 = a._emscripten_bind_btHinge2Constraint_btHinge2Constraint_5 = a.asm.z$).apply(null, arguments);
            }),
            w3 = (a._emscripten_bind_btHinge2Constraint_getAnchor_0 = function () {
                return (w3 = a._emscripten_bind_btHinge2Constraint_getAnchor_0 = a.asm.A$).apply(null, arguments);
            }),
            x3 = (a._emscripten_bind_btHinge2Constraint_getAnchor2_0 = function () {
                return (x3 = a._emscripten_bind_btHinge2Constraint_getAnchor2_0 = a.asm.B$).apply(null, arguments);
            }),
            y3 = (a._emscripten_bind_btHinge2Constraint_getAxis1_0 = function () {
                return (y3 = a._emscripten_bind_btHinge2Constraint_getAxis1_0 = a.asm.C$).apply(null, arguments);
            }),
            z3 = (a._emscripten_bind_btHinge2Constraint_getAxis2_0 = function () {
                return (z3 = a._emscripten_bind_btHinge2Constraint_getAxis2_0 = a.asm.D$).apply(null, arguments);
            }),
            A3 = (a._emscripten_bind_btHinge2Constraint_getAngle1_0 = function () {
                return (A3 = a._emscripten_bind_btHinge2Constraint_getAngle1_0 = a.asm.E$).apply(null, arguments);
            }),
            B3 = (a._emscripten_bind_btHinge2Constraint_getAngle2_0 = function () {
                return (B3 = a._emscripten_bind_btHinge2Constraint_getAngle2_0 = a.asm.F$).apply(null, arguments);
            }),
            C3 = (a._emscripten_bind_btHinge2Constraint_setUpperLimit_1 = function () {
                return (C3 = a._emscripten_bind_btHinge2Constraint_setUpperLimit_1 = a.asm.G$).apply(null, arguments);
            }),
            D3 = (a._emscripten_bind_btHinge2Constraint_setLowerLimit_1 = function () {
                return (D3 = a._emscripten_bind_btHinge2Constraint_setLowerLimit_1 = a.asm.H$).apply(null, arguments);
            }),
            E3 = (a._emscripten_bind_btHinge2Constraint_buildJacobian_0 = function () {
                return (E3 = a._emscripten_bind_btHinge2Constraint_buildJacobian_0 = a.asm.I$).apply(null, arguments);
            }),
            F3 = (a._emscripten_bind_btHinge2Constraint_getRotationalLimitMotor_1 = function () {
                return (F3 = a._emscripten_bind_btHinge2Constraint_getRotationalLimitMotor_1 = a.asm.J$).apply(null, arguments);
            }),
            G3 = (a._emscripten_bind_btHinge2Constraint_getTranslationalLimitMotor_0 = function () {
                return (G3 = a._emscripten_bind_btHinge2Constraint_getTranslationalLimitMotor_0 = a.asm.K$).apply(null, arguments);
            }),
            H3 = (a._emscripten_bind_btHinge2Constraint_calculateTransforms_0 = function () {
                return (H3 = a._emscripten_bind_btHinge2Constraint_calculateTransforms_0 = a.asm.L$).apply(null, arguments);
            }),
            I3 = (a._emscripten_bind_btHinge2Constraint_calculateTransforms_2 = function () {
                return (I3 = a._emscripten_bind_btHinge2Constraint_calculateTransforms_2 = a.asm.M$).apply(null, arguments);
            }),
            J3 = (a._emscripten_bind_btHinge2Constraint_getCalculatedTransformA_0 = function () {
                return (J3 = a._emscripten_bind_btHinge2Constraint_getCalculatedTransformA_0 = a.asm.N$).apply(null, arguments);
            }),
            K3 = (a._emscripten_bind_btHinge2Constraint_getCalculatedTransformB_0 = function () {
                return (K3 = a._emscripten_bind_btHinge2Constraint_getCalculatedTransformB_0 = a.asm.O$).apply(null, arguments);
            }),
            L3 = (a._emscripten_bind_btHinge2Constraint_getFrameOffsetA_0 = function () {
                return (L3 = a._emscripten_bind_btHinge2Constraint_getFrameOffsetA_0 = a.asm.P$).apply(null, arguments);
            }),
            M3 = (a._emscripten_bind_btHinge2Constraint_getFrameOffsetB_0 = function () {
                return (M3 = a._emscripten_bind_btHinge2Constraint_getFrameOffsetB_0 = a.asm.Q$).apply(null, arguments);
            }),
            N3 = (a._emscripten_bind_btHinge2Constraint_getAxis_1 = function () {
                return (N3 = a._emscripten_bind_btHinge2Constraint_getAxis_1 = a.asm.R$).apply(null, arguments);
            }),
            O3 = (a._emscripten_bind_btHinge2Constraint_getAngle_1 = function () {
                return (O3 = a._emscripten_bind_btHinge2Constraint_getAngle_1 = a.asm.S$).apply(null, arguments);
            }),
            P3 = (a._emscripten_bind_btHinge2Constraint_getRelativePivotPosition_1 = function () {
                return (P3 = a._emscripten_bind_btHinge2Constraint_getRelativePivotPosition_1 = a.asm.T$).apply(null, arguments);
            }),
            Q3 = (a._emscripten_bind_btHinge2Constraint_setFrames_2 = function () {
                return (Q3 = a._emscripten_bind_btHinge2Constraint_setFrames_2 = a.asm.U$).apply(null, arguments);
            }),
            R3 = (a._emscripten_bind_btHinge2Constraint_setLinearLowerLimit_1 = function () {
                return (R3 = a._emscripten_bind_btHinge2Constraint_setLinearLowerLimit_1 = a.asm.V$).apply(null, arguments);
            }),
            S3 = (a._emscripten_bind_btHinge2Constraint_getLinearLowerLimit_1 = function () {
                return (S3 = a._emscripten_bind_btHinge2Constraint_getLinearLowerLimit_1 = a.asm.W$).apply(null, arguments);
            }),
            T3 = (a._emscripten_bind_btHinge2Constraint_setLinearUpperLimit_1 = function () {
                return (T3 = a._emscripten_bind_btHinge2Constraint_setLinearUpperLimit_1 = a.asm.X$).apply(null, arguments);
            }),
            U3 = (a._emscripten_bind_btHinge2Constraint_getLinearUpperLimit_1 = function () {
                return (U3 = a._emscripten_bind_btHinge2Constraint_getLinearUpperLimit_1 = a.asm.Y$).apply(null, arguments);
            }),
            V3 = (a._emscripten_bind_btHinge2Constraint_setAngularLowerLimit_1 = function () {
                return (V3 = a._emscripten_bind_btHinge2Constraint_setAngularLowerLimit_1 = a.asm.Z$).apply(null, arguments);
            }),
            W3 = (a._emscripten_bind_btHinge2Constraint_setAngularLowerLimitReversed_1 = function () {
                return (W3 = a._emscripten_bind_btHinge2Constraint_setAngularLowerLimitReversed_1 = a.asm._$).apply(null, arguments);
            }),
            X3 = (a._emscripten_bind_btHinge2Constraint_getAngularLowerLimit_1 = function () {
                return (X3 = a._emscripten_bind_btHinge2Constraint_getAngularLowerLimit_1 = a.asm.$$).apply(null, arguments);
            }),
            Y3 = (a._emscripten_bind_btHinge2Constraint_getAngularLowerLimitReversed_1 = function () {
                return (Y3 = a._emscripten_bind_btHinge2Constraint_getAngularLowerLimitReversed_1 = a.asm.a0).apply(null, arguments);
            }),
            Z3 = (a._emscripten_bind_btHinge2Constraint_setAngularUpperLimit_1 = function () {
                return (Z3 = a._emscripten_bind_btHinge2Constraint_setAngularUpperLimit_1 = a.asm.b0).apply(null, arguments);
            }),
            $3 = (a._emscripten_bind_btHinge2Constraint_setAngularUpperLimitReversed_1 = function () {
                return ($3 = a._emscripten_bind_btHinge2Constraint_setAngularUpperLimitReversed_1 = a.asm.c0).apply(null, arguments);
            }),
            a4 = (a._emscripten_bind_btHinge2Constraint_getAngularUpperLimit_1 = function () {
                return (a4 = a._emscripten_bind_btHinge2Constraint_getAngularUpperLimit_1 = a.asm.d0).apply(null, arguments);
            }),
            b4 = (a._emscripten_bind_btHinge2Constraint_getAngularUpperLimitReversed_1 = function () {
                return (b4 = a._emscripten_bind_btHinge2Constraint_getAngularUpperLimitReversed_1 = a.asm.e0).apply(null, arguments);
            }),
            c4 = (a._emscripten_bind_btHinge2Constraint_setLimit_3 = function () {
                return (c4 = a._emscripten_bind_btHinge2Constraint_setLimit_3 = a.asm.f0).apply(null, arguments);
            }),
            d4 = (a._emscripten_bind_btHinge2Constraint_setLimitReversed_3 = function () {
                return (d4 = a._emscripten_bind_btHinge2Constraint_setLimitReversed_3 = a.asm.g0).apply(null, arguments);
            }),
            e4 = (a._emscripten_bind_btHinge2Constraint_isLimited_1 = function () {
                return (e4 = a._emscripten_bind_btHinge2Constraint_isLimited_1 = a.asm.h0).apply(null, arguments);
            }),
            f4 = (a._emscripten_bind_btHinge2Constraint_setRotationOrder_1 = function () {
                return (f4 = a._emscripten_bind_btHinge2Constraint_setRotationOrder_1 = a.asm.i0).apply(null, arguments);
            }),
            g4 = (a._emscripten_bind_btHinge2Constraint_getRotationOrder_0 = function () {
                return (g4 = a._emscripten_bind_btHinge2Constraint_getRotationOrder_0 = a.asm.j0).apply(null, arguments);
            }),
            h4 = (a._emscripten_bind_btHinge2Constraint_setAxis_2 = function () {
                return (h4 = a._emscripten_bind_btHinge2Constraint_setAxis_2 = a.asm.k0).apply(null, arguments);
            }),
            i4 = (a._emscripten_bind_btHinge2Constraint_setBounce_2 = function () {
                return (i4 = a._emscripten_bind_btHinge2Constraint_setBounce_2 = a.asm.l0).apply(null, arguments);
            }),
            j4 = (a._emscripten_bind_btHinge2Constraint_enableMotor_2 = function () {
                return (j4 = a._emscripten_bind_btHinge2Constraint_enableMotor_2 = a.asm.m0).apply(null, arguments);
            }),
            k4 = (a._emscripten_bind_btHinge2Constraint_setServo_2 = function () {
                return (k4 = a._emscripten_bind_btHinge2Constraint_setServo_2 = a.asm.n0).apply(null, arguments);
            }),
            l4 = (a._emscripten_bind_btHinge2Constraint_setTargetVelocity_2 = function () {
                return (l4 = a._emscripten_bind_btHinge2Constraint_setTargetVelocity_2 = a.asm.o0).apply(null, arguments);
            }),
            m4 = (a._emscripten_bind_btHinge2Constraint_setServoTarget_2 = function () {
                return (m4 = a._emscripten_bind_btHinge2Constraint_setServoTarget_2 = a.asm.p0).apply(null, arguments);
            }),
            n4 = (a._emscripten_bind_btHinge2Constraint_setMaxMotorForce_2 = function () {
                return (n4 = a._emscripten_bind_btHinge2Constraint_setMaxMotorForce_2 = a.asm.q0).apply(null, arguments);
            }),
            o4 = (a._emscripten_bind_btHinge2Constraint_enableSpring_2 = function () {
                return (o4 = a._emscripten_bind_btHinge2Constraint_enableSpring_2 = a.asm.r0).apply(null, arguments);
            }),
            p4 = (a._emscripten_bind_btHinge2Constraint_setStiffness_2 = function () {
                return (p4 = a._emscripten_bind_btHinge2Constraint_setStiffness_2 = a.asm.s0).apply(null, arguments);
            }),
            q4 = (a._emscripten_bind_btHinge2Constraint_setDamping_2 = function () {
                return (q4 = a._emscripten_bind_btHinge2Constraint_setDamping_2 = a.asm.t0).apply(null, arguments);
            }),
            r4 = (a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_0 = function () {
                return (r4 = a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_0 = a.asm.u0).apply(null, arguments);
            }),
            s4 = (a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_1 = function () {
                return (s4 = a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_1 = a.asm.v0).apply(null, arguments);
            }),
            t4 = (a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_2 = function () {
                return (t4 = a._emscripten_bind_btHinge2Constraint_setEquilibriumPoint_2 = a.asm.w0).apply(null, arguments);
            }),
            u4 = (a._emscripten_bind_btHinge2Constraint_setParam_2 = function () {
                return (u4 = a._emscripten_bind_btHinge2Constraint_setParam_2 = a.asm.x0).apply(null, arguments);
            }),
            v4 = (a._emscripten_bind_btHinge2Constraint_setParam_3 = function () {
                return (v4 = a._emscripten_bind_btHinge2Constraint_setParam_3 = a.asm.y0).apply(null, arguments);
            }),
            w4 = (a._emscripten_bind_btHinge2Constraint_getParam_1 = function () {
                return (w4 = a._emscripten_bind_btHinge2Constraint_getParam_1 = a.asm.z0).apply(null, arguments);
            }),
            x4 = (a._emscripten_bind_btHinge2Constraint_getParam_2 = function () {
                return (x4 = a._emscripten_bind_btHinge2Constraint_getParam_2 = a.asm.A0).apply(null, arguments);
            }),
            y4 = (a._emscripten_bind_btHinge2Constraint_btGetMatrixElem_2 = function () {
                return (y4 = a._emscripten_bind_btHinge2Constraint_btGetMatrixElem_2 = a.asm.B0).apply(null, arguments);
            }),
            z4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerXYZ_2 = function () {
                return (z4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerXYZ_2 = a.asm.C0).apply(null, arguments);
            }),
            A4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerXZY_2 = function () {
                return (A4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerXZY_2 = a.asm.D0).apply(null, arguments);
            }),
            B4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerYXZ_2 = function () {
                return (B4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerYXZ_2 = a.asm.E0).apply(null, arguments);
            }),
            C4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerYZX_2 = function () {
                return (C4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerYZX_2 = a.asm.F0).apply(null, arguments);
            }),
            D4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerZXY_2 = function () {
                return (D4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerZXY_2 = a.asm.G0).apply(null, arguments);
            }),
            E4 = (a._emscripten_bind_btHinge2Constraint_matrixToEulerZYX_2 = function () {
                return (E4 = a._emscripten_bind_btHinge2Constraint_matrixToEulerZYX_2 = a.asm.H0).apply(null, arguments);
            }),
            F4 = (a._emscripten_bind_btHinge2Constraint_getFixedBody_0 = function () {
                return (F4 = a._emscripten_bind_btHinge2Constraint_getFixedBody_0 = a.asm.I0).apply(null, arguments);
            }),
            G4 = (a._emscripten_bind_btHinge2Constraint_getOverrideNumSolverIterations_0 = function () {
                return (G4 = a._emscripten_bind_btHinge2Constraint_getOverrideNumSolverIterations_0 = a.asm.J0).apply(null, arguments);
            }),
            H4 = (a._emscripten_bind_btHinge2Constraint_setOverrideNumSolverIterations_1 = function () {
                return (H4 = a._emscripten_bind_btHinge2Constraint_setOverrideNumSolverIterations_1 = a.asm.K0).apply(null, arguments);
            }),
            I4 = (a._emscripten_bind_btHinge2Constraint_getBreakingImpulseThreshold_0 = function () {
                return (I4 = a._emscripten_bind_btHinge2Constraint_getBreakingImpulseThreshold_0 = a.asm.L0).apply(null, arguments);
            }),
            J4 = (a._emscripten_bind_btHinge2Constraint_setBreakingImpulseThreshold_1 = function () {
                return (J4 = a._emscripten_bind_btHinge2Constraint_setBreakingImpulseThreshold_1 = a.asm.M0).apply(null, arguments);
            }),
            K4 = (a._emscripten_bind_btHinge2Constraint_isEnabled_0 = function () {
                return (K4 = a._emscripten_bind_btHinge2Constraint_isEnabled_0 = a.asm.N0).apply(null, arguments);
            }),
            L4 = (a._emscripten_bind_btHinge2Constraint_setEnabled_1 = function () {
                return (L4 = a._emscripten_bind_btHinge2Constraint_setEnabled_1 = a.asm.O0).apply(null, arguments);
            }),
            M4 = (a._emscripten_bind_btHinge2Constraint_getUserConstraintType_0 = function () {
                return (M4 = a._emscripten_bind_btHinge2Constraint_getUserConstraintType_0 = a.asm.P0).apply(null, arguments);
            }),
            N4 = (a._emscripten_bind_btHinge2Constraint_setUserConstraintType_1 = function () {
                return (N4 = a._emscripten_bind_btHinge2Constraint_setUserConstraintType_1 = a.asm.Q0).apply(null, arguments);
            }),
            O4 = (a._emscripten_bind_btHinge2Constraint_setUserConstraintId_1 = function () {
                return (O4 = a._emscripten_bind_btHinge2Constraint_setUserConstraintId_1 = a.asm.R0).apply(null, arguments);
            }),
            P4 = (a._emscripten_bind_btHinge2Constraint_getUserConstraintId_0 = function () {
                return (P4 = a._emscripten_bind_btHinge2Constraint_getUserConstraintId_0 = a.asm.S0).apply(null, arguments);
            }),
            Q4 = (a._emscripten_bind_btHinge2Constraint_setUserConstraintPtr_1 = function () {
                return (Q4 = a._emscripten_bind_btHinge2Constraint_setUserConstraintPtr_1 = a.asm.T0).apply(null, arguments);
            }),
            R4 = (a._emscripten_bind_btHinge2Constraint_getUserConstraintPtr_0 = function () {
                return (R4 = a._emscripten_bind_btHinge2Constraint_getUserConstraintPtr_0 = a.asm.U0).apply(null, arguments);
            }),
            S4 = (a._emscripten_bind_btHinge2Constraint_setJointFeedback_1 = function () {
                return (S4 = a._emscripten_bind_btHinge2Constraint_setJointFeedback_1 = a.asm.V0).apply(null, arguments);
            }),
            T4 = (a._emscripten_bind_btHinge2Constraint_getJointFeedback_0 = function () {
                return (T4 = a._emscripten_bind_btHinge2Constraint_getJointFeedback_0 = a.asm.W0).apply(null, arguments);
            }),
            U4 = (a._emscripten_bind_btHinge2Constraint_getUid_0 = function () {
                return (U4 = a._emscripten_bind_btHinge2Constraint_getUid_0 = a.asm.X0).apply(null, arguments);
            }),
            V4 = (a._emscripten_bind_btHinge2Constraint_needsFeedback_0 = function () {
                return (V4 = a._emscripten_bind_btHinge2Constraint_needsFeedback_0 = a.asm.Y0).apply(null, arguments);
            }),
            W4 = (a._emscripten_bind_btHinge2Constraint_enableFeedback_1 = function () {
                return (W4 = a._emscripten_bind_btHinge2Constraint_enableFeedback_1 = a.asm.Z0).apply(null, arguments);
            }),
            X4 = (a._emscripten_bind_btHinge2Constraint_getAppliedImpulse_0 = function () {
                return (X4 = a._emscripten_bind_btHinge2Constraint_getAppliedImpulse_0 = a.asm._0).apply(null, arguments);
            }),
            Y4 = (a._emscripten_bind_btHinge2Constraint_getConstraintType_0 = function () {
                return (Y4 = a._emscripten_bind_btHinge2Constraint_getConstraintType_0 = a.asm.$0).apply(null, arguments);
            }),
            Z4 = (a._emscripten_bind_btHinge2Constraint_getObjectType_0 = function () {
                return (Z4 = a._emscripten_bind_btHinge2Constraint_getObjectType_0 = a.asm.a1).apply(null, arguments);
            }),
            $4 = (a._emscripten_bind_btHinge2Constraint_get_m_objectType_0 = function () {
                return ($4 = a._emscripten_bind_btHinge2Constraint_get_m_objectType_0 = a.asm.b1).apply(null, arguments);
            }),
            a5 = (a._emscripten_bind_btHinge2Constraint_set_m_objectType_1 = function () {
                return (a5 = a._emscripten_bind_btHinge2Constraint_set_m_objectType_1 = a.asm.c1).apply(null, arguments);
            }),
            b5 = (a._emscripten_bind_btHinge2Constraint___destroy___0 = function () {
                return (b5 = a._emscripten_bind_btHinge2Constraint___destroy___0 = a.asm.d1).apply(null, arguments);
            }),
            c5 = (a._emscripten_bind_btConstraintSolver___destroy___0 = function () {
                return (c5 = a._emscripten_bind_btConstraintSolver___destroy___0 = a.asm.e1).apply(null, arguments);
            }),
            d5 = (a._emscripten_bind_btDispatcherInfo_get_m_timeStep_0 = function () {
                return (d5 = a._emscripten_bind_btDispatcherInfo_get_m_timeStep_0 = a.asm.f1).apply(null, arguments);
            }),
            e5 = (a._emscripten_bind_btDispatcherInfo_set_m_timeStep_1 = function () {
                return (e5 = a._emscripten_bind_btDispatcherInfo_set_m_timeStep_1 = a.asm.g1).apply(null, arguments);
            }),
            f5 = (a._emscripten_bind_btDispatcherInfo_get_m_stepCount_0 = function () {
                return (f5 = a._emscripten_bind_btDispatcherInfo_get_m_stepCount_0 = a.asm.h1).apply(null, arguments);
            }),
            g5 = (a._emscripten_bind_btDispatcherInfo_set_m_stepCount_1 = function () {
                return (g5 = a._emscripten_bind_btDispatcherInfo_set_m_stepCount_1 = a.asm.i1).apply(null, arguments);
            }),
            h5 = (a._emscripten_bind_btDispatcherInfo_get_m_dispatchFunc_0 = function () {
                return (h5 = a._emscripten_bind_btDispatcherInfo_get_m_dispatchFunc_0 = a.asm.j1).apply(null, arguments);
            }),
            i5 = (a._emscripten_bind_btDispatcherInfo_set_m_dispatchFunc_1 = function () {
                return (i5 = a._emscripten_bind_btDispatcherInfo_set_m_dispatchFunc_1 = a.asm.k1).apply(null, arguments);
            }),
            j5 = (a._emscripten_bind_btDispatcherInfo_get_m_timeOfImpact_0 = function () {
                return (j5 = a._emscripten_bind_btDispatcherInfo_get_m_timeOfImpact_0 = a.asm.l1).apply(null, arguments);
            }),
            k5 = (a._emscripten_bind_btDispatcherInfo_set_m_timeOfImpact_1 = function () {
                return (k5 = a._emscripten_bind_btDispatcherInfo_set_m_timeOfImpact_1 = a.asm.m1).apply(null, arguments);
            }),
            l5 = (a._emscripten_bind_btDispatcherInfo_get_m_useContinuous_0 = function () {
                return (l5 = a._emscripten_bind_btDispatcherInfo_get_m_useContinuous_0 = a.asm.n1).apply(null, arguments);
            }),
            m5 = (a._emscripten_bind_btDispatcherInfo_set_m_useContinuous_1 = function () {
                return (m5 = a._emscripten_bind_btDispatcherInfo_set_m_useContinuous_1 = a.asm.o1).apply(null, arguments);
            }),
            n5 = (a._emscripten_bind_btDispatcherInfo_get_m_enableSatConvex_0 = function () {
                return (n5 = a._emscripten_bind_btDispatcherInfo_get_m_enableSatConvex_0 = a.asm.p1).apply(null, arguments);
            }),
            o5 = (a._emscripten_bind_btDispatcherInfo_set_m_enableSatConvex_1 = function () {
                return (o5 = a._emscripten_bind_btDispatcherInfo_set_m_enableSatConvex_1 = a.asm.q1).apply(null, arguments);
            }),
            p5 = (a._emscripten_bind_btDispatcherInfo_get_m_enableSPU_0 = function () {
                return (p5 = a._emscripten_bind_btDispatcherInfo_get_m_enableSPU_0 = a.asm.r1).apply(null, arguments);
            }),
            q5 = (a._emscripten_bind_btDispatcherInfo_set_m_enableSPU_1 = function () {
                return (q5 = a._emscripten_bind_btDispatcherInfo_set_m_enableSPU_1 = a.asm.s1).apply(null, arguments);
            }),
            r5 = (a._emscripten_bind_btDispatcherInfo_get_m_useEpa_0 = function () {
                return (r5 = a._emscripten_bind_btDispatcherInfo_get_m_useEpa_0 = a.asm.t1).apply(null, arguments);
            }),
            s5 = (a._emscripten_bind_btDispatcherInfo_set_m_useEpa_1 = function () {
                return (s5 = a._emscripten_bind_btDispatcherInfo_set_m_useEpa_1 = a.asm.u1).apply(null, arguments);
            }),
            t5 = (a._emscripten_bind_btDispatcherInfo_get_m_allowedCcdPenetration_0 = function () {
                return (t5 = a._emscripten_bind_btDispatcherInfo_get_m_allowedCcdPenetration_0 = a.asm.v1).apply(null, arguments);
            }),
            u5 = (a._emscripten_bind_btDispatcherInfo_set_m_allowedCcdPenetration_1 = function () {
                return (u5 = a._emscripten_bind_btDispatcherInfo_set_m_allowedCcdPenetration_1 = a.asm.w1).apply(null, arguments);
            }),
            v5 = (a._emscripten_bind_btDispatcherInfo_get_m_useConvexConservativeDistanceUtil_0 = function () {
                return (v5 = a._emscripten_bind_btDispatcherInfo_get_m_useConvexConservativeDistanceUtil_0 = a.asm.x1).apply(null, arguments);
            }),
            w5 = (a._emscripten_bind_btDispatcherInfo_set_m_useConvexConservativeDistanceUtil_1 = function () {
                return (w5 = a._emscripten_bind_btDispatcherInfo_set_m_useConvexConservativeDistanceUtil_1 = a.asm.y1).apply(null, arguments);
            }),
            x5 = (a._emscripten_bind_btDispatcherInfo_get_m_convexConservativeDistanceThreshold_0 = function () {
                return (x5 = a._emscripten_bind_btDispatcherInfo_get_m_convexConservativeDistanceThreshold_0 = a.asm.z1).apply(null, arguments);
            }),
            y5 = (a._emscripten_bind_btDispatcherInfo_set_m_convexConservativeDistanceThreshold_1 = function () {
                return (y5 = a._emscripten_bind_btDispatcherInfo_set_m_convexConservativeDistanceThreshold_1 = a.asm.A1).apply(null, arguments);
            }),
            z5 = (a._emscripten_bind_btDispatcherInfo___destroy___0 = function () {
                return (z5 = a._emscripten_bind_btDispatcherInfo___destroy___0 = a.asm.B1).apply(null, arguments);
            }),
            A5 = (a._emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 = function () {
                return (A5 = a._emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 = a.asm.C1).apply(null, arguments);
            }),
            B5 = (a._emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 = function () {
                return (B5 = a._emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 = a.asm.D1).apply(null, arguments);
            }),
            C5 = (a._emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 = function () {
                return (C5 = a._emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 = a.asm.E1).apply(null, arguments);
            }),
            D5 = (a._emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 = function () {
                return (D5 = a._emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 = a.asm.F1).apply(null, arguments);
            }),
            E5 = (a._emscripten_bind_btContactSolverInfo_get_m_numIterations_0 = function () {
                return (E5 = a._emscripten_bind_btContactSolverInfo_get_m_numIterations_0 = a.asm.G1).apply(null, arguments);
            }),
            F5 = (a._emscripten_bind_btContactSolverInfo_set_m_numIterations_1 = function () {
                return (F5 = a._emscripten_bind_btContactSolverInfo_set_m_numIterations_1 = a.asm.H1).apply(null, arguments);
            }),
            G5 = (a._emscripten_bind_btContactSolverInfo___destroy___0 = function () {
                return (G5 = a._emscripten_bind_btContactSolverInfo___destroy___0 = a.asm.I1).apply(null, arguments);
            }),
            H5 = (a._emscripten_bind_btVehicleTuning_btVehicleTuning_0 = function () {
                return (H5 = a._emscripten_bind_btVehicleTuning_btVehicleTuning_0 = a.asm.J1).apply(null, arguments);
            }),
            I5 = (a._emscripten_bind_btVehicleTuning_get_m_suspensionStiffness_0 = function () {
                return (I5 = a._emscripten_bind_btVehicleTuning_get_m_suspensionStiffness_0 = a.asm.K1).apply(null, arguments);
            }),
            J5 = (a._emscripten_bind_btVehicleTuning_set_m_suspensionStiffness_1 = function () {
                return (J5 = a._emscripten_bind_btVehicleTuning_set_m_suspensionStiffness_1 = a.asm.L1).apply(null, arguments);
            }),
            K5 = (a._emscripten_bind_btVehicleTuning_get_m_suspensionCompression_0 = function () {
                return (K5 = a._emscripten_bind_btVehicleTuning_get_m_suspensionCompression_0 = a.asm.M1).apply(null, arguments);
            }),
            L5 = (a._emscripten_bind_btVehicleTuning_set_m_suspensionCompression_1 = function () {
                return (L5 = a._emscripten_bind_btVehicleTuning_set_m_suspensionCompression_1 = a.asm.N1).apply(null, arguments);
            }),
            M5 = (a._emscripten_bind_btVehicleTuning_get_m_suspensionDamping_0 = function () {
                return (M5 = a._emscripten_bind_btVehicleTuning_get_m_suspensionDamping_0 = a.asm.O1).apply(null, arguments);
            }),
            N5 = (a._emscripten_bind_btVehicleTuning_set_m_suspensionDamping_1 = function () {
                return (N5 = a._emscripten_bind_btVehicleTuning_set_m_suspensionDamping_1 = a.asm.P1).apply(null, arguments);
            }),
            O5 = (a._emscripten_bind_btVehicleTuning_get_m_maxSuspensionTravelCm_0 = function () {
                return (O5 = a._emscripten_bind_btVehicleTuning_get_m_maxSuspensionTravelCm_0 = a.asm.Q1).apply(null, arguments);
            }),
            P5 = (a._emscripten_bind_btVehicleTuning_set_m_maxSuspensionTravelCm_1 = function () {
                return (P5 = a._emscripten_bind_btVehicleTuning_set_m_maxSuspensionTravelCm_1 = a.asm.R1).apply(null, arguments);
            }),
            Q5 = (a._emscripten_bind_btVehicleTuning_get_m_frictionSlip_0 = function () {
                return (Q5 = a._emscripten_bind_btVehicleTuning_get_m_frictionSlip_0 = a.asm.S1).apply(null, arguments);
            }),
            R5 = (a._emscripten_bind_btVehicleTuning_set_m_frictionSlip_1 = function () {
                return (R5 = a._emscripten_bind_btVehicleTuning_set_m_frictionSlip_1 = a.asm.T1).apply(null, arguments);
            }),
            S5 = (a._emscripten_bind_btVehicleTuning_get_m_maxSuspensionForce_0 = function () {
                return (S5 = a._emscripten_bind_btVehicleTuning_get_m_maxSuspensionForce_0 = a.asm.U1).apply(null, arguments);
            }),
            T5 = (a._emscripten_bind_btVehicleTuning_set_m_maxSuspensionForce_1 = function () {
                return (T5 = a._emscripten_bind_btVehicleTuning_set_m_maxSuspensionForce_1 = a.asm.V1).apply(null, arguments);
            }),
            U5 = (a._emscripten_bind_btVehicleRaycasterResult_get_m_hitPointInWorld_0 = function () {
                return (U5 = a._emscripten_bind_btVehicleRaycasterResult_get_m_hitPointInWorld_0 = a.asm.W1).apply(null, arguments);
            }),
            V5 = (a._emscripten_bind_btVehicleRaycasterResult_set_m_hitPointInWorld_1 = function () {
                return (V5 = a._emscripten_bind_btVehicleRaycasterResult_set_m_hitPointInWorld_1 = a.asm.X1).apply(null, arguments);
            }),
            W5 = (a._emscripten_bind_btVehicleRaycasterResult_get_m_hitNormalInWorld_0 = function () {
                return (W5 = a._emscripten_bind_btVehicleRaycasterResult_get_m_hitNormalInWorld_0 = a.asm.Y1).apply(null, arguments);
            }),
            X5 = (a._emscripten_bind_btVehicleRaycasterResult_set_m_hitNormalInWorld_1 = function () {
                return (X5 = a._emscripten_bind_btVehicleRaycasterResult_set_m_hitNormalInWorld_1 = a.asm.Z1).apply(null, arguments);
            }),
            Y5 = (a._emscripten_bind_btVehicleRaycasterResult_get_m_distFraction_0 = function () {
                return (Y5 = a._emscripten_bind_btVehicleRaycasterResult_get_m_distFraction_0 = a.asm._1).apply(null, arguments);
            }),
            Z5 = (a._emscripten_bind_btVehicleRaycasterResult_set_m_distFraction_1 = function () {
                return (Z5 = a._emscripten_bind_btVehicleRaycasterResult_set_m_distFraction_1 = a.asm.$1).apply(null, arguments);
            }),
            $5 = (a._emscripten_bind_btVehicleRaycasterResult___destroy___0 = function () {
                return ($5 = a._emscripten_bind_btVehicleRaycasterResult___destroy___0 = a.asm.a2).apply(null, arguments);
            }),
            a6 = (a._emscripten_bind_btDefaultVehicleRaycaster_btDefaultVehicleRaycaster_1 = function () {
                return (a6 = a._emscripten_bind_btDefaultVehicleRaycaster_btDefaultVehicleRaycaster_1 = a.asm.b2).apply(null, arguments);
            }),
            b6 = (a._emscripten_bind_btDefaultVehicleRaycaster_castRay_3 = function () {
                return (b6 = a._emscripten_bind_btDefaultVehicleRaycaster_castRay_3 = a.asm.c2).apply(null, arguments);
            }),
            c6 = (a._emscripten_bind_btDefaultVehicleRaycaster___destroy___0 = function () {
                return (c6 = a._emscripten_bind_btDefaultVehicleRaycaster___destroy___0 = a.asm.d2).apply(null, arguments);
            }),
            d6 = (a._emscripten_bind_RaycastInfo_get_m_contactNormalWS_0 = function () {
                return (d6 = a._emscripten_bind_RaycastInfo_get_m_contactNormalWS_0 = a.asm.e2).apply(null, arguments);
            }),
            e6 = (a._emscripten_bind_RaycastInfo_set_m_contactNormalWS_1 = function () {
                return (e6 = a._emscripten_bind_RaycastInfo_set_m_contactNormalWS_1 = a.asm.f2).apply(null, arguments);
            }),
            f6 = (a._emscripten_bind_RaycastInfo_get_m_contactPointWS_0 = function () {
                return (f6 = a._emscripten_bind_RaycastInfo_get_m_contactPointWS_0 = a.asm.g2).apply(null, arguments);
            }),
            g6 = (a._emscripten_bind_RaycastInfo_set_m_contactPointWS_1 = function () {
                return (g6 = a._emscripten_bind_RaycastInfo_set_m_contactPointWS_1 = a.asm.h2).apply(null, arguments);
            }),
            h6 = (a._emscripten_bind_RaycastInfo_get_m_suspensionLength_0 = function () {
                return (h6 = a._emscripten_bind_RaycastInfo_get_m_suspensionLength_0 = a.asm.i2).apply(null, arguments);
            }),
            i6 = (a._emscripten_bind_RaycastInfo_set_m_suspensionLength_1 = function () {
                return (i6 = a._emscripten_bind_RaycastInfo_set_m_suspensionLength_1 = a.asm.j2).apply(null, arguments);
            }),
            j6 = (a._emscripten_bind_RaycastInfo_get_m_hardPointWS_0 = function () {
                return (j6 = a._emscripten_bind_RaycastInfo_get_m_hardPointWS_0 = a.asm.k2).apply(null, arguments);
            }),
            k6 = (a._emscripten_bind_RaycastInfo_set_m_hardPointWS_1 = function () {
                return (k6 = a._emscripten_bind_RaycastInfo_set_m_hardPointWS_1 = a.asm.l2).apply(null, arguments);
            }),
            l6 = (a._emscripten_bind_RaycastInfo_get_m_wheelDirectionWS_0 = function () {
                return (l6 = a._emscripten_bind_RaycastInfo_get_m_wheelDirectionWS_0 = a.asm.m2).apply(null, arguments);
            }),
            m6 = (a._emscripten_bind_RaycastInfo_set_m_wheelDirectionWS_1 = function () {
                return (m6 = a._emscripten_bind_RaycastInfo_set_m_wheelDirectionWS_1 = a.asm.n2).apply(null, arguments);
            }),
            n6 = (a._emscripten_bind_RaycastInfo_get_m_wheelAxleWS_0 = function () {
                return (n6 = a._emscripten_bind_RaycastInfo_get_m_wheelAxleWS_0 = a.asm.o2).apply(null, arguments);
            }),
            o6 = (a._emscripten_bind_RaycastInfo_set_m_wheelAxleWS_1 = function () {
                return (o6 = a._emscripten_bind_RaycastInfo_set_m_wheelAxleWS_1 = a.asm.p2).apply(null, arguments);
            }),
            p6 = (a._emscripten_bind_RaycastInfo_get_m_isInContact_0 = function () {
                return (p6 = a._emscripten_bind_RaycastInfo_get_m_isInContact_0 = a.asm.q2).apply(null, arguments);
            }),
            q6 = (a._emscripten_bind_RaycastInfo_set_m_isInContact_1 = function () {
                return (q6 = a._emscripten_bind_RaycastInfo_set_m_isInContact_1 = a.asm.r2).apply(null, arguments);
            }),
            r6 = (a._emscripten_bind_RaycastInfo_get_m_groundObject_0 = function () {
                return (r6 = a._emscripten_bind_RaycastInfo_get_m_groundObject_0 = a.asm.s2).apply(null, arguments);
            }),
            s6 = (a._emscripten_bind_RaycastInfo_set_m_groundObject_1 = function () {
                return (s6 = a._emscripten_bind_RaycastInfo_set_m_groundObject_1 = a.asm.t2).apply(null, arguments);
            }),
            t6 = (a._emscripten_bind_RaycastInfo___destroy___0 = function () {
                return (t6 = a._emscripten_bind_RaycastInfo___destroy___0 = a.asm.u2).apply(null, arguments);
            }),
            u6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_chassisConnectionCS_0 = function () {
                return (u6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_chassisConnectionCS_0 = a.asm.v2).apply(null, arguments);
            }),
            v6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_chassisConnectionCS_1 = function () {
                return (v6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_chassisConnectionCS_1 = a.asm.w2).apply(null, arguments);
            }),
            w6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelDirectionCS_0 = function () {
                return (w6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelDirectionCS_0 = a.asm.x2).apply(null, arguments);
            }),
            x6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelDirectionCS_1 = function () {
                return (x6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelDirectionCS_1 = a.asm.y2).apply(null, arguments);
            }),
            y6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelAxleCS_0 = function () {
                return (y6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelAxleCS_0 = a.asm.z2).apply(null, arguments);
            }),
            z6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelAxleCS_1 = function () {
                return (z6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelAxleCS_1 = a.asm.A2).apply(null, arguments);
            }),
            A6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionRestLength_0 = function () {
                return (A6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionRestLength_0 = a.asm.B2).apply(null, arguments);
            }),
            B6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionRestLength_1 = function () {
                return (B6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionRestLength_1 = a.asm.C2).apply(null, arguments);
            }),
            C6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionTravelCm_0 = function () {
                return (C6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionTravelCm_0 = a.asm.D2).apply(null, arguments);
            }),
            D6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionTravelCm_1 = function () {
                return (D6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionTravelCm_1 = a.asm.E2).apply(null, arguments);
            }),
            E6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelRadius_0 = function () {
                return (E6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelRadius_0 = a.asm.F2).apply(null, arguments);
            }),
            F6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelRadius_1 = function () {
                return (F6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelRadius_1 = a.asm.G2).apply(null, arguments);
            }),
            G6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionStiffness_0 = function () {
                return (G6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionStiffness_0 = a.asm.H2).apply(null, arguments);
            }),
            H6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionStiffness_1 = function () {
                return (H6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionStiffness_1 = a.asm.I2).apply(null, arguments);
            }),
            I6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingCompression_0 = function () {
                return (I6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingCompression_0 = a.asm.J2).apply(null, arguments);
            }),
            J6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingCompression_1 = function () {
                return (J6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingCompression_1 = a.asm.K2).apply(null, arguments);
            }),
            K6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingRelaxation_0 = function () {
                return (K6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingRelaxation_0 = a.asm.L2).apply(null, arguments);
            }),
            L6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingRelaxation_1 = function () {
                return (L6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingRelaxation_1 = a.asm.M2).apply(null, arguments);
            }),
            M6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_frictionSlip_0 = function () {
                return (M6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_frictionSlip_0 = a.asm.N2).apply(null, arguments);
            }),
            N6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_frictionSlip_1 = function () {
                return (N6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_frictionSlip_1 = a.asm.O2).apply(null, arguments);
            }),
            O6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionForce_0 = function () {
                return (O6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionForce_0 = a.asm.P2).apply(null, arguments);
            }),
            P6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionForce_1 = function () {
                return (P6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionForce_1 = a.asm.Q2).apply(null, arguments);
            }),
            Q6 = (a._emscripten_bind_btWheelInfoConstructionInfo_get_m_bIsFrontWheel_0 = function () {
                return (Q6 = a._emscripten_bind_btWheelInfoConstructionInfo_get_m_bIsFrontWheel_0 = a.asm.R2).apply(null, arguments);
            }),
            R6 = (a._emscripten_bind_btWheelInfoConstructionInfo_set_m_bIsFrontWheel_1 = function () {
                return (R6 = a._emscripten_bind_btWheelInfoConstructionInfo_set_m_bIsFrontWheel_1 = a.asm.S2).apply(null, arguments);
            }),
            S6 = (a._emscripten_bind_btWheelInfoConstructionInfo___destroy___0 = function () {
                return (S6 = a._emscripten_bind_btWheelInfoConstructionInfo___destroy___0 = a.asm.T2).apply(null, arguments);
            }),
            T6 = (a._emscripten_bind_btWheelInfo_btWheelInfo_1 = function () {
                return (T6 = a._emscripten_bind_btWheelInfo_btWheelInfo_1 = a.asm.U2).apply(null, arguments);
            }),
            U6 = (a._emscripten_bind_btWheelInfo_getSuspensionRestLength_0 = function () {
                return (U6 = a._emscripten_bind_btWheelInfo_getSuspensionRestLength_0 = a.asm.V2).apply(null, arguments);
            }),
            V6 = (a._emscripten_bind_btWheelInfo_updateWheel_2 = function () {
                return (V6 = a._emscripten_bind_btWheelInfo_updateWheel_2 = a.asm.W2).apply(null, arguments);
            }),
            W6 = (a._emscripten_bind_btWheelInfo_get_m_suspensionStiffness_0 = function () {
                return (W6 = a._emscripten_bind_btWheelInfo_get_m_suspensionStiffness_0 = a.asm.X2).apply(null, arguments);
            }),
            X6 = (a._emscripten_bind_btWheelInfo_set_m_suspensionStiffness_1 = function () {
                return (X6 = a._emscripten_bind_btWheelInfo_set_m_suspensionStiffness_1 = a.asm.Y2).apply(null, arguments);
            }),
            Y6 = (a._emscripten_bind_btWheelInfo_get_m_frictionSlip_0 = function () {
                return (Y6 = a._emscripten_bind_btWheelInfo_get_m_frictionSlip_0 = a.asm.Z2).apply(null, arguments);
            }),
            Z6 = (a._emscripten_bind_btWheelInfo_set_m_frictionSlip_1 = function () {
                return (Z6 = a._emscripten_bind_btWheelInfo_set_m_frictionSlip_1 = a.asm._2).apply(null, arguments);
            }),
            $6 = (a._emscripten_bind_btWheelInfo_get_m_engineForce_0 = function () {
                return ($6 = a._emscripten_bind_btWheelInfo_get_m_engineForce_0 = a.asm.$2).apply(null, arguments);
            }),
            a7 = (a._emscripten_bind_btWheelInfo_set_m_engineForce_1 = function () {
                return (a7 = a._emscripten_bind_btWheelInfo_set_m_engineForce_1 = a.asm.a3).apply(null, arguments);
            }),
            b7 = (a._emscripten_bind_btWheelInfo_get_m_rollInfluence_0 = function () {
                return (b7 = a._emscripten_bind_btWheelInfo_get_m_rollInfluence_0 = a.asm.b3).apply(null, arguments);
            }),
            c7 = (a._emscripten_bind_btWheelInfo_set_m_rollInfluence_1 = function () {
                return (c7 = a._emscripten_bind_btWheelInfo_set_m_rollInfluence_1 = a.asm.c3).apply(null, arguments);
            }),
            d7 = (a._emscripten_bind_btWheelInfo_get_m_suspensionRestLength1_0 = function () {
                return (d7 = a._emscripten_bind_btWheelInfo_get_m_suspensionRestLength1_0 = a.asm.d3).apply(null, arguments);
            }),
            e7 = (a._emscripten_bind_btWheelInfo_set_m_suspensionRestLength1_1 = function () {
                return (e7 = a._emscripten_bind_btWheelInfo_set_m_suspensionRestLength1_1 = a.asm.e3).apply(null, arguments);
            }),
            f7 = (a._emscripten_bind_btWheelInfo_get_m_wheelsRadius_0 = function () {
                return (f7 = a._emscripten_bind_btWheelInfo_get_m_wheelsRadius_0 = a.asm.f3).apply(null, arguments);
            }),
            g7 = (a._emscripten_bind_btWheelInfo_set_m_wheelsRadius_1 = function () {
                return (g7 = a._emscripten_bind_btWheelInfo_set_m_wheelsRadius_1 = a.asm.g3).apply(null, arguments);
            }),
            h7 = (a._emscripten_bind_btWheelInfo_get_m_wheelsDampingCompression_0 = function () {
                return (h7 = a._emscripten_bind_btWheelInfo_get_m_wheelsDampingCompression_0 = a.asm.h3).apply(null, arguments);
            }),
            i7 = (a._emscripten_bind_btWheelInfo_set_m_wheelsDampingCompression_1 = function () {
                return (i7 = a._emscripten_bind_btWheelInfo_set_m_wheelsDampingCompression_1 = a.asm.i3).apply(null, arguments);
            }),
            j7 = (a._emscripten_bind_btWheelInfo_get_m_wheelsDampingRelaxation_0 = function () {
                return (j7 = a._emscripten_bind_btWheelInfo_get_m_wheelsDampingRelaxation_0 = a.asm.j3).apply(null, arguments);
            }),
            k7 = (a._emscripten_bind_btWheelInfo_set_m_wheelsDampingRelaxation_1 = function () {
                return (k7 = a._emscripten_bind_btWheelInfo_set_m_wheelsDampingRelaxation_1 = a.asm.k3).apply(null, arguments);
            }),
            l7 = (a._emscripten_bind_btWheelInfo_get_m_steering_0 = function () {
                return (l7 = a._emscripten_bind_btWheelInfo_get_m_steering_0 = a.asm.l3).apply(null, arguments);
            }),
            m7 = (a._emscripten_bind_btWheelInfo_set_m_steering_1 = function () {
                return (m7 = a._emscripten_bind_btWheelInfo_set_m_steering_1 = a.asm.m3).apply(null, arguments);
            }),
            n7 = (a._emscripten_bind_btWheelInfo_get_m_maxSuspensionForce_0 = function () {
                return (n7 = a._emscripten_bind_btWheelInfo_get_m_maxSuspensionForce_0 = a.asm.n3).apply(null, arguments);
            }),
            o7 = (a._emscripten_bind_btWheelInfo_set_m_maxSuspensionForce_1 = function () {
                return (o7 = a._emscripten_bind_btWheelInfo_set_m_maxSuspensionForce_1 = a.asm.o3).apply(null, arguments);
            }),
            p7 = (a._emscripten_bind_btWheelInfo_get_m_maxSuspensionTravelCm_0 = function () {
                return (p7 = a._emscripten_bind_btWheelInfo_get_m_maxSuspensionTravelCm_0 = a.asm.p3).apply(null, arguments);
            }),
            q7 = (a._emscripten_bind_btWheelInfo_set_m_maxSuspensionTravelCm_1 = function () {
                return (q7 = a._emscripten_bind_btWheelInfo_set_m_maxSuspensionTravelCm_1 = a.asm.q3).apply(null, arguments);
            }),
            r7 = (a._emscripten_bind_btWheelInfo_get_m_wheelsSuspensionForce_0 = function () {
                return (r7 = a._emscripten_bind_btWheelInfo_get_m_wheelsSuspensionForce_0 = a.asm.r3).apply(null, arguments);
            }),
            s7 = (a._emscripten_bind_btWheelInfo_set_m_wheelsSuspensionForce_1 = function () {
                return (s7 = a._emscripten_bind_btWheelInfo_set_m_wheelsSuspensionForce_1 = a.asm.s3).apply(null, arguments);
            }),
            t7 = (a._emscripten_bind_btWheelInfo_get_m_bIsFrontWheel_0 = function () {
                return (t7 = a._emscripten_bind_btWheelInfo_get_m_bIsFrontWheel_0 = a.asm.t3).apply(null, arguments);
            }),
            u7 = (a._emscripten_bind_btWheelInfo_set_m_bIsFrontWheel_1 = function () {
                return (u7 = a._emscripten_bind_btWheelInfo_set_m_bIsFrontWheel_1 = a.asm.u3).apply(null, arguments);
            }),
            v7 = (a._emscripten_bind_btWheelInfo_get_m_raycastInfo_0 = function () {
                return (v7 = a._emscripten_bind_btWheelInfo_get_m_raycastInfo_0 = a.asm.v3).apply(null, arguments);
            }),
            w7 = (a._emscripten_bind_btWheelInfo_set_m_raycastInfo_1 = function () {
                return (w7 = a._emscripten_bind_btWheelInfo_set_m_raycastInfo_1 = a.asm.w3).apply(null, arguments);
            }),
            x7 = (a._emscripten_bind_btWheelInfo_get_m_chassisConnectionPointCS_0 = function () {
                return (x7 = a._emscripten_bind_btWheelInfo_get_m_chassisConnectionPointCS_0 = a.asm.x3).apply(null, arguments);
            }),
            y7 = (a._emscripten_bind_btWheelInfo_set_m_chassisConnectionPointCS_1 = function () {
                return (y7 = a._emscripten_bind_btWheelInfo_set_m_chassisConnectionPointCS_1 = a.asm.y3).apply(null, arguments);
            }),
            z7 = (a._emscripten_bind_btWheelInfo_get_m_worldTransform_0 = function () {
                return (z7 = a._emscripten_bind_btWheelInfo_get_m_worldTransform_0 = a.asm.z3).apply(null, arguments);
            }),
            A7 = (a._emscripten_bind_btWheelInfo_set_m_worldTransform_1 = function () {
                return (A7 = a._emscripten_bind_btWheelInfo_set_m_worldTransform_1 = a.asm.A3).apply(null, arguments);
            }),
            B7 = (a._emscripten_bind_btWheelInfo_get_m_wheelDirectionCS_0 = function () {
                return (B7 = a._emscripten_bind_btWheelInfo_get_m_wheelDirectionCS_0 = a.asm.B3).apply(null, arguments);
            }),
            C7 = (a._emscripten_bind_btWheelInfo_set_m_wheelDirectionCS_1 = function () {
                return (C7 = a._emscripten_bind_btWheelInfo_set_m_wheelDirectionCS_1 = a.asm.C3).apply(null, arguments);
            }),
            D7 = (a._emscripten_bind_btWheelInfo_get_m_wheelAxleCS_0 = function () {
                return (D7 = a._emscripten_bind_btWheelInfo_get_m_wheelAxleCS_0 = a.asm.D3).apply(null, arguments);
            }),
            E7 = (a._emscripten_bind_btWheelInfo_set_m_wheelAxleCS_1 = function () {
                return (E7 = a._emscripten_bind_btWheelInfo_set_m_wheelAxleCS_1 = a.asm.E3).apply(null, arguments);
            }),
            F7 = (a._emscripten_bind_btWheelInfo_get_m_rotation_0 = function () {
                return (F7 = a._emscripten_bind_btWheelInfo_get_m_rotation_0 = a.asm.F3).apply(null, arguments);
            }),
            G7 = (a._emscripten_bind_btWheelInfo_set_m_rotation_1 = function () {
                return (G7 = a._emscripten_bind_btWheelInfo_set_m_rotation_1 = a.asm.G3).apply(null, arguments);
            }),
            H7 = (a._emscripten_bind_btWheelInfo_get_m_deltaRotation_0 = function () {
                return (H7 = a._emscripten_bind_btWheelInfo_get_m_deltaRotation_0 = a.asm.H3).apply(null, arguments);
            }),
            I7 = (a._emscripten_bind_btWheelInfo_set_m_deltaRotation_1 = function () {
                return (I7 = a._emscripten_bind_btWheelInfo_set_m_deltaRotation_1 = a.asm.I3).apply(null, arguments);
            }),
            J7 = (a._emscripten_bind_btWheelInfo_get_m_brake_0 = function () {
                return (J7 = a._emscripten_bind_btWheelInfo_get_m_brake_0 = a.asm.J3).apply(null, arguments);
            }),
            K7 = (a._emscripten_bind_btWheelInfo_set_m_brake_1 = function () {
                return (K7 = a._emscripten_bind_btWheelInfo_set_m_brake_1 = a.asm.K3).apply(null, arguments);
            }),
            L7 = (a._emscripten_bind_btWheelInfo_get_m_clippedInvContactDotSuspension_0 = function () {
                return (L7 = a._emscripten_bind_btWheelInfo_get_m_clippedInvContactDotSuspension_0 = a.asm.L3).apply(null, arguments);
            }),
            M7 = (a._emscripten_bind_btWheelInfo_set_m_clippedInvContactDotSuspension_1 = function () {
                return (M7 = a._emscripten_bind_btWheelInfo_set_m_clippedInvContactDotSuspension_1 = a.asm.M3).apply(null, arguments);
            }),
            N7 = (a._emscripten_bind_btWheelInfo_get_m_suspensionRelativeVelocity_0 = function () {
                return (N7 = a._emscripten_bind_btWheelInfo_get_m_suspensionRelativeVelocity_0 = a.asm.N3).apply(null, arguments);
            }),
            O7 = (a._emscripten_bind_btWheelInfo_set_m_suspensionRelativeVelocity_1 = function () {
                return (O7 = a._emscripten_bind_btWheelInfo_set_m_suspensionRelativeVelocity_1 = a.asm.O3).apply(null, arguments);
            }),
            P7 = (a._emscripten_bind_btWheelInfo_get_m_skidInfo_0 = function () {
                return (P7 = a._emscripten_bind_btWheelInfo_get_m_skidInfo_0 = a.asm.P3).apply(null, arguments);
            }),
            Q7 = (a._emscripten_bind_btWheelInfo_set_m_skidInfo_1 = function () {
                return (Q7 = a._emscripten_bind_btWheelInfo_set_m_skidInfo_1 = a.asm.Q3).apply(null, arguments);
            }),
            R7 = (a._emscripten_bind_btWheelInfo___destroy___0 = function () {
                return (R7 = a._emscripten_bind_btWheelInfo___destroy___0 = a.asm.R3).apply(null, arguments);
            }),
            S7 = (a._emscripten_bind_btRaycastVehicle_btRaycastVehicle_3 = function () {
                return (S7 = a._emscripten_bind_btRaycastVehicle_btRaycastVehicle_3 = a.asm.S3).apply(null, arguments);
            }),
            T7 = (a._emscripten_bind_btRaycastVehicle_applyEngineForce_2 = function () {
                return (T7 = a._emscripten_bind_btRaycastVehicle_applyEngineForce_2 = a.asm.T3).apply(null, arguments);
            }),
            U7 = (a._emscripten_bind_btRaycastVehicle_setSteeringValue_2 = function () {
                return (U7 = a._emscripten_bind_btRaycastVehicle_setSteeringValue_2 = a.asm.U3).apply(null, arguments);
            }),
            V7 = (a._emscripten_bind_btRaycastVehicle_getWheelTransformWS_1 = function () {
                return (V7 = a._emscripten_bind_btRaycastVehicle_getWheelTransformWS_1 = a.asm.V3).apply(null, arguments);
            }),
            W7 = (a._emscripten_bind_btRaycastVehicle_updateWheelTransform_2 = function () {
                return (W7 = a._emscripten_bind_btRaycastVehicle_updateWheelTransform_2 = a.asm.W3).apply(null, arguments);
            }),
            X7 = (a._emscripten_bind_btRaycastVehicle_addWheel_7 = function () {
                return (X7 = a._emscripten_bind_btRaycastVehicle_addWheel_7 = a.asm.X3).apply(null, arguments);
            }),
            Y7 = (a._emscripten_bind_btRaycastVehicle_getNumWheels_0 = function () {
                return (Y7 = a._emscripten_bind_btRaycastVehicle_getNumWheels_0 = a.asm.Y3).apply(null, arguments);
            }),
            Z7 = (a._emscripten_bind_btRaycastVehicle_getRigidBody_0 = function () {
                return (Z7 = a._emscripten_bind_btRaycastVehicle_getRigidBody_0 = a.asm.Z3).apply(null, arguments);
            }),
            $7 = (a._emscripten_bind_btRaycastVehicle_getWheelInfo_1 = function () {
                return ($7 = a._emscripten_bind_btRaycastVehicle_getWheelInfo_1 = a.asm._3).apply(null, arguments);
            }),
            a8 = (a._emscripten_bind_btRaycastVehicle_setBrake_2 = function () {
                return (a8 = a._emscripten_bind_btRaycastVehicle_setBrake_2 = a.asm.$3).apply(null, arguments);
            }),
            b8 = (a._emscripten_bind_btRaycastVehicle_setCoordinateSystem_3 = function () {
                return (b8 = a._emscripten_bind_btRaycastVehicle_setCoordinateSystem_3 = a.asm.a4).apply(null, arguments);
            }),
            c8 = (a._emscripten_bind_btRaycastVehicle_getCurrentSpeedKmHour_0 = function () {
                return (c8 = a._emscripten_bind_btRaycastVehicle_getCurrentSpeedKmHour_0 = a.asm.b4).apply(null, arguments);
            }),
            d8 = (a._emscripten_bind_btRaycastVehicle_getChassisWorldTransform_0 = function () {
                return (d8 = a._emscripten_bind_btRaycastVehicle_getChassisWorldTransform_0 = a.asm.c4).apply(null, arguments);
            }),
            e8 = (a._emscripten_bind_btRaycastVehicle_rayCast_1 = function () {
                return (e8 = a._emscripten_bind_btRaycastVehicle_rayCast_1 = a.asm.d4).apply(null, arguments);
            }),
            f8 = (a._emscripten_bind_btRaycastVehicle_updateVehicle_1 = function () {
                return (f8 = a._emscripten_bind_btRaycastVehicle_updateVehicle_1 = a.asm.e4).apply(null, arguments);
            }),
            g8 = (a._emscripten_bind_btRaycastVehicle_resetSuspension_0 = function () {
                return (g8 = a._emscripten_bind_btRaycastVehicle_resetSuspension_0 = a.asm.f4).apply(null, arguments);
            }),
            h8 = (a._emscripten_bind_btRaycastVehicle_getSteeringValue_1 = function () {
                return (h8 = a._emscripten_bind_btRaycastVehicle_getSteeringValue_1 = a.asm.g4).apply(null, arguments);
            }),
            i8 = (a._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_1 = function () {
                return (i8 = a._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_1 = a.asm.h4).apply(null, arguments);
            }),
            j8 = (a._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_2 = function () {
                return (j8 = a._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_2 = a.asm.i4).apply(null, arguments);
            }),
            k8 = (a._emscripten_bind_btRaycastVehicle_setPitchControl_1 = function () {
                return (k8 = a._emscripten_bind_btRaycastVehicle_setPitchControl_1 = a.asm.j4).apply(null, arguments);
            }),
            l8 = (a._emscripten_bind_btRaycastVehicle_updateSuspension_1 = function () {
                return (l8 = a._emscripten_bind_btRaycastVehicle_updateSuspension_1 = a.asm.k4).apply(null, arguments);
            }),
            m8 = (a._emscripten_bind_btRaycastVehicle_updateFriction_1 = function () {
                return (m8 = a._emscripten_bind_btRaycastVehicle_updateFriction_1 = a.asm.l4).apply(null, arguments);
            }),
            n8 = (a._emscripten_bind_btRaycastVehicle_getRightAxis_0 = function () {
                return (n8 = a._emscripten_bind_btRaycastVehicle_getRightAxis_0 = a.asm.m4).apply(null, arguments);
            }),
            o8 = (a._emscripten_bind_btRaycastVehicle_getUpAxis_0 = function () {
                return (o8 = a._emscripten_bind_btRaycastVehicle_getUpAxis_0 = a.asm.n4).apply(null, arguments);
            }),
            p8 = (a._emscripten_bind_btRaycastVehicle_getForwardAxis_0 = function () {
                return (p8 = a._emscripten_bind_btRaycastVehicle_getForwardAxis_0 = a.asm.o4).apply(null, arguments);
            }),
            q8 = (a._emscripten_bind_btRaycastVehicle_getForwardVector_0 = function () {
                return (q8 = a._emscripten_bind_btRaycastVehicle_getForwardVector_0 = a.asm.p4).apply(null, arguments);
            }),
            r8 = (a._emscripten_bind_btRaycastVehicle_getUserConstraintType_0 = function () {
                return (r8 = a._emscripten_bind_btRaycastVehicle_getUserConstraintType_0 = a.asm.q4).apply(null, arguments);
            }),
            s8 = (a._emscripten_bind_btRaycastVehicle_setUserConstraintType_1 = function () {
                return (s8 = a._emscripten_bind_btRaycastVehicle_setUserConstraintType_1 = a.asm.r4).apply(null, arguments);
            }),
            t8 = (a._emscripten_bind_btRaycastVehicle_setUserConstraintId_1 = function () {
                return (t8 = a._emscripten_bind_btRaycastVehicle_setUserConstraintId_1 = a.asm.s4).apply(null, arguments);
            }),
            u8 = (a._emscripten_bind_btRaycastVehicle_getUserConstraintId_0 = function () {
                return (u8 = a._emscripten_bind_btRaycastVehicle_getUserConstraintId_0 = a.asm.t4).apply(null, arguments);
            }),
            v8 = (a._emscripten_bind_btRaycastVehicle_updateAction_2 = function () {
                return (v8 = a._emscripten_bind_btRaycastVehicle_updateAction_2 = a.asm.u4).apply(null, arguments);
            }),
            w8 = (a._emscripten_bind_btRaycastVehicle___destroy___0 = function () {
                return (w8 = a._emscripten_bind_btRaycastVehicle___destroy___0 = a.asm.v4).apply(null, arguments);
            }),
            x8 = (a._emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 = function () {
                return (x8 = a._emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 = a.asm.w4).apply(null, arguments);
            }),
            y8 = (a._emscripten_bind_btPairCachingGhostObject_mergesSimulationIslands_0 = function () {
                return (y8 = a._emscripten_bind_btPairCachingGhostObject_mergesSimulationIslands_0 = a.asm.x4).apply(null, arguments);
            }),
            z8 = (a._emscripten_bind_btPairCachingGhostObject_getAnisotropicFriction_0 = function () {
                return (z8 = a._emscripten_bind_btPairCachingGhostObject_getAnisotropicFriction_0 = a.asm.y4).apply(null, arguments);
            }),
            A8 = (a._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_1 = function () {
                return (A8 = a._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_1 = a.asm.z4).apply(null, arguments);
            }),
            B8 = (a._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 = function () {
                return (B8 = a._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 = a.asm.A4).apply(null, arguments);
            }),
            C8 = (a._emscripten_bind_btPairCachingGhostObject_hasAnisotropicFriction_0 = function () {
                return (C8 = a._emscripten_bind_btPairCachingGhostObject_hasAnisotropicFriction_0 = a.asm.B4).apply(null, arguments);
            }),
            D8 = (a._emscripten_bind_btPairCachingGhostObject_hasAnisotropicFriction_1 = function () {
                return (D8 = a._emscripten_bind_btPairCachingGhostObject_hasAnisotropicFriction_1 = a.asm.C4).apply(null, arguments);
            }),
            E8 = (a._emscripten_bind_btPairCachingGhostObject_setContactProcessingThreshold_1 = function () {
                return (E8 = a._emscripten_bind_btPairCachingGhostObject_setContactProcessingThreshold_1 = a.asm.D4).apply(null, arguments);
            }),
            F8 = (a._emscripten_bind_btPairCachingGhostObject_getContactProcessingThreshold_0 = function () {
                return (F8 = a._emscripten_bind_btPairCachingGhostObject_getContactProcessingThreshold_0 = a.asm.E4).apply(null, arguments);
            }),
            G8 = (a._emscripten_bind_btPairCachingGhostObject_isStaticObject_0 = function () {
                return (G8 = a._emscripten_bind_btPairCachingGhostObject_isStaticObject_0 = a.asm.F4).apply(null, arguments);
            }),
            H8 = (a._emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 = function () {
                return (H8 = a._emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 = a.asm.G4).apply(null, arguments);
            }),
            I8 = (a._emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 = function () {
                return (I8 = a._emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 = a.asm.H4).apply(null, arguments);
            }),
            J8 = (a._emscripten_bind_btPairCachingGhostObject_hasContactResponse_0 = function () {
                return (J8 = a._emscripten_bind_btPairCachingGhostObject_hasContactResponse_0 = a.asm.I4).apply(null, arguments);
            }),
            K8 = (a._emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 = function () {
                return (K8 = a._emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 = a.asm.J4).apply(null, arguments);
            }),
            L8 = (a._emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2 = function () {
                return (L8 = a._emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2 = a.asm.K4).apply(null, arguments);
            }),
            M8 = (a._emscripten_bind_btPairCachingGhostObject_getNumObjectsWithoutCollision_0 = function () {
                return (M8 = a._emscripten_bind_btPairCachingGhostObject_getNumObjectsWithoutCollision_0 = a.asm.L4).apply(null, arguments);
            }),
            N8 = (a._emscripten_bind_btPairCachingGhostObject_getObjectWithoutCollision_1 = function () {
                return (N8 = a._emscripten_bind_btPairCachingGhostObject_getObjectWithoutCollision_1 = a.asm.M4).apply(null, arguments);
            }),
            O8 = (a._emscripten_bind_btPairCachingGhostObject_checkCollideWithOverride_1 = function () {
                return (O8 = a._emscripten_bind_btPairCachingGhostObject_checkCollideWithOverride_1 = a.asm.N4).apply(null, arguments);
            }),
            P8 = (a._emscripten_bind_btPairCachingGhostObject_getActivationState_0 = function () {
                return (P8 = a._emscripten_bind_btPairCachingGhostObject_getActivationState_0 = a.asm.O4).apply(null, arguments);
            }),
            Q8 = (a._emscripten_bind_btPairCachingGhostObject_setActivationState_1 = function () {
                return (Q8 = a._emscripten_bind_btPairCachingGhostObject_setActivationState_1 = a.asm.P4).apply(null, arguments);
            }),
            R8 = (a._emscripten_bind_btPairCachingGhostObject_setDeactivationTime_1 = function () {
                return (R8 = a._emscripten_bind_btPairCachingGhostObject_setDeactivationTime_1 = a.asm.Q4).apply(null, arguments);
            }),
            S8 = (a._emscripten_bind_btPairCachingGhostObject_getDeactivationTime_0 = function () {
                return (S8 = a._emscripten_bind_btPairCachingGhostObject_getDeactivationTime_0 = a.asm.R4).apply(null, arguments);
            }),
            T8 = (a._emscripten_bind_btPairCachingGhostObject_forceActivationState_1 = function () {
                return (T8 = a._emscripten_bind_btPairCachingGhostObject_forceActivationState_1 = a.asm.S4).apply(null, arguments);
            }),
            U8 = (a._emscripten_bind_btPairCachingGhostObject_activate_0 = function () {
                return (U8 = a._emscripten_bind_btPairCachingGhostObject_activate_0 = a.asm.T4).apply(null, arguments);
            }),
            V8 = (a._emscripten_bind_btPairCachingGhostObject_activate_1 = function () {
                return (V8 = a._emscripten_bind_btPairCachingGhostObject_activate_1 = a.asm.U4).apply(null, arguments);
            }),
            gaa = (a._emscripten_bind_btPairCachingGhostObject_isActive_0 = function () {
                return (gaa = a._emscripten_bind_btPairCachingGhostObject_isActive_0 = a.asm.V4).apply(null, arguments);
            }),
            haa = (a._emscripten_bind_btPairCachingGhostObject_setRestitution_1 = function () {
                return (haa = a._emscripten_bind_btPairCachingGhostObject_setRestitution_1 = a.asm.W4).apply(null, arguments);
            }),
            iaa = (a._emscripten_bind_btPairCachingGhostObject_getRestitution_0 = function () {
                return (iaa = a._emscripten_bind_btPairCachingGhostObject_getRestitution_0 = a.asm.X4).apply(null, arguments);
            }),
            jaa = (a._emscripten_bind_btPairCachingGhostObject_setFriction_1 = function () {
                return (jaa = a._emscripten_bind_btPairCachingGhostObject_setFriction_1 = a.asm.Y4).apply(null, arguments);
            }),
            kaa = (a._emscripten_bind_btPairCachingGhostObject_getFriction_0 = function () {
                return (kaa = a._emscripten_bind_btPairCachingGhostObject_getFriction_0 = a.asm.Z4).apply(null, arguments);
            }),
            laa = (a._emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 = function () {
                return (laa = a._emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 = a.asm._4).apply(null, arguments);
            }),
            maa = (a._emscripten_bind_btPairCachingGhostObject_getRollingFriction_0 = function () {
                return (maa = a._emscripten_bind_btPairCachingGhostObject_getRollingFriction_0 = a.asm.$4).apply(null, arguments);
            }),
            naa = (a._emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1 = function () {
                return (naa = a._emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1 = a.asm.a5).apply(null, arguments);
            }),
            oaa = (a._emscripten_bind_btPairCachingGhostObject_getSpinningFriction_0 = function () {
                return (oaa = a._emscripten_bind_btPairCachingGhostObject_getSpinningFriction_0 = a.asm.b5).apply(null, arguments);
            }),
            paa = (a._emscripten_bind_btPairCachingGhostObject_setContactStiffnessAndDamping_2 = function () {
                return (paa = a._emscripten_bind_btPairCachingGhostObject_setContactStiffnessAndDamping_2 = a.asm.c5).apply(null, arguments);
            }),
            qaa = (a._emscripten_bind_btPairCachingGhostObject_getContactStiffness_0 = function () {
                return (qaa = a._emscripten_bind_btPairCachingGhostObject_getContactStiffness_0 = a.asm.d5).apply(null, arguments);
            }),
            raa = (a._emscripten_bind_btPairCachingGhostObject_getContactDamping_0 = function () {
                return (raa = a._emscripten_bind_btPairCachingGhostObject_getContactDamping_0 = a.asm.e5).apply(null, arguments);
            }),
            saa = (a._emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 = function () {
                return (saa = a._emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 = a.asm.f5).apply(null, arguments);
            }),
            taa = (a._emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 = function () {
                return (taa = a._emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 = a.asm.g5).apply(null, arguments);
            }),
            uaa = (a._emscripten_bind_btPairCachingGhostObject_getBroadphaseHandle_0 = function () {
                return (uaa = a._emscripten_bind_btPairCachingGhostObject_getBroadphaseHandle_0 = a.asm.h5).apply(null, arguments);
            }),
            vaa = (a._emscripten_bind_btPairCachingGhostObject_setBroadphaseHandle_1 = function () {
                return (vaa = a._emscripten_bind_btPairCachingGhostObject_setBroadphaseHandle_1 = a.asm.i5).apply(null, arguments);
            }),
            waa = (a._emscripten_bind_btPairCachingGhostObject_getInterpolationWorldTransform_0 = function () {
                return (waa = a._emscripten_bind_btPairCachingGhostObject_getInterpolationWorldTransform_0 = a.asm.j5).apply(null, arguments);
            }),
            xaa = (a._emscripten_bind_btPairCachingGhostObject_setInterpolationWorldTransform_1 = function () {
                return (xaa = a._emscripten_bind_btPairCachingGhostObject_setInterpolationWorldTransform_1 = a.asm.k5).apply(null, arguments);
            }),
            yaa = (a._emscripten_bind_btPairCachingGhostObject_setInterpolationLinearVelocity_1 = function () {
                return (yaa = a._emscripten_bind_btPairCachingGhostObject_setInterpolationLinearVelocity_1 = a.asm.l5).apply(null, arguments);
            }),
            zaa = (a._emscripten_bind_btPairCachingGhostObject_setInterpolationAngularVelocity_1 = function () {
                return (zaa = a._emscripten_bind_btPairCachingGhostObject_setInterpolationAngularVelocity_1 = a.asm.m5).apply(null, arguments);
            }),
            Aaa = (a._emscripten_bind_btPairCachingGhostObject_getInterpolationLinearVelocity_0 = function () {
                return (Aaa = a._emscripten_bind_btPairCachingGhostObject_getInterpolationLinearVelocity_0 = a.asm.n5).apply(null, arguments);
            }),
            Baa = (a._emscripten_bind_btPairCachingGhostObject_getInterpolationAngularVelocity_0 = function () {
                return (Baa = a._emscripten_bind_btPairCachingGhostObject_getInterpolationAngularVelocity_0 = a.asm.o5).apply(null, arguments);
            }),
            Caa = (a._emscripten_bind_btPairCachingGhostObject_getIslandTag_0 = function () {
                return (Caa = a._emscripten_bind_btPairCachingGhostObject_getIslandTag_0 = a.asm.p5).apply(null, arguments);
            }),
            Daa = (a._emscripten_bind_btPairCachingGhostObject_setIslandTag_1 = function () {
                return (Daa = a._emscripten_bind_btPairCachingGhostObject_setIslandTag_1 = a.asm.q5).apply(null, arguments);
            }),
            Eaa = (a._emscripten_bind_btPairCachingGhostObject_getCompanionId_0 = function () {
                return (Eaa = a._emscripten_bind_btPairCachingGhostObject_getCompanionId_0 = a.asm.r5).apply(null, arguments);
            }),
            Faa = (a._emscripten_bind_btPairCachingGhostObject_setCompanionId_1 = function () {
                return (Faa = a._emscripten_bind_btPairCachingGhostObject_setCompanionId_1 = a.asm.s5).apply(null, arguments);
            }),
            Gaa = (a._emscripten_bind_btPairCachingGhostObject_getWorldArrayIndex_0 = function () {
                return (Gaa = a._emscripten_bind_btPairCachingGhostObject_getWorldArrayIndex_0 = a.asm.t5).apply(null, arguments);
            }),
            Haa = (a._emscripten_bind_btPairCachingGhostObject_getHitFraction_0 = function () {
                return (Haa = a._emscripten_bind_btPairCachingGhostObject_getHitFraction_0 = a.asm.u5).apply(null, arguments);
            }),
            Iaa = (a._emscripten_bind_btPairCachingGhostObject_setHitFraction_1 = function () {
                return (Iaa = a._emscripten_bind_btPairCachingGhostObject_setHitFraction_1 = a.asm.v5).apply(null, arguments);
            }),
            Jaa = (a._emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 = function () {
                return (Jaa = a._emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 = a.asm.w5).apply(null, arguments);
            }),
            Kaa = (a._emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 = function () {
                return (Kaa = a._emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 = a.asm.x5).apply(null, arguments);
            }),
            Laa = (a._emscripten_bind_btPairCachingGhostObject_getCcdSweptSphereRadius_0 = function () {
                return (Laa = a._emscripten_bind_btPairCachingGhostObject_getCcdSweptSphereRadius_0 = a.asm.y5).apply(null, arguments);
            }),
            Maa = (a._emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 = function () {
                return (Maa = a._emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 = a.asm.z5).apply(null, arguments);
            }),
            Naa = (a._emscripten_bind_btPairCachingGhostObject_getCcdMotionThreshold_0 = function () {
                return (Naa = a._emscripten_bind_btPairCachingGhostObject_getCcdMotionThreshold_0 = a.asm.A5).apply(null, arguments);
            }),
            Oaa = (a._emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 = function () {
                return (Oaa = a._emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 = a.asm.B5).apply(null, arguments);
            }),
            Paa = (a._emscripten_bind_btPairCachingGhostObject_getUserPointer_0 = function () {
                return (Paa = a._emscripten_bind_btPairCachingGhostObject_getUserPointer_0 = a.asm.C5).apply(null, arguments);
            }),
            Qaa = (a._emscripten_bind_btPairCachingGhostObject_getUserIndex_0 = function () {
                return (Qaa = a._emscripten_bind_btPairCachingGhostObject_getUserIndex_0 = a.asm.D5).apply(null, arguments);
            }),
            Raa = (a._emscripten_bind_btPairCachingGhostObject_getUserIndex2_0 = function () {
                return (Raa = a._emscripten_bind_btPairCachingGhostObject_getUserIndex2_0 = a.asm.E5).apply(null, arguments);
            }),
            Saa = (a._emscripten_bind_btPairCachingGhostObject_getUserIndex3_0 = function () {
                return (Saa = a._emscripten_bind_btPairCachingGhostObject_getUserIndex3_0 = a.asm.F5).apply(null, arguments);
            }),
            Taa = (a._emscripten_bind_btPairCachingGhostObject_setUserPointer_1 = function () {
                return (Taa = a._emscripten_bind_btPairCachingGhostObject_setUserPointer_1 = a.asm.G5).apply(null, arguments);
            }),
            Uaa = (a._emscripten_bind_btPairCachingGhostObject_setUserIndex_1 = function () {
                return (Uaa = a._emscripten_bind_btPairCachingGhostObject_setUserIndex_1 = a.asm.H5).apply(null, arguments);
            }),
            Vaa = (a._emscripten_bind_btPairCachingGhostObject_setUserIndex2_1 = function () {
                return (Vaa = a._emscripten_bind_btPairCachingGhostObject_setUserIndex2_1 = a.asm.I5).apply(null, arguments);
            }),
            Waa = (a._emscripten_bind_btPairCachingGhostObject_setUserIndex3_1 = function () {
                return (Waa = a._emscripten_bind_btPairCachingGhostObject_setUserIndex3_1 = a.asm.J5).apply(null, arguments);
            }),
            Xaa = (a._emscripten_bind_btPairCachingGhostObject_getUpdateRevisionInternal_0 = function () {
                return (Xaa = a._emscripten_bind_btPairCachingGhostObject_getUpdateRevisionInternal_0 = a.asm.K5).apply(null, arguments);
            }),
            Yaa = (a._emscripten_bind_btPairCachingGhostObject_checkCollideWith_1 = function () {
                return (Yaa = a._emscripten_bind_btPairCachingGhostObject_checkCollideWith_1 = a.asm.L5).apply(null, arguments);
            }),
            Zaa = (a._emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 = function () {
                return (Zaa = a._emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 = a.asm.M5).apply(null, arguments);
            }),
            $aa = (a._emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 = function () {
                return ($aa = a._emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 = a.asm.N5).apply(null, arguments);
            }),
            aba = (a._emscripten_bind_btPairCachingGhostObject___destroy___0 = function () {
                return (aba = a._emscripten_bind_btPairCachingGhostObject___destroy___0 = a.asm.O5).apply(null, arguments);
            }),
            bba = (a._emscripten_bind_btSoftBodyWorldInfo_btSoftBodyWorldInfo_0 = function () {
                return (bba = a._emscripten_bind_btSoftBodyWorldInfo_btSoftBodyWorldInfo_0 = a.asm.P5).apply(null, arguments);
            }),
            cba = (a._emscripten_bind_btSoftBodyWorldInfo_get_air_density_0 = function () {
                return (cba = a._emscripten_bind_btSoftBodyWorldInfo_get_air_density_0 = a.asm.Q5).apply(null, arguments);
            }),
            dba = (a._emscripten_bind_btSoftBodyWorldInfo_set_air_density_1 = function () {
                return (dba = a._emscripten_bind_btSoftBodyWorldInfo_set_air_density_1 = a.asm.R5).apply(null, arguments);
            }),
            eba = (a._emscripten_bind_btSoftBodyWorldInfo_get_water_density_0 = function () {
                return (eba = a._emscripten_bind_btSoftBodyWorldInfo_get_water_density_0 = a.asm.S5).apply(null, arguments);
            }),
            fba = (a._emscripten_bind_btSoftBodyWorldInfo_set_water_density_1 = function () {
                return (fba = a._emscripten_bind_btSoftBodyWorldInfo_set_water_density_1 = a.asm.T5).apply(null, arguments);
            }),
            gba = (a._emscripten_bind_btSoftBodyWorldInfo_get_water_offset_0 = function () {
                return (gba = a._emscripten_bind_btSoftBodyWorldInfo_get_water_offset_0 = a.asm.U5).apply(null, arguments);
            }),
            hba = (a._emscripten_bind_btSoftBodyWorldInfo_set_water_offset_1 = function () {
                return (hba = a._emscripten_bind_btSoftBodyWorldInfo_set_water_offset_1 = a.asm.V5).apply(null, arguments);
            }),
            iba = (a._emscripten_bind_btSoftBodyWorldInfo_get_m_maxDisplacement_0 = function () {
                return (iba = a._emscripten_bind_btSoftBodyWorldInfo_get_m_maxDisplacement_0 = a.asm.W5).apply(null, arguments);
            }),
            jba = (a._emscripten_bind_btSoftBodyWorldInfo_set_m_maxDisplacement_1 = function () {
                return (jba = a._emscripten_bind_btSoftBodyWorldInfo_set_m_maxDisplacement_1 = a.asm.X5).apply(null, arguments);
            }),
            kba = (a._emscripten_bind_btSoftBodyWorldInfo_get_water_normal_0 = function () {
                return (kba = a._emscripten_bind_btSoftBodyWorldInfo_get_water_normal_0 = a.asm.Y5).apply(null, arguments);
            }),
            lba = (a._emscripten_bind_btSoftBodyWorldInfo_set_water_normal_1 = function () {
                return (lba = a._emscripten_bind_btSoftBodyWorldInfo_set_water_normal_1 = a.asm.Z5).apply(null, arguments);
            }),
            mba = (a._emscripten_bind_btSoftBodyWorldInfo_get_m_broadphase_0 = function () {
                return (mba = a._emscripten_bind_btSoftBodyWorldInfo_get_m_broadphase_0 = a.asm._5).apply(null, arguments);
            }),
            nba = (a._emscripten_bind_btSoftBodyWorldInfo_set_m_broadphase_1 = function () {
                return (nba = a._emscripten_bind_btSoftBodyWorldInfo_set_m_broadphase_1 = a.asm.$5).apply(null, arguments);
            }),
            oba = (a._emscripten_bind_btSoftBodyWorldInfo_get_m_dispatcher_0 = function () {
                return (oba = a._emscripten_bind_btSoftBodyWorldInfo_get_m_dispatcher_0 = a.asm.a6).apply(null, arguments);
            }),
            pba = (a._emscripten_bind_btSoftBodyWorldInfo_set_m_dispatcher_1 = function () {
                return (pba = a._emscripten_bind_btSoftBodyWorldInfo_set_m_dispatcher_1 = a.asm.b6).apply(null, arguments);
            }),
            qba = (a._emscripten_bind_btSoftBodyWorldInfo_get_m_gravity_0 = function () {
                return (qba = a._emscripten_bind_btSoftBodyWorldInfo_get_m_gravity_0 = a.asm.c6).apply(null, arguments);
            }),
            rba = (a._emscripten_bind_btSoftBodyWorldInfo_set_m_gravity_1 = function () {
                return (rba = a._emscripten_bind_btSoftBodyWorldInfo_set_m_gravity_1 = a.asm.d6).apply(null, arguments);
            }),
            sba = (a._emscripten_bind_btSoftBodyWorldInfo___destroy___0 = function () {
                return (sba = a._emscripten_bind_btSoftBodyWorldInfo___destroy___0 = a.asm.e6).apply(null, arguments);
            }),
            tba = (a._emscripten_bind_Face_get_m_n_1 = function () {
                return (tba = a._emscripten_bind_Face_get_m_n_1 = a.asm.f6).apply(null, arguments);
            }),
            uba = (a._emscripten_bind_Face_set_m_n_2 = function () {
                return (uba = a._emscripten_bind_Face_set_m_n_2 = a.asm.g6).apply(null, arguments);
            }),
            vba = (a._emscripten_bind_Face_get_m_normal_0 = function () {
                return (vba = a._emscripten_bind_Face_get_m_normal_0 = a.asm.h6).apply(null, arguments);
            }),
            wba = (a._emscripten_bind_Face_set_m_normal_1 = function () {
                return (wba = a._emscripten_bind_Face_set_m_normal_1 = a.asm.i6).apply(null, arguments);
            }),
            xba = (a._emscripten_bind_Face_get_m_ra_0 = function () {
                return (xba = a._emscripten_bind_Face_get_m_ra_0 = a.asm.j6).apply(null, arguments);
            }),
            yba = (a._emscripten_bind_Face_set_m_ra_1 = function () {
                return (yba = a._emscripten_bind_Face_set_m_ra_1 = a.asm.k6).apply(null, arguments);
            }),
            zba = (a._emscripten_bind_Face___destroy___0 = function () {
                return (zba = a._emscripten_bind_Face___destroy___0 = a.asm.l6).apply(null, arguments);
            }),
            Aba = (a._emscripten_bind_tFaceArray_size_0 = function () {
                return (Aba = a._emscripten_bind_tFaceArray_size_0 = a.asm.m6).apply(null, arguments);
            }),
            Bba = (a._emscripten_bind_tFaceArray_at_1 = function () {
                return (Bba = a._emscripten_bind_tFaceArray_at_1 = a.asm.n6).apply(null, arguments);
            }),
            Cba = (a._emscripten_bind_tFaceArray___destroy___0 = function () {
                return (Cba = a._emscripten_bind_tFaceArray___destroy___0 = a.asm.o6).apply(null, arguments);
            }),
            Dba = (a._emscripten_bind_Node_get_m_x_0 = function () {
                return (Dba = a._emscripten_bind_Node_get_m_x_0 = a.asm.p6).apply(null, arguments);
            }),
            Eba = (a._emscripten_bind_Node_set_m_x_1 = function () {
                return (Eba = a._emscripten_bind_Node_set_m_x_1 = a.asm.q6).apply(null, arguments);
            }),
            Fba = (a._emscripten_bind_Node_get_m_q_0 = function () {
                return (Fba = a._emscripten_bind_Node_get_m_q_0 = a.asm.r6).apply(null, arguments);
            }),
            Gba = (a._emscripten_bind_Node_set_m_q_1 = function () {
                return (Gba = a._emscripten_bind_Node_set_m_q_1 = a.asm.s6).apply(null, arguments);
            }),
            Hba = (a._emscripten_bind_Node_get_m_v_0 = function () {
                return (Hba = a._emscripten_bind_Node_get_m_v_0 = a.asm.t6).apply(null, arguments);
            }),
            Iba = (a._emscripten_bind_Node_set_m_v_1 = function () {
                return (Iba = a._emscripten_bind_Node_set_m_v_1 = a.asm.u6).apply(null, arguments);
            }),
            Jba = (a._emscripten_bind_Node_get_m_f_0 = function () {
                return (Jba = a._emscripten_bind_Node_get_m_f_0 = a.asm.v6).apply(null, arguments);
            }),
            Kba = (a._emscripten_bind_Node_set_m_f_1 = function () {
                return (Kba = a._emscripten_bind_Node_set_m_f_1 = a.asm.w6).apply(null, arguments);
            }),
            Lba = (a._emscripten_bind_Node_get_m_n_0 = function () {
                return (Lba = a._emscripten_bind_Node_get_m_n_0 = a.asm.x6).apply(null, arguments);
            }),
            Mba = (a._emscripten_bind_Node_set_m_n_1 = function () {
                return (Mba = a._emscripten_bind_Node_set_m_n_1 = a.asm.y6).apply(null, arguments);
            }),
            Nba = (a._emscripten_bind_Node_get_m_im_0 = function () {
                return (Nba = a._emscripten_bind_Node_get_m_im_0 = a.asm.z6).apply(null, arguments);
            }),
            Oba = (a._emscripten_bind_Node_set_m_im_1 = function () {
                return (Oba = a._emscripten_bind_Node_set_m_im_1 = a.asm.A6).apply(null, arguments);
            }),
            Pba = (a._emscripten_bind_Node_get_m_area_0 = function () {
                return (Pba = a._emscripten_bind_Node_get_m_area_0 = a.asm.B6).apply(null, arguments);
            }),
            Qba = (a._emscripten_bind_Node_set_m_area_1 = function () {
                return (Qba = a._emscripten_bind_Node_set_m_area_1 = a.asm.C6).apply(null, arguments);
            }),
            Rba = (a._emscripten_bind_Node___destroy___0 = function () {
                return (Rba = a._emscripten_bind_Node___destroy___0 = a.asm.D6).apply(null, arguments);
            }),
            Sba = (a._emscripten_bind_tNodeArray_size_0 = function () {
                return (Sba = a._emscripten_bind_tNodeArray_size_0 = a.asm.E6).apply(null, arguments);
            }),
            Tba = (a._emscripten_bind_tNodeArray_at_1 = function () {
                return (Tba = a._emscripten_bind_tNodeArray_at_1 = a.asm.F6).apply(null, arguments);
            }),
            Uba = (a._emscripten_bind_tNodeArray___destroy___0 = function () {
                return (Uba = a._emscripten_bind_tNodeArray___destroy___0 = a.asm.G6).apply(null, arguments);
            }),
            Vba = (a._emscripten_bind_Material_get_m_kLST_0 = function () {
                return (Vba = a._emscripten_bind_Material_get_m_kLST_0 = a.asm.H6).apply(null, arguments);
            }),
            Wba = (a._emscripten_bind_Material_set_m_kLST_1 = function () {
                return (Wba = a._emscripten_bind_Material_set_m_kLST_1 = a.asm.I6).apply(null, arguments);
            }),
            Xba = (a._emscripten_bind_Material_get_m_kAST_0 = function () {
                return (Xba = a._emscripten_bind_Material_get_m_kAST_0 = a.asm.J6).apply(null, arguments);
            }),
            Yba = (a._emscripten_bind_Material_set_m_kAST_1 = function () {
                return (Yba = a._emscripten_bind_Material_set_m_kAST_1 = a.asm.K6).apply(null, arguments);
            }),
            Zba = (a._emscripten_bind_Material_get_m_kVST_0 = function () {
                return (Zba = a._emscripten_bind_Material_get_m_kVST_0 = a.asm.L6).apply(null, arguments);
            }),
            $ba = (a._emscripten_bind_Material_set_m_kVST_1 = function () {
                return ($ba = a._emscripten_bind_Material_set_m_kVST_1 = a.asm.M6).apply(null, arguments);
            }),
            aca = (a._emscripten_bind_Material_get_m_flags_0 = function () {
                return (aca = a._emscripten_bind_Material_get_m_flags_0 = a.asm.N6).apply(null, arguments);
            }),
            bca = (a._emscripten_bind_Material_set_m_flags_1 = function () {
                return (bca = a._emscripten_bind_Material_set_m_flags_1 = a.asm.O6).apply(null, arguments);
            }),
            cca = (a._emscripten_bind_Material___destroy___0 = function () {
                return (cca = a._emscripten_bind_Material___destroy___0 = a.asm.P6).apply(null, arguments);
            }),
            dca = (a._emscripten_bind_tMaterialArray_size_0 = function () {
                return (dca = a._emscripten_bind_tMaterialArray_size_0 = a.asm.Q6).apply(null, arguments);
            }),
            eca = (a._emscripten_bind_tMaterialArray_at_1 = function () {
                return (eca = a._emscripten_bind_tMaterialArray_at_1 = a.asm.R6).apply(null, arguments);
            }),
            fca = (a._emscripten_bind_tMaterialArray___destroy___0 = function () {
                return (fca = a._emscripten_bind_tMaterialArray___destroy___0 = a.asm.S6).apply(null, arguments);
            }),
            gca = (a._emscripten_bind_Anchor_get_m_node_0 = function () {
                return (gca = a._emscripten_bind_Anchor_get_m_node_0 = a.asm.T6).apply(null, arguments);
            }),
            hca = (a._emscripten_bind_Anchor_set_m_node_1 = function () {
                return (hca = a._emscripten_bind_Anchor_set_m_node_1 = a.asm.U6).apply(null, arguments);
            }),
            ica = (a._emscripten_bind_Anchor_get_m_local_0 = function () {
                return (ica = a._emscripten_bind_Anchor_get_m_local_0 = a.asm.V6).apply(null, arguments);
            }),
            jca = (a._emscripten_bind_Anchor_set_m_local_1 = function () {
                return (jca = a._emscripten_bind_Anchor_set_m_local_1 = a.asm.W6).apply(null, arguments);
            }),
            kca = (a._emscripten_bind_Anchor_get_m_body_0 = function () {
                return (kca = a._emscripten_bind_Anchor_get_m_body_0 = a.asm.X6).apply(null, arguments);
            }),
            lca = (a._emscripten_bind_Anchor_set_m_body_1 = function () {
                return (lca = a._emscripten_bind_Anchor_set_m_body_1 = a.asm.Y6).apply(null, arguments);
            }),
            mca = (a._emscripten_bind_Anchor_get_m_influence_0 = function () {
                return (mca = a._emscripten_bind_Anchor_get_m_influence_0 = a.asm.Z6).apply(null, arguments);
            }),
            nca = (a._emscripten_bind_Anchor_set_m_influence_1 = function () {
                return (nca = a._emscripten_bind_Anchor_set_m_influence_1 = a.asm._6).apply(null, arguments);
            }),
            oca = (a._emscripten_bind_Anchor_get_m_c0_0 = function () {
                return (oca = a._emscripten_bind_Anchor_get_m_c0_0 = a.asm.$6).apply(null, arguments);
            }),
            pca = (a._emscripten_bind_Anchor_set_m_c0_1 = function () {
                return (pca = a._emscripten_bind_Anchor_set_m_c0_1 = a.asm.a7).apply(null, arguments);
            }),
            qca = (a._emscripten_bind_Anchor_get_m_c1_0 = function () {
                return (qca = a._emscripten_bind_Anchor_get_m_c1_0 = a.asm.b7).apply(null, arguments);
            }),
            rca = (a._emscripten_bind_Anchor_set_m_c1_1 = function () {
                return (rca = a._emscripten_bind_Anchor_set_m_c1_1 = a.asm.c7).apply(null, arguments);
            }),
            sca = (a._emscripten_bind_Anchor_get_m_c2_0 = function () {
                return (sca = a._emscripten_bind_Anchor_get_m_c2_0 = a.asm.d7).apply(null, arguments);
            }),
            tca = (a._emscripten_bind_Anchor_set_m_c2_1 = function () {
                return (tca = a._emscripten_bind_Anchor_set_m_c2_1 = a.asm.e7).apply(null, arguments);
            }),
            uca = (a._emscripten_bind_Anchor___destroy___0 = function () {
                return (uca = a._emscripten_bind_Anchor___destroy___0 = a.asm.f7).apply(null, arguments);
            }),
            vca = (a._emscripten_bind_tAnchorArray_size_0 = function () {
                return (vca = a._emscripten_bind_tAnchorArray_size_0 = a.asm.g7).apply(null, arguments);
            }),
            wca = (a._emscripten_bind_tAnchorArray_at_1 = function () {
                return (wca = a._emscripten_bind_tAnchorArray_at_1 = a.asm.h7).apply(null, arguments);
            }),
            xca = (a._emscripten_bind_tAnchorArray_clear_0 = function () {
                return (xca = a._emscripten_bind_tAnchorArray_clear_0 = a.asm.i7).apply(null, arguments);
            }),
            yca = (a._emscripten_bind_tAnchorArray_push_back_1 = function () {
                return (yca = a._emscripten_bind_tAnchorArray_push_back_1 = a.asm.j7).apply(null, arguments);
            }),
            zca = (a._emscripten_bind_tAnchorArray_pop_back_0 = function () {
                return (zca = a._emscripten_bind_tAnchorArray_pop_back_0 = a.asm.k7).apply(null, arguments);
            }),
            Aca = (a._emscripten_bind_tAnchorArray___destroy___0 = function () {
                return (Aca = a._emscripten_bind_tAnchorArray___destroy___0 = a.asm.l7).apply(null, arguments);
            }),
            Bca = (a._emscripten_bind_Config_get_kVCF_0 = function () {
                return (Bca = a._emscripten_bind_Config_get_kVCF_0 = a.asm.m7).apply(null, arguments);
            }),
            Cca = (a._emscripten_bind_Config_set_kVCF_1 = function () {
                return (Cca = a._emscripten_bind_Config_set_kVCF_1 = a.asm.n7).apply(null, arguments);
            }),
            Dca = (a._emscripten_bind_Config_get_kDP_0 = function () {
                return (Dca = a._emscripten_bind_Config_get_kDP_0 = a.asm.o7).apply(null, arguments);
            }),
            Eca = (a._emscripten_bind_Config_set_kDP_1 = function () {
                return (Eca = a._emscripten_bind_Config_set_kDP_1 = a.asm.p7).apply(null, arguments);
            }),
            Fca = (a._emscripten_bind_Config_get_kDG_0 = function () {
                return (Fca = a._emscripten_bind_Config_get_kDG_0 = a.asm.q7).apply(null, arguments);
            }),
            Gca = (a._emscripten_bind_Config_set_kDG_1 = function () {
                return (Gca = a._emscripten_bind_Config_set_kDG_1 = a.asm.r7).apply(null, arguments);
            }),
            Hca = (a._emscripten_bind_Config_get_kLF_0 = function () {
                return (Hca = a._emscripten_bind_Config_get_kLF_0 = a.asm.s7).apply(null, arguments);
            }),
            Ica = (a._emscripten_bind_Config_set_kLF_1 = function () {
                return (Ica = a._emscripten_bind_Config_set_kLF_1 = a.asm.t7).apply(null, arguments);
            }),
            Jca = (a._emscripten_bind_Config_get_kPR_0 = function () {
                return (Jca = a._emscripten_bind_Config_get_kPR_0 = a.asm.u7).apply(null, arguments);
            }),
            Kca = (a._emscripten_bind_Config_set_kPR_1 = function () {
                return (Kca = a._emscripten_bind_Config_set_kPR_1 = a.asm.v7).apply(null, arguments);
            }),
            Lca = (a._emscripten_bind_Config_get_kVC_0 = function () {
                return (Lca = a._emscripten_bind_Config_get_kVC_0 = a.asm.w7).apply(null, arguments);
            }),
            Mca = (a._emscripten_bind_Config_set_kVC_1 = function () {
                return (Mca = a._emscripten_bind_Config_set_kVC_1 = a.asm.x7).apply(null, arguments);
            }),
            Nca = (a._emscripten_bind_Config_get_kDF_0 = function () {
                return (Nca = a._emscripten_bind_Config_get_kDF_0 = a.asm.y7).apply(null, arguments);
            }),
            Oca = (a._emscripten_bind_Config_set_kDF_1 = function () {
                return (Oca = a._emscripten_bind_Config_set_kDF_1 = a.asm.z7).apply(null, arguments);
            }),
            Pca = (a._emscripten_bind_Config_get_kMT_0 = function () {
                return (Pca = a._emscripten_bind_Config_get_kMT_0 = a.asm.A7).apply(null, arguments);
            }),
            Qca = (a._emscripten_bind_Config_set_kMT_1 = function () {
                return (Qca = a._emscripten_bind_Config_set_kMT_1 = a.asm.B7).apply(null, arguments);
            }),
            Rca = (a._emscripten_bind_Config_get_kCHR_0 = function () {
                return (Rca = a._emscripten_bind_Config_get_kCHR_0 = a.asm.C7).apply(null, arguments);
            }),
            Sca = (a._emscripten_bind_Config_set_kCHR_1 = function () {
                return (Sca = a._emscripten_bind_Config_set_kCHR_1 = a.asm.D7).apply(null, arguments);
            }),
            Tca = (a._emscripten_bind_Config_get_kKHR_0 = function () {
                return (Tca = a._emscripten_bind_Config_get_kKHR_0 = a.asm.E7).apply(null, arguments);
            }),
            Uca = (a._emscripten_bind_Config_set_kKHR_1 = function () {
                return (Uca = a._emscripten_bind_Config_set_kKHR_1 = a.asm.F7).apply(null, arguments);
            }),
            Vca = (a._emscripten_bind_Config_get_kSHR_0 = function () {
                return (Vca = a._emscripten_bind_Config_get_kSHR_0 = a.asm.G7).apply(null, arguments);
            }),
            Wca = (a._emscripten_bind_Config_set_kSHR_1 = function () {
                return (Wca = a._emscripten_bind_Config_set_kSHR_1 = a.asm.H7).apply(null, arguments);
            }),
            Xca = (a._emscripten_bind_Config_get_kAHR_0 = function () {
                return (Xca = a._emscripten_bind_Config_get_kAHR_0 = a.asm.I7).apply(null, arguments);
            }),
            Yca = (a._emscripten_bind_Config_set_kAHR_1 = function () {
                return (Yca = a._emscripten_bind_Config_set_kAHR_1 = a.asm.J7).apply(null, arguments);
            }),
            Zca = (a._emscripten_bind_Config_get_kSRHR_CL_0 = function () {
                return (Zca = a._emscripten_bind_Config_get_kSRHR_CL_0 = a.asm.K7).apply(null, arguments);
            }),
            $ca = (a._emscripten_bind_Config_set_kSRHR_CL_1 = function () {
                return ($ca = a._emscripten_bind_Config_set_kSRHR_CL_1 = a.asm.L7).apply(null, arguments);
            }),
            ada = (a._emscripten_bind_Config_get_kSKHR_CL_0 = function () {
                return (ada = a._emscripten_bind_Config_get_kSKHR_CL_0 = a.asm.M7).apply(null, arguments);
            }),
            bda = (a._emscripten_bind_Config_set_kSKHR_CL_1 = function () {
                return (bda = a._emscripten_bind_Config_set_kSKHR_CL_1 = a.asm.N7).apply(null, arguments);
            }),
            cda = (a._emscripten_bind_Config_get_kSSHR_CL_0 = function () {
                return (cda = a._emscripten_bind_Config_get_kSSHR_CL_0 = a.asm.O7).apply(null, arguments);
            }),
            dda = (a._emscripten_bind_Config_set_kSSHR_CL_1 = function () {
                return (dda = a._emscripten_bind_Config_set_kSSHR_CL_1 = a.asm.P7).apply(null, arguments);
            }),
            eda = (a._emscripten_bind_Config_get_kSR_SPLT_CL_0 = function () {
                return (eda = a._emscripten_bind_Config_get_kSR_SPLT_CL_0 = a.asm.Q7).apply(null, arguments);
            }),
            fda = (a._emscripten_bind_Config_set_kSR_SPLT_CL_1 = function () {
                return (fda = a._emscripten_bind_Config_set_kSR_SPLT_CL_1 = a.asm.R7).apply(null, arguments);
            }),
            gda = (a._emscripten_bind_Config_get_kSK_SPLT_CL_0 = function () {
                return (gda = a._emscripten_bind_Config_get_kSK_SPLT_CL_0 = a.asm.S7).apply(null, arguments);
            }),
            hda = (a._emscripten_bind_Config_set_kSK_SPLT_CL_1 = function () {
                return (hda = a._emscripten_bind_Config_set_kSK_SPLT_CL_1 = a.asm.T7).apply(null, arguments);
            }),
            ida = (a._emscripten_bind_Config_get_kSS_SPLT_CL_0 = function () {
                return (ida = a._emscripten_bind_Config_get_kSS_SPLT_CL_0 = a.asm.U7).apply(null, arguments);
            }),
            jda = (a._emscripten_bind_Config_set_kSS_SPLT_CL_1 = function () {
                return (jda = a._emscripten_bind_Config_set_kSS_SPLT_CL_1 = a.asm.V7).apply(null, arguments);
            }),
            kda = (a._emscripten_bind_Config_get_maxvolume_0 = function () {
                return (kda = a._emscripten_bind_Config_get_maxvolume_0 = a.asm.W7).apply(null, arguments);
            }),
            lda = (a._emscripten_bind_Config_set_maxvolume_1 = function () {
                return (lda = a._emscripten_bind_Config_set_maxvolume_1 = a.asm.X7).apply(null, arguments);
            }),
            mda = (a._emscripten_bind_Config_get_timescale_0 = function () {
                return (mda = a._emscripten_bind_Config_get_timescale_0 = a.asm.Y7).apply(null, arguments);
            }),
            nda = (a._emscripten_bind_Config_set_timescale_1 = function () {
                return (nda = a._emscripten_bind_Config_set_timescale_1 = a.asm.Z7).apply(null, arguments);
            }),
            oda = (a._emscripten_bind_Config_get_viterations_0 = function () {
                return (oda = a._emscripten_bind_Config_get_viterations_0 = a.asm._7).apply(null, arguments);
            }),
            pda = (a._emscripten_bind_Config_set_viterations_1 = function () {
                return (pda = a._emscripten_bind_Config_set_viterations_1 = a.asm.$7).apply(null, arguments);
            }),
            qda = (a._emscripten_bind_Config_get_piterations_0 = function () {
                return (qda = a._emscripten_bind_Config_get_piterations_0 = a.asm.a8).apply(null, arguments);
            }),
            rda = (a._emscripten_bind_Config_set_piterations_1 = function () {
                return (rda = a._emscripten_bind_Config_set_piterations_1 = a.asm.b8).apply(null, arguments);
            }),
            sda = (a._emscripten_bind_Config_get_diterations_0 = function () {
                return (sda = a._emscripten_bind_Config_get_diterations_0 = a.asm.c8).apply(null, arguments);
            }),
            tda = (a._emscripten_bind_Config_set_diterations_1 = function () {
                return (tda = a._emscripten_bind_Config_set_diterations_1 = a.asm.d8).apply(null, arguments);
            }),
            uda = (a._emscripten_bind_Config_get_citerations_0 = function () {
                return (uda = a._emscripten_bind_Config_get_citerations_0 = a.asm.e8).apply(null, arguments);
            }),
            vda = (a._emscripten_bind_Config_set_citerations_1 = function () {
                return (vda = a._emscripten_bind_Config_set_citerations_1 = a.asm.f8).apply(null, arguments);
            }),
            wda = (a._emscripten_bind_Config_get_collisions_0 = function () {
                return (wda = a._emscripten_bind_Config_get_collisions_0 = a.asm.g8).apply(null, arguments);
            }),
            xda = (a._emscripten_bind_Config_set_collisions_1 = function () {
                return (xda = a._emscripten_bind_Config_set_collisions_1 = a.asm.h8).apply(null, arguments);
            }),
            yda = (a._emscripten_bind_Config___destroy___0 = function () {
                return (yda = a._emscripten_bind_Config___destroy___0 = a.asm.i8).apply(null, arguments);
            }),
            zda = (a._emscripten_bind_btSoftBody_btSoftBody_4 = function () {
                return (zda = a._emscripten_bind_btSoftBody_btSoftBody_4 = a.asm.j8).apply(null, arguments);
            }),
            Ada = (a._emscripten_bind_btSoftBody_checkLink_2 = function () {
                return (Ada = a._emscripten_bind_btSoftBody_checkLink_2 = a.asm.k8).apply(null, arguments);
            }),
            Bda = (a._emscripten_bind_btSoftBody_checkFace_3 = function () {
                return (Bda = a._emscripten_bind_btSoftBody_checkFace_3 = a.asm.l8).apply(null, arguments);
            }),
            Cda = (a._emscripten_bind_btSoftBody_appendMaterial_0 = function () {
                return (Cda = a._emscripten_bind_btSoftBody_appendMaterial_0 = a.asm.m8).apply(null, arguments);
            }),
            Dda = (a._emscripten_bind_btSoftBody_appendNode_2 = function () {
                return (Dda = a._emscripten_bind_btSoftBody_appendNode_2 = a.asm.n8).apply(null, arguments);
            }),
            Eda = (a._emscripten_bind_btSoftBody_appendLink_4 = function () {
                return (Eda = a._emscripten_bind_btSoftBody_appendLink_4 = a.asm.o8).apply(null, arguments);
            }),
            Fda = (a._emscripten_bind_btSoftBody_appendFace_4 = function () {
                return (Fda = a._emscripten_bind_btSoftBody_appendFace_4 = a.asm.p8).apply(null, arguments);
            }),
            Gda = (a._emscripten_bind_btSoftBody_appendTetra_5 = function () {
                return (Gda = a._emscripten_bind_btSoftBody_appendTetra_5 = a.asm.q8).apply(null, arguments);
            }),
            Hda = (a._emscripten_bind_btSoftBody_appendAnchor_4 = function () {
                return (Hda = a._emscripten_bind_btSoftBody_appendAnchor_4 = a.asm.r8).apply(null, arguments);
            }),
            Ida = (a._emscripten_bind_btSoftBody_addForce_1 = function () {
                return (Ida = a._emscripten_bind_btSoftBody_addForce_1 = a.asm.s8).apply(null, arguments);
            }),
            Jda = (a._emscripten_bind_btSoftBody_addForce_2 = function () {
                return (Jda = a._emscripten_bind_btSoftBody_addForce_2 = a.asm.t8).apply(null, arguments);
            }),
            Kda = (a._emscripten_bind_btSoftBody_addAeroForceToNode_2 = function () {
                return (Kda = a._emscripten_bind_btSoftBody_addAeroForceToNode_2 = a.asm.u8).apply(null, arguments);
            }),
            Lda = (a._emscripten_bind_btSoftBody_getTotalMass_0 = function () {
                return (Lda = a._emscripten_bind_btSoftBody_getTotalMass_0 = a.asm.v8).apply(null, arguments);
            }),
            Mda = (a._emscripten_bind_btSoftBody_setTotalMass_2 = function () {
                return (Mda = a._emscripten_bind_btSoftBody_setTotalMass_2 = a.asm.w8).apply(null, arguments);
            }),
            Nda = (a._emscripten_bind_btSoftBody_setMass_2 = function () {
                return (Nda = a._emscripten_bind_btSoftBody_setMass_2 = a.asm.x8).apply(null, arguments);
            }),
            Oda = (a._emscripten_bind_btSoftBody_transform_1 = function () {
                return (Oda = a._emscripten_bind_btSoftBody_transform_1 = a.asm.y8).apply(null, arguments);
            }),
            Pda = (a._emscripten_bind_btSoftBody_translate_1 = function () {
                return (Pda = a._emscripten_bind_btSoftBody_translate_1 = a.asm.z8).apply(null, arguments);
            }),
            Qda = (a._emscripten_bind_btSoftBody_rotate_1 = function () {
                return (Qda = a._emscripten_bind_btSoftBody_rotate_1 = a.asm.A8).apply(null, arguments);
            }),
            Rda = (a._emscripten_bind_btSoftBody_scale_1 = function () {
                return (Rda = a._emscripten_bind_btSoftBody_scale_1 = a.asm.B8).apply(null, arguments);
            }),
            Sda = (a._emscripten_bind_btSoftBody_generateClusters_1 = function () {
                return (Sda = a._emscripten_bind_btSoftBody_generateClusters_1 = a.asm.C8).apply(null, arguments);
            }),
            Tda = (a._emscripten_bind_btSoftBody_generateClusters_2 = function () {
                return (Tda = a._emscripten_bind_btSoftBody_generateClusters_2 = a.asm.D8).apply(null, arguments);
            }),
            Uda = (a._emscripten_bind_btSoftBody_generateBendingConstraints_2 = function () {
                return (Uda = a._emscripten_bind_btSoftBody_generateBendingConstraints_2 = a.asm.E8).apply(null, arguments);
            }),
            Vda = (a._emscripten_bind_btSoftBody_upcast_1 = function () {
                return (Vda = a._emscripten_bind_btSoftBody_upcast_1 = a.asm.F8).apply(null, arguments);
            }),
            Wda = (a._emscripten_bind_btSoftBody_getRestLengthScale_0 = function () {
                return (Wda = a._emscripten_bind_btSoftBody_getRestLengthScale_0 = a.asm.G8).apply(null, arguments);
            }),
            Xda = (a._emscripten_bind_btSoftBody_setRestLengthScale_1 = function () {
                return (Xda = a._emscripten_bind_btSoftBody_setRestLengthScale_1 = a.asm.H8).apply(null, arguments);
            }),
            Yda = (a._emscripten_bind_btSoftBody_mergesSimulationIslands_0 = function () {
                return (Yda = a._emscripten_bind_btSoftBody_mergesSimulationIslands_0 = a.asm.I8).apply(null, arguments);
            }),
            Zda = (a._emscripten_bind_btSoftBody_getAnisotropicFriction_0 = function () {
                return (Zda = a._emscripten_bind_btSoftBody_getAnisotropicFriction_0 = a.asm.J8).apply(null, arguments);
            }),
            $da = (a._emscripten_bind_btSoftBody_setAnisotropicFriction_1 = function () {
                return ($da = a._emscripten_bind_btSoftBody_setAnisotropicFriction_1 = a.asm.K8).apply(null, arguments);
            }),
            aea = (a._emscripten_bind_btSoftBody_setAnisotropicFriction_2 = function () {
                return (aea = a._emscripten_bind_btSoftBody_setAnisotropicFriction_2 = a.asm.L8).apply(null, arguments);
            }),
            bea = (a._emscripten_bind_btSoftBody_hasAnisotropicFriction_0 = function () {
                return (bea = a._emscripten_bind_btSoftBody_hasAnisotropicFriction_0 = a.asm.M8).apply(null, arguments);
            }),
            cea = (a._emscripten_bind_btSoftBody_hasAnisotropicFriction_1 = function () {
                return (cea = a._emscripten_bind_btSoftBody_hasAnisotropicFriction_1 = a.asm.N8).apply(null, arguments);
            }),
            dea = (a._emscripten_bind_btSoftBody_setContactProcessingThreshold_1 = function () {
                return (dea = a._emscripten_bind_btSoftBody_setContactProcessingThreshold_1 = a.asm.O8).apply(null, arguments);
            }),
            eea = (a._emscripten_bind_btSoftBody_getContactProcessingThreshold_0 = function () {
                return (eea = a._emscripten_bind_btSoftBody_getContactProcessingThreshold_0 = a.asm.P8).apply(null, arguments);
            }),
            fea = (a._emscripten_bind_btSoftBody_isStaticObject_0 = function () {
                return (fea = a._emscripten_bind_btSoftBody_isStaticObject_0 = a.asm.Q8).apply(null, arguments);
            }),
            gea = (a._emscripten_bind_btSoftBody_isKinematicObject_0 = function () {
                return (gea = a._emscripten_bind_btSoftBody_isKinematicObject_0 = a.asm.R8).apply(null, arguments);
            }),
            hea = (a._emscripten_bind_btSoftBody_isStaticOrKinematicObject_0 = function () {
                return (hea = a._emscripten_bind_btSoftBody_isStaticOrKinematicObject_0 = a.asm.S8).apply(null, arguments);
            }),
            iea = (a._emscripten_bind_btSoftBody_hasContactResponse_0 = function () {
                return (iea = a._emscripten_bind_btSoftBody_hasContactResponse_0 = a.asm.T8).apply(null, arguments);
            }),
            jea = (a._emscripten_bind_btSoftBody_setCollisionShape_1 = function () {
                return (jea = a._emscripten_bind_btSoftBody_setCollisionShape_1 = a.asm.U8).apply(null, arguments);
            }),
            kea = (a._emscripten_bind_btSoftBody_setIgnoreCollisionCheck_2 = function () {
                return (kea = a._emscripten_bind_btSoftBody_setIgnoreCollisionCheck_2 = a.asm.V8).apply(null, arguments);
            }),
            lea = (a._emscripten_bind_btSoftBody_getNumObjectsWithoutCollision_0 = function () {
                return (lea = a._emscripten_bind_btSoftBody_getNumObjectsWithoutCollision_0 = a.asm.W8).apply(null, arguments);
            }),
            mea = (a._emscripten_bind_btSoftBody_getObjectWithoutCollision_1 = function () {
                return (mea = a._emscripten_bind_btSoftBody_getObjectWithoutCollision_1 = a.asm.X8).apply(null, arguments);
            }),
            nea = (a._emscripten_bind_btSoftBody_checkCollideWithOverride_1 = function () {
                return (nea = a._emscripten_bind_btSoftBody_checkCollideWithOverride_1 = a.asm.Y8).apply(null, arguments);
            }),
            oea = (a._emscripten_bind_btSoftBody_getActivationState_0 = function () {
                return (oea = a._emscripten_bind_btSoftBody_getActivationState_0 = a.asm.Z8).apply(null, arguments);
            }),
            pea = (a._emscripten_bind_btSoftBody_setActivationState_1 = function () {
                return (pea = a._emscripten_bind_btSoftBody_setActivationState_1 = a.asm._8).apply(null, arguments);
            }),
            qea = (a._emscripten_bind_btSoftBody_setDeactivationTime_1 = function () {
                return (qea = a._emscripten_bind_btSoftBody_setDeactivationTime_1 = a.asm.$8).apply(null, arguments);
            }),
            rea = (a._emscripten_bind_btSoftBody_getDeactivationTime_0 = function () {
                return (rea = a._emscripten_bind_btSoftBody_getDeactivationTime_0 = a.asm.a9).apply(null, arguments);
            }),
            sea = (a._emscripten_bind_btSoftBody_forceActivationState_1 = function () {
                return (sea = a._emscripten_bind_btSoftBody_forceActivationState_1 = a.asm.b9).apply(null, arguments);
            }),
            tea = (a._emscripten_bind_btSoftBody_activate_0 = function () {
                return (tea = a._emscripten_bind_btSoftBody_activate_0 = a.asm.c9).apply(null, arguments);
            }),
            uea = (a._emscripten_bind_btSoftBody_activate_1 = function () {
                return (uea = a._emscripten_bind_btSoftBody_activate_1 = a.asm.d9).apply(null, arguments);
            }),
            vea = (a._emscripten_bind_btSoftBody_isActive_0 = function () {
                return (vea = a._emscripten_bind_btSoftBody_isActive_0 = a.asm.e9).apply(null, arguments);
            }),
            wea = (a._emscripten_bind_btSoftBody_setRestitution_1 = function () {
                return (wea = a._emscripten_bind_btSoftBody_setRestitution_1 = a.asm.f9).apply(null, arguments);
            }),
            xea = (a._emscripten_bind_btSoftBody_getRestitution_0 = function () {
                return (xea = a._emscripten_bind_btSoftBody_getRestitution_0 = a.asm.g9).apply(null, arguments);
            }),
            yea = (a._emscripten_bind_btSoftBody_setFriction_1 = function () {
                return (yea = a._emscripten_bind_btSoftBody_setFriction_1 = a.asm.h9).apply(null, arguments);
            }),
            zea = (a._emscripten_bind_btSoftBody_getFriction_0 = function () {
                return (zea = a._emscripten_bind_btSoftBody_getFriction_0 = a.asm.i9).apply(null, arguments);
            }),
            Aea = (a._emscripten_bind_btSoftBody_setRollingFriction_1 = function () {
                return (Aea = a._emscripten_bind_btSoftBody_setRollingFriction_1 = a.asm.j9).apply(null, arguments);
            }),
            Bea = (a._emscripten_bind_btSoftBody_getRollingFriction_0 = function () {
                return (Bea = a._emscripten_bind_btSoftBody_getRollingFriction_0 = a.asm.k9).apply(null, arguments);
            }),
            Cea = (a._emscripten_bind_btSoftBody_setSpinningFriction_1 = function () {
                return (Cea = a._emscripten_bind_btSoftBody_setSpinningFriction_1 = a.asm.l9).apply(null, arguments);
            }),
            Dea = (a._emscripten_bind_btSoftBody_getSpinningFriction_0 = function () {
                return (Dea = a._emscripten_bind_btSoftBody_getSpinningFriction_0 = a.asm.m9).apply(null, arguments);
            }),
            Eea = (a._emscripten_bind_btSoftBody_setContactStiffnessAndDamping_2 = function () {
                return (Eea = a._emscripten_bind_btSoftBody_setContactStiffnessAndDamping_2 = a.asm.n9).apply(null, arguments);
            }),
            Fea = (a._emscripten_bind_btSoftBody_getContactStiffness_0 = function () {
                return (Fea = a._emscripten_bind_btSoftBody_getContactStiffness_0 = a.asm.o9).apply(null, arguments);
            }),
            Gea = (a._emscripten_bind_btSoftBody_getContactDamping_0 = function () {
                return (Gea = a._emscripten_bind_btSoftBody_getContactDamping_0 = a.asm.p9).apply(null, arguments);
            }),
            Hea = (a._emscripten_bind_btSoftBody_getWorldTransform_0 = function () {
                return (Hea = a._emscripten_bind_btSoftBody_getWorldTransform_0 = a.asm.q9).apply(null, arguments);
            }),
            Iea = (a._emscripten_bind_btSoftBody_setWorldTransform_1 = function () {
                return (Iea = a._emscripten_bind_btSoftBody_setWorldTransform_1 = a.asm.r9).apply(null, arguments);
            }),
            Jea = (a._emscripten_bind_btSoftBody_getBroadphaseHandle_0 = function () {
                return (Jea = a._emscripten_bind_btSoftBody_getBroadphaseHandle_0 = a.asm.s9).apply(null, arguments);
            }),
            Kea = (a._emscripten_bind_btSoftBody_setBroadphaseHandle_1 = function () {
                return (Kea = a._emscripten_bind_btSoftBody_setBroadphaseHandle_1 = a.asm.t9).apply(null, arguments);
            }),
            Lea = (a._emscripten_bind_btSoftBody_getInterpolationWorldTransform_0 = function () {
                return (Lea = a._emscripten_bind_btSoftBody_getInterpolationWorldTransform_0 = a.asm.u9).apply(null, arguments);
            }),
            Mea = (a._emscripten_bind_btSoftBody_setInterpolationWorldTransform_1 = function () {
                return (Mea = a._emscripten_bind_btSoftBody_setInterpolationWorldTransform_1 = a.asm.v9).apply(null, arguments);
            }),
            Nea = (a._emscripten_bind_btSoftBody_setInterpolationLinearVelocity_1 = function () {
                return (Nea = a._emscripten_bind_btSoftBody_setInterpolationLinearVelocity_1 = a.asm.w9).apply(null, arguments);
            }),
            Oea = (a._emscripten_bind_btSoftBody_setInterpolationAngularVelocity_1 = function () {
                return (Oea = a._emscripten_bind_btSoftBody_setInterpolationAngularVelocity_1 = a.asm.x9).apply(null, arguments);
            }),
            Pea = (a._emscripten_bind_btSoftBody_getInterpolationLinearVelocity_0 = function () {
                return (Pea = a._emscripten_bind_btSoftBody_getInterpolationLinearVelocity_0 = a.asm.y9).apply(null, arguments);
            }),
            Qea = (a._emscripten_bind_btSoftBody_getInterpolationAngularVelocity_0 = function () {
                return (Qea = a._emscripten_bind_btSoftBody_getInterpolationAngularVelocity_0 = a.asm.z9).apply(null, arguments);
            }),
            Rea = (a._emscripten_bind_btSoftBody_getIslandTag_0 = function () {
                return (Rea = a._emscripten_bind_btSoftBody_getIslandTag_0 = a.asm.A9).apply(null, arguments);
            }),
            Sea = (a._emscripten_bind_btSoftBody_setIslandTag_1 = function () {
                return (Sea = a._emscripten_bind_btSoftBody_setIslandTag_1 = a.asm.B9).apply(null, arguments);
            }),
            Tea = (a._emscripten_bind_btSoftBody_getCompanionId_0 = function () {
                return (Tea = a._emscripten_bind_btSoftBody_getCompanionId_0 = a.asm.C9).apply(null, arguments);
            }),
            Uea = (a._emscripten_bind_btSoftBody_setCompanionId_1 = function () {
                return (Uea = a._emscripten_bind_btSoftBody_setCompanionId_1 = a.asm.D9).apply(null, arguments);
            }),
            Vea = (a._emscripten_bind_btSoftBody_getWorldArrayIndex_0 = function () {
                return (Vea = a._emscripten_bind_btSoftBody_getWorldArrayIndex_0 = a.asm.E9).apply(null, arguments);
            }),
            Wea = (a._emscripten_bind_btSoftBody_getHitFraction_0 = function () {
                return (Wea = a._emscripten_bind_btSoftBody_getHitFraction_0 = a.asm.F9).apply(null, arguments);
            }),
            Xea = (a._emscripten_bind_btSoftBody_setHitFraction_1 = function () {
                return (Xea = a._emscripten_bind_btSoftBody_setHitFraction_1 = a.asm.G9).apply(null, arguments);
            }),
            Yea = (a._emscripten_bind_btSoftBody_getCollisionFlags_0 = function () {
                return (Yea = a._emscripten_bind_btSoftBody_getCollisionFlags_0 = a.asm.H9).apply(null, arguments);
            }),
            Zea = (a._emscripten_bind_btSoftBody_setCollisionFlags_1 = function () {
                return (Zea = a._emscripten_bind_btSoftBody_setCollisionFlags_1 = a.asm.I9).apply(null, arguments);
            }),
            $ea = (a._emscripten_bind_btSoftBody_getCcdSweptSphereRadius_0 = function () {
                return ($ea = a._emscripten_bind_btSoftBody_getCcdSweptSphereRadius_0 = a.asm.J9).apply(null, arguments);
            }),
            afa = (a._emscripten_bind_btSoftBody_setCcdSweptSphereRadius_1 = function () {
                return (afa = a._emscripten_bind_btSoftBody_setCcdSweptSphereRadius_1 = a.asm.K9).apply(null, arguments);
            }),
            bfa = (a._emscripten_bind_btSoftBody_getCcdMotionThreshold_0 = function () {
                return (bfa = a._emscripten_bind_btSoftBody_getCcdMotionThreshold_0 = a.asm.L9).apply(null, arguments);
            }),
            cfa = (a._emscripten_bind_btSoftBody_setCcdMotionThreshold_1 = function () {
                return (cfa = a._emscripten_bind_btSoftBody_setCcdMotionThreshold_1 = a.asm.M9).apply(null, arguments);
            }),
            dfa = (a._emscripten_bind_btSoftBody_getUserPointer_0 = function () {
                return (dfa = a._emscripten_bind_btSoftBody_getUserPointer_0 = a.asm.N9).apply(null, arguments);
            }),
            efa = (a._emscripten_bind_btSoftBody_getUserIndex_0 = function () {
                return (efa = a._emscripten_bind_btSoftBody_getUserIndex_0 = a.asm.O9).apply(null, arguments);
            }),
            ffa = (a._emscripten_bind_btSoftBody_getUserIndex2_0 = function () {
                return (ffa = a._emscripten_bind_btSoftBody_getUserIndex2_0 = a.asm.P9).apply(null, arguments);
            }),
            gfa = (a._emscripten_bind_btSoftBody_getUserIndex3_0 = function () {
                return (gfa = a._emscripten_bind_btSoftBody_getUserIndex3_0 = a.asm.Q9).apply(null, arguments);
            }),
            hfa = (a._emscripten_bind_btSoftBody_setUserPointer_1 = function () {
                return (hfa = a._emscripten_bind_btSoftBody_setUserPointer_1 = a.asm.R9).apply(null, arguments);
            }),
            ifa = (a._emscripten_bind_btSoftBody_setUserIndex_1 = function () {
                return (ifa = a._emscripten_bind_btSoftBody_setUserIndex_1 = a.asm.S9).apply(null, arguments);
            }),
            jfa = (a._emscripten_bind_btSoftBody_setUserIndex2_1 = function () {
                return (jfa = a._emscripten_bind_btSoftBody_setUserIndex2_1 = a.asm.T9).apply(null, arguments);
            }),
            kfa = (a._emscripten_bind_btSoftBody_setUserIndex3_1 = function () {
                return (kfa = a._emscripten_bind_btSoftBody_setUserIndex3_1 = a.asm.U9).apply(null, arguments);
            }),
            lfa = (a._emscripten_bind_btSoftBody_getUpdateRevisionInternal_0 = function () {
                return (lfa = a._emscripten_bind_btSoftBody_getUpdateRevisionInternal_0 = a.asm.V9).apply(null, arguments);
            }),
            mfa = (a._emscripten_bind_btSoftBody_checkCollideWith_1 = function () {
                return (mfa = a._emscripten_bind_btSoftBody_checkCollideWith_1 = a.asm.W9).apply(null, arguments);
            }),
            nfa = (a._emscripten_bind_btSoftBody_get_m_cfg_0 = function () {
                return (nfa = a._emscripten_bind_btSoftBody_get_m_cfg_0 = a.asm.X9).apply(null, arguments);
            }),
            ofa = (a._emscripten_bind_btSoftBody_set_m_cfg_1 = function () {
                return (ofa = a._emscripten_bind_btSoftBody_set_m_cfg_1 = a.asm.Y9).apply(null, arguments);
            }),
            pfa = (a._emscripten_bind_btSoftBody_get_m_nodes_0 = function () {
                return (pfa = a._emscripten_bind_btSoftBody_get_m_nodes_0 = a.asm.Z9).apply(null, arguments);
            }),
            qfa = (a._emscripten_bind_btSoftBody_set_m_nodes_1 = function () {
                return (qfa = a._emscripten_bind_btSoftBody_set_m_nodes_1 = a.asm._9).apply(null, arguments);
            }),
            rfa = (a._emscripten_bind_btSoftBody_get_m_faces_0 = function () {
                return (rfa = a._emscripten_bind_btSoftBody_get_m_faces_0 = a.asm.$9).apply(null, arguments);
            }),
            sfa = (a._emscripten_bind_btSoftBody_set_m_faces_1 = function () {
                return (sfa = a._emscripten_bind_btSoftBody_set_m_faces_1 = a.asm.aaa).apply(null, arguments);
            }),
            tfa = (a._emscripten_bind_btSoftBody_get_m_materials_0 = function () {
                return (tfa = a._emscripten_bind_btSoftBody_get_m_materials_0 = a.asm.baa).apply(null, arguments);
            }),
            ufa = (a._emscripten_bind_btSoftBody_set_m_materials_1 = function () {
                return (ufa = a._emscripten_bind_btSoftBody_set_m_materials_1 = a.asm.caa).apply(null, arguments);
            }),
            vfa = (a._emscripten_bind_btSoftBody_get_m_anchors_0 = function () {
                return (vfa = a._emscripten_bind_btSoftBody_get_m_anchors_0 = a.asm.daa).apply(null, arguments);
            }),
            wfa = (a._emscripten_bind_btSoftBody_set_m_anchors_1 = function () {
                return (wfa = a._emscripten_bind_btSoftBody_set_m_anchors_1 = a.asm.eaa).apply(null, arguments);
            }),
            xfa = (a._emscripten_bind_btSoftBody___destroy___0 = function () {
                return (xfa = a._emscripten_bind_btSoftBody___destroy___0 = a.asm.faa).apply(null, arguments);
            }),
            yfa = (a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_0 = function () {
                return (yfa = a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_0 = a.asm.gaa).apply(null, arguments);
            }),
            zfa = (a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_1 = function () {
                return (zfa = a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_1 = a.asm.haa).apply(null, arguments);
            }),
            Afa = (a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration___destroy___0 = function () {
                return (Afa = a._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration___destroy___0 = a.asm.iaa).apply(null, arguments);
            }),
            Bfa = (a._emscripten_bind_btDefaultSoftBodySolver_btDefaultSoftBodySolver_0 = function () {
                return (Bfa = a._emscripten_bind_btDefaultSoftBodySolver_btDefaultSoftBodySolver_0 = a.asm.jaa).apply(null, arguments);
            }),
            Cfa = (a._emscripten_bind_btDefaultSoftBodySolver___destroy___0 = function () {
                return (Cfa = a._emscripten_bind_btDefaultSoftBodySolver___destroy___0 = a.asm.kaa).apply(null, arguments);
            }),
            Dfa = (a._emscripten_bind_btSoftBodyArray_size_0 = function () {
                return (Dfa = a._emscripten_bind_btSoftBodyArray_size_0 = a.asm.laa).apply(null, arguments);
            }),
            Efa = (a._emscripten_bind_btSoftBodyArray_at_1 = function () {
                return (Efa = a._emscripten_bind_btSoftBodyArray_at_1 = a.asm.maa).apply(null, arguments);
            }),
            Ffa = (a._emscripten_bind_btSoftBodyArray___destroy___0 = function () {
                return (Ffa = a._emscripten_bind_btSoftBodyArray___destroy___0 = a.asm.naa).apply(null, arguments);
            }),
            Gfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_btSoftRigidDynamicsWorld_5 = function () {
                return (Gfa = a._emscripten_bind_btSoftRigidDynamicsWorld_btSoftRigidDynamicsWorld_5 = a.asm.oaa).apply(null, arguments);
            }),
            Hfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_addSoftBody_3 = function () {
                return (Hfa = a._emscripten_bind_btSoftRigidDynamicsWorld_addSoftBody_3 = a.asm.paa).apply(null, arguments);
            }),
            Ifa = (a._emscripten_bind_btSoftRigidDynamicsWorld_removeSoftBody_1 = function () {
                return (Ifa = a._emscripten_bind_btSoftRigidDynamicsWorld_removeSoftBody_1 = a.asm.qaa).apply(null, arguments);
            }),
            Jfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_removeCollisionObject_1 = function () {
                return (Jfa = a._emscripten_bind_btSoftRigidDynamicsWorld_removeCollisionObject_1 = a.asm.raa).apply(null, arguments);
            }),
            Kfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getWorldInfo_0 = function () {
                return (Kfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getWorldInfo_0 = a.asm.saa).apply(null, arguments);
            }),
            Lfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getSoftBodyArray_0 = function () {
                return (Lfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getSoftBodyArray_0 = a.asm.taa).apply(null, arguments);
            }),
            Mfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getDispatcher_0 = function () {
                return (Mfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getDispatcher_0 = a.asm.uaa).apply(null, arguments);
            }),
            Nfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_rayTest_3 = function () {
                return (Nfa = a._emscripten_bind_btSoftRigidDynamicsWorld_rayTest_3 = a.asm.vaa).apply(null, arguments);
            }),
            Ofa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getPairCache_0 = function () {
                return (Ofa = a._emscripten_bind_btSoftRigidDynamicsWorld_getPairCache_0 = a.asm.waa).apply(null, arguments);
            }),
            Pfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getDispatchInfo_0 = function () {
                return (Pfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getDispatchInfo_0 = a.asm.xaa).apply(null, arguments);
            }),
            Qfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_1 = function () {
                return (Qfa = a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_1 = a.asm.yaa).apply(null, arguments);
            }),
            Rfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_2 = function () {
                return (Rfa = a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_2 = a.asm.zaa).apply(null, arguments);
            }),
            Sfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_3 = function () {
                return (Sfa = a._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_3 = a.asm.Aaa).apply(null, arguments);
            }),
            Tfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getBroadphase_0 = function () {
                return (Tfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getBroadphase_0 = a.asm.Baa).apply(null, arguments);
            }),
            Ufa = (a._emscripten_bind_btSoftRigidDynamicsWorld_convexSweepTest_5 = function () {
                return (Ufa = a._emscripten_bind_btSoftRigidDynamicsWorld_convexSweepTest_5 = a.asm.Caa).apply(null, arguments);
            }),
            Vfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_contactPairTest_3 = function () {
                return (Vfa = a._emscripten_bind_btSoftRigidDynamicsWorld_contactPairTest_3 = a.asm.Daa).apply(null, arguments);
            }),
            Wfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_contactTest_2 = function () {
                return (Wfa = a._emscripten_bind_btSoftRigidDynamicsWorld_contactTest_2 = a.asm.Eaa).apply(null, arguments);
            }),
            Xfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_updateSingleAabb_1 = function () {
                return (Xfa = a._emscripten_bind_btSoftRigidDynamicsWorld_updateSingleAabb_1 = a.asm.Faa).apply(null, arguments);
            }),
            Yfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_setGravity_1 = function () {
                return (Yfa = a._emscripten_bind_btSoftRigidDynamicsWorld_setGravity_1 = a.asm.Gaa).apply(null, arguments);
            }),
            Zfa = (a._emscripten_bind_btSoftRigidDynamicsWorld_getGravity_0 = function () {
                return (Zfa = a._emscripten_bind_btSoftRigidDynamicsWorld_getGravity_0 = a.asm.Haa).apply(null, arguments);
            }),
            $fa = (a._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_1 = function () {
                return ($fa = a._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_1 = a.asm.Iaa).apply(null, arguments);
            }),
            aga = (a._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_3 = function () {
                return (aga = a._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_3 = a.asm.Jaa).apply(null, arguments);
            }),
            bga = (a._emscripten_bind_btSoftRigidDynamicsWorld_removeRigidBody_1 = function () {
                return (bga = a._emscripten_bind_btSoftRigidDynamicsWorld_removeRigidBody_1 = a.asm.Kaa).apply(null, arguments);
            }),
            cga = (a._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_1 = function () {
                return (cga = a._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_1 = a.asm.Laa).apply(null, arguments);
            }),
            dga = (a._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_2 = function () {
                return (dga = a._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_2 = a.asm.Maa).apply(null, arguments);
            }),
            ega = (a._emscripten_bind_btSoftRigidDynamicsWorld_removeConstraint_1 = function () {
                return (ega = a._emscripten_bind_btSoftRigidDynamicsWorld_removeConstraint_1 = a.asm.Naa).apply(null, arguments);
            }),
            fga = (a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_1 = function () {
                return (fga = a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_1 = a.asm.Oaa).apply(null, arguments);
            }),
            gga = (a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_2 = function () {
                return (gga = a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_2 = a.asm.Paa).apply(null, arguments);
            }),
            hga = (a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_3 = function () {
                return (hga = a._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_3 = a.asm.Qaa).apply(null, arguments);
            }),
            iga = (a._emscripten_bind_btSoftRigidDynamicsWorld_addAction_1 = function () {
                return (iga = a._emscripten_bind_btSoftRigidDynamicsWorld_addAction_1 = a.asm.Raa).apply(null, arguments);
            }),
            jga = (a._emscripten_bind_btSoftRigidDynamicsWorld_removeAction_1 = function () {
                return (jga = a._emscripten_bind_btSoftRigidDynamicsWorld_removeAction_1 = a.asm.Saa).apply(null, arguments);
            }),
            kga = (a._emscripten_bind_btSoftRigidDynamicsWorld_getSolverInfo_0 = function () {
                return (kga = a._emscripten_bind_btSoftRigidDynamicsWorld_getSolverInfo_0 = a.asm.Taa).apply(null, arguments);
            }),
            lga = (a._emscripten_bind_btSoftRigidDynamicsWorld___destroy___0 = function () {
                return (lga = a._emscripten_bind_btSoftRigidDynamicsWorld___destroy___0 = a.asm.Uaa).apply(null, arguments);
            }),
            mga = (a._emscripten_bind_btSoftBodyHelpers_btSoftBodyHelpers_0 = function () {
                return (mga = a._emscripten_bind_btSoftBodyHelpers_btSoftBodyHelpers_0 = a.asm.Vaa).apply(null, arguments);
            }),
            nga = (a._emscripten_bind_btSoftBodyHelpers_CreateRope_5 = function () {
                return (nga = a._emscripten_bind_btSoftBodyHelpers_CreateRope_5 = a.asm.Waa).apply(null, arguments);
            }),
            oga = (a._emscripten_bind_btSoftBodyHelpers_CreatePatch_9 = function () {
                return (oga = a._emscripten_bind_btSoftBodyHelpers_CreatePatch_9 = a.asm.Xaa).apply(null, arguments);
            }),
            pga = (a._emscripten_bind_btSoftBodyHelpers_CreatePatch_10 = function () {
                return (pga = a._emscripten_bind_btSoftBodyHelpers_CreatePatch_10 = a.asm.Yaa).apply(null, arguments);
            }),
            qga = (a._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_9 = function () {
                return (qga = a._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_9 = a.asm.Zaa).apply(null, arguments);
            }),
            rga = (a._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_10 = function () {
                return (rga = a._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_10 = a.asm._aa).apply(null, arguments);
            }),
            sga = (a._emscripten_bind_btSoftBodyHelpers_CalculateUV_5 = function () {
                return (sga = a._emscripten_bind_btSoftBodyHelpers_CalculateUV_5 = a.asm.$aa).apply(null, arguments);
            }),
            tga = (a._emscripten_bind_btSoftBodyHelpers_CreateEllipsoid_4 = function () {
                return (tga = a._emscripten_bind_btSoftBodyHelpers_CreateEllipsoid_4 = a.asm.aba).apply(null, arguments);
            }),
            uga = (a._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_4 = function () {
                return (uga = a._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_4 = a.asm.bba).apply(null, arguments);
            }),
            vga = (a._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_5 = function () {
                return (vga = a._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_5 = a.asm.cba).apply(null, arguments);
            }),
            wga = (a._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_3 = function () {
                return (wga = a._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_3 = a.asm.dba).apply(null, arguments);
            }),
            xga = (a._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_4 = function () {
                return (xga = a._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_4 = a.asm.eba).apply(null, arguments);
            }),
            yga = (a._emscripten_bind_btSoftBodyHelpers___destroy___0 = function () {
                return (yga = a._emscripten_bind_btSoftBodyHelpers___destroy___0 = a.asm.fba).apply(null, arguments);
            }),
            zga = (a._emscripten_enum_PHY_ScalarType_PHY_FLOAT = function () {
                return (zga = a._emscripten_enum_PHY_ScalarType_PHY_FLOAT = a.asm.gba).apply(null, arguments);
            }),
            Aga = (a._emscripten_enum_PHY_ScalarType_PHY_DOUBLE = function () {
                return (Aga = a._emscripten_enum_PHY_ScalarType_PHY_DOUBLE = a.asm.hba).apply(null, arguments);
            }),
            Bga = (a._emscripten_enum_PHY_ScalarType_PHY_INTEGER = function () {
                return (Bga = a._emscripten_enum_PHY_ScalarType_PHY_INTEGER = a.asm.iba).apply(null, arguments);
            }),
            Cga = (a._emscripten_enum_PHY_ScalarType_PHY_SHORT = function () {
                return (Cga = a._emscripten_enum_PHY_ScalarType_PHY_SHORT = a.asm.jba).apply(null, arguments);
            }),
            Dga = (a._emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 = function () {
                return (Dga = a._emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 = a.asm.kba).apply(null, arguments);
            }),
            Ega = (a._emscripten_enum_PHY_ScalarType_PHY_UCHAR = function () {
                return (Ega = a._emscripten_enum_PHY_ScalarType_PHY_UCHAR = a.asm.lba).apply(null, arguments);
            }),
            Fga = (a._emscripten_enum_btTypedConstraintType_POINT2POINT_CONSTRAINT_TYPE = function () {
                return (Fga = a._emscripten_enum_btTypedConstraintType_POINT2POINT_CONSTRAINT_TYPE = a.asm.mba).apply(null, arguments);
            }),
            Gga = (a._emscripten_enum_btTypedConstraintType_HINGE_CONSTRAINT_TYPE = function () {
                return (Gga = a._emscripten_enum_btTypedConstraintType_HINGE_CONSTRAINT_TYPE = a.asm.nba).apply(null, arguments);
            }),
            Hga = (a._emscripten_enum_btTypedConstraintType_CONETWIST_CONSTRAINT_TYPE = function () {
                return (Hga = a._emscripten_enum_btTypedConstraintType_CONETWIST_CONSTRAINT_TYPE = a.asm.oba).apply(null, arguments);
            }),
            Iga = (a._emscripten_enum_btTypedConstraintType_D6_CONSTRAINT_TYPE = function () {
                return (Iga = a._emscripten_enum_btTypedConstraintType_D6_CONSTRAINT_TYPE = a.asm.pba).apply(null, arguments);
            }),
            Jga = (a._emscripten_enum_btTypedConstraintType_SLIDER_CONSTRAINT_TYPE = function () {
                return (Jga = a._emscripten_enum_btTypedConstraintType_SLIDER_CONSTRAINT_TYPE = a.asm.qba).apply(null, arguments);
            }),
            Kga = (a._emscripten_enum_btTypedConstraintType_CONTACT_CONSTRAINT_TYPE = function () {
                return (Kga = a._emscripten_enum_btTypedConstraintType_CONTACT_CONSTRAINT_TYPE = a.asm.rba).apply(null, arguments);
            }),
            Lga = (a._emscripten_enum_btTypedConstraintType_D6_SPRING_CONSTRAINT_TYPE = function () {
                return (Lga = a._emscripten_enum_btTypedConstraintType_D6_SPRING_CONSTRAINT_TYPE = a.asm.sba).apply(null, arguments);
            }),
            Mga = (a._emscripten_enum_btTypedConstraintType_GEAR_CONSTRAINT_TYPE = function () {
                return (Mga = a._emscripten_enum_btTypedConstraintType_GEAR_CONSTRAINT_TYPE = a.asm.tba).apply(null, arguments);
            }),
            Nga = (a._emscripten_enum_btTypedConstraintType_FIXED_CONSTRAINT_TYPE = function () {
                return (Nga = a._emscripten_enum_btTypedConstraintType_FIXED_CONSTRAINT_TYPE = a.asm.uba).apply(null, arguments);
            }),
            Oga = (a._emscripten_enum_btTypedConstraintType_D6_SPRING_2_CONSTRAINT_TYPE = function () {
                return (Oga = a._emscripten_enum_btTypedConstraintType_D6_SPRING_2_CONSTRAINT_TYPE = a.asm.vba).apply(null, arguments);
            }),
            Pga = (a._emscripten_enum_btTypedConstraintType_MAX_CONSTRAINT_TYPE = function () {
                return (Pga = a._emscripten_enum_btTypedConstraintType_MAX_CONSTRAINT_TYPE = a.asm.wba).apply(null, arguments);
            }),
            Qga = (a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP = function () {
                return (Qga = a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP = a.asm.xba).apply(null, arguments);
            }),
            Rga = (a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP = function () {
                return (Rga = a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP = a.asm.yba).apply(null, arguments);
            }),
            Sga = (a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM = function () {
                return (Sga = a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM = a.asm.zba).apply(null, arguments);
            }),
            Tga = (a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM = function () {
                return (Tga = a._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM = a.asm.Aba).apply(null, arguments);
            }),
            Uga = (a._emscripten_enum_btPoint2PointFlags_BT_P2P_FLAGS_ERP = function () {
                return (Uga = a._emscripten_enum_btPoint2PointFlags_BT_P2P_FLAGS_ERP = a.asm.Bba).apply(null, arguments);
            }),
            Vga = (a._emscripten_enum_btPoint2PointFlags_BT_P2P_FLAGS_CFM = function () {
                return (Vga = a._emscripten_enum_btPoint2PointFlags_BT_P2P_FLAGS_CFM = a.asm.Cba).apply(null, arguments);
            }),
            Wga = (a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_CFM_STOP = function () {
                return (Wga = a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_CFM_STOP = a.asm.Dba).apply(null, arguments);
            }),
            Xga = (a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_ERP_STOP = function () {
                return (Xga = a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_ERP_STOP = a.asm.Eba).apply(null, arguments);
            }),
            Yga = (a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_CFM_NORM = function () {
                return (Yga = a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_CFM_NORM = a.asm.Fba).apply(null, arguments);
            }),
            Zga = (a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_ERP_NORM = function () {
                return (Zga = a._emscripten_enum_btHingeFlags_BT_HINGE_FLAGS_ERP_NORM = a.asm.Gba).apply(null, arguments);
            }),
            $ga = (a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_LIN_CFM = function () {
                return ($ga = a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_LIN_CFM = a.asm.Hba).apply(null, arguments);
            }),
            aha = (a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_LIN_ERP = function () {
                return (aha = a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_LIN_ERP = a.asm.Iba).apply(null, arguments);
            }),
            bha = (a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_ANG_CFM = function () {
                return (bha = a._emscripten_enum_btConeTwistFlags_BT_CONETWIST_FLAGS_ANG_CFM = a.asm.Jba).apply(null, arguments);
            }),
            cha = (a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_CFM_NORM = function () {
                return (cha = a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_CFM_NORM = a.asm.Kba).apply(null, arguments);
            }),
            dha = (a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_CFM_STOP = function () {
                return (dha = a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_CFM_STOP = a.asm.Lba).apply(null, arguments);
            }),
            eha = (a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_ERP_STOP = function () {
                return (eha = a._emscripten_enum_bt6DofFlags_BT_6DOF_FLAGS_ERP_STOP = a.asm.Mba).apply(null, arguments);
            }),
            fha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_DIRLIN = function () {
                return (fha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_DIRLIN = a.asm.Nba).apply(null, arguments);
            }),
            gha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_DIRLIN = function () {
                return (gha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_DIRLIN = a.asm.Oba).apply(null, arguments);
            }),
            hha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_DIRANG = function () {
                return (hha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_DIRANG = a.asm.Pba).apply(null, arguments);
            }),
            iha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_DIRANG = function () {
                return (iha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_DIRANG = a.asm.Qba).apply(null, arguments);
            }),
            jha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_ORTLIN = function () {
                return (jha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_ORTLIN = a.asm.Rba).apply(null, arguments);
            }),
            kha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_ORTLIN = function () {
                return (kha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_ORTLIN = a.asm.Sba).apply(null, arguments);
            }),
            lha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_ORTANG = function () {
                return (lha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_ORTANG = a.asm.Tba).apply(null, arguments);
            }),
            mha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_ORTANG = function () {
                return (mha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_ORTANG = a.asm.Uba).apply(null, arguments);
            }),
            nha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_LIMLIN = function () {
                return (nha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_LIMLIN = a.asm.Vba).apply(null, arguments);
            }),
            oha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_LIMLIN = function () {
                return (oha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_LIMLIN = a.asm.Wba).apply(null, arguments);
            }),
            pha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_LIMANG = function () {
                return (pha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_CFM_LIMANG = a.asm.Xba).apply(null, arguments);
            }),
            qha = (a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_LIMANG = function () {
                return (qha = a._emscripten_enum_btSliderFlags_BT_SLIDER_FLAGS_ERP_LIMANG = a.asm.Yba).apply(null, arguments);
            }),
            rha = (a._emscripten_enum_RotateOrder_RO_XYZ = function () {
                return (rha = a._emscripten_enum_RotateOrder_RO_XYZ = a.asm.Zba).apply(null, arguments);
            }),
            sha = (a._emscripten_enum_RotateOrder_RO_XZY = function () {
                return (sha = a._emscripten_enum_RotateOrder_RO_XZY = a.asm._ba).apply(null, arguments);
            }),
            tha = (a._emscripten_enum_RotateOrder_RO_YXZ = function () {
                return (tha = a._emscripten_enum_RotateOrder_RO_YXZ = a.asm.$ba).apply(null, arguments);
            }),
            uha = (a._emscripten_enum_RotateOrder_RO_YZX = function () {
                return (uha = a._emscripten_enum_RotateOrder_RO_YZX = a.asm.aca).apply(null, arguments);
            }),
            vha = (a._emscripten_enum_RotateOrder_RO_ZXY = function () {
                return (vha = a._emscripten_enum_RotateOrder_RO_ZXY = a.asm.bca).apply(null, arguments);
            }),
            wha = (a._emscripten_enum_RotateOrder_RO_ZYX = function () {
                return (wha = a._emscripten_enum_RotateOrder_RO_ZYX = a.asm.cca).apply(null, arguments);
            }),
            xha = (a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_CFM_STOP2 = function () {
                return (xha = a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_CFM_STOP2 = a.asm.dca).apply(null, arguments);
            }),
            yha = (a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_ERP_STOP2 = function () {
                return (yha = a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_ERP_STOP2 = a.asm.eca).apply(null, arguments);
            }),
            zha = (a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_CFM_MOTO2 = function () {
                return (zha = a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_CFM_MOTO2 = a.asm.fca).apply(null, arguments);
            }),
            Aha = (a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_ERP_MOTO2 = function () {
                return (Aha = a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_ERP_MOTO2 = a.asm.gca).apply(null, arguments);
            }),
            Bha = (a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_USE_INFINITE_ERROR = function () {
                return (Bha = a._emscripten_enum_bt6DofFlags2_BT_6DOF_FLAGS_USE_INFINITE_ERROR = a.asm.hca).apply(null, arguments);
            });
        a._malloc = function () {
            return (a._malloc = a.asm.jca).apply(null, arguments);
        };
        a.___start_em_js = 26524;
        a.___stop_em_js = 26622;
        a.addFunction = function (b, c) {
            if (!Sa) {
                Sa = new WeakMap();
                var d = xa.length;
                if (Sa)
                    for (var e = 0; e < 0 + d; e++) {
                        var f = eaa(e);
                        f && Sa.set(f, e);
                    }
            }
            if ((d = Sa.get(b) || 0)) return d;
            if (Ta.length) d = Ta.pop();
            else {
                try {
                    xa.grow(1);
                } catch (fa) {
                    if (!(fa instanceof RangeError)) throw fa;
                    throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                }
                d = xa.length - 1;
            }
            try {
                (e = d), xa.set(e, b), (Ra[e] = xa.get(e));
            } catch (fa) {
                if (!(fa instanceof TypeError)) throw fa;
                if ("function" == typeof WebAssembly.Function) {
                    e = WebAssembly.Function;
                    f = { i: "i32", j: "i32", f: "f32", d: "f64", p: "i32" };
                    for (var h = { parameters: [], results: "v" == c[0] ? [] : [f[c[0]]] }, p = 1; p < c.length; ++p) h.parameters.push(f[c[p]]), "j" === c[p] && h.parameters.push("i32");
                    c = new e(h, b);
                } else {
                    e = [1];
                    f = c.slice(0, 1);
                    c = c.slice(1);
                    h = { i: 127, p: 127, j: 126, f: 125, d: 124 };
                    e.push(96);
                    Qa(c.length, e);
                    for (p = 0; p < c.length; ++p) e.push(h[c[p]]);
                    "v" == f ? e.push(0) : e.push(1, h[f]);
                    c = [0, 97, 115, 109, 1, 0, 0, 0, 1];
                    Qa(e.length, c);
                    c.push.apply(c, e);
                    c.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
                    c = new WebAssembly.Module(new Uint8Array(c));
                    c = new WebAssembly.Instance(c, { e: { f: b } }).exports.f;
                }
                e = d;
                xa.set(e, c);
                Ra[e] = xa.get(e);
            }
            Sa.set(b, d);
            return d;
        };
        a.UTF8ToString = Pa;
        var W8;
        Ea = function Cha() {
            W8 || Dha();
            W8 || (Ea = Cha);
        };
        function Dha() {
            function b() {
                if (!W8 && ((W8 = !0), (a.calledRun = !0), !ra)) {
                    Ba = !0;
                    La(za);
                    aa(a);
                    if (a.onRuntimeInitialized) a.onRuntimeInitialized();
                    if (a.postRun)
                        for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length; ) {
                            var c = a.postRun.shift();
                            Aa.unshift(c);
                        }
                    La(Aa);
                }
            }
            if (!(0 < Ca)) {
                if (a.preRun) for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length; ) aaa();
                La(ya);
                0 < Ca ||
                    (a.setStatus
                        ? (a.setStatus("Running..."),
                          setTimeout(function () {
                              setTimeout(function () {
                                  a.setStatus("");
                              }, 1);
                              b();
                          }, 1))
                        : b());
            }
        }
        if (a.preInit) for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); 0 < a.preInit.length; ) a.preInit.pop()();
        Dha();
        function g() {}
        g.prototype = Object.create(g.prototype);
        g.prototype.constructor = g;
        g.prototype.lca = g;
        g.mca = {};
        a.WrapperObject = g;
        function k(b) {
            return (b || g).mca;
        }
        a.getCache = k;
        function l(b, c) {
            var d = k(c),
                e = d[b];
            if (e) return e;
            e = Object.create((c || g).prototype);
            e.kca = b;
            return (d[b] = e);
        }
        a.wrapPointer = l;
        a.castObject = function (b, c) {
            return l(b.kca, c);
        };
        a.NULL = l(0);
        a.destroy = function (b) {
            if (!b.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
            b.__destroy__();
            delete k(b.lca)[b.kca];
        };
        a.compare = function (b, c) {
            return b.kca === c.kca;
        };
        a.getPointer = function (b) {
            return b.kca;
        };
        a.getClass = function (b) {
            return b.lca;
        };
        var X8 = 0,
            Y8 = 0,
            Z8 = 0,
            $8 = [],
            a9 = 0;
        function b9() {
            if (a9) {
                for (var b = 0; b < $8.length; b++) a._free($8[b]);
                $8.length = 0;
                a._free(X8);
                X8 = 0;
                Y8 += a9;
                a9 = 0;
            }
            X8 || ((Y8 += 128), (X8 = a._malloc(Y8)) || pa());
            Z8 = 0;
        }
        function c9(b, c) {
            X8 || pa();
            b = b.length * c.BYTES_PER_ELEMENT;
            b = (b + 7) & -8;
            Z8 + b >= Y8 ? (0 < b || pa(), (a9 += b), (c = a._malloc(b)), $8.push(c)) : ((c = X8 + Z8), (Z8 += b));
            return c;
        }
        function d9(b, c, d) {
            d >>>= 0;
            switch (c.BYTES_PER_ELEMENT) {
                case 2:
                    d >>>= 1;
                    break;
                case 4:
                    d >>>= 2;
                    break;
                case 8:
                    d >>>= 3;
            }
            for (var e = 0; e < b.length; e++) c[d + e] = b[e];
        }
        function e9(b) {
            if ("string" === typeof b) {
                for (var c = 0, d = 0; d < b.length; ++d) {
                    var e = b.charCodeAt(d);
                    127 >= e ? c++ : 2047 >= e ? (c += 2) : 55296 <= e && 57343 >= e ? ((c += 4), ++d) : (c += 3);
                }
                c = Array(c + 1);
                e = c.length;
                d = 0;
                if (0 < e) {
                    e = d + e - 1;
                    for (var f = 0; f < b.length; ++f) {
                        var h = b.charCodeAt(f);
                        if (55296 <= h && 57343 >= h) {
                            var p = b.charCodeAt(++f);
                            h = (65536 + ((h & 1023) << 10)) | (p & 1023);
                        }
                        if (127 >= h) {
                            if (d >= e) break;
                            c[d++] = h;
                        } else {
                            if (2047 >= h) {
                                if (d + 1 >= e) break;
                                c[d++] = 192 | (h >> 6);
                            } else {
                                if (65535 >= h) {
                                    if (d + 2 >= e) break;
                                    c[d++] = 224 | (h >> 12);
                                } else {
                                    if (d + 3 >= e) break;
                                    c[d++] = 240 | (h >> 18);
                                    c[d++] = 128 | ((h >> 12) & 63);
                                }
                                c[d++] = 128 | ((h >> 6) & 63);
                            }
                            c[d++] = 128 | (h & 63);
                        }
                    }
                    c[d] = 0;
                }
                b = c9(c, sa);
                d9(c, sa, b);
                return b;
            }
            return b;
        }
        function Eha(b) {
            if ("object" === typeof b) {
                var c = c9(b, ua);
                d9(b, ua, c);
                return c;
            }
            return b;
        }
        function f9(b) {
            if ("object" === typeof b) {
                var c = c9(b, va);
                d9(b, va, c);
                return c;
            }
            return b;
        }
        function g9() {
            throw "cannot construct a btCollisionShape, no constructor in IDL";
        }
        g9.prototype = Object.create(g.prototype);
        g9.prototype.constructor = g9;
        g9.prototype.lca = g9;
        g9.mca = {};
        a.btCollisionShape = g9;
        g9.prototype.getAabb = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Ua(e, b, c, d);
        };
        g9.prototype.getAngularMotionDisc = function () {
            return Va(this.kca);
        };
        g9.prototype.getContactBreakingThreshold = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return Wa(c, b);
        };
        g9.prototype.calculateTemporalAabb = function (b, c, d, e, f, h) {
            var p = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            h && "object" === typeof h && (h = h.kca);
            Xa(p, b, c, d, e, f, h);
        };
        g9.prototype.isPolyhedral = function () {
            return !!Ya(this.kca);
        };
        g9.prototype.isConvex2d = function () {
            return !!Za(this.kca);
        };
        g9.prototype.isConvex = function () {
            return !!$a(this.kca);
        };
        g9.prototype.isNonMoving = function () {
            return !!ab(this.kca);
        };
        g9.prototype.isConcave = function () {
            return !!bb(this.kca);
        };
        g9.prototype.isCompound = function () {
            return !!cb(this.kca);
        };
        g9.prototype.isSoftBody = function () {
            return !!db(this.kca);
        };
        g9.prototype.isInfinite = function () {
            return !!eb(this.kca);
        };
        g9.prototype.setLocalScaling = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            fb(c, b);
        };
        g9.prototype.getLocalScaling = function () {
            return l(gb(this.kca), m);
        };
        g9.prototype.calculateLocalInertia = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            hb(d, b, c);
        };
        g9.prototype.getName = function () {
            return Pa(ib(this.kca));
        };
        g9.prototype.getShapeType = function () {
            return jb(this.kca);
        };
        g9.prototype.getAnisotropicRollingFrictionDirection = function () {
            return l(kb(this.kca), m);
        };
        g9.prototype.setMargin = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            lb(c, b);
        };
        g9.prototype.getMargin = function () {
            return mb(this.kca);
        };
        g9.prototype.setUserPointer = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            ob(c, b);
        };
        g9.prototype.getUserPointer = function () {
            return l(pb(this.kca), h9);
        };
        g9.prototype.setUserIndex = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            qb(c, b);
        };
        g9.prototype.getUserIndex = function () {
            return rb(this.kca);
        };
        g9.prototype.setUserIndex2 = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            sb(c, b);
        };
        g9.prototype.getUserIndex2 = function () {
            return tb(this.kca);
        };
        g9.prototype.__destroy__ = function () {
            ub(this.kca);
        };
        function i9() {
            throw "cannot construct a btConvexShape, no constructor in IDL";
        }
        i9.prototype = Object.create(g9.prototype);
        i9.prototype.constructor = i9;
        i9.prototype.lca = i9;
        i9.mca = {};
        a.btConvexShape = i9;
        i9.prototype.localGetSupportingVertex = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(vb(c, b), m);
        };
        i9.prototype.localGetSupportingVertexWithoutMargin = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(wb(c, b), m);
        };
        i9.prototype.localGetSupportVertexWithoutMarginNonVirtual = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(xb(c, b), m);
        };
        i9.prototype.localGetSupportVertexNonVirtual = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(yb(c, b), m);
        };
        i9.prototype.getMarginNonVirtual = function () {
            return zb(this.kca);
        };
        i9.prototype.getAabbNonVirtual = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Ab(e, b, c, d);
        };
        i9.prototype.project = function (b, c, d, e, f, h) {
            var p = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            h && "object" === typeof h && (h = h.kca);
            Bb(p, b, c, d, e, f, h);
        };
        i9.prototype.batchedUnitVectorGetSupportingVertexWithoutMargin = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Cb(e, b, c, d);
        };
        i9.prototype.getAabb = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Db(e, b, c, d);
        };
        i9.prototype.getAabbSlow = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Eb(e, b, c, d);
        };
        i9.prototype.setLocalScaling = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Fb(c, b);
        };
        i9.prototype.getLocalScaling = function () {
            return l(Gb(this.kca), m);
        };
        i9.prototype.setMargin = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Hb(c, b);
        };
        i9.prototype.getMargin = function () {
            return Ib(this.kca);
        };
        i9.prototype.getNumPreferredPenetrationDirections = function () {
            return Jb(this.kca);
        };
        i9.prototype.getPreferredPenetrationDirection = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            Kb(d, b, c);
        };
        i9.prototype.getAngularMotionDisc = function () {
            return Lb(this.kca);
        };
        i9.prototype.getContactBreakingThreshold = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return Mb(c, b);
        };
        i9.prototype.calculateTemporalAabb = function (b, c, d, e, f, h) {
            var p = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            h && "object" === typeof h && (h = h.kca);
            Nb(p, b, c, d, e, f, h);
        };
        i9.prototype.isPolyhedral = function () {
            return !!Ob(this.kca);
        };
        i9.prototype.isConvex2d = function () {
            return !!Pb(this.kca);
        };
        i9.prototype.isConvex = function () {
            return !!Qb(this.kca);
        };
        i9.prototype.isNonMoving = function () {
            return !!Rb(this.kca);
        };
        i9.prototype.isConcave = function () {
            return !!Sb(this.kca);
        };
        i9.prototype.isCompound = function () {
            return !!Tb(this.kca);
        };
        i9.prototype.isSoftBody = function () {
            return !!Ub(this.kca);
        };
        i9.prototype.isInfinite = function () {
            return !!Vb(this.kca);
        };
        i9.prototype.calculateLocalInertia = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            Wb(d, b, c);
        };
        i9.prototype.getName = function () {
            return Pa(Xb(this.kca));
        };
        i9.prototype.getShapeType = function () {
            return Yb(this.kca);
        };
        i9.prototype.getAnisotropicRollingFrictionDirection = function () {
            return l(Zb(this.kca), m);
        };
        i9.prototype.setUserPointer = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            $b(c, b);
        };
        i9.prototype.getUserPointer = function () {
            return l(ac(this.kca), h9);
        };
        i9.prototype.setUserIndex = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            bc(c, b);
        };
        i9.prototype.getUserIndex = function () {
            return cc(this.kca);
        };
        i9.prototype.setUserIndex2 = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            dc(c, b);
        };
        i9.prototype.getUserIndex2 = function () {
            return ec(this.kca);
        };
        i9.prototype.__destroy__ = function () {
            fc(this.kca);
        };
        function j9(b) {
            b && "object" === typeof b && (b = b.kca);
            this.kca = gc(b);
            k(j9)[this.kca] = this;
        }
        j9.prototype = Object.create(g.prototype);
        j9.prototype.constructor = j9;
        j9.prototype.lca = j9;
        j9.mca = {};
        a.btTypedObject = j9;
        j9.prototype.getObjectType = function () {
            return hc(this.kca);
        };
        j9.prototype.get_m_objectType = j9.prototype.nca = function () {
            return ic(this.kca);
        };
        j9.prototype.set_m_objectType = j9.prototype.oca = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            jc(c, b);
        };
        Object.defineProperty(j9.prototype, "m_objectType", { get: j9.prototype.nca, set: j9.prototype.oca });
        j9.prototype.__destroy__ = function () {
            kc(this.kca);
        };
        function k9() {
            throw "cannot construct a btConvexInternalShape, no constructor in IDL";
        }
        k9.prototype = Object.create(i9.prototype);
        k9.prototype.constructor = k9;
        k9.prototype.lca = k9;
        k9.mca = {};
        a.btConvexInternalShape = k9;
        k9.prototype.localGetSupportingVertex = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(lc(c, b), m);
        };
        k9.prototype.getImplicitShapeDimensions = function () {
            return l(mc(this.kca), m);
        };
        k9.prototype.setImplicitShapeDimensions = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            oc(c, b);
        };
        k9.prototype.setSafeMargin = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            void 0 === c ? pc(d, b) : qc(d, b, c);
        };
        k9.prototype.getAabb = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            rc(e, b, c, d);
        };
        k9.prototype.getAabbSlow = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            sc(e, b, c, d);
        };
        k9.prototype.setLocalScaling = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            tc(c, b);
        };
        k9.prototype.setMargin = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            uc(c, b);
        };
        k9.prototype.getMargin = function () {
            return vc(this.kca);
        };
        k9.prototype.getNumPreferredPenetrationDirections = function () {
            return wc(this.kca);
        };
        k9.prototype.getPreferredPenetrationDirection = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            xc(d, b, c);
        };
        k9.prototype.getAngularMotionDisc = function () {
            return yc(this.kca);
        };
        k9.prototype.getContactBreakingThreshold = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return zc(c, b);
        };
        k9.prototype.calculateTemporalAabb = function (b, c, d, e, f, h) {
            var p = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            h && "object" === typeof h && (h = h.kca);
            Ac(p, b, c, d, e, f, h);
        };
        k9.prototype.isPolyhedral = function () {
            return !!Bc(this.kca);
        };
        k9.prototype.isConvex2d = function () {
            return !!Cc(this.kca);
        };
        k9.prototype.isConvex = function () {
            return !!Dc(this.kca);
        };
        k9.prototype.isNonMoving = function () {
            return !!Ec(this.kca);
        };
        k9.prototype.isConcave = function () {
            return !!Fc(this.kca);
        };
        k9.prototype.isCompound = function () {
            return !!Gc(this.kca);
        };
        k9.prototype.isSoftBody = function () {
            return !!Hc(this.kca);
        };
        k9.prototype.isInfinite = function () {
            return !!Ic(this.kca);
        };
        k9.prototype.calculateLocalInertia = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            Jc(d, b, c);
        };
        k9.prototype.getName = function () {
            return Pa(Kc(this.kca));
        };
        k9.prototype.getShapeType = function () {
            return Lc(this.kca);
        };
        k9.prototype.getAnisotropicRollingFrictionDirection = function () {
            return l(Mc(this.kca), m);
        };
        k9.prototype.setUserPointer = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Nc(c, b);
        };
        k9.prototype.getUserPointer = function () {
            return l(Oc(this.kca), h9);
        };
        k9.prototype.setUserIndex = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Pc(c, b);
        };
        k9.prototype.getUserIndex = function () {
            return Qc(this.kca);
        };
        k9.prototype.setUserIndex2 = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Rc(c, b);
        };
        k9.prototype.getUserIndex2 = function () {
            return Sc(this.kca);
        };
        k9.prototype.localGetSupportingVertexWithoutMargin = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(Tc(c, b), m);
        };
        k9.prototype.localGetSupportVertexWithoutMarginNonVirtual = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(Uc(c, b), m);
        };
        k9.prototype.localGetSupportVertexNonVirtual = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return l(Vc(c, b), m);
        };
        k9.prototype.getMarginNonVirtual = function () {
            return Wc(this.kca);
        };
        k9.prototype.getAabbNonVirtual = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Xc(e, b, c, d);
        };
        k9.prototype.project = function (b, c, d, e, f, h) {
            var p = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            h && "object" === typeof h && (h = h.kca);
            Yc(p, b, c, d, e, f, h);
        };
        k9.prototype.batchedUnitVectorGetSupportingVertexWithoutMargin = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            Zc(e, b, c, d);
        };
        k9.prototype.getLocalScaling = function () {
            return l($c(this.kca), m);
        };
        k9.prototype.__destroy__ = function () {
            ad(this.kca);
        };
        function l9() {
            throw "cannot construct a btCollisionWorld, no constructor in IDL";
        }
        l9.prototype = Object.create(g.prototype);
        l9.prototype.constructor = l9;
        l9.prototype.lca = l9;
        l9.mca = {};
        a.btCollisionWorld = l9;
        l9.prototype.getDispatcher = function () {
            return l(bd(this.kca), m9);
        };
        l9.prototype.rayTest = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            cd(e, b, c, d);
        };
        l9.prototype.getPairCache = function () {
            return l(dd(this.kca), n9);
        };
        l9.prototype.getDispatchInfo = function () {
            return l(ed(this.kca), n);
        };
        l9.prototype.addCollisionObject = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            void 0 === c ? fd(e, b) : void 0 === d ? gd(e, b, c) : hd(e, b, c, d);
        };
        l9.prototype.removeCollisionObject = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            jd(c, b);
        };
        l9.prototype.getBroadphase = function () {
            return l(kd(this.kca), o9);
        };
        l9.prototype.convexSweepTest = function (b, c, d, e, f) {
            var h = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            e && "object" === typeof e && (e = e.kca);
            f && "object" === typeof f && (f = f.kca);
            ld(h, b, c, d, e, f);
        };
        l9.prototype.contactPairTest = function (b, c, d) {
            var e = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            d && "object" === typeof d && (d = d.kca);
            md(e, b, c, d);
        };
        l9.prototype.contactTest = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            nd(d, b, c);
        };
        l9.prototype.updateSingleAabb = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            od(c, b);
        };
        l9.prototype.__destroy__ = function () {
            pd(this.kca);
        };
        function q() {
            this.kca = qd();
            k(q)[this.kca] = this;
        }
        q.prototype = Object.create(g.prototype);
        q.prototype.constructor = q;
        q.prototype.lca = q;
        q.mca = {};
        a.btCollisionObject = q;
        q.prototype.mergesSimulationIslands = function () {
            return !!rd(this.kca);
        };
        q.prototype.getAnisotropicFriction = function () {
            return l(sd(this.kca), m);
        };
        q.prototype.setAnisotropicFriction = function (b, c) {
            var d = this.kca;
            b && "object" === typeof b && (b = b.kca);
            c && "object" === typeof c && (c = c.kca);
            void 0 === c ? td(d, b) : ud(d, b, c);
        };
        q.prototype.hasAnisotropicFriction = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            return void 0 === b ? !!vd(c) : !!wd(c, b);
        };
        q.prototype.setContactProcessingThreshold = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            xd(c, b);
        };
        q.prototype.getContactProcessingThreshold = function () {
            return yd(this.kca);
        };
        q.prototype.isStaticObject = function () {
            return !!zd(this.kca);
        };
        q.prototype.isKinematicObject = function () {
            return !!Ad(this.kca);
        };
        q.prototype.isStaticOrKinematicObject = function () {
            return !!Bd(this.kca);
        };
        q.prototype.hasContactResponse = function () {
            return !!Cd(this.kca);
        };
        q.prototype.setCollisionShape = function (b) {
            var c = this.kca;
            b && "object" === typeof b && (b = b.kca);
            Dd(c, b);
        };
        q.prototype.getCollisionShape = function () {
            return l(Ed(this.kca), g9);
        };
        };

);