'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { isUserChoice, userChoices } from '@/lib/types'


const todoLevels: userChoices[] = ['alpha', 'beta', 'sigma']



const GenerateTodoDialog = ({ isFirstTime }: { isFirstTime: boolean }) => {
  const [userPrompt, setuserPrompt] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [userLevelChoice, setUserLevelChoice] = useState<userChoices | ''>('')


  useEffect(() => {
    setTimeout(() => {
      if (textAreaRef.current) {
        textAreaRef.current.focus()
      }
    }, 200)
  })

  const eventHandler = {
    "user-prompt": (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault()
      setuserPrompt(e.target.value)
    },
    "user-level": (e: any) => {
      e.preventDefault()
      if (isUserChoice(e.target.value)) {
        setUserLevelChoice(e.target.value)
      }
    },
    "generate-tasks": async () => {
      // simulate API call using tanstack query
      setTimeout(() => {
        console.log("gnerate task")
      }, 200)
    },

  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          {
            isFirstTime ?
              `Okay, got it!` :
              `Let's go!`
          }
        </Button>
      </DialogTrigger>
      <DialogContent>

        <DialogDescription>
          <DialogHeader>
            <DialogTitle>
              Describe your objective
            </DialogTitle>
          </DialogHeader>
        </DialogDescription>
        <div className='flex py-5 px-3 flex-col gap-2 items-center justify-evenly'>
          <Textarea value={userPrompt} onChange={eventHandler["user-prompt"]} ref={textAreaRef} placeholder='I wanna set up a food truck to sell organic indian street food...' />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Levels</SelectLabel>
                {
                  todoLevels.map(level => (
                    <SelectItem value={level} onClick={eventHandler["user-level"]}>{level}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button onClick={eventHandler["generate-tasks"]}>
            Generate todos
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GenerateTodoDialog
