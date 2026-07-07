# 🎧 หูฟังไร้สาย Top10 — Shopee Affiliate Site

เว็บรีวิวจัดอันดับหูฟัง Bluetooth งบไม่เกิน 1,500 บาท สร้างรายได้ผ่าน Shopee Affiliate

## 🗂️ โครงสร้าง

```
headphones-top10/
├── index.html      ← หน้าเว็บหลัก (Top 10 + รีวิว + FAQ)
├── css/
│   └── style.css   ← ดีไซน์ responsive รองรับมือถือ
└── js/
    └── affiliate.js ← จัดการ affiliate links + click tracking
```

## 🚀 วิธี Deploy (ฟรี!)

### GitHub Pages (แนะนำ)
```bash
cd headphones-top10
git init
git add .
git commit -m "🎧 Shopee Affiliate Site v1"
gh repo create headphones-top10 --public --push
# ไป Settings > Pages > Source: main branch > Save
# เว็บจะอยู่ที่ https://[username].github.io/headphones-top10
```

### Cloudflare Pages (ทางเลือก ฟรี ไม่จำกัด bandwidth)
- เข้า https://pages.cloudflare.com
- เชื่อม GitHub repo เดียวกัน
- Deploy อัตโนมัติทุกครั้งที่ push

## 🔗 ใส่ลิงก์ Affiliate

1. เข้า [Shopee Affiliate Dashboard](https://affiliate.shopee.co.th)
2. ค้นหาสินค้าแต่ละตัว → Copy Affiliate Link
3. เปิด `js/affiliate.js` → ใส่ลิงก์ใน `affiliateLinks`

ตัวอย่าง:
```js
const affiliateLinks = {
    'YOUR_AFFILIATE_LINK_1': 'https://s.shopee.co.th/xxxxxxxxx',
    'YOUR_AFFILIATE_LINK_2': 'https://s.shopee.co.th/xxxxxxxxx',
    // ... ใส่ให้ครบ 10 ตัว
};
```

## 📈 ทำ SEO ให้ติดอันดับ

- ✅ Title + Meta Description ใส่ keyword ครบ
- ✅ Semantic HTML (h1-h3, article, section)
- ✅ Mobile-friendly (responsive)
- ✅ Fast (static HTML, no framework)
- ⬜ ใส่รูปจริงแทน img-placeholder
- ⬜ สมัคร Google Search Console + submit sitemap
- ⬜ สร้าง backlink จาก Facebook Page / Pantip / Twitter

## 🔜 Next Steps

1. ถ่ายรูปหรือหา Product Image มาใส่แทน placeholder
2. ใส่ affiliate link จริง
3. Deploy ขึ้น GitHub Pages
4. Submit URL ใน Google Search Console
5. แชร์ลง Social Media (Facebook Groups หูฟัง, Pantip, Twitter)

**รายได้ประมาณการ:** CTR 3-5% × Commission 5% = ~฿15-40 ต่อคำสั่งซื้อ
ถ้ามี Traffic 1,000 visits/เดือน → ~฿300-1,000/เดือน (เพิ่มขึ้นเรื่อยๆ ตาม SEO)
