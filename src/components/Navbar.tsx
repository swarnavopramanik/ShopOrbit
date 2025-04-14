"use client";

import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShop,
  setShowCart,
  setShowWishlist,
} from "@/redux/features/shopSlice";
import MyCart from "./MyCart";
import Wishlist from "./Wishlist";
import { Icons } from "./Icons";
import { useSession, signIn, signOut } from "next-auth/react";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const { showCart } = useSelector(selectShop);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit  bg-slate-50 border- borde-zinc-300 z-[10] py-4">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">

          <p className="hidden text-zinc-900 text-3xl font-medium md:block font-cinzel">
          SnapBuy
          </p>
      

        <div className="flex justify-around items-center gap-2 sm:gap-6 text-base font-[300]">
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-yellow-700 transition-all ease-linear duration-100 text-sm pointer-events-none p-0 sm:px-4 sm:py-2"
            )}
          >
           </div>
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-red-700 transition-all ease-linear duration-100 text-sm p-0 sm:px-4 sm:py-2"
            )}
            onClick={() => dispatch(setShowWishlist())}
          >
            <div className="p-1 rounded-full group-hover:bg-red-300/50">
              <Icons.heart className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-red-700" />
            </div>
            <span className="hidden sm:block font-[300]">Wish list</span>
          </div>
          <div
            className={cn(
              buttonVariants({ variant: "link" }),
              "group flex gap-4 items-center cursor-pointer hover:text-blue-700 transition-all ease-linear duration-100 text-sm p-0 sm:px-4 sm:py-2"
            )}
            onClick={() => dispatch(setShowCart())}
          >
            <div className="p-1 rounded-full group-hover:bg-blue-300/50">
              <Icons.cart className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-blue-700" />
            </div>
            <span className="hidden sm:block font-[300]">My cart</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 group">
  {session ? (
    <>
      <div className="p-1 rounded-full group-hover:bg-purple-300/50">
        <Icons.user className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900 group-hover:text-purple-700" />
      </div>
      <span className="text-sm font-medium text-zinc-950">{session.user.name}</span>
      <button
        onClick={() => signOut()}
        className="text-sm text-zinc-900 px-3 py-1 rounded transition-all duration-200 
                   hover:bg-red-100 hover:text-red-800 hover:font-semibold hover:shadow-sm"
      >
        Logout
      </button>
    </>
  ) : (
    <button
      onClick={() => signIn()}
      className="text-sm text-zinc-900 px-3 py-1 rounded transition-all duration-200 
                 hover:bg-purple-100 hover:text-purple-700 hover:font-semibold hover:shadow-sm"
    >
      Login
    </button>
  )}
</div>

            
            </div>
            </nav>
                <MyCart />
            <Wishlist />
          </div>
              );
            };