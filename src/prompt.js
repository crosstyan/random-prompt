import {
  cameraPerspective, cameraFocus, backgroundTheme, backgroundColor, cameraAngle, artStyle, animalFeatures,
  sinkColor, eyeCharacteristics, eyesExpression, hairLength, backHairStyle, hairFeatures, foreheadStyle,
  breastsSize, bodyFeatures, headWears, hairOrnaments, hatOrnaments, dress, socks, legwear, uppers, bottoms,
  footwears, uniform, athletic, swimsuits, clothesAccessories, expression, years, backgroundObjects, accessories,
  action, effects, eyeColors, hairColors, hairColorExtra, color
} from './tags.js'
import { nsfw } from "./tags_nsfw.js"

/**
 * `rr` in minified code
 * 
 * Taking a min and max bound
 * Generating a number between 0 and 1
 * Scaling and offsetting to fit the bounds
 * Flooring and returning the result
 * @param {number} e This is the maximum bound for the random number generation
 * @param {number} t This is the minimum bound for the random number generation. It is optional. If it is not provided, it defaults to 0
 * @returns {number}
 */
function randomNum(e, t = 0) {
  return Math.floor(Math.random() * (e - t)) + t
}

/**
 * `sr` in minified code
 * 
 * @param {boolean} e if true, NSFW tags are included
 */
export default function randomPrompt(e) {
  var t = [],
    n = !1
  e &&
    (n = !0)
  var i = getWeightedChoice([[1,
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
  if (n && (i = getWeightedChoice([[1,
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
      t.push(getWeightedChoice(artStyle, t)),
      t.push(getWeightedChoice(backgroundTheme, t))
    for (var r = getWeightedChoice([[2,
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
    ]], t), a = 0; a < r; a++) t.push(getWeightedChoice(backgroundObjects, t))
    var o = getWeightedChoice([[0,
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
    for (var s = 0; s < o; s++) t.push(getWeightedChoice(accessories, t))
    return t.join(', ')
  }
  Math.random() < 0.3 &&
    t.push(getWeightedChoice(artStyle, t))
  for (var c = 0, d = 0, u = 0, h = 0; h < i; h++) {
    getWeightedChoice([['m',
      30],
    [
      'f',
      50
    ],
    [
      'o',
      10
    ]], t)
    switch (getWeightedChoice([['m',
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
      (Math.random() < 0.7 ? t.push(nsfw.yu) : (t.push(nsfw.fu), g = !0)),
      d >= 2 &&
      0 === c &&
      t.push(nsfw.ya)
    var f = !1
    if (c > 0 && d > 0 && Math.random() < 0.2 && (t.push(nsfw.fu), f = !0), i >= 2) {
      m = !0
      var v = [...nsfw.footForeplay];
      (c > 0 && d > 0 || g) &&
        (v = [...v, ...nsfw.sex]),
        (d > 0 || g) &&
        (v = [...v, nsfw.analSex]),
        g &&
        t.push(nsfw.fwf),
        f &&
        t.push(nsfw.fwm),
        t.push(getWeightedChoice(v, t)),
        Math.random() < 0.6 &&
        t.push(getWeightedChoice(nsfw.sexMod, t))
    }
    Math.random() < 0.4 &&
      t.push(getWeightedChoice(nsfw.sexActionMode, t)),
      Math.random() < 0.05 &&
      t.push(getWeightedChoice(nsfw.bdsm, t)),
      Math.random() < 0.05 &&
      t.push(getWeightedChoice(nsfw.sexAccessories, t)),
      t.unshift(nsfw.nw)
  }
  if (Math.random() < 0.8) {
    var x = getWeightedChoice(backgroundColor, t)
    if (t.push(x), 'scenery' === x && Math.random() < 0.5) for (var y = randomNum(3, 1), b = 0; b < y; b++) t.push(getWeightedChoice(backgroundObjects, t))
  }
  Math.random() < 0.3 &&
    t.push(getWeightedChoice(cameraPerspective, t)),
    Math.random() < 0.7 &&
    !m &&
    (p = getWeightedChoice(cameraAngle, t)) &&
    t.push(p)
  for (var w = 0; w < c; w++) {
    var j,
      k = !1
    n &&
      1 === c &&
      1 === i &&
      Math.random() < 0.2 &&
      (k = !0, t.push(nsfw.fu)),
      // TODO: review
      (j = t).push(...characterFeatures(k ? 'fu' : 'f', p, n, i))
  }
  for (var S = 0; S < d; S++) {
    var I;
    (I = t).push(...characterFeatures('m', p, n, i))
  }
  for (var C = 0; C < u; C++) {
    var Z;
    (Z = t).push(...characterFeatures('o', p, n, i))
  }
  if (Math.random() < 0.2) {
    var M = randomNum(4)
    2 === i &&
      (M = randomNum(3))
    for (var P = 0; P < M; P++) t.push(getWeightedChoice(accessories, t))
  }
  if (Math.random() < 0.25) for (var D = randomNum(3, 1), L = 0; L < D; L++) t.push(getWeightedChoice(effects, t))
  Math.random() < 0.2 &&
    t.push(getWeightedChoice(years, t)),
    Math.random() < 0.1 &&
    t.push(getWeightedChoice(cameraFocus, t))
  var T = new Set(t.join(', ').split(', '))
  t = [...T]
  for (var E = 0; E < t.length; E++) Math.random() < 0.02 &&
    (t[E] = '{'.concat(t[E], '}'))
  return t.join(', ')
}

/**
 * `ar` in minified code
 * @param {[string, number][] | [number, number][] | [string, number, string[]][]} e
 * @param {string[]} t tags
 */
function getWeightedChoice(e, t) {
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
  var c = randomNum(i, 1),
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

/**
 * `or` in minified code
 * 
 * @param {"f" | "fu" | "m" | "o"} e a string that represent the gender (?)
 * @param {string} t camera angle
 * @param {boolean} n NSFW
 * @param {1 | 2} i a number/enum that I have no idea what it is
 */
function characterFeatures(e, t, n, i) {
  var r = []
  Math.random() < 0.1 &&
    r.push(getWeightedChoice(animalFeatures, r))
  var lr = new Set(['mermaid', 'centaur', 'lamia'])
  var a = r.some((function (e) {
    return lr.has(e)
  }))
  Math.random() < 0.4 &&
    r.push(getWeightedChoice(sinkColor, r)),
    Math.random() < 0.8 &&
    r.push(getWeightedChoice(eyeColors, r)),
    Math.random() < 0.1 &&
    r.push(getWeightedChoice(eyeCharacteristics, r)),
    Math.random() < 0.2 &&
    r.push(getWeightedChoice(eyesExpression, r)),
    Math.random() < 0.8 &&
    r.push(getWeightedChoice(hairLength, r)),
    Math.random() < 0.5 &&
    r.push(getWeightedChoice(backHairStyle, r)),
    Math.random() < 0.7 &&
    r.push(getWeightedChoice(hairColors, r)),
    Math.random() < 0.1 &&
    r.push(getWeightedChoice(hairColorExtra, r), getWeightedChoice(hairColors, r)),
    Math.random() < 0.1 &&
    r.push(getWeightedChoice(hairFeatures, r)),
    Math.random() < 0.2 &&
    r.push(getWeightedChoice(foreheadStyle, r)),
    e.startsWith('f') &&
    Math.random() < 0.5 &&
    r.push(getWeightedChoice(breastsSize, r))
  var o = 0
  o = getWeightedChoice(
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
  for (var s = 0; s < o; s++) r.push(getWeightedChoice(bodyFeatures, r))
  Math.random() < 0.2 ? (r.push(getWeightedChoice(headWears, r)), Math.random() < 0.2 && r.push(getWeightedChoice(hatOrnaments, r))) : Math.random() < 0.3 &&
    r.push(getWeightedChoice(hairOrnaments, r))
  var c = getWeightedChoice(
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
    switch (getWeightedChoice([['n',
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
        r.push(getWeightedChoice(nsfw.undressing, r))
        break
      case 'u':
        r.push(getWeightedChoice(nsfw.underwear, r)),
          Math.random() < 0.5 &&
          (c = void 0)
        break
      case 'nk':
        r.push(getWeightedChoice(nsfw.naked, r)),
          c = void 0
    }
    'portrait' !== t &&
      'upper body' !== t &&
      (
        'f' === e &&
          Math.random() < 0.8 ? r.push(getWeightedChoice(nsfw.pussy, r)) : 'm' === e &&
            Math.random() < 0.8 ? r.push(getWeightedChoice(nsfw.penis, r)) : 'fu' === e &&
            Math.random() < 1 &&
        (r.push(getWeightedChoice(nsfw.penis, r)), Math.random() < 0.5 && r.push(getWeightedChoice(nsfw.pussy, r)))
      )
  }
  switch (c) {
    case 'uniform':
      r.push(getWeightedChoice(uniform, r))
      break
    case 'swimsuit':
      r.push(getWeightedChoice(swimsuits, r))
      break
    case 'bodysuit':
      r.push(getWeightedChoice(athletic, r))
      break
    case 'normal clothes':
      if (
        e.startsWith('f') &&
        Math.random() < 0.5 &&
        (r.push(getWeightedChoice(socks, r)), Math.random() < 0.2 && r.push(getWeightedChoice(legwear, r))),
        e.startsWith('f') &&
        Math.random() < 0.2
      ) {
        var d = Math.random() < 0.5,
          u = getWeightedChoice(color, r),
          h = getWeightedChoice(dress, r)
        r.push(d ? ''.concat(u, ' ').concat(h) : h)
      } else {
        if (Math.random() < 0.85) {
          var p = Math.random() < 0.5,
            m = getWeightedChoice(color, r),
            g = getWeightedChoice(uppers, r)
          r.push(p ? ''.concat(m, ' ').concat(g) : g)
        }
        if (!a) {
          if (Math.random() < 0.85 && 'portrait' !== t) {
            var f = Math.random() < 0.5,
              v = getWeightedChoice(color, r),
              x = getWeightedChoice(bottoms, r)
            r.push(f ? ''.concat(v, ' ').concat(x) : x)
          }
          if (Math.random() < 0.6 && ('full body' === t || void 0 === t)) {
            var y = Math.random() < 0.5,
              b = getWeightedChoice(color, r),
              w = getWeightedChoice(footwears, r)
            r.push(y ? ''.concat(b, ' ').concat(w) : w)
          }
        }
      }
  }
  Math.random() < 0.6 &&
    r.push(getWeightedChoice(expression, r)),
    Math.random() < (n && 1 === i ? 1 : 0.4) &&
    r.push(
      getWeightedChoice(
        [...action].concat(
          n ? [...nsfw.action, ...nsfw.analForeplay, ...nsfw.pussyForeplay] : []
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
      return !eyeColors.some((function (t) {
        return e === t[0]
      }))
    }))
  var j = 0
  j = getWeightedChoice(
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
  for (var k = 0; k < j; k++) r.push(getWeightedChoice([...clothesAccessories, ...(n ? nsfw.nudeExtra : [])], r))
  return a &&
    r.filter((function (e) {
      return !e.includes('legwear')
    })),
    r
}
