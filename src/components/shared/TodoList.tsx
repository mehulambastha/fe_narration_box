'use client'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '../ui/button'
import { LucideCheckSquare } from 'lucide-react'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { availableFilters, availableSortTypes } from '@/lib/types'
import SearchBar from './SearchBar'

type Todotype = { created_at: Date | string, completed: boolean, id: string, title: string, description: string, tiem_estimate: string }[]

const todos: Todotype =
  [
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "583b0713-43a7-4815-bc8b-31536289cfcd",
      title: "Draft Initial Project Proposal",
      description: "Prepare a comprehensive project proposal outlining key objectives, deliverables, and timelines.",
      tiem_estimate: "1-2 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: true,
      id: "15e2d337-3f39-447b-94db-cee146d43408",
      title: "Review Team Feedback on Design",
      description: "Analyze feedback from the team on the proposed design to finalize changes.",
      tiem_estimate: "5-6 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "b4d14b9a-e2d4-4f32-a17b-d4292f9f8c76",
      title: "Implement Authentication Feature",
      description: "Develop and test user authentication mechanisms for the application.",
      tiem_estimate: "3-4 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "e754727e-8d88-46f8-822f-e046711b158b",
      title: "Create API Endpoints for Tasks",
      description: "Set up and document RESTful APIs for managing task data.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "91fea107-d2d5-4b72-a0bd-1bbf8ef588ed",
      title: "Test Application for Bugs",
      description: "Run manual and automated tests to identify and resolve issues in the app.",
      tiem_estimate: "2-3 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "87345f86-3ab1-4c47-810d-0e193e711b91",
      title: "Document Project Structure",
      description: "Write clear documentation explaining the architecture and codebase structure.",
      tiem_estimate: "1-2 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: true,
      id: "e754727e-8d88-46f8-822f-e046711b158c",
      title: "Conduct Code Review Session",
      description: "Organize a meeting to review and optimize critical sections of the codebase.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "e754727e-8d88-46f8-821f-e046711b158b",
      title: "Enhance UI/UX for Dashboard",
      description: "Revamp the dashboard design for improved user experience and accessibility.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "e754727e-8d88-46f8-819f-e046711b158b",
      title: "Optimize Database Queries",
      description: "Analyze and optimize database queries for performance improvement.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "e754727e-8d88-46f8-824f-e046711b158b",
      title: "Integrate Payment Gateway",
      description: "Add payment gateway integration and test with different transaction scenarios.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: false,
      id: "e754727e-8d88-46f8-822f-e046711b158d",
      title: "Research for New Features",
      description: "Conduct market research to brainstorm potential features for the application.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: true,
      id: "e754725e-8d88-46f8-822f-e046711b158b",
      title: "Finalize Project Deployment Plan",
      description: "Prepare and review the deployment strategy for the production environment.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: true,
      id: "e754724e-8d88-46f8-822f-e046711b158b",
      title: "Develop Error Logging System",
      description: "Build a system to log and monitor application errors effectively.",
      tiem_estimate: "7-8 days"
    },
    {
      created_at: "2025-01-06T10:00:00.000Z",
      completed: true,
      id: "e754727e-8d88-47f8-822f-e046711b158b",
      title: "Write Unit Tests for Backend",
      description: "Ensure backend functionalities are covered with comprehensive unit tests.",
      tiem_estimate: "7-8 days"
    }
  ]


function truncateText({ text, length = 30 }: { text: string, length?: number }) {
  return `${text.slice(0, length)}...`
}

function returnDeadlineColorComponent(time: string): React.ReactNode {
  const today = (new Date()).getDate()
  const target = (new Date(time)).getDate()
  const diff =
  
  return <></>

  //TODO: return color coded square based on TOday Date, created_at, and tiem_estimate
}

const TodoList = ({ number = 6, className, searchBar = false }: { number?: number, className?: ClassNameValue, searchBar?: boolean }) => {
  const [userQuery, setUserQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [sortType, setSortType] = useState<availableSortTypes | ''>('')
  const [filters, setFilters] = useState<availableFilters[]>([])
  const [filteredItems, setFilteredItems] = useState<Todotype>(todos)

  useEffect(() => {
    const items = todos.filter(item => {
      if (item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) || item.description.toLowerCase().includes(debouncedQuery.toLowerCase())) {
        return item
      }
    })
    setFilteredItems(items)
  }, [debouncedQuery])

  useEffect(() => {
    setUserQuery("")
    const items = todos.filter(item => {
      if (filters.length > 0) {
        for (const filter of filters) {
          switch (filter) {
            case 'complete':
              console.log("Tackling complted ones. Letting go: ", item)
              if (item.completed) {
                return item
              }
              break
            case 'incomplete':
              if (!item.completed) {
                return item
              }
              break
            case 'due now':
              const ran = Math.random()
              if (ran < 0.2) {
                return item
              }
              break
          }
        }
      } else {
        return item
      }
    })
    console.log("Based on the filters, first time: ", items)

    if (sortType) {
      console.log('Sort type povidde.')
      switch (sortType) {
        case 'big-first':
          setFilteredItems(items.sort((a, b) => {
            const Atime = a.tiem_estimate.split(" ")[0].split("-").reduce((acc, curr) => acc += parseInt(curr), 0)
            const Btime = b.tiem_estimate.split(" ")[0].split("-").reduce((acc, curr) => acc += parseInt(curr), 0)
            return Btime - Atime
          }))
          break;
        case 'small-first':
          setFilteredItems(items.sort((a, b) => {
            const Atime = a.tiem_estimate.split(" ")[0].split("-").reduce((acc, curr) => acc += parseInt(curr), 0)
            const Btime = b.tiem_estimate.split(" ")[0].split("-").reduce((acc, curr) => acc += parseInt(curr), 0)
            return Atime - Btime
          }))
          break;
      }
    } else {
      console.log('Sort not orivde. Setting filtered items to : ', items)
      setFilteredItems(items)
    }


  }, [filters, sortType])

  return (
    <div className='w-full flex flex-col items-center justify-start'>
      <SearchBar searchQuery={userQuery} setSearchQuery={setDebouncedQuery} sortType={sortType} filters={filters} setFilters={setFilters} setSortType={setSortType} />
      <Accordion type="single" collapsible className={cn(className, "pr-5 w-full")}>
        {
          filteredItems.slice(0, number).map(todo => (
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
                <div className='font-bold underline'>
                  Estimated - {todo.tiem_estimate}
                </div>
                <div>
                  Completed: {todo.completed.toString()}
                </div>
                <Button className='block'>
                  <LucideCheckSquare className='inline' /> Done
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>

    </div>
  )
}

export default TodoList
