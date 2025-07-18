import { Button } from "@/components/ui/button"
export default function Btn({text}) {
    return <>
        <Button className={`bg-primryBtn text-xs md:text-[16px] w-40 lg:w-52 py-3 px-5 rounded-xl text-white font-medium leading-8 capitalize hover:bg-secondary`} >{text}</Button>
    </>
}
