"use client"

import { Briefcase, ArrowRight, Building2, Clock, DollarSign, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const needs = [
  {
    id: 1,
    company: "某电商平台",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=company1",
    title: "急需前端开发重构官网",
    description: "现有官网性能较差，需要一位经验丰富的前端开发者进行重构，要求熟悉React和Next.js，工期2周。",
    budget: "¥15k-25k",
    duration: "2周",
    location: "远程",
    tags: ["React", "Next.js", "性能优化"],
    urgent: true,
  },
  {
    id: 2,
    company: "创业公司A",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=company2",
    title: "寻找全栈合伙人",
    description: "我们正在开发一款SaaS产品，寻找一位全栈工程师作为技术合伙人，股权+薪资模式。",
    budget: "股权+薪资",
    duration: "长期",
    location: "远程",
    tags: ["全栈", "SaaS", "创业"],
    urgent: false,
  },
  {
    id: 3,
    company: "教育机构",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=company3",
    title: "小程序开发",
    description: "需要开发一款在线教育小程序，包含课程展示、直播、作业提交等功能。",
    budget: "¥30k-50k",
    duration: "1个月",
    location: "远程",
    tags: ["微信小程序", "教育", "直播"],
    urgent: true,
  },
  {
    id: 4,
    company: "金融科技公司",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=company4",
    title: "数据可视化大屏开发",
    description: "需要开发数据可视化大屏，展示实时交易数据，要求高性能和美观的动效。",
    budget: "¥20k-35k",
    duration: "3周",
    location: "远程",
    tags: ["数据可视化", "D3.js", "大屏"],
    urgent: false,
  },
]

export default function NeedsSection() {
  return (
    <section id="needs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 mb-4">
            <Briefcase className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Boss需求</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            公司老板需求
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            图文描述真实场景痛苦，发现优质远程工作机会
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {needs.map((need) => (
            <Card
              key={need.id}
              className="group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={need.logo} alt={need.company} />
                    <AvatarFallback className="rounded-lg bg-purple-100 text-purple-600">
                      <Building2 className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {need.title}
                      </h3>
                      {need.urgent && (
                        <Badge variant="destructive" className="text-xs shrink-0">
                          急
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{need.company}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {need.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span>{need.budget}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>{need.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span>{need.location}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {need.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            查看更多需求
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
