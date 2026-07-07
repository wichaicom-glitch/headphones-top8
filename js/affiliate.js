/**
 * Shopee Affiliate Link Manager
 * ===============================
 * วิธีใช้:
 * 1. เอาลิงก์ Affiliate จาก Shopee Affiliate Dashboard
 * 2. ใส่ใน affiliateLinks object ด้านล่าง (key ตรงกับ data-affiliate ใน HTML)
 * 3. เวลาคนคลิกปุ่มซื้อ → ไปที่ลิงก์ affiliate + เก็บ click ใน localStorage
 */

const affiliateLinks = {
    'YOUR_AFFILIATE_LINK_1': 'https://shopee.co.th/product-link-1',
    'YOUR_AFFILIATE_LINK_2': 'https://shopee.co.th/product-link-2',
    'YOUR_AFFILIATE_LINK_3': 'https://shopee.co.th/product-link-3',
    'YOUR_AFFILIATE_LINK_4': 'https://shopee.co.th/product-link-4',
    'YOUR_AFFILIATE_LINK_5': 'https://shopee.co.th/product-link-5',
    'YOUR_AFFILIATE_LINK_6': 'https://shopee.co.th/product-link-6',
    'YOUR_AFFILIATE_LINK_7': 'https://shopee.co.th/product-link-7',
    'YOUR_AFFILIATE_LINK_8': 'https://shopee.co.th/product-link-8',
    'YOUR_AFFILIATE_LINK_9': 'https://shopee.co.th/product-link-9',
    'YOUR_AFFILIATE_LINK_10': 'https://shopee.co.th/product-link-10',
};

// ========== Click Tracking ==========
function trackClick(productId) {
    const clicks = JSON.parse(localStorage.getItem('aff_clicks') || '{}');
    clicks[productId] = (clicks[productId] || 0) + 1;
    localStorage.setItem('aff_clicks', JSON.stringify(clicks));
}

// ========== Bind Affiliate Links ==========
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-affiliate]');

    buttons.forEach(btn => {
        const key = btn.getAttribute('data-affiliate');
        const url = affiliateLinks[key];

        if (url && url !== 'https://shopee.co.th/product-link-' + key.slice(-1)) {
            btn.href = url;
            btn.target = '_blank';
            btn.rel = 'nofollow sponsored noopener';

            btn.addEventListener('click', () => {
                trackClick(key);
            });
        } else {
            // ยังไม่ได้ใส่ affiliate link จริง — แจ้งเตือนใน console
            console.warn('⚠️ ยังไม่ได้ใส่ Shopee Affiliate Link สำหรับ:', key);
            btn.href = '#';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('🔧 กำลังตั้งค่าระบบ affiliate — กลับมาใหม่เร็วๆ นี้!');
            });
        }
    });

    // Log stats (dev helper)
    console.log('📊 Affiliate clicks today:', JSON.parse(localStorage.getItem('aff_clicks') || '{}'));
});
