"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React, { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  image?: string
}

export function ProjectCard({ title, description, technologies, github, live, image }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Card className="hover:shadow-lg transition-shadow">
      {image && (
        <React.Fragment>
          <img
            src={image}
            alt={title}
            className="w-full h-40 md:h-56 xl:h-64 object-cover rounded-t-lg border-b border-gray-200 cursor-pointer transition-all duration-300"
            loading="lazy"
            onClick={() => setModalOpen(true)}
          />
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalOpen(false)}>
              <div className="relative max-w-3xl w-full flex items-center justify-center p-2" onClick={e => e.stopPropagation()}>
                <img src={image} alt={title} className="max-h-[80vh] max-w-full w-auto rounded-lg shadow-lg" />
              </div>
            </div>
          )}
        </React.Fragment>
      )}
      <CardHeader className="p-0 pb-4">
        <div className="px-4 py-4 md:px-6 md:pt-4">
          <CardTitle className="text-xl text-primary font-header">{title}</CardTitle>
          <CardDescription className="text-gray-600 font-body">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary font-body">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {live && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a href={live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
