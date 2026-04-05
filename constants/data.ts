import {
    Leaf, ShieldCheck, Heart, Droplets,
    Megaphone, Touchpad, HeartHandshake, Share2,
    Box, Tag, Store, Rocket, CheckCircle2
} from 'lucide-react';

export const brandStory = {
    title: "Về Thương Hiệu ANMORA",
    an: '"AN" trong tiếng Việt thể hiện sự an toàn, an lành là cam kết cốt lõi của thương hiệu đối với người tiêu dùng.',
    mora: '"MORA" một từ có nguồn gốc Latin, gợi liên tưởng đến sự mềm mại, tự nhiên và tinh tế.',
    philosophy: 'Triết lý kinh doanh gắn liền giữa chất lượng sản phẩm và trách nhiệm xã hội, hướng đến cộng đồng xanh, sống lành mạnh và nhân văn hơn.'
};

export const productFeatures = [
    {
        title: "Thành phần thiên nhiên",
        desc: "Sử dụng cồn thực vật (từ mía/bắp), glycerin thực vật, gel nha đam và tinh dầu thiên nhiên (tràm trà, sả chanh, oải hương, vỏ bưởi). Không chứa paraben hay hương liệu tổng hợp.",
        icon: Droplets
    },
    {
        title: "Thuần chay & Lành tính",
        desc: "Sản phẩm thuần chay 100%, không thử nghiệm trên động vật, an toàn cho cả người lớn và trẻ em. Dịu nhẹ, không gây khô rát khi sử dụng nhiều lần.",
        icon: ShieldCheck
    },
    {
        title: "Trách nhiệm xã hội",
        desc: "Gắn liền với các hoạt động cộng đồng, trao tặng sản phẩm ở vùng khó khăn giúp trẻ em bảo vệ sức khỏe.",
        icon: Heart
    },
    {
        title: "Bao bì bền vững",
        desc: "Sử dụng vật liệu tái chế hoặc phân hủy sinh học, tông màu xanh lá chủ đạo với biểu tượng bàn tay sạch và trái tim xanh.",
        icon: Leaf
    }
];

export const marketingGoals = [
    {
        id: 'awareness',
        title: 'Nhận thức (Awareness)',
        desc: 'Tăng độ nhận diện thương hiệu trong nhóm khách hàng mục tiêu, đặc biệt là người trẻ và người quan tâm lối sống xanh.',
        icon: Megaphone
    },
    {
        id: 'trial',
        title: 'Trải nghiệm (Trial)',
        desc: 'Khuyến khích tham gia sự kiện trực tiếp trải nghiệm sản phẩm, hình thành ấn tượng tích cực ban đầu.',
        icon: Touchpad
    },
    {
        id: 'engagement',
        title: 'Tương tác (Engagement)',
        desc: 'Tạo tương tác giữa khách hàng và thương hiệu qua trải nghiệm, check-in và chia sẻ mạng xã hội.',
        icon: HeartHandshake
    },
    {
        id: 'wom',
        title: 'Lan tỏa (Word-of-mouth)',
        desc: 'Thúc đẩy khách hàng chia sẻ trải nghiệm cá nhân, quảng bá thương hiệu tự nhiên và rộng rãi.',
        icon: Share2
    }
];

export const marketingMix4P = [
    {
        id: 'product',
        title: 'Product (Sản phẩm)',
        icon: Box,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        details: [
            "Giải pháp vệ sinh an toàn, tiện lợi, thân thiện môi trường.",
            "Thành phần: Cồn thực vật, Glycerin, Gel nha đam, Tinh dầu thiên nhiên.",
            "Dung tích: 50ml, 100ml, 250ml và dạng refill 500ml.",
            "Bao bì: Vật liệu tái chế/phân hủy sinh học."
        ]
    },
    {
        id: 'price',
        title: 'Price (Giá cả)',
        icon: Tag,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        details: [
            "Chiến lược định giá theo giá trị.",
            "Chai 50ml: 30.000 – 45.000 VNĐ.",
            "Chai 100ml: 60.000 – 75.000 VNĐ.",
            "Chai 250ml: 90.000 – 120.000 VNĐ.",
            "Gói refill 500ml: ~150.000 VNĐ.",
            "Chính sách linh hoạt: Combo gia đình, ưu đãi trường học."
        ]
    },
    {
        id: 'place',
        title: 'Place (Phân phối)',
        icon: Store,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        details: [
            "Chiến lược phân phối chọn lọc.",
            "Giai đoạn đầu: Sàn TMĐT, website chính thức, cửa hàng tiện lợi.",
            "Giai đoạn sau: Siêu thị, nhà thuốc.",
            "Kênh CSR: Hợp tác tổ chức phi lợi nhuận, trường học cung cấp sản phẩm miễn phí vùng khó khăn."
        ]
    },
    {
        id: 'promotion',
        title: 'Promotion (Xúc tiến)',
        icon: Rocket,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        details: [
            "Chương trình giáo dục cộng đồng, PR chiến dịch 'Sạch đến trường'.",
            "Nền tảng số: Facebook, TikTok, Instagram lan tỏa lối sống xanh.",
            "Hợp tác KOLs/Influencers theo đuổi lối sống xanh.",
            "Khuyến mãi: Tặng sản phẩm mua combo, ưu đãi khách mới."
        ]
    }
];