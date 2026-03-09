"use client"

import { ArrowRight, Users, Briefcase, Zap } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-50 blur-3xl" />
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-700">
              远程一人公司社区全新上线
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            <span className="block">远程一人公司社区</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              从远程，轻松当老板
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
            连接独立开发者与企业需求，打造专属你的一人公司。
            <br className="hidden sm:block" />
            在这里展示作品、寻找机会、实现自由职业梦想。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
            >
              我是开发者
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 px-8"
            >
              我是Boss
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Users className="h-5 w-5 text-blue-500" />
                <span>500+</span>
              </div>
              <span className="text-sm text-gray-500">独立开发者</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Briefcase className="h-5 w-5 text-purple-500" />
                <span>200+</span>
              </div>
              <span className="text-sm text-gray-500">企业需求</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>98%</span>
              </div>
              <span className="text-sm text-gray-500">好评率</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
