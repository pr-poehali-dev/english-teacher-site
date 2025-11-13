import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const pricingPlans = [
    {
      title: "Пробный урок",
      price: "Бесплатно",
      duration: "30 минут",
      features: [
        "Знакомство с преподавателем",
        "Определение уровня языка",
        "Составление плана обучения",
        "Пробные разговорные упражнения"
      ]
    },
    {
      title: "Стандарт",
      price: "2 500 ₽",
      duration: "60 минут",
      features: [
        "Индивидуальные занятия",
        "Разговорная практика",
        "Разбор грамматики",
        "Домашние задания",
        "Гибкий график"
      ],
      popular: true
    },
    {
      title: "Интенсив",
      price: "9 500 ₽",
      duration: "4 занятия",
      features: [
        "Всё из тарифа Стандарт",
        "Дополнительные материалы",
        "Чат-поддержка 24/7",
        "Еженедельный прогресс-отчёт",
        "Скидка 5% при оплате пакета"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна Соколова",
      text: "За 3 месяца я перестала бояться говорить по-английски! Теперь свободно общаюсь с коллегами на работе.",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      text: "Отличная методика! Без зубрёжки и стресса. Занятия проходят легко и интересно.",
      rating: 5
    },
    {
      name: "Мария Кузнецова",
      text: "Наконец-то нашла преподавателя, который помог разрушить языковой барьер. Спасибо огромное!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Разрушим языковой барьер вместе
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Специализируюсь на разговорном английском. Помогу заговорить свободно и уверенно без стресса и зубрёжки.
              </p>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Записаться на урок
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl">Записаться на урок</DialogTitle>
                    <DialogDescription>
                      Оставьте ваши контакты, и я свяжусь с вами в ближайшее время
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4 mt-4">
                    <div>
                      <Input placeholder="Ваше имя" className="rounded-lg" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="rounded-lg" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="rounded-lg" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажите о вашем уровне и целях (необязательно)" className="rounded-lg min-h-[100px]" />
                    </div>
                    <Button type="submit" className="w-full rounded-lg" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b29b5fa1-3e86-4930-846c-1f35cb528be5/files/5c6d6cbd-5f59-4241-acbf-86968247b9c8.jpg" 
                alt="Преподаватель английского"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Я помогаю людям <span className="font-semibold text-foreground">заговорить по-английски</span> свободно и без страха ошибок. 
              Моя специализация — разговорная практика и разрушение языкового барьера.
            </p>
            <p>
              Забудьте о скучной грамматике и зубрёжке! На моих занятиях вы будете говорить с первого урока. 
              Я создаю комфортную атмосферу, где ошибки — это естественная часть обучения.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name="MessageCircle" size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Разговорная практика</h3>
                  <p className="text-sm text-muted-foreground">80% времени урока — живое общение</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name="Target" size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Индивидуальный подход</h3>
                  <p className="text-sm text-muted-foreground">Программа под ваши цели и интересы</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <Icon name="Smile" size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Без стресса</h3>
                  <p className="text-sm text-muted-foreground">Дружелюбная атмосфера и поддержка</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите удобный формат занятий</p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярно
                  </div>
                )}
                <CardContent className="pt-8 pb-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className={`w-full rounded-lg ${plan.popular ? '' : 'variant-outline'}`}>
                        Выбрать тариф
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">Записаться на урок</DialogTitle>
                        <DialogDescription>
                          Вы выбрали тариф: <strong>{plan.title}</strong>
                        </DialogDescription>
                      </DialogHeader>
                      <form className="space-y-4 mt-4">
                        <div>
                          <Input placeholder="Ваше имя" className="rounded-lg" />
                        </div>
                        <div>
                          <Input type="email" placeholder="Email" className="rounded-lg" />
                        </div>
                        <div>
                          <Input type="tel" placeholder="Телефон" className="rounded-lg" />
                        </div>
                        <Button type="submit" className="w-full rounded-lg" size="lg">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">Отзывы учеников</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят те, кто уже заговорил по-английски</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Преподаватель английского языка</p>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="fixed bottom-8 right-8 rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-110 px-6 py-6 z-50"
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
}
