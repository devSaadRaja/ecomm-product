import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BabyPattern from "@/components/BabyPattern";
import { BabyIcon } from "@/components/BabyIcon";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#4E342E] text-[#FFF8E7] overflow-hidden">
      <section className="relative py-12 md:py-24 overflow-hidden">
        <BabyPattern className="absolute inset-0 opacity-5" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E7F80]/10 rounded-full filter blur-3xl"></div>

        <div className="container relative">
          <div className="absolute top-10 left-10 animate-float">
            <BabyIcon.Star className="w-8 h-8 text-[#FF6B35]/30" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-delay">
            {/* <BabyIcon.Moon className="w-10 h-10 text-[#FF6B35]/30" /> */}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 bg-[#FF6B35]/10 rounded-full mb-2">
                  <span className="text-sm font-medium text-[#FF6B35] font-heading">
                    Welcome to BabyBliss
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-heading text-[#FFF8E7] relative">
                  <span className="relative inline-block">
                    Tiny Treasures
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5C32.3333 1.16667 69.6667 -0.5 103 1.5C136.333 3.5 173.667 6.33333 199 7.5"
                        stroke="#FF6B35"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  for Your Little One
                </h1>
                <p className="max-w-[600px] text-[#FFF8E7]/80 md:text-xl font-sans">
                  Discover our magical collection of newborn essentials designed
                  with love for your baby's comfort and your peace of mind.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#FF6B35] text-[#FFF8E7] hover:bg-[#FF6B35]/90 font-heading rounded-full px-6">
                  Shop Now
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#6E7F80] text-[#FFF8E7] hover:bg-[#6E7F80]/20 font-sans rounded-full px-6"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-2">
                  {[
                    {
                      query: "smiling mother with baby",
                      alt: "Happy mother",
                      img: "/asian-woman-headshot.png",
                    },
                    {
                      query: "young father holding newborn",
                      alt: "Proud father",
                      img: "/latina-woman-headshot.png",
                    },
                    {
                      query: "parent with infant",
                      alt: "Parent with baby",
                      img: "/black-man-headshot.png",
                    },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#FFF8E7]/20 overflow-hidden"
                    >
                      <Image
                        src={avatar.img}
                        alt={avatar.alt}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-[#FF6B35] font-bold">500+</span> happy
                  parents
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B35]/5 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] overflow-hidden rounded-[30px] border-4 border-[#FFF8E7]/10">
                <Image
                  src="/soft-baby-blanket.png"
                  alt="Newborn baby with soft organic cotton blanket"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 transform rotate-12">
                  <BabyIcon.Pacifier className="w-16 h-16 text-[#FF6B35]" />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#4E342E]/80 backdrop-blur-sm p-3 rounded-2xl">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                      <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                      <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                      <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                      <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                    </div>
                    <p className="text-sm font-medium text-[#FFF8E7]">
                      Bestseller
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <BabyIcon.Organic className="w-8 h-8 text-[#FF6B35]" />,
                text: "100% Organic",
              },
              {
                icon: <BabyIcon.Eco className="w-8 h-8 text-[#FF6B35]" />,
                text: "Eco-Friendly",
              },
              {
                icon: <BabyIcon.Safe className="w-8 h-8 text-[#FF6B35]" />,
                text: "Baby Safe",
              },
              {
                icon: <BabyIcon.Delivery className="w-8 h-8 text-[#FF6B35]" />,
                text: "Fast Delivery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-[#6E7F80]/5 rounded-2xl"
              >
                {item.icon}
                <p className="mt-2 text-sm font-medium text-[#FFF8E7]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Spotlight */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[#6E7F80]/10 skew-y-3"></div>
        <div className="container relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35]/10 mb-4">
              <BabyIcon.Teddy className="w-8 h-8 text-[#FF6B35]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading text-[#FF6B35]">
              Featured Product
            </h2>
            <p className="max-w-[700px] text-[#FFF8E7]/80 md:text-xl/relaxed font-sans">
              Our most loved organic cotton swaddle blanket, perfect for keeping
              your newborn cozy and secure.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#FF6B35]/5 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-[30px] border-4 border-[#FFF8E7]/10">
                <Image
                  src="/organic-cotton-swaddle.png"
                  alt="Organic cotton swaddle blanket"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FF6B35] px-4 py-2 rounded-full transform -rotate-6">
                  <p className="text-xs font-bold text-[#FFF8E7]">
                    NEW ARRIVAL
                  </p>
                </div>
                <div className="absolute -bottom-6 -left-6 transform -rotate-12">
                  <BabyIcon.Blocks className="w-16 h-16 text-[#FF6B35]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-heading text-[#FFF8E7]">
                  Organic Cotton Swaddle Blanket
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#FFF8E7]/80 ml-2">
                    (124 reviews)
                  </span>
                </div>
                <div className="inline-block px-4 py-2 bg-[#FF6B35]/10 rounded-full">
                  <p className="text-2xl font-bold text-[#FF6B35]">$29.99</p>
                </div>
                <p className="max-w-[600px] text-[#FFF8E7]/80 font-sans">
                  Made from 100% GOTS certified organic cotton, our swaddle
                  blanket is ultra-soft, breathable, and gentle on your baby's
                  sensitive skin. The generous size (47" x 47") makes it perfect
                  for swaddling, nursing cover, stroller cover, or tummy time
                  mat.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { label: "Material", value: "100% Organic Cotton" },
                    { label: "Size", value: '47" x 47"' },
                    { label: "Care", value: "Machine Washable" },
                    { label: "Safety", value: "Hypoallergenic" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#6E7F80]/5 p-3 rounded-xl">
                      <p className="text-xs text-[#FFF8E7]/60 font-sans">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#FFF8E7] font-sans">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button className="bg-[#FF6B35] text-[#FFF8E7] hover:bg-[#FF6B35]/90 font-heading rounded-full px-6">
                  Add to Cart
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#6E7F80] text-[#FFF8E7] hover:bg-[#6E7F80]/20 font-sans rounded-full px-6"
                >
                  View Details
                </Button>
              </div>

              <div className="flex items-center gap-2 mt-4 p-3 bg-[#FF6B35]/5 rounded-xl">
                <div className="flex-shrink-0">
                  <BabyIcon.Shipping className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <p className="text-sm text-[#FFF8E7]/80 font-sans">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 relative overflow-hidden">
        <BabyPattern className="absolute inset-0 opacity-5" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E7F80]/10 rounded-full filter blur-3xl"></div>

        <div className="container relative">
          <div className="absolute top-10 right-20 animate-float">
            <BabyIcon.Cloud className="w-12 h-12 text-[#FF6B35]/20" />
          </div>
          <div className="absolute bottom-20 left-10 animate-float-delay">
            <BabyIcon.Star className="w-8 h-8 text-[#FF6B35]/20" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <BabyIcon.Crown className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading text-[#FF6B35]">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/products"
              className="flex items-center text-[#FFF8E7] hover:text-[#FF6B35] transition-colors font-sans bg-[#6E7F80]/10 px-4 py-2 rounded-full"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              product={{
                id: "1",
                name: "Organic Cotton Onesie",
                price: 24.99,
                image: "/organic-cotton-onesie.png",
                rating: 4.8,
                reviewCount: 86,
              }}
            />
            <ProductCard
              product={{
                id: "2",
                name: "Soft Baby Blanket",
                price: 34.99,
                image: "/soft-baby-blanket.png",
                rating: 4.9,
                reviewCount: 112,
              }}
            />
            <ProductCard
              product={{
                id: "3",
                name: "Wooden Teething Toy",
                price: 19.99,
                image: "/wooden-baby-teether.png",
                rating: 4.7,
                reviewCount: 64,
              }}
            />
            <ProductCard
              product={{
                id: "4",
                name: "Baby Care Gift Set",
                price: 49.99,
                image: "/placeholder.svg",
                rating: 4.9,
                reviewCount: 93,
                badge: "BESTSELLER",
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[#6E7F80]/10 -skew-y-3"></div>
        <div className="container relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35]/10 mb-4">
              <BabyIcon.Heart className="w-8 h-8 text-[#FF6B35]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading text-[#FF6B35]">
              Why Parents Love Us
            </h2>
            <p className="max-w-[700px] text-[#FFF8E7]/80 md:text-xl/relaxed font-sans">
              We're committed to providing the best for your little one with
              products that are safe, sustainable, and stylish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BabyIcon.Organic className="w-10 h-10 text-[#FF6B35]" />,
                title: "Organic Materials",
                description:
                  "All our products are made from certified organic materials, free from harmful chemicals.",
              },
              {
                icon: <BabyIcon.Heart className="w-10 h-10 text-[#FF6B35]" />,
                title: "Made with Love",
                description:
                  "Each product is thoughtfully designed with your baby's comfort and development in mind.",
              },
              {
                icon: <BabyIcon.Safe className="w-10 h-10 text-[#FF6B35]" />,
                title: "Safety First",
                description:
                  "All our products undergo rigorous testing to ensure they meet the highest safety standards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-[30px] bg-[#4E342E] border-2 border-[#6E7F80]/20 hover:border-[#FF6B35]/30 transition-all hover:shadow-lg hover:shadow-[#FF6B35]/5 group"
              >
                <div className="p-4 rounded-full bg-[#FF6B35]/10 group-hover:bg-[#FF6B35]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-[#FFF8E7]">
                  {item.title}
                </h3>
                <p className="text-[#FFF8E7]/80 font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 p-6 rounded-[30px] bg-[#FF6B35]/10 border border-[#FF6B35]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#FF6B35]/20 rounded-full">
                  <span className="text-sm font-medium text-[#FF6B35]">
                    Parent Testimonial
                  </span>
                </div>
                <blockquote className="text-xl font-medium text-[#FFF8E7] italic">
                  "The organic cotton swaddle blanket has been a game-changer
                  for us. It's incredibly soft, and my baby sleeps so peacefully
                  when wrapped in it. Definitely worth every penny!"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Sarah J."
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[#FFF8E7]">Sarah J.</p>
                    <p className="text-sm text-[#FFF8E7]/60">Mom of 2</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/organic-cotton-swaddle.png"
                  alt="Happy baby with our products"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4">
                  <BabyIcon.Rattle className="w-12 h-12 text-[#FF6B35]" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative overflow-hidden">
        <BabyPattern className="absolute inset-0 opacity-5" />
        <div className="container relative">
          <div className="absolute top-10 left-10 animate-float">
            <BabyIcon.Star className="w-8 h-8 text-[#FF6B35]/30" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-delay">
            <BabyIcon.Cloud className="w-10 h-10 text-[#FF6B35]/30" />
          </div>

          <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-[30px] bg-[#6E7F80]/10 border-2 border-[#6E7F80]/20 relative">
            <div className="absolute -top-6 -right-6">
              <BabyIcon.Balloon className="w-16 h-16 text-[#FF6B35]" />
            </div>
            <div className="absolute -bottom-6 -left-6">
              <BabyIcon.Teddy className="w-16 h-16 text-[#FF6B35]" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 bg-[#FF6B35]/20 rounded-full mb-2">
                    <span className="text-sm font-medium text-[#FF6B35]">
                      Join Our Community
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading text-[#FFF8E7]">
                    Get Parenting Tips & Exclusive Offers
                  </h2>
                  <p className="max-w-[600px] text-[#FFF8E7]/80 md:text-xl font-sans">
                    Subscribe to our newsletter for exclusive offers, parenting
                    tips, and first access to new products.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 bg-[#4E342E] border border-[#6E7F80]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-[#FFF8E7] placeholder:text-[#FFF8E7]/50 font-sans"
                  />
                  <Button className="bg-[#FF6B35] text-[#FFF8E7] hover:bg-[#FF6B35]/90 font-heading rounded-full px-6">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-[#FFF8E7]/60 font-sans">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-64 overflow-hidden rounded-[30px]">
                <Image
                  src="/diverse-group.png"
                  alt="Happy mother with newborn baby"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-sm font-medium text-[#FFF8E7] bg-[#4E342E]/80 p-2 rounded-full backdrop-blur-sm">
                    Join 5,000+ parents who love our products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
