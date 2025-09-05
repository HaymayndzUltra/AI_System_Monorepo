import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface KPICardProps {
  title: string
  value: number
  change: number
  changeType: 'positive' | 'negative' | 'neutral'
  format: 'number' | 'currency' | 'percentage'
  icon: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, change, changeType, format, icon: Icon, trend }) => {
  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value)
      case 'percentage':
        return `${value.toFixed(2)}%`
      case 'number':
        return new Intl.NumberFormat('en-US').format(value)
      default:
        return value.toString()
    }
  }

  const getChangeIcon = () => {
    switch (changeType) {
      case 'positive':
        return TrendingUp
      case 'negative':
        return TrendingDown
      default:
        return Minus
    }
  }

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600'
      case 'negative':
        return 'text-red-600'
      default:
        return 'text-neutral-500'
    }
  }

  const getChangeBgColor = () => {
    switch (changeType) {
      case 'positive':
        return 'bg-green-50'
      case 'negative':
        return 'bg-red-50'
      default:
        return 'bg-neutral-50'
    }
  }

  const ChangeIcon = getChangeIcon()

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getChangeBgColor()} ${getChangeColor()}`}>
          <ChangeIcon className="w-3 h-3" />
          <span>{Math.abs(change).toFixed(1)}%</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-neutral-600 mb-1">{title}</h3>
        <div className="text-2xl font-bold text-neutral-900 mb-2">
          {formatValue(value, format)}
        </div>
        <div className="flex items-center space-x-1 text-sm text-neutral-500">
          <span>vs last period</span>
        </div>
      </div>
    </motion.div>
  )
}
