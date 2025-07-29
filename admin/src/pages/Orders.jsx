// src/pages/admin/OrderShipments.jsx
import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaTools,
  FaTruck,
  FaArrowRight,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaTh,
  FaBars,
  FaClock,
  FaCheckCircle,
  FaTimes,
  FaShippingFast,
  FaMapMarkerAlt,
  FaUserCircle,
  FaMoneyBillWave,
  FaRegDotCircle,
  FaCheck,
  FaClipboardList,
  FaSpinner,
  FaCalendarAlt,
  FaEye
} from "react-icons/fa";

// --- Mock Data (add product/service for each type) ---
const fetchAllOrders = () =>
  Promise.resolve([
    {
      id: "P-1021",
      type: "product",
      customer: "Ayan Sharma",
      product: "Lathe Machine",
      items: 2,
      amount: 15500,
      placed: "2025-07-28",
      status: "pending",
      address: "Gurgaon, IN",
    },
    {
      id: "P-1042",
      type: "product",
      customer: "Shweta Designs",
      product: "Drill Press",
      items: 4,
      amount: 36800,
      placed: "2025-07-25",
      status: "shipped",
      address: "Hyderabad, IN",
    },
    {
      id: "S-2091",
      type: "service",
      customer: "AVX Tech",
      service: "Machine Calibration",
      duration: "2 h",
      amount: 6200,
      placed: "2025-07-26",
      status: "processing",
      address: "Ahmedabad, IN",
    },
    {
      id: "S-2017",
      type: "service",
      customer: "Prakash Mach.",
      service: "Annual Maintenance",
      duration: "6 h",
      amount: 14000,
      placed: "2025-07-24",
      status: "delivered",
      address: "Kolkata, IN",
    },
    // Add more as needed...
  ]);

// --- Shipment Stepper ---
const PROGRESS = [
  { key: "pending",     label: "Pending",      icon: FaRegDotCircle },
  { key: "processing",  label: "Processing",   icon: FaClock },
  { key: "shipped",     label: "Shipped",      icon: FaShippingFast },
  { key: "delivered",   label: "Delivered",    icon: FaCheckCircle },
  // No step for "cancelled" in shipment flow stepper
];
const STATUS_AVAIL = ["pending","processing","shipped","delivered","cancelled"];
const STATUS_ORDER = ["pending","processing","shipped","delivered"];
const badge = {
  pending:    "bg-gradient-to-r from-slate-200 to-cyan-200 text-slate-700",
  processing: "bg-cyan-100 text-cyan-700",
  shipped:    "bg-blue-100 text-blue-700",
  delivered:  "bg-green-100 text-green-700",
  cancelled:  "bg-rose-100 text-rose-700",
};
const money = (n) => `₹${n.toLocaleString()}`;
const cls = (...c) => c.filter(Boolean).join(" ");
function nextStatus(curr) {
  const idx = STATUS_ORDER.indexOf(curr);
  return idx !== -1 && idx < STATUS_ORDER.length-1 ? STATUS_ORDER[idx+1] : null;
}

// --- Stat Card ---
function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-br from-${color}-400/80 to-white/60 shadow-xl p-6 overflow-hidden flex items-center`}>
      <div className={`absolute right-3 bottom-3 text-${color}-200 text-[5rem] opacity-10 pointer-events-none`}>
        <Icon />
      </div>
      <div className="z-10">
        <p className="uppercase text-xs text-gray-700 font-semibold tracking-widest mb-2">{label}</p>
        <h2 className={`text-3xl font-extrabold text-${color}-700 mb-2`}>{value}</h2>
      </div>
    </div>
  );
}
// --- Status Stepper ---
function StatusStepper({ status }) {
  const idx = PROGRESS.findIndex((s) => s.key === status);
  return (
    <div className="flex items-center gap-2 justify-center">
      {PROGRESS.map((step, i) => (
        <React.Fragment key={step.key}>
          <div className="flex flex-col items-center">
            <div className={cls(
              "w-7 h-7 flex items-center justify-center rounded-full shadow transition-all duration-300",
              idx > i
                ? "bg-green-500 text-white"
                : idx === i
                  ? "bg-blue-500 text-white animate-bounce"
                  : "bg-slate-200 text-gray-400"
            )}>
              <step.icon />
            </div>
            <div className="text-[11px] mt-1 font-semibold text-slate-500">{step.label}</div>
          </div>
          {i < PROGRESS.length-1 && (<FaArrowRight className={cls(
            "text-lg mx-1",
            idx > i ? "text-green-400" : "text-slate-300"
          )}/>)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function OrderShipments() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [tab, setTab] = useState("product"); // product | service
  const [view, setView] = useState("cards");
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const perPage = 6;
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  // --- load/filter ---
  useEffect(() => {
    setLoading(true);
    fetchAllOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  const filtered = orders
    .filter((o) => o.type === tab)
    .filter((o) => status === "all" || o.status === status)
    .filter((o) =>
      [o.id, o.customer, o.address, o.items, o.product, o.service]
        .join(" ")
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    )
    .sort((a, b) =>
      sort === "asc"
        ? new Date(a.placed) - new Date(b.placed)
        : new Date(b.placed) - new Date(a.placed)
    );
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const slice = filtered.slice((page - 1) * perPage, page * perPage);

  // --- summary info ---
  const allBy = (f) => orders.filter((o) => o.type === tab && (typeof f === "string" ? o.status === f : f(o))).length;

  // --- status patch ---
  function advanceStatus(id) {
    setOrders((all) =>
      all.map((o) =>
        o.id === id
          ? { ...o, status: nextStatus(o.status) || o.status }
          : o
      )
    );
  }

  // --- UI ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-100 to-cyan-50 py-8 px-4 md:px-12 space-y-10 select-none relative overflow-x-hidden">
      {/* -- Stats -- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 animate-fadeInUp">
        <StatCard label="Total Orders" value={allBy(()=>true)} icon={FaClipboardList} color="indigo" />
        <StatCard label="Pending" value={allBy("pending")} icon={FaClock} color="violet" />
        <StatCard label="Shipped" value={allBy("shipped")} icon={FaShippingFast} color="blue" />
        <StatCard label="Delivered" value={allBy("delivered")} icon={FaCheckCircle} color="teal" />
      </div>
      {/* -- Bar: Tabs, Search, Filter, View -- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white bg-opacity-60 rounded-2xl p-4 shadow-xl animate-fadeInUp delay-2">
        <div className="flex gap-2 flex-wrap">
          <button
            className={cls(
              "px-5 py-2 rounded-xl font-bold transition text-sm flex items-center gap-2",
              tab === "product"
                ? "bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow"
                : "bg-white hover:bg-indigo-50 text-indigo-700"
            )}
            onClick={() => (setTab("product"), setPage(1))}
          >
            <FaBoxOpen /> Products
          </button>
          <button
            className={cls(
              "px-5 py-2 rounded-xl font-bold transition text-sm flex items-center gap-2",
              tab === "service"
                ? "bg-gradient-to-r from-teal-500 to-cyan-400 text-white shadow"
                : "bg-white hover:bg-teal-50 text-teal-700"
            )}
            onClick={() => (setTab("service"), setPage(1))}
          >
            <FaTools /> Services
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="relative w-30 md:w-40">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input
              placeholder="Search…"
              value={search}
              onChange={e => (setSearch(e.target.value), setPage(1))}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white shadow border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none font-medium text-sm"
            />
          </div>
          <select
            value={status}
            onChange={e => (setStatus(e.target.value), setPage(1))}
            className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 shadow bg-white font-medium text-sm"
          >
            <option value="all">All Status</option>
            {STATUS_AVAIL.map(s => <option key={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
          <button
            className={cls(
              "w-10 h-10 flex items-center justify-center text-lg rounded-xl transition",
              view === "cards"
                ? "bg-gradient-to-r from-violet-400 to-indigo-500 text-white shadow"
                : "bg-white text-indigo-700 hover:bg-indigo-100"
            )}
            onClick={() => setView("cards")}
            title="Cards View"
          >
            <FaTh />
          </button>
          <button
            className={cls(
              "w-10 h-10 flex items-center justify-center text-lg rounded-xl transition",
              view === "list"
                ? "bg-gradient-to-r from-violet-400 to-indigo-500 text-white shadow"
                : "bg-white text-indigo-700 hover:bg-indigo-100"
            )}
            onClick={() => setView("list")}
            title="List View"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* -- Order Cards -- */}
      {view === "cards" && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {slice.map((o, idx) => (
            <div
              key={o.id}
              className="relative group rounded-3xl shadow-xl bg-white/70 backdrop-blur p-6 overflow-hidden flex flex-col gap-5 animate-fadeCard"
              style={{ animationDelay: `${idx * 0.04 + 0.1}s` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-4 py-1 rounded-full shadow-sm text-xs font-bold uppercase ${badge[o.status]} transition-all duration-200`}>
                {o.status}
              </div>
              {/* Stepper */}
              <div className="mb-3">
                <StatusStepper status={o.status} />
              </div>
              {/* Main Info */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-200 via-white to-blue-100 shadow flex items-center justify-center text-2xl text-indigo-700">
                  {o.type === "product" ? <FaBoxOpen /> : <FaTools />}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{o.customer}</h2>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FaMapMarkerAlt /> {o.address}
                  </p>
                </div>
              </div>
              {/* Product/Service Info */}
              <div className="text-gray-700 flex flex-col gap-1 text-sm pl-1">
                {o.type === "product" ? (
                  <span>
                    <FaBoxOpen className="inline mr-1" />
                    {o.product}{o.items ? ` (${o.items})` : ""}
                  </span>
                ) : (
                  <>
                    <span>
                      <FaTools className="inline mr-1" /> {o.service}
                    </span>
                    <span>
                      <FaClock className="inline mr-1" /> {o.duration}
                    </span>
                  </>
                )}
                <span>
                  <FaCalendarAlt className="inline mr-1" /> Placed: {o.placed}
                </span>
                <span>
                  <FaMoneyBillWave className="inline mr-1" /> {money(o.amount)}
                </span>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="transition bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-200 hover:scale-105 font-semibold text-sm"
                  onClick={() => setModal(o)}
                  title="View Details"
                >
                  <FaEye className="mr-1 inline" />
                  View
                </button>
                {o.status !== "delivered" && o.status !== "cancelled" && nextStatus(o.status) && (
                  <button
                    className="transition bg-gradient-to-r from-teal-400 to-blue-400 text-white px-4 py-2 rounded-xl shadow hover:-translate-y-1 font-semibold text-sm flex items-center gap-1"
                    onClick={() => advanceStatus(o.id)}
                    title="Update Status"
                  >
                    <FaCheckCircle className="inline" />
                    {nextStatus(o.status).charAt(0).toUpperCase() + nextStatus(o.status).slice(1)}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* -- Table View -- */}
      {view === "list" && (
        <div className="max-w-7xl mx-auto overflow-x-auto animate-fadeInUp delay-1">
          <table className="w-full text-sm shadow border-separate border-spacing-y-3">
            <thead>
              <tr className="text-xs uppercase text-gray-500 text-left">
                <th>ID</th>
                <th>Customer</th>
                <th>{tab === "product" ? "Product" : "Service"}</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th className="text-center">Shipment</th>
              </tr>
            </thead>
            <tbody>
              {slice.map((o) => (
                <tr key={o.id} className="bg-white/90 shadow rounded-xl">
                  <td className="px-4 py-3 font-semibold">{o.id}</td>
                  <td className="px-4 py-3">{o.customer}</td>
                  <td className="px-4 py-3">
                    {tab === "product" ? (
                      <span>
                        {o.product}{o.items ? ` (${o.items})` : ""}
                      </span>
                    ) : (
                      <span>{o.service}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{money(o.amount)}</td>
                  <td className="px-4 py-3">{o.placed}</td>
                  <td className="px-4 py-3">
                    <StatusStepper status={o.status} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {o.status !== "delivered" && o.status !== "cancelled" && nextStatus(o.status) && (
                      <button
                        className="transition bg-gradient-to-r from-teal-400 to-blue-400 text-white px-3 py-2 rounded-xl hover:-translate-y-1 font-semibold text-xs"
                        onClick={() => advanceStatus(o.id)}
                      >
                        <FaCheckCircle className="inline mb-0.5" /> {nextStatus(o.status)}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* -- Pagination -- */}
      {pages > 1 && (
        <nav className="flex justify-center items-center gap-2 pt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="w-9 h-9 flex items-center justify-center rounded-xl transition bg-white shadow border hover:bg-indigo-50 disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={cls(
                "w-9 h-9 rounded-xl transition mx-1",
                page === n
                  ? "bg-gradient-to-r from-indigo-400 to-violet-400 text-white shadow-lg"
                  : "bg-white border shadow hover:bg-indigo-50"
              )}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pages))}
            disabled={page === pages}
            className="w-9 h-9 flex items-center justify-center rounded-xl transition bg-white shadow border hover:bg-indigo-50 disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </nav>
      )}
      {/* -- Loading Spinner -- */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
          <FaSpinner className="text-4xl text-indigo-400 animate-spin" />
        </div>
      )}
      {/* -- Modal: Order Details -- */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-7 animate-fadeCard">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl flex items-center gap-2">
                <FaClipboardList /> Order {modal.id}
              </h2>
              <button
                onClick={() => setModal(null)}
                className="p-2 hover:bg-indigo-50 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2"><FaUserCircle /> <b>Customer:</b> {modal.customer}</div>
              {modal.type === "product" && (
                <div className="flex items-center gap-2">
                  <FaBoxOpen /> <b>Product:</b> {modal.product}{modal.items ? ` (${modal.items})` : ""}
                </div>
              )}
              {modal.type === "service" && (
                <>
                  <div className="flex items-center gap-2"><FaTools /><b>Service:</b> {modal.service}</div>
                  <div className="flex items-center gap-2"><FaClock /> <b>Duration:</b> {modal.duration}</div>
                </>
              )}
              <div className="flex items-center gap-2"><FaMoneyBillWave /> <b>Amount:</b> {money(modal.amount)}</div>
              <div className="flex items-center gap-2"><FaCalendarAlt /> <b>Date:</b> {modal.placed}</div>
              <div className="flex items-center gap-2"><FaMapMarkerAlt /> <b>Address:</b> {modal.address}</div>
              <div className="flex items-center gap-2"><FaCheckCircle /> <b>Status:</b> <StatusStepper status={modal.status}/></div>
            </div>
          </div>
        </div>
      )}
      {/* --- Animations --- */}
      <style>{`
        @keyframes fadeInUp {from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
        @keyframes fadeCard {0%{transform:scale(0.95);opacity:0;} 80%{opacity:1;} 100%{opacity:1;transform:scale(1);}}
        .animate-fadeInUp {animation:fadeInUp 0.5s cubic-bezier(.7,.5,.5,1) both;}
        .animate-fadeCard {animation:fadeCard 0.4s .1s cubic-bezier(.75,.05,.5,1.2) both;}
        .animate-fadeIn   {animation:fadeInUp 0.25s;}
      `}</style>
    </div>
  );
}
