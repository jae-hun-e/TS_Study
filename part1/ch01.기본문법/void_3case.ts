function void1(callback: () => void): void {}

void1(() => {
  return "3";
});

interface Humans {
  talk: () => void;
}

const human: Humans = {
  talk() {
    return "abc";
  },
};
