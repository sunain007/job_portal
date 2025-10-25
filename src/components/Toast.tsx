import { X, Check, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
  const Icon = type === 'success' ? Check : AlertCircle;

  return (
    <div className="fixed bottom-6 right-6 z-[70] fade-in">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md`}>
        <Icon size={20} />
        <p className="flex-1">{message}</p>
        <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 rounded p-1">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
