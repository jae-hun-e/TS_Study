import React, {
    useState,
    useCallback,
    useRef,
    FC,
    ReactNode,
    useEffect,
    FormEvent,
} from "react";

interface P {
    name: string;
    title: string;
    children?: ReactNode | undefined;
}

const ref1 = useRef(null); // 1번째 타입 MutableRefObject
const ref2 = useRef<HTMLInputElement>(null); // 2번째 타입 RefObject
const ref3 = useRef<HTMLInputElement>(); // 3번째 타입 MutableRefObject
const ref4 = useRef(); // 3번째 타입 MutableRefObject

// 제네릭타입 ≠= 초기값 타입 인 경우는 초기값타입인 null 인경우를 제외하고 올 수 없다.
// const ref5 = useRef<HTMLInputElement>("string"); // typeError

const WordRelay: FC<P> = (props) => {
    const [word, setWord] = useState<string>("제로초");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
        (e) => {
            e.preventDefault();
            const input = inputEl.current;
            if (word[word.length - 1] === value[0]) {
                setResult("딩동댕");
                setWord(value);
                setValue("");
                if (input) {
                    input.focus();
                }
            } else {
                setResult("땡");
                setValue("");
                if (input) {
                    input.focus();
                }
            }
        },
        [word, value]
    );

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    useEffect(() => {
        const func = async () => {
            // await axios.post()
        };
    });

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} value={value} onChange={onChange} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
};

export default WordRelay;
