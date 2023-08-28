const origin = ["훈", "늘", "준", "호"];
const cnt = new Array(4).fill(0);
origin.forEach((_, idx) => {
    let tmp;
    while (1) {
        tmp = Math.floor(Math.random() * 4);
        if (tmp !== idx && !cnt[tmp]) break;
    }
    cnt[tmp] = origin[idx];
});

console.log(origin);
console.log(cnt);

const map = new Map();
origin.forEach((v, i) => {
    map.set(v, cnt[i]);
});
console.log(map);
