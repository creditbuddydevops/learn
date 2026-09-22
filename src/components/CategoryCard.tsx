"use client";

import React from "react";
import Link from "next/link";
import { Category } from "@/data/categories";
import { 
  Landmark, 
  Code2, 
  Cpu, 
  BarChart3, 
  MessageSquare, 
  Briefcase, 
  Building2, 
  Compass, 
  ArrowRight 
} from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-5 h-5 text-[#111111]" />,
  Code2: <Code2 className="w-5 h-5 text-[#111111]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#111111]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#111111]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#111111]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#111111]" />,
  Building2: <Building2 className="w-5 h-5 text-[#111111]" />,
  Compass: <Compass className="w-5 h-5 text-[#111111]" />,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const icon = ICON_MAP[category.iconName] || <Briefcase className="w-5 h-5 text-[#111111]" />;

  return (
    <Link
      href={`/courses?category=${category.slug}`}
      className="group block rounded-[18px] bg-white border border-[#E6E6DE] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#111111] hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-[10px] bg-[#F4F4EE] border border-[#E6E6DE] flex items-center justify-center group-hover:bg-[#E8F8F2] group-hover:border-[#99E7D1] transition-colors">
          {icon}
        </div>
        <span className="text-[11px] font-semibold text-[#7E7E76] px-2.5 py-1 rounded-full bg-[#FAFAF8] border border-[#E6E6DE]">
          {category.courseCount} Tracks
        </span>
      </div>

      <h3 className="text-[17px] font-heading font-semibold text-[#111111] mb-2 group-hover:text-[#009E70] transition-colors">
        {category.title}
      </h3>

      <p className="text-[13px] text-[#50504B] leading-relaxed mb-4 line-clamp-2">
        {category.description}
      </p>

      <div className="pt-3 border-t border-[#F0F0EA] flex items-center justify-between text-[12px]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono text-[#7E7E76]">Benchmark CTC</span>
          <span className="font-semibold text-[#111111]">{category.avgPackage}</span>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#FAFAF8] border border-[#E6E6DE] group-hover:bg-[#111111] group-hover:text-white transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
