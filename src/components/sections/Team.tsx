
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Muhammad Umer Izhar",
      title: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Muhammad Yahya Izhar",
      title: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The passionate people behind Logicore ERP
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {member.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
