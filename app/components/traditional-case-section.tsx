"use client"

import { ArrowRight, QrCode, CheckCircle, Building2, Coffee, Scissors, Hotel } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const cases = [
  {
    id: 1,
    title: "探店种草二维码",
    description: "让每一位顾客，都成为你的种草博主，一张「探店种草二维码」，连接线下门店与线上平台。顾客扫码即可生成 大众点评 / 美团 / 小红书 / 抖音 / 朋友圈好评文案，老板只需打印二维码贴在桌牌或收银台。",
    link: "http://124.222.22.214:8088/",
    icon: QrCode,
    scenarios: [
      { icon: Building2, label: "餐饮门店" },
      { icon: Coffee, label: "奶茶咖啡" },
      { icon: Scissors, label: "美容美发" },
      { icon: Hotel, label: "民宿酒店" },
      { label: "线下连锁" }
    ],
    tags: ["线下引流", "口碑营销", "二维码工具"],
  },
]

export default function TraditionalCaseSection() {
  return (
    <section id="traditional-cases" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-4">
            <QrCode className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">传统案例库</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            每日传统案例拆解
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            精选线下实体店铺数字化转型案例，拆解传统行业如何借助互联网工具提升客流与口碑
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className="group hover:shadow-lg transition-shadow cursor-pointer border-amber-100 border-2"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Icon and Title */}
                  <div className="flex items-start gap-4 lg:w-1/4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <caseItem.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {caseItem.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Description and Scenarios */}
                  <div className="lg:w-2/4">
                    <p className="text-gray-700 mb-6">
                      {caseItem.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">适用场景</h4>
                      <div className="flex flex-wrap gap-3">
                        {caseItem.scenarios.map((scene, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-sm text-gray-700">
                            {scene.icon && <scene.icon className="h-4 w-4 text-gray-500" />}
                            {scene.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Link and CTA */}
                  <div className="lg:w-1/4 flex flex-col items-start lg:items-end justify-between">
                    <a
                      href={caseItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
                    >
                      作品链接 →
                    </a>
                    <Button size="sm" className="gap-2">
                      查看案例详情
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            查看更多案例
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}