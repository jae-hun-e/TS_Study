interface hunQuery<T> {
    text(
        param?: string | number | ((this: T, idx: number) => string | number | boolean)
    ): this;
    html(param: string | Document | DocumentFragment): void;
}

const $tag: hunQuery<HTMLElement> = $(["p", "t"]) as unknown as hunQuery<HTMLElement>;

$tag.text("123");
$tag.text(123);
$tag.text(function (index) {
    console.log(this, index);
    return true;
});
$tag.text().html(document);
