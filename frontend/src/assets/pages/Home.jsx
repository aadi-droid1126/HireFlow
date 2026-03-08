import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import api from "../api/axios.js";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async (search = "") => {
    try {
      setLoading(true);
      const { data } = await api.get(
        search ? `/jobs?keyword=${encodeURIComponent(search)}` : "/jobs"
      );

      if (Array.isArray(data)) {
        setJobs(data);
        setMeta(null);
      } else {
        setJobs(data.data || []);
        setMeta(data.meta || null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => fetchJobs(keyword), 400);
    return () => clearTimeout(delay);
  }, [keyword]);

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* 🔥 HERO */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          HireFlow — Where Talent Meets Opportunity
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Discover opportunities, connect with recruiters, and streamline hiring —
          all in one modern platform.
        </p>
      </div>

      {/* 💎 TRUST STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
        <div className="p-4 rounded-xl bg-gray-50">
          <p className="font-semibold">⚡ Fast Hiring</p>
          <p className="text-sm text-gray-500">Apply and get responses quickly</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50">
          <p className="font-semibold">🔒 Secure Platform</p>
          <p className="text-sm text-gray-500">JWT auth & protected workflows</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50">
          <p className="font-semibold">🎯 Quality Roles</p>
          <p className="text-sm text-gray-500">Curated jobs from recruiters</p>
        </div>
      </div>

      {/* 🔍 SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search jobs, company, location..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full sm:max-w-md px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {meta && (
        <p className="text-sm text-gray-500 mb-4">
          Showing {jobs.length} of {meta.total} jobs
        </p>
      )}

      {/* 🧠 FEATURE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Latest Opportunities</h2>
        <span className="text-sm text-gray-400">Updated in real-time</span>
      </div>

      {/* 🧊 JOB GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : jobs.map((job) => <JobCard key={job._id} job={job} />)}
      </div>

      {/* 🏁 FOOTER AUTHORITY */}
      <div className="text-center mt-16 text-sm text-gray-400">
        Built with MERN Stack • Production-ready hiring platform
      </div>
    </section>
  );
}