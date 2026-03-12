"use client"

import { Sparkles, Github, Twitter, Mail, X } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

const footerLinks = {
  产品: [
    { name: "作品展示", href: "#works" },
    { name: "需求广场", href: "#needs" },
    { name: "价格方案", href: "#pricing" },
    { name: "更新日志", href: "#changelog" },
  ],
  资源: [
    { name: "帮助中心", href: "#help" },
    { name: "开发者文档", href: "#docs" },
    { name: "API文档", href: "#api" },
    { name: "社区指南", href: "#guidelines" },
  ],
  关于: [
    { name: "关于我们", href: "#about" },
    { name: "联系我们", href: "#contact" },
    { name: "加入我们", href: "#careers" },
    { name: "合作伙伴", href: "#partners" },
  ],
  法律: [
    { name: "服务条款", href: "#terms" },
    { name: "隐私政策", href: "#privacy" },
    { name: "Cookie政策", href: "#cookies" },
  ],
}

export default function Footer() {
  const [showQR, setShowQR] = useState(false)

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OneHub</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。
              <br />
              访问 chuangyeshuo.github.io/onehub.work
            </p>
            <div className="flex gap-4">
              {['github','twitter','mail'].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowQR(true)
                  }}
                  title="微信扫码(WeChat Scan)，关注 OneHub"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  {name === 'github' && <Github className="h-5 w-5" />}
                  {name === 'twitter' && <Twitter className="h-5 w-5" />}
                  {name === 'mail' && <Mail className="h-5 w-5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 chuangyeshuo.github.io/onehub.work. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>域名: onehub.work</span>
            <span>远程一人公司社区</span>
          </div>
        </div>
        {showQR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative">
              <button
                onClick={() => setShowQR(false)}
                className="absolute -top-6 -right-6 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src="/onehub.work/onehub.work.png"
                alt="OneHub 微信二维码"
                className="max-w-xs sm:max-w-sm"
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
