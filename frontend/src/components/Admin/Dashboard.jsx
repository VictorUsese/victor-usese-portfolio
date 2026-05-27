import  { React, useState } from 'react';
import { Save, Plus, Trash2, Edit2, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useToast } from '../../hooks/use-toast';
import { portfolioData } from '../../mock';

const Dashboard = () => {
  const { toast } = useToast();
  const [data, setData] = useState(portfolioData);
  const [isEditing, setIsEditing] = useState({});

  const handleSave = (section) => {
    // Mock save - in backend version, this will call API
    toast({
      title: "Changes Saved!",
      description: `${section} updated successfully.`,
    });
    console.log('Saved data:', data);
  };

  const handleAddProject = () => {
    const newProject = {
      id: data.projects.length + 1,
      title: "New Project",
      description: "Project description",
      technologies: [],
      status: "In Progress",
      image: "https://via.placeholder.com/600x400/1e3a8a/ffffff?text=New+Project"
    };
    setData({
      ...data,
      projects: [...data.projects, newProject]
    });
  };

  const handleDeleteProject = (id) => {
    setData({
      ...data,
      projects: data.projects.filter(p => p.id !== id)
    });
    toast({
      title: "Project Deleted",
      description: "Project removed successfully.",
    });
  };

  const handleAddExperience = () => {
    const newExp = {
      id: data.experience.length + 1,
      title: "New Position",
      company: "Company Name",
      location: "Location",
      period: "Year",
      achievements: ["Achievement 1"]
    };
    setData({
      ...data,
      experience: [...data.experience, newExp]
    });
  };

  const handleDeleteExperience = (id) => {
    setData({
      ...data,
      experience: data.experience.filter(e => e.id !== id)
    });
    toast({
      title: "Experience Deleted",
      description: "Experience removed successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your portfolio content</p>
        </div>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Hero Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={data.hero.name}
                    onChange={(e) => setData({
                      ...data,
                      hero: { ...data.hero, name: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tagline</label>
                  <Input
                    value={data.hero.tagline}
                    onChange={(e) => setData({
                      ...data,
                      hero: { ...data.hero, tagline: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <Textarea
                    value={data.hero.subtitle}
                    onChange={(e) => setData({
                      ...data,
                      hero: { ...data.hero, subtitle: e.target.value }
                    })}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Quote</label>
                  <Input
                    value={data.hero.quote}
                    onChange={(e) => setData({
                      ...data,
                      hero: { ...data.hero, quote: e.target.value }
                    })}
                  />
                </div>
                <Button onClick={() => handleSave('Hero')} className="bg-teal-600 hover:bg-teal-700">
                  <Save className="mr-2" size={18} />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* About Section */}
          <TabsContent value="about">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">About Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <Textarea
                    value={data.about.content}
                    onChange={(e) => setData({
                      ...data,
                      about: { ...data.about, content: e.target.value }
                    })}
                    rows={12}
                  />
                </div>
                <Button onClick={() => handleSave('About')} className="bg-teal-600 hover:bg-teal-700">
                  <Save className="mr-2" size={18} />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="skills">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <p className="text-gray-600 mb-4">
                Mock UI - Skills management will be fully functional with backend integration
              </p>
              <div className="space-y-6">
                {Object.keys(data.skills).map((category) => (
                  <div key={category} className="border-b pb-4">
                    <h3 className="font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                    <p className="text-sm text-gray-600">{data.skills[category].join(', ')}</p>
                  </div>
                ))}
              </div>
              <Button onClick={() => handleSave('Skills')} className="bg-teal-600 hover:bg-teal-700 mt-6">
                <Save className="mr-2" size={18} />
                Save Changes
              </Button>
            </div>
          </TabsContent>

          {/* Experience Section */}
          <TabsContent value="experience">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Experience</h2>
                <Button onClick={handleAddExperience} className="bg-teal-600 hover:bg-teal-700">
                  <Plus className="mr-2" size={18} />
                  Add Experience
                </Button>
              </div>
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Input
                          value={exp.title}
                          onChange={(e) => {
                            const updated = data.experience.map(item =>
                              item.id === exp.id ? { ...item, title: e.target.value } : item
                            );
                            setData({ ...data, experience: updated });
                          }}
                          className="mb-2"
                          placeholder="Job Title"
                        />
                        <Input
                          value={exp.company}
                          onChange={(e) => {
                            const updated = data.experience.map(item =>
                              item.id === exp.id ? { ...item, company: e.target.value } : item
                            );
                            setData({ ...data, experience: updated });
                          }}
                          className="mb-2"
                          placeholder="Company"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={exp.location}
                            onChange={(e) => {
                              const updated = data.experience.map(item =>
                                item.id === exp.id ? { ...item, location: e.target.value } : item
                              );
                              setData({ ...data, experience: updated });
                            }}
                            placeholder="Location"
                          />
                          <Input
                            value={exp.period}
                            onChange={(e) => {
                              const updated = data.experience.map(item =>
                                item.id === exp.id ? { ...item, period: e.target.value } : item
                              );
                              setData({ ...data, experience: updated });
                            }}
                            placeholder="Period"
                          />
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteExperience(exp.id)}
                        className="ml-4"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.achievements.length} achievements
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => handleSave('Experience')} className="bg-teal-600 hover:bg-teal-700 mt-6">
                <Save className="mr-2" size={18} />
                Save All Changes
              </Button>
            </div>
          </TabsContent>

          {/* Projects Section */}
          <TabsContent value="projects">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects</h2>
                <Button onClick={handleAddProject} className="bg-teal-600 hover:bg-teal-700">
                  <Plus className="mr-2" size={18} />
                  Add Project
                </Button>
              </div>
              <div className="space-y-6">
                {data.projects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const updated = data.projects.map(item =>
                              item.id === project.id ? { ...item, title: e.target.value } : item
                            );
                            setData({ ...data, projects: updated });
                          }}
                          className="mb-2"
                          placeholder="Project Title"
                        />
                        <Textarea
                          value={project.description}
                          onChange={(e) => {
                            const updated = data.projects.map(item =>
                              item.id === project.id ? { ...item, description: e.target.value } : item
                            );
                            setData({ ...data, projects: updated });
                          }}
                          className="mb-2"
                          placeholder="Description"
                          rows={3}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={project.status}
                            onChange={(e) => {
                              const updated = data.projects.map(item =>
                                item.id === project.id ? { ...item, status: e.target.value } : item
                              );
                              setData({ ...data, projects: updated });
                            }}
                            placeholder="Status"
                          />
                          <Input
                            value={project.liveLink || ''}
                            onChange={(e) => {
                              const updated = data.projects.map(item =>
                                item.id === project.id ? { ...item, liveLink: e.target.value } : item
                              );
                              setData({ ...data, projects: updated });
                            }}
                            placeholder="Live Link (optional)"
                          />
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                        className="ml-4"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      {project.technologies.length} technologies
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => handleSave('Projects')} className="bg-teal-600 hover:bg-teal-700 mt-6">
                <Save className="mr-2" size={18} />
                Save All Changes
              </Button>
            </div>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    value={data.contact.email}
                    onChange={(e) => setData({
                      ...data,
                      contact: { ...data.contact, email: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <Input
                    value={data.contact.website}
                    onChange={(e) => setData({
                      ...data,
                      contact: { ...data.contact, website: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub</label>
                  <Input
                    value={data.contact.github}
                    onChange={(e) => setData({
                      ...data,
                      contact: { ...data.contact, github: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn</label>
                  <Input
                    value={data.contact.linkedin}
                    onChange={(e) => setData({
                      ...data,
                      contact: { ...data.contact, linkedin: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={data.contact.message}
                    onChange={(e) => setData({
                      ...data,
                      contact: { ...data.contact, message: e.target.value }
                    })}
                    rows={3}
                  />
                </div>
                <Button onClick={() => handleSave('Contact')} className="bg-teal-600 hover:bg-teal-700">
                  <Save className="mr-2" size={18} />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
