"use client"

import { Star, ArrowRight, Code, Palette, Globe, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

const works = [
  {
    id: 1,
    name: "小明",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    title: "15年开发经验",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    rating: 4.9,
    tags: ["后端开发", "架构设计"],
    icon: Code,
  },
  {
    id: 2,
    name: "小红",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    title: "手机应用开发",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    rating: 4.8,
    tags: ["iOS", "Android", "Flutter"],
    icon: Smartphone,
  },
  {
    id: 3,
    name: "小李",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    title: "Web应用开发",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    rating: 5.0,
    tags: ["前端开发", "React", "Vue"],
    icon: Globe,
  },
  {
    id: 4,
    name: "小张",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    title: "UI/UX设计师",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    rating: 4.9,
    tags: ["UI设计", "品牌设计"],
    icon: Palette,
  },
  {
    id: 5,
    name: "小王",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    title: "全栈工程师",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    rating: 4.7,
    tags: ["全栈开发", "Node.js"],
    icon: Code,
  },
  {
    id: 6,
    name: "小陈",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    title: "产品设计师",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    rating: 4.8,
    tags: ["产品设计", "用户研究"],
    icon: Palette,
  },
]

export default function WorksSection() {
  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 mb-4">
            <Code className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">开发者作品</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            主理人作品集
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            展示相关图文描述，发现优秀的独立开发者和他们的精彩作品
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <Card
              key={work.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white">
                      <AvatarImage src={work.avatar} alt={work.name} />
                      <AvatarFallback>{work.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{work.name}</p>
                      <p className="text-sm text-gray-200">{work.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{work.rating}</span>
                    <span className="text-sm text-gray-500">好评</span>
                  </div>
                  <work.icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            查看更多作品
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
