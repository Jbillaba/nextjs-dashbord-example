// one benefit of using layouts, on navigation, only the page components update while the layout won't rerender, this is partial rendering. which preserves client-side react state in the layout when transitioning between pages

export default function Page() {
    return <p>Customers page is working.</p>;
}