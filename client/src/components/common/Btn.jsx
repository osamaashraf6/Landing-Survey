import { Button } from "@/components/ui/button"
export default function Btn({text}) {
    return <>
        <Button className={`bg-primryBtn w-40 lg:w-52 py-3 px-5 rounded-xl text-white font-bold leading-8 capitalize hover:bg-secondary`} >{text}</Button>
    </>
}
