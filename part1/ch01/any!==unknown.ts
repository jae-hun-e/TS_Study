const testObj: { talk: () => void } = {
  talk() {
    return 3;
  },
};

const anyType: any = testObj.talk();
anyType.talk(); // 타입지정 포기

const unKnownType: unknown = testObj.talk();

(unKnownType as { talk: () => void }).talk(); // 사용할 때 타입 지정해줘야 함
