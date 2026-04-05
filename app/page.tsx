"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  Play, Leaf, ShieldCheck, Heart,
  Megaphone, Touchpad, HeartHandshake, Share2,
  Box, Tag, MapPin, Rocket, Store, CheckCircle2,
  ShoppingBag, Globe, Music, Gift, Phone, Mail, X
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });

export default function InteractiveLandingPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const brandImages = [
    "/images/anmora-product.jpg",
    "/images/anmora-product-2.jpg",
    "/images/anmora-product-3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % brandImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [brandImages.length]);

  const [activeTab, setActiveTab] = useState("product");

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const marketingMixData = [
    {
      id: "product",
      title: "Sản phẩm",
      subtitle: "Product",
      icon: Box,
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-emerald-800">
            ANMORA - Nước rửa tay khô thuần chay, cung cấp giải pháp vệ sinh an toàn, tiện lợi và thân thiện với môi trường.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h4 className="font-bold text-emerald-700 flex items-center gap-2 mb-3"><Leaf size={18} /> Thành phần</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Hoạt chất chính từ cồn thực vật (mía/bắp). Glycerin (dừa/cọ) giữ ẩm, gel nha đam làm dịu da. Mùi hương từ tinh dầu thiên nhiên (tràm trà, sả chanh, oải hương, vỏ bưởi). <strong className="text-emerald-800">Không chứa paraben, hương liệu tổng hợp, chất tạo màu.</strong>
              </p>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h4 className="font-bold text-emerald-700 flex items-center gap-2 mb-3"><ShieldCheck size={18} /> Đặc điểm nổi bật</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thuần chay 100%, không thử nghiệm trên động vật. Phù hợp cho cả người lớn và trẻ em. Làm sạch tay nhanh chóng, không gây khô rát dù sử dụng nhiều lần.
              </p>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h4 className="font-bold text-emerald-700 flex items-center gap-2 mb-3"><Box size={18} /> Danh mục</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Đa dạng dung tích: 50ml (tiện lợi mang theo), 100ml (cá nhân), 250ml (gia đình). Dạng refill 500ml khuyến khích tái sử dụng, giảm thiểu rác thải nhựa.
              </p>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h4 className="font-bold text-emerald-700 flex items-center gap-2 mb-3"><Heart size={18} /> Bao bì & Thiết kế</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Vật liệu tái chế/phân hủy sinh học. Tông xanh lá chủ đạo cùng biểu tượng bàn tay sạch và trái tim xanh, tạo cảm giác thân thiện, dễ nhận diện.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "price",
      title: "Giá cả",
      subtitle: "Price",
      icon: Tag,
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-orange-800">
            Chiến lược định giá theo giá trị, dựa trên chất lượng, yếu tố “xanh” và giá trị xã hội mang lại.
          </p>
          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
            <h4 className="font-bold text-orange-800 mb-4">Phân khúc trung bình đến cận cao:</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2">
                <span className="text-stone-700 font-medium">Chai 50ml</span>
                <span className="font-bold text-orange-600">30.000 – 45.000 VNĐ</span>
              </li>
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2">
                <span className="text-stone-700 font-medium">Chai 100ml</span>
                <span className="font-bold text-orange-600">60.000 – 75.000 VNĐ</span>
              </li>
              <li className="flex items-center justify-between border-b border-orange-200/50 pb-2">
                <span className="text-stone-700 font-medium">Chai 250ml</span>
                <span className="font-bold text-orange-600">90.000 – 120.000 VNĐ</span>
              </li>
              <li className="flex items-center justify-between pt-1">
                <span className="text-stone-700 font-medium">Gói Refill 500ml</span>
                <span className="font-bold text-orange-600">~ 150.000 VNĐ</span>
              </li>
            </ul>
          </div>
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex gap-4 items-start">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl"><Tag size={20} /></div>
            <div>
              <h4 className="font-bold text-stone-800 mb-1">Chính sách linh hoạt</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Combo gia đình, ưu đãi trường học & tổ chức. Khuyến mãi theo mùa: "Back to School", Tết, Ngày Trái Đất. Giá xây dựng theo tâm lý: giữ hình ảnh chất lượng cao nhưng vẫn dễ tiếp cận.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "place",
      title: "Phân phối",
      subtitle: "Place",
      icon: Store,
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-blue-800 leading-relaxed">
            ANMORA sử dụng chiến lược phân phối chọn lọc, nhằm đảm bảo sản phẩm tiếp cận đúng đối tượng khách hàng và duy trì ảnh hưởng thương hiệu.
          </p>
          <div className="grid gap-5">

            {/* 1. Giai đoạn đầu (Trực tuyến & Tiện lợi) */}
            <div className="p-5 bg-blue-50 border border-blue-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2"><Globe size={20} className="text-blue-500" /> Giai đoạn đầu (Tập trung kênh trực tuyến)</h4>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                Sản phẩm tập trung vào các kênh trực tuyến như sàn thương mại điện tử và website chính thức, kết hợp với hệ thống cửa hàng tiện lợi. Đây là những kênh có chi phí hợp lý, dễ tiếp cận và phù hợp với hành vi tiêu dùng của nhóm khách hàng trẻ.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-blue-200 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/500px-Shopee_logo.svg.png" alt="Shopee" className="w-5 h-5 object-contain" />
                  <span className="font-bold text-sm text-stone-700">Shopee</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-blue-200 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <img src="https://img.lazcdn.com/g/tps/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt="Lazada" className="w-5 h-5 object-contain" />
                  <span className="font-bold text-sm text-stone-700">Lazada</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-blue-200 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <img src="https://static.vecteezy.com/system/resources/previews/066/712/310/non_2x/tiktok-shop-icon-logo-symbol-free-png.png" alt="TikTok Shop" className="w-5 h-5 object-contain" />
                  <span className="font-bold text-sm text-stone-700">TikTok Shop</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-blue-200 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <Globe size={18} className="text-emerald-600" />
                  <span className="font-bold text-sm text-stone-700">Website chính thức</span>
                </div>
              </div>
            </div>

            {/* 2. Giai đoạn tiếp theo (Truyền thống) */}
            <div className="p-5 bg-blue-50 border border-blue-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><Store size={20} className="text-blue-500" /> Giai đoạn tiếp theo (Kênh truyền thống)</h4>
              <p className="text-stone-600 text-sm ml-7 leading-relaxed">
                Sản phẩm sẽ mở rộng sang các kênh truyền thống như <strong className="text-blue-800">siêu thị, cửa hàng tiện lợi và nhà thuốc</strong> nhằm gia tăng độ phủ và nâng cao độ tin cậy của thương hiệu.
              </p>
            </div>

            {/* 3. Kênh cộng đồng (CSR) */}
            <div className="p-5 bg-blue-50 border border-blue-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><HeartHandshake size={20} className="text-blue-600" /> Kênh phân phối cộng đồng (CSR)</h4>
              <p className="text-stone-600 text-sm ml-7 leading-relaxed">
                Hợp tác với <strong className="text-blue-800">các tổ chức phi lợi nhuận, trường học, bệnh viện và trung tâm bảo trợ trẻ em</strong> để cung cấp sản phẩm miễn phí cho các khu vực khó khăn. Điều này không chỉ giúp mở rộng phạm vi tiếp cận mà còn củng cố hình ảnh thương hiệu gắn liền với trách nhiệm xã hội.
              </p>
            </div>

          </div>
        </div>
      )
    },
    {
      id: "promotion",
      title: "Xúc tiến",
      subtitle: "Promotion",
      icon: Rocket,
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-purple-800 leading-relaxed">
            Chiến dịch truyền thông đa dạng, kết hợp giữa nhận thức cộng đồng và tương tác mạng xã hội.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* PR & Giáo dục */}
            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3">Giáo dục & PR</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> Video ngắn thói quen rửa tay.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> Workshop vệ sinh tại trường học.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> Chiến dịch CSR "Sạch đến trường".</li>
              </ul>
            </div>

            {/* Mạng xã hội */}
            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3">Mạng xã hội (Digital)</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> FB, TikTok, IG lan tỏa lifestyle.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> Thử thách video ngắn sáng tạo.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" /> Hợp tác KOLs/Influencers lối sống xanh.</li>
              </ul>
            </div>
          </div>

          {/* Hoạt động cộng đồng */}
          <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Heart size={20} className="text-purple-600" /> Hoạt động cộng đồng & Giá trị xã hội
            </h4>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              Không chỉ dừng lại ở giá trị sử dụng, ANMORA còn gắn liền với các hoạt động cộng đồng. Thông qua việc lan tỏa ý thức vệ sinh tay và các chương trình trao tặng sản phẩm ở vùng khó khăn, sản phẩm góp phần nâng cao điều kiện vệ sinh cá nhân và bảo vệ sức khỏe cộng đồng. Qua đó, ANMORA không chỉ là một sản phẩm tiêu dùng mà còn là một giải pháp mang ý nghĩa xã hội sâu sắc.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Thông qua sản phẩm nước rửa tay khô của mình, ANMORA mong muốn góp phần nâng cao nhận thức về vệ sinh tay, đồng thời hướng đến các hoạt động cộng đồng như trao tặng sản phẩm cho trẻ em ở vùng cao, giúp các em có thêm điều kiện bảo vệ sức khỏe trong cuộc sống hằng ngày. <strong className="text-purple-800">ANMORA tin rằng một đôi tay sạch không chỉ bảo vệ sức khỏe hôm nay, mà còn góp phần tạo nên một tương lai tốt đẹp hơn cho cộng đồng</strong>.
            </p>
          </div>

          {/* Kích thích mua hàng */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl shrink-0"><Gift size={20} /></div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Kích thích mua hàng</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Các chương trình khuyến mãi: Tặng sản phẩm khi mua combo, ưu đãi cho khách hàng mới, hoặc các chương trình giới thiệu bạn bè (Referral) cũng được triển khai nhằm kích thích hành vi mua hàng.
              </p>
            </div>
          </div>

        </div>
      )
    }
  ];

  return (
    <main className={`min-h-screen bg-stone-50 text-stone-800 overflow-hidden ${jakarta.className}`}>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/70"></div>

        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <span className="uppercase tracking-[0.4em] text-emerald-300 text-sm font-bold mb-6 block">
            Sự kiện ra mắt sản phẩm
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            ANMORA
          </h1>
          <p className="text-xl md:text-3xl font-light italic text-emerald-100 mb-12">
            "Thuần chay tinh khiết – Sạch dịu đôi tay"
          </p>

          {/* Nút Play Video Tương tác */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="flex flex-col items-center justify-center gap-4 cursor-pointer group"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.5)] group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
              <Play className="text-emerald-900 group-hover:text-white ml-2" size={32} />
            </div>
            <span className="text-white font-medium tracking-wide group-hover:text-emerald-300 transition-colors">Xem Câu Chuyện ANMORA</span>
          </div>
        </motion.div>
      </section>

      {/* ================= 1.2: VỀ THƯƠNG HIỆU ================= */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Về Thương Hiệu</h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-10 text-stone-600 leading-relaxed">
              <div className="flex gap-6 items-start">
                <h3 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-br from-emerald-500 to-teal-800 leading-none">AN</h3>
                <p className="mt-2 text-lg">thể hiện sự an toàn, an lành - cam kết cốt lõi của chúng tôi đối với sức khỏe người tiêu dùng.</p>
              </div>

              <div className="flex gap-6 items-start">
                <h3 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-br from-emerald-500 to-teal-800 leading-none">MORA</h3>
                <p className="mt-2 text-lg">mang âm hưởng Latin, gợi liên tưởng đến sự mềm mại, tinh tế chắt lọc từ tự nhiên.</p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl italic mt-6 text-emerald-900">
                Triết lý kinh doanh: Gắn kết chất lượng sản phẩm và trách nhiệm xã hội, xây dựng một cộng đồng sống xanh và nhân văn.
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-150 group">
            {brandImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`ANMORA Product ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-10 z-10">
              <div>
                <p className="text-emerald-300 font-bold tracking-widest text-sm uppercase mb-2">100% Thuần chay</p>
                <p className="text-white font-medium text-2xl">Chiết xuất thiên nhiên, an toàn cho da nhạy cảm.</p>
              </div>
            </div>
            <div className="absolute bottom-10 right-10 flex gap-2 z-20">
              {brandImages.map((_, idx) => (
                <div key={idx} className={`h-2 rounded-full transition-all duration-500 ${idx === currentImg ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= 2.1: MỤC TIÊU SỰ KIỆN (FOCUS HOVER) ================= */}
      <section className="py-32 bg-emerald-950 text-emerald-50 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-[120px]"></div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Mục Tiêu Sự Kiện</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Nhận thức", subtitle: "Awareness", icon: Megaphone, desc: "Tăng độ nhận diện thương hiệu với người yêu sống xanh." },
              { title: "Trải nghiệm", subtitle: "Trial", icon: Touchpad, desc: "Trải nghiệm trực tiếp độ dịu nhẹ của sản phẩm tại booth." },
              { title: "Tương tác", subtitle: "Engagement", icon: HeartHandshake, desc: "Kết nối sâu sắc qua các hoạt động check-in sáng tạo." },
              { title: "Lan tỏa", subtitle: "Word of Mouth", icon: Share2, desc: "Chia sẻ câu chuyện và lan tỏa năng lượng tích cực." }
            ].map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 } }}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl cursor-pointer hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 z-10 hover:z-20"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{goal.title}</h3>
                  <p className="text-emerald-400 font-medium text-sm mb-4 tracking-widest uppercase">{goal.subtitle}</p>
                  <p className="text-emerald-100/70 leading-relaxed">{goal.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* ================= 2.2: CHIẾN LƯỢC 4P (VERTICAL TABS REDESIGN) ================= */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <motion.div variants={staggerItem} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">Chiến Lược Marketing 4P</h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto">Nền tảng tạo giá trị khác biệt và xây dựng hình ảnh bền vững trong dài hạn.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-125">

          {/* CỘT TRÁI: MENU ĐIỀU HƯỚNG */}
          <motion.div variants={staggerItem} className="lg:w-1/3 flex flex-col gap-4">
            {marketingMixData.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 w-full p-6 rounded-2xl transition-all duration-300 text-left border
                    ${isActive
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-xl shadow-emerald-900/20 translate-x-2'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-emerald-50 hover:border-emerald-200'}
                  `}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-emerald-700/50 text-emerald-300' : 'bg-stone-100 text-stone-500'}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl ${isActive ? 'text-white' : 'text-stone-800'}`}>{tab.title}</h3>
                    <p className={`text-sm ${isActive ? 'text-emerald-300' : 'text-stone-400'}`}>{tab.subtitle}</p>
                  </div>
                </button>
              )
            })}
          </motion.div>

          {/* CỘT PHẢI: NỘI DUNG HIỂN THỊ */}
          <motion.div variants={staggerItem} className="lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                {marketingMixData.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      {/* Tiêu đề góc */}
                      <div className="absolute top-0 right-0 opacity-5 pointer-events-none -mt-8 -mr-8">
                        <tab.icon size={300} />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-8 border-b border-stone-100 pb-6 flex items-center gap-4">
                          {tab.title} <span className="text-emerald-500 font-light">/ {tab.subtitle}</span>
                        </h3>
                        {tab.content}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-emerald-950 text-emerald-200 py-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">

          {/* Brand & Slogan */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">ANMORA</h2>
            <p className="text-emerald-400 italic">"Thuần chay tinh khiết – Sạch dịu đôi tay"</p>
          </div>

          {/* Links & Contact */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-6 font-medium">
              <a href="#" className="hover:text-white transition-colors">Về sự kiện</a>
              <a href="#" className="hover:text-white transition-colors">Trải nghiệm</a>
              <a href="#" className="hover:text-white transition-colors">Sản phẩm</a>
            </div>

            {/* Hotline & Email */}
            <div className="flex flex-col space-y-2 text-emerald-300/80 mt-2">
              <a href="tel:+84376992808" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} />
                <span>Hotline: 0376 992 808</span>
              </a>
              <a href="mailto:we@anmoravietnam.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} />
                <span>Email: we@anmoravietnam.com</span>
              </a>
            </div>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
            <p className="text-sm opacity-60">© 2026 ANMORA. All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* ================= VIDEO MODAL POPUP ================= */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-emerald-900/50"
            >
              {/* Nút Đóng (X) */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Khung Video Local */}
              <video
                src="/videos/anmora-intro.mp4"
                autoPlay
                controls
                playsInline
                className="relative z-10 w-full h-full rounded-2xl bg-black"
              >
                Trình duyệt của bạn không hỗ trợ xem video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
