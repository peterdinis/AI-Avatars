import Link from "next/link";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

const ProfileDropdown: FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>John Doe</DropdownMenuItem>
                <DropdownMenuItem>
                    <Button size={"sm"} variant={"link"}>
                        <Link href={"/billing"}>
                            Billing
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button size={"sm"} variant={"link"}>
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown