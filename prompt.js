import * as tags from "./tags.js"
import { ir } from "./tags_nsfw.js"

Object.assign(globalThis, tags)

/**
 * 
 * Taking a min and max bound
 * Generating a number between 0 and 1
 * Scaling and offsetting to fit the bounds
 * Flooring and returning the result
 */
function rr(e) {
  var t = arguments.length > 1 &&
    void 0 !== arguments[1] ? arguments[1] : 0
  return Math.floor(Math.random() * (e - t)) + t
}

/**
 * `sr` in minified code
 * 
 * @param {boolean} e a boolean value that I have no idea what it does
 */
export default function randomPrompt(e) {
  var t = [],
    n = !1
  e &&
    (n = !0)
  var i = ar([[1,
    70],
  [
    2,
    20
  ],
  [
    3,
    7
  ],
  [
    0,
    5
  ]], t)
  if (n && (i = ar([[1,
    35],
  [
    2,
    20
  ],
  [
    3,
    7
  ]], t)), 0 === i) {
    t.push('no humans'),
      Math.random() < 0.3 &&
      t.push(ar(ji, t)),
      t.push(ar(yi, t))
    for (var r = ar([[2,
      15],
    [
      3,
      50
    ],
    [
      4,
      15
    ],
    [
      5,
      5
    ]], t), a = 0; a < r; a++) t.push(ar(Xi, t))
    var o = ar([[0,
      15],
    [
      1,
      10
    ],
    [
      2,
      20
    ],
    [
      3,
      20
    ],
    [
      4,
      20
    ],
    [
      5,
      15
    ]], t);
    (o -= i) < 0 &&
      (o = 0)
    for (var s = 0; s < o; s++) t.push(ar(Gi, t))
    return t.join(', ')
  }
  Math.random() < 0.3 &&
    t.push(ar(ji, t))
  for (var c = 0, d = 0, u = 0, h = 0; h < i; h++) {
    ar([['m',
      30],
    [
      'f',
      50
    ],
    [
      'o',
      10
    ]], t)
    switch (ar([['m',
      30],
    [
      'f',
      50
    ]], t)) {
      case 'm':
        d++
        break
      case 'f':
        c++
        break
      case 'o':
        u++
    }
  }
  switch (c) {
    case 1:
      t.unshift('1girl')
      break
    case 2:
      t.unshift('2girls')
      break
    case 3:
      t.unshift('3girls')
  }
  switch (d) {
    case 1:
      t.unshift('1boy')
      break
    case 2:
      t.unshift('2boys')
      break
    case 3:
      t.unshift('3boys')
  }
  switch (u) {
    case 1:
      t.unshift('1other')
      break
    case 2:
      t.unshift('2others')
      break
    case 3:
      t.unshift('3others')
  }
  var p,
    m = !1
  if (n) {
    var g = !1
    c >= 2 &&
      0 === d &&
      (Math.random() < 0.7 ? t.push(ir.yu) : (t.push(ir.fu), g = !0)),
      d >= 2 &&
      0 === c &&
      t.push(ir.ya)
    var f = !1
    if (c > 0 && d > 0 && Math.random() < 0.2 && (t.push(ir.fu), f = !0), i >= 2) {
      m = !0
      var v = [...ir.nPM];
      (c > 0 && d > 0 || g) &&
        (v = [...v, ...ir.nPP]),
        (d > 0 || g) &&
        (v = [...v, ir.nPA]),
        g &&
        t.push(ir.fwf),
        f &&
        t.push(ir.fwm),
        t.push(ar(v, t)),
        Math.random() < 0.6 &&
        t.push(ar(ir.sMod, t))
    }
    Math.random() < 0.4 &&
      t.push(ar(ir.sActMod, t)),
      Math.random() < 0.05 &&
      t.push(ar(ir.bd, t)),
      Math.random() < 0.05 &&
      t.push(ar(ir.sT, t)),
      t.unshift(ir.nw)
  }
  if (Math.random() < 0.8) {
    var x = ar(bi, t)
    if (t.push(x), 'scenery' === x && Math.random() < 0.5) for (var y = rr(3, 1), b = 0; b < y; b++) t.push(ar(Xi, t))
  }
  Math.random() < 0.3 &&
    t.push(ar(vi, t)),
    Math.random() < 0.7 &&
    !m &&
    (p = ar(wi, t)) &&
    t.push(p)
  for (var w = 0; w < c; w++) {
    var j,
      k = !1
    n &&
      1 === c &&
      1 === i &&
      Math.random() < 0.2 &&
      (k = !0, t.push(ir.fu)),
      // TODO: review
      (j = t).push(...or(k ? 'fu' : 'f', p, n, i))
  }
  for (var S = 0; S < d; S++) {
    var I;
    (I = t).push(...or('m', p, n, i))
  }
  for (var C = 0; C < u; C++) {
    var Z;
    (Z = t).push(...or('o', p, n, i))
  }
  if (Math.random() < 0.2) {
    var M = rr(4)
    2 === i &&
      (M = rr(3))
    for (var P = 0; P < M; P++) t.push(ar(Gi, t))
  }
  if (Math.random() < 0.25) for (var D = rr(3, 1), L = 0; L < D; L++) t.push(ar(Ki, t))
  Math.random() < 0.2 &&
    t.push(ar(_i, t)),
    Math.random() < 0.1 &&
    t.push(ar(xi, t))
  var T = new Set(t.join(', ').split(', '))
  t = [...T]
  for (var E = 0; E < t.length; E++) Math.random() < 0.02 &&
    (t[E] = '{'.concat(t[E], '}'))
  return t.join(', ')
}

// getWeightedChoice
function ar(e, t) {
  var n = e.filter(
    (
      function (e) {
        return !e[2] ||
          e[2].some((function (e) {
            return t.includes(e)
          }))
      }
    )
  ),
    i = 0,
    r = !0,
    a = !1,
    o = void 0
  try {
    for (var s, l = n[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
      i += s.value[1]
    }
  } catch (v) {
    a = !0,
      o = v
  } finally {
    try {
      r ||
        null == l.return ||
        l.return()
    } finally {
      if (a) throw o
    }
  }
  var c = rr(i, 1),
    d = 0,
    u = !0,
    h = !1,
    p = void 0
  try {
    for (var m, g = n[Symbol.iterator](); !(u = (m = g.next()).done); u = !0) {
      var f = m.value
      if (c <= (d += f[1])) return f[0]
    }
  } catch (v) {
    h = !0,
      p = v
  } finally {
    try {
      u ||
        null == g.return ||
        g.return()
    } finally {
      if (h) throw p
    }
  }
  throw new Error('getWeightedChoice: should not reach here')
}

function or(e, t, n, i) {
  var r = []
  Math.random() < 0.1 &&
    r.push(ar(ki, r))
  var lr = new Set(['mermaid', 'centaur', 'lamia'])
  var a = r.some((function (e) {
    return lr.has(e)
  }))
  Math.random() < 0.4 &&
    r.push(ar(Si, r)),
    Math.random() < 0.8 &&
    r.push(ar(Qi, r)),
    Math.random() < 0.1 &&
    r.push(ar(Ii, r)),
    Math.random() < 0.2 &&
    r.push(ar(Ci, r)),
    Math.random() < 0.8 &&
    r.push(ar(Zi, r)),
    Math.random() < 0.5 &&
    r.push(ar(Mi, r)),
    Math.random() < 0.7 &&
    r.push(ar($i, r)),
    Math.random() < 0.1 &&
    r.push(ar(er, r), ar($i, r)),
    Math.random() < 0.1 &&
    r.push(ar(Pi, r)),
    Math.random() < 0.2 &&
    r.push(ar(Di, r)),
    e.startsWith('f') &&
    Math.random() < 0.5 &&
    r.push(ar(Li, r))
  var o = 0
  o = ar(
    1 === i ? [
      [0,
        10],
      [
        1,
        30
      ],
      [
        2,
        15
      ],
      [
        3,
        5
      ]
    ] : 2 === i ? [
      [0,
        20],
      [
        1,
        40
      ],
      [
        2,
        10
      ]
    ] : [
      [0,
        30],
      [
        1,
        30
      ]
    ],
    r
  )
  for (var s = 0; s < o; s++) r.push(ar(Ti, r))
  Math.random() < 0.2 ? (r.push(ar(Ei, r)), Math.random() < 0.2 && r.push(ar(Ri, r))) : Math.random() < 0.3 &&
    r.push(ar(Ai, r))
  var c = ar(
    [['uniform',
      10],
    [
      'swimsuit',
      5
    ],
    [
      'bodysuit',
      5
    ],
    [
      'normal clothes',
      40
    ]],
    r
  )
  if (n && Math.random() < 0.9) {
    switch (ar([['n',
      15],
    [
      'u',
      10
    ],
    [
      'nk',
      5
    ]], r)) {
      case 'n':
        r.push(ar(ir.n, r))
        break
      case 'u':
        r.push(ar(ir.u, r)),
          Math.random() < 0.5 &&
          (c = void 0)
        break
      case 'nk':
        r.push(ar(ir.nk, r)),
          c = void 0
    }
    'portrait' !== t &&
      'upper body' !== t &&
      (
        'f' === e &&
          Math.random() < 0.8 ? r.push(ar(ir.p, r)) : 'm' === e &&
            Math.random() < 0.8 ? r.push(ar(ir.mp, r)) : 'fu' === e &&
            Math.random() < 1 &&
        (r.push(ar(ir.mp, r)), Math.random() < 0.5 && r.push(ar(ir.p, r)))
      )
  }
  switch (c) {
    case 'uniform':
      r.push(ar(Yi, r))
      break
    case 'swimsuit':
      r.push(ar(Bi, r))
      break
    case 'bodysuit':
      r.push(ar(Vi, r))
      break
    case 'normal clothes':
      if (
        e.startsWith('f') &&
        Math.random() < 0.5 &&
        (r.push(ar(Fi, r)), Math.random() < 0.2 && r.push(ar(Hi, r))),
        e.startsWith('f') &&
        Math.random() < 0.2
      ) {
        var d = Math.random() < 0.5,
          u = ar(tr, r),
          h = ar(zi, r)
        r.push(d ? ''.concat(u, ' ').concat(h) : h)
      } else {
        if (Math.random() < 0.85) {
          var p = Math.random() < 0.5,
            m = ar(tr, r),
            g = ar(Ni, r)
          r.push(p ? ''.concat(m, ' ').concat(g) : g)
        }
        if (!a) {
          if (Math.random() < 0.85 && 'portrait' !== t) {
            var f = Math.random() < 0.5,
              v = ar(tr, r),
              x = ar(Oi, r)
            r.push(f ? ''.concat(v, ' ').concat(x) : x)
          }
          if (Math.random() < 0.6 && ('full body' === t || void 0 === t)) {
            var y = Math.random() < 0.5,
              b = ar(tr, r),
              w = ar(Wi, r)
            r.push(y ? ''.concat(b, ' ').concat(w) : w)
          }
        }
      }
  }
  Math.random() < 0.6 &&
    r.push(ar(qi, r)),
    Math.random() < (n && 1 === i ? 1 : 0.4) &&
    r.push(
      ar(
        [...Ji].concat(
          n ? [...ir.nSM, ...ir.nSA, ...ir.nSP] : []
        ),
        r
      )
    ),
    (
      r.some((function (e) {
        return e.includes('sleeping')
      })) ||
      r.some((function (e) {
        return e.includes('zzz')
      })) ||
      r.some((function (e) {
        return e.includes('closed eyes')
      }))
    ) &&
    r.filter((function (e) {
      return !Qi.some((function (t) {
        return e === t[0]
      }))
    }))
  var j = 0
  j = ar(
    1 === i ? [
      [0,
        10],
      [
        1,
        30
      ],
      [
        2,
        15
      ],
      [
        3,
        5
      ]
    ] : 2 === i ? [
      [0,
        20],
      [
        1,
        40
      ],
      [
        2,
        10
      ]
    ] : [
      [0,
        30],
      [
        1,
        30
      ]
    ],
    r
  )
  for (var k = 0; k < j; k++) r.push(ar([...Ui, ...(n ? ir.nEx : [])], r))
  return a &&
    r.filter((function (e) {
      return !e.includes('legwear')
    })),
    r
}
