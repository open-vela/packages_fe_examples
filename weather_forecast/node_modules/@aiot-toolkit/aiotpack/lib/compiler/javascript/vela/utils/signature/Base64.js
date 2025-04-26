"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Base64
 */
class Base64 {
  static re = (() => new RegExp(/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/))();
  static decode(a) {
    let i = 0;
    if (Base64.decoder === undefined) {
      let b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      let ignore = '= \f\n\r\t\u00A0\u2028\u2029';
      Base64.decoder = [];
      for (i = 0; i < 64; ++i) {
        Base64.decoder[b64.charAt(i)] = i;
      }
      for (i = 0; i < ignore.length; ++i) {
        Base64.decoder[ignore.charAt(i)] = -1;
      }
    }
    let out = [];
    let bits = 0;
    let char_count = 0;
    for (i = 0; i < a.length; ++i) {
      let c = a.charAt(i);
      if (c === '=') break;
      let d = Base64.decoder[c];
      if (d === -1) continue;
      if (d === undefined) throw 'Illegal character at offset ' + i;
      bits |= d;
      if (++char_count >= 4) {
        out[out.length] = bits >> 16;
        out[out.length] = bits >> 8 & 0xff;
        out[out.length] = bits & 0xff;
        bits = 0;
        char_count = 0;
      } else {
        bits <<= 6;
      }
    }
    switch (char_count) {
      case 1:
        throw 'Base64 encoding incomplete: at least 2 bits missing';
      case 2:
        out[out.length] = bits >> 10;
        break;
      case 3:
        out[out.length] = bits >> 16;
        out[out.length] = bits >> 8 & 0xff;
        break;
    }
    return out;
  }
  static unarmor(a) {
    let b = '';
    let m = Base64.re.exec(a.toString());
    if (m) {
      if (m[1]) {
        b = m[1];
      } else if (m[2]) {
        b = m[2];
      } else {
        throw 'RegExp out of sync';
      }
    }
    return Base64.decode(b);
  }
}
var _default = exports.default = Base64;