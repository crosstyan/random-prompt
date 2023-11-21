import * as tags from "./tags.js"

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

function decodeMystery() {
  let ci
  const nr = "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"
  const ir = JSON.parse(
    (new TextDecoder).decode(
      new Uint8Array(atob(nr).length).map(
        (
          function (e, t) {
            return (null !== (ci = atob(nr).codePointAt(t)) && void 0 !== ci ? ci : 0) ^ t
          }
        )
      )
    )
  )
  return ir
}

const ir = decodeMystery()
