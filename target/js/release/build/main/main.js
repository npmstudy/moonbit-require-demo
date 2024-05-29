let $output_buffer = '';
function $flush_output() {
  console.log($output_buffer);
}
function $print_string(a) {
  $output_buffer += a;
  const last_nl_index = $output_buffer.lastIndexOf('\n');
  if (last_nl_index >= 0) {
    console.log($output_buffer.slice(0, last_nl_index));
    $output_buffer = $output_buffer.slice(last_nl_index + 1);
  }
}
function $unsafe_bytes_sub_string(bytes, byte_offset, byte_length) {
  return new TextDecoder("utf-16").decode(bytes.slice(byte_offset, byte_offset + byte_length));
}
function $raise(a) {
  throw new Error(a);
}
function $unsafe_bytes_blit(dst, dst_offset, src, src_offset, src_length) {
  if (src === dst && src_offset < dst_offset) {
    for (let i = src_length - 1; i >= 0; i--) {
      dst[dst_offset + i] = src[src_offset + i];
    }
  } else {
    for (let i = 0; i < src_length; i++) {
      dst[dst_offset + i] = src[src_offset + i];
    }
  }
}
const username$hello$lib$$get_koa = () => require("koa");
const username$hello$lib$$create_koa = (claz) => new claz();
function moonbitlang$core$builtin$$println$0$(input) {
  $print_string(moonbitlang$core$int$$Int$to_string(input));
  $print_string("\n");
}
function moonbitlang$core$builtin$$println$1$(input) {
  $print_string(input);
  $print_string("\n");
}
function moonbitlang$core$bytes$$Bytes$unsafe_sub_string(_tmp$0, _tmp$1, _tmp$2) {
  return $unsafe_bytes_sub_string(_tmp$0, _tmp$1, _tmp$2);
}
function moonbitlang$core$bytes$$Bytes$sub_string(self, byte_offset, byte_length) {
  return byte_length < 0 || (byte_offset < 0 || (byte_offset + byte_length | 0) > self.length) ? $raise("sub_string out of bound") : moonbitlang$core$bytes$$Bytes$unsafe_sub_string(self, byte_offset, byte_length);
}
function moonbitlang$core$builtin$$Buffer$to_string(self) {
  return moonbitlang$core$bytes$$Bytes$sub_string(self.bytes, 0, self.len);
}
function moonbitlang$core$bytes$$Bytes$set_utf16_char(self, offset, value) {
  const code = value;
  if (code < 65536) {
    self[offset] = code & 255;
    self[offset + 1 | 0] = code >>> 8;
    return 2;
  } else {
    const hi = code - 65536 | 0;
    const lo = hi >>> 10 | 55296;
    const hi$2 = hi & 1023 | 56320;
    self[offset] = lo & 255;
    self[offset + 1 | 0] = lo >>> 8;
    self[offset + 2 | 0] = hi$2 & 255;
    self[offset + 3 | 0] = hi$2 >>> 8;
    return 4;
  }
}
function moonbitlang$core$bytes$$Bytes$unsafe_blit(_tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7) {
  $unsafe_bytes_blit(_tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7);
}
function moonbitlang$core$bytes$$Bytes$blit(self, dst_offset, src, src_offset, length) {
  const e1 = (dst_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length < 0 || (dst_offset < 0 || (e1 >= len1 || (src_offset < 0 || e2 >= len2)))) {
    $raise("blit out of bounds");
    return;
  } else {
    moonbitlang$core$bytes$$Bytes$unsafe_blit(self, dst_offset, src, src_offset, length);
    return;
  }
}
function moonbitlang$core$builtin$$Buffer$grow_if_necessary(self, required) {
  let enough_space = self.bytes.length;
  while (true) {
    if (enough_space < required) {
      enough_space = Math.imul(enough_space, 2) | 0;
      continue;
    } else {
      break;
    }
  }
  if (enough_space !== self.bytes.length) {
    const new_bytes = new Uint8Array(enough_space);
    moonbitlang$core$bytes$$Bytes$blit(new_bytes, 0, self.bytes, 0, self.len);
    self.bytes = new_bytes;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Buffer$write_char(self, value) {
  moonbitlang$core$builtin$$Buffer$grow_if_necessary(self, self.len + 4 | 0);
  const inc = moonbitlang$core$bytes$$Bytes$set_utf16_char(self.bytes, self.len, value);
  self.len = self.len + inc | 0;
}
function moonbitlang$core$builtin$$Buffer$make(initial_capacity) {
  const initial = initial_capacity < 1 ? 1 : initial_capacity;
  return { bytes: new Uint8Array(initial), len: 0 };
}
function moonbitlang$core$builtin$$to_string$46$abs$2$(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$int$$Int$to_string(self) {
  const buf = moonbitlang$core$builtin$$Buffer$make(11);
  if (self < 0) {
    moonbitlang$core$builtin$$Buffer$write_char(buf, 45);
  }
  const write_digits = function (num) {
    const num2 = num / 10 | 0;
    if (num2 !== 0) {
      write_digits(num2);
    }
    moonbitlang$core$builtin$$Buffer$write_char(buf, moonbitlang$core$builtin$$to_string$46$abs$2$(num % 10 | 0) + 48 | 0);
  };
  write_digits(self);
  return moonbitlang$core$builtin$$Buffer$to_string(buf);
}
function username$hello$lib$$hello() {
  const koa = username$hello$lib$$create_koa(username$hello$lib$$get_koa());
  moonbitlang$core$builtin$$println$0$(koa._eventsCount);
  return "Hello, world!";
}
(function () {
  moonbitlang$core$builtin$$println$1$(username$hello$lib$$hello());
}());
$flush_output();
