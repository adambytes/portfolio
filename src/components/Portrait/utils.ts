export const cos = (angle: number) => Math.cos(angle);

export const sin = (angle: number) => Math.sin(angle);

export const map = (
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) => ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;

const scaled_cosine = (i: number) => 0.5 * (1.0 - Math.cos(i * Math.PI));

// Perlin noise
let perlin: any;
export const noise = (x: number, y: number = 0, z: number = 0) => {
  const PERLIN_SIZE = 256;

  if (perlin == null) {
    perlin = new Array(PERLIN_SIZE + 1);
    for (let i = 0; i < PERLIN_SIZE + 1; i++) {
      perlin[i] = Math.random();
    }
  }

  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  if (z < 0) {
    z = -z;
  }

  let xi = Math.floor(x);
  let yi = Math.floor(y);
  let zi = Math.floor(z);
  let xf = x - xi;
  let yf = y - yi;
  let zf = z - zi;

  let rxf, ryf;

  let r = 0;
  let ampl = 0.5;

  let n1, n2, n3;

  for (let o = 0; o < 4; o++) {
    let of = xi + (yi << 4) + (zi << 8);

    rxf = scaled_cosine(xf);
    ryf = scaled_cosine(yf);

    n1 = perlin[of & 0xff];
    n1 += rxf * (perlin[(of + 1) & 0xff] - n1);
    n2 = perlin[(of + (1 << 4)) & 0xff];
    n2 += rxf * (perlin[(of + (1 << 4) + 1) & 0xff] - n2);
    n1 += ryf * (n2 - n1);

    of += 1 << 8;
    n2 = perlin[of & 0xff];
    n2 += rxf * (perlin[(of + 1) & 0xff] - n2);
    n3 = perlin[(of + (1 << 4)) & 0xff];
    n3 += rxf * (perlin[(of + (1 << 4) + 1) & 0xff] - n3);
    n2 += ryf * (n3 - n2);

    n1 += scaled_cosine(zf) * (n2 - n1);

    r += n1 * ampl;
    ampl *= 0.5;
    xi <<= 1;
    xf *= 2;
    yi <<= 1;
    yf *= 2;
    zi <<= 1;
    zf *= 2;

    if (xf >= 1.0) {
      xi++;
      xf--;
    }
    if (yf >= 1.0) {
      yi++;
      yf--;
    }
    if (zf >= 1.0) {
      zi++;
      zf--;
    }
  }

  return r;
};
