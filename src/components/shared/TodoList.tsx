import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button'
import { LucideCheckSquare } from 'lucide-react'

const todos: { id: string, title: string, description: string, tiem_estimate: string }[] = [
  { id: "579b0713-43a7-4815-bc8b-31536289cfcd", title: "This is my task number 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "1-2 days" },
  { id: "15e2d337-3f39-447b-94db-cee146d43408", title: "This is my task number 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "5-6 days" },
  { id: "b4d14b9a-e2d4-4f32-a17b-d4292f9f8c76", title: "This is my task number 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "3-4 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "91fea107-d2d5-4b72-a0bd-1bbf8ef588ed", title: "This is my task number 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "2-3 days" },
  { id: "87345f86-3ab1-4c47-810d-0e193e711b91", title: "This is my task number 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "1-2 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
  { id: "e754727e-8d88-46f8-822f-e046711b158b", title: "This is my task number 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis nec erat tempor, vel semper purus consectetur. Nulla iaculis at ante vel sollicitudin. Vivamus sed libero risus. Sed pulvinar interdum nisl, eget volutpat nulla. Integer venenatis ex in erat dictum condimentum", tiem_estimate: "7-8 days" },
]

function truncateText({ text, length = 30 }: { text: string, length?: number }) {
  return `${text.slice(0, length)}...`
}

function returnDeadlineColorComponent(time: string): React.ReactNode {
  const today = (new Date()).getDate()
  return <></>

  //TODO: return color coded square based on TOday Date, created_at, and tiem_estimate
}

const TodoList = ({ number = 6 }: { number?: number }) => {
  return (
    <Accordion type="single" collapsible className="pr-5 w-full">
      {
        todos.slice(0, number).map(todo => (
          <AccordionItem value={todo.id}>
            <AccordionTrigger>
              <div className='w-8 h-8 bg-orange-600' />
              {
                truncateText({ text: todo.title })
              }
            </AccordionTrigger>
            <AccordionContent className='w-full  flex flex-col items-end pl-5 justify-between gap-3'>
              {
                todo.description
              }
              <Button className='block'>
                <LucideCheckSquare className='inline' /> Done
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))
      }

    </Accordion>
  )
}

export default TodoList
