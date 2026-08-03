"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Bike,
  Flame,
  X,
  Check,
} from "lucide-react";

interface Category {
  name: string;
  description: string;
  icon: string;
  color: string;
  active: boolean;
}

interface Props {
  open: boolean;
  mode: "create" | "edit";
  initialData?: Partial<Category>;
  onClose: () => void;
  onSubmit?: (data: Category) => void;
}

const icons = [
  {
    value: "dumbbell",
    icon: Dumbbell,
  },
  {
    value: "legs",
    icon: PersonStanding,
  },
  {
    value: "cardio",
    icon: HeartPulse,
  },
  {
    value: "bike",
    icon: Bike,
  },
  {
    value: "hiit",
    icon: Flame,
  },
];

const colors = [
  "bg-lime-400",
  "bg-sky-400",
  "bg-violet-500",
  "bg-red-500",
  "bg-yellow-400",
];

export default function CategoryModal({
  open,
  mode,
  initialData,
  onClose,
  onSubmit,
}: Props) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState<Category>({
    name: "",
    description: "",
    icon: "dumbbell",
    color: "bg-lime-400",
    active: true,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name ?? "",
        description: initialData.description ?? "",
        icon: initialData.icon ?? "dumbbell",
        color: initialData.color ?? "bg-lime-400",
        active: initialData.active ?? true,
      });
    }
  }, [initialData]);

  const SelectedIcon =
    icons.find((i) => i.value === form.icon)?.icon ?? Dumbbell;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .95 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#141414]"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h2 className="text-3xl font-black text-white">
                  {isEdit ? "Edit Category" : "Create Category"}
                </h2>

                <p className="mt-2 text-gray-400">
                  Organize your exercises.
                </p>
              </div>

              <button onClick={onClose}>
                <X className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="grid gap-10 p-8 xl:grid-cols-[1fr_350px]">
              {/* FORM */}

              <div className="space-y-8">
                <div>
                  <label className="mb-2 block text-gray-400">
                    Name
                  </label>

                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-gray-400">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        description: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#101010] p-4 text-white outline-none focus:border-lime-400"
                  />
                </div>

                {/* ICONS */}

                <div>
                  <label className="mb-3 block text-gray-400">
                    Icon
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {icons.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.value}
                          onClick={() =>
                            setForm({
                              ...form,
                              icon: item.value,
                            })
                          }
                          className={`rounded-2xl border p-4 transition ${
                            form.icon === item.value
                              ? "border-lime-400 bg-lime-400/10 text-lime-400"
                              : "border-white/10 bg-[#1B1B1B] text-gray-400"
                          }`}
                        >
                          <Icon />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* COLORS */}

                <div>
                  <label className="mb-3 block text-gray-400">
                    Accent Color
                  </label>

                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setForm({
                            ...form,
                            color,
                          })
                        }
                        className={`h-12 w-12 rounded-full ${color} ${
                          form.color === color
                            ? "ring-4 ring-white"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 p-5">
                  <span className="text-white">
                    Active
                  </span>

                  <button
                    onClick={() =>
                      setForm({
                        ...form,
                        active: !form.active,
                      })
                    }
                    className={`flex h-7 w-14 items-center rounded-full p-1 transition ${
                      form.active
                        ? "bg-lime-400"
                        : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 rounded-full bg-white transition ${
                        form.active
                          ? "translate-x-7"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={onClose}
                    className="rounded-xl bg-[#222] px-6 py-3 text-white"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => onSubmit?.(form)}
                    className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black"
                  >
                    {isEdit
                      ? "Update Category"
                      : "Create Category"}
                  </button>
                </div>
              </div>

              {/* PREVIEW */}

              <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8">
                <h3 className="text-xl font-bold text-white">
                  Live Preview
                </h3>

                <div className="mt-8 rounded-3xl bg-[#111111] p-8 text-center">
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl ${form.color}`}
                  >
                    <SelectedIcon
                      size={36}
                      className="text-black"
                    />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    {form.name || "Category"}
                  </h4>

                  <p className="mt-3 text-gray-400">
                    {form.description ||
                      "Category description"}
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Check
                      className={
                        form.active
                          ? "text-lime-400"
                          : "text-red-400"
                      }
                    />

                    <span
                      className={
                        form.active
                          ? "text-lime-400"
                          : "text-red-400"
                      }
                    >
                      {form.active
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}