import { Loader2 } from "lucide-react";
import { FC } from "react";

type LoaderProps = {
    label?: string;
}

const Loader: FC<LoaderProps> = ({label}: LoaderProps) => {
    return <Loader2 className="animate-spin w-8 h-8">{label}</Loader2>
}

export default Loader;