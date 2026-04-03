import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings as SettingsIcon, Globe, Bell, Shield, User } from 'lucide-react';
import { LanguageSwitcher } from '../../../shared/components/LanguageSwitcher';

export const Settings = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'general',
      title: t('common.settings'),
      icon: SettingsIcon,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-tight italic">
                {t('common.language', 'Idioma del Sistema')}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t('common.languageDesc', 'Seleccione el idioma preferido para la interfaz.')}
              </p>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: t('common.notifications', 'Notificaciones'),
      icon: Bell,
      content: (
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-sm text-gray-400 font-medium">
            {t('common.comingSoon', 'Próximamente...')}
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t('common.settings')}</h1>
        <p className="text-gray-500 mt-1">
          {t('settings.subtitle', 'Gestione sus preferencias y configuración de cuenta.')}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {sections.map((section) => (
          <div key={section.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                <section.icon size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
            </div>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

